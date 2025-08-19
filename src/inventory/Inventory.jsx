import React, { useState, useReducer, useMemo, useEffect } from 'react';
import { Plus, Edit, Trash2, Search, Package, TrendingUp, Calendar, PieChart, Download, Upload, Save } from 'lucide-react';

// Load saved data from localStorage or use empty state
const loadSavedData = () => {
  try {
    const saved = localStorage.getItem('expenseTrackerData');
    if (saved) {
      const parsed = JSON.parse(saved);
      console.log('Data loaded from storage:', parsed.expenses.length, 'expenses');
      return parsed;
    }
  } catch (error) {
    console.warn('Failed to load saved data:', error);
  }
  return { expenses: [] };
};

// Initial state - load from storage or use clean slate
const initialState = loadSavedData();

function expenseReducer(state, action) {
  let newState;
  
  switch (action.type) {
    case 'ADD_EXPENSE':
      const newExpense = {
        ...action.payload,
        id: Date.now(),
        totalAmount: parseFloat(action.payload.totalAmount)
      };
      newState = { ...state, expenses: [...state.expenses, newExpense] };
      break;
    
    case 'UPDATE_EXPENSE':
      const updatedExpense = {
        ...action.payload,
        totalAmount: parseFloat(action.payload.totalAmount)
      };
      newState = {
        ...state,
        expenses: state.expenses.map(exp => 
          exp.id === action.payload.id ? updatedExpense : exp
        )
      };
      break;
    
    case 'DELETE_EXPENSE':
      newState = {
        ...state,
        expenses: state.expenses.filter(exp => exp.id !== action.payload)
      };
      break;
    
    case 'LOAD_DATA':
      newState = action.payload;
      break;
      
    default:
      return state;
  }
  
  // Auto-save to localStorage whenever state changes
  try {
    localStorage.setItem('expenseTrackerData', JSON.stringify(newState));
    console.log('Data auto-saved to storage');
  } catch (error) {
    console.warn('Failed to save data to storage:', error);
  }
  
  return newState;
}

// 🟢 ADDED: local date string helper (avoids UTC/ISO drift)
const localDateStr = (d = new Date()) => {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
};

export default function InventoryExpenseTracker() {
  const [state, dispatch] = useReducer(expenseReducer, initialState);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [editingExpense, setEditingExpense] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPeriod, setSelectedPeriod] = useState('weekly');

  // 🔐 PERSISTENCE: Rehydrate again on mount in case module-scope init missed or app was SSR’d
  useEffect(() => {
    try {
      const saved = localStorage.getItem('expenseTrackerData');
      if (saved) {
        const parsed = JSON.parse(saved);
        // Only dispatch if different to avoid unnecessary renders
        const currentLen = state?.expenses?.length || 0;
        const savedLen = parsed?.expenses?.length || 0;
        if (savedLen !== currentLen) {
          dispatch({ type: 'LOAD_DATA', payload: parsed });
        }
      }
    } catch (err) {
      console.warn('Rehydrate-on-mount failed:', err);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // run once

  // 🔐 PERSISTENCE: Cross-tab sync — listen for storage changes from other tabs
  useEffect(() => {
    const onStorage = (e) => {
      if (e.key === 'expenseTrackerData' && e.newValue) {
        try {
          const parsed = JSON.parse(e.newValue);
          dispatch({ type: 'LOAD_DATA', payload: parsed });
        } catch (err) {
          console.warn('Failed to parse storage event data:', err);
        }
      }
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  // Form state
  const [expenseForm, setExpenseForm] = useState({
    productName: '',
    sku: '',
    category: '',
    quantity: '',
    totalAmount: '',
    date: localDateStr() // 🟡 FIX: use local date instead of UTC ISO
  });

  // Export data to JSON file (existing)
  const exportData = () => {
    try {
      const dataStr = JSON.stringify(state, null, 2);
      const dataBlob = new Blob([dataStr], { type: 'application/json' });
      const url = URL.createObjectURL(dataBlob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `expense-backup-${localDateStr()}.json`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      alert('✅ Data exported successfully! Save this file as backup.');
    } catch (error) {
      alert('❌ Failed to export data: ' + error.message);
    }
  };

  // 🟢 ADDED: CSV export (spreadsheet-friendly)
  const exportCSV = (rows, filename = `expenses-${localDateStr()}.csv`) => {
    try {
      if (!rows || rows.length === 0) {
        alert('No rows to export.');
        return;
      }
      const headers = ['Date','Product Name','SKU','Category','Quantity','Total Amount (NGN)'];
      const escape = (v) => {
        if (v === null || v === undefined) return '';
        const s = String(v);
        // wrap if contains comma, quote or newline
        return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
      };
      const lines = [
        headers.join(','),
        ...rows.map(r => [
          escape(r.date),
          escape(r.productName),
          escape(r.sku),
          escape(r.category),
          escape(r.quantity),
          escape(r.totalAmount)
        ].join(','))
      ];
      const csv = lines.join('\n');
      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (err) {
      alert('❌ Failed to export CSV: ' + err.message);
    }
  };

  const exportAllCSV = () => exportCSV(state.expenses, `expenses-all-${localDateStr()}.csv`);

  // 🟢 ADDED: last month range + export
  const getLastMonthRange = () => {
    const now = new Date();
    const start = new Date(now.getFullYear(), now.getMonth() - 1, 1);
    const end = new Date(now.getFullYear(), now.getMonth(), 0); // last day of prev month
    return {
      startDate: start,
      endDate: end,
      startStr: localDateStr(start),
      endStr: localDateStr(end),
      label: start.toLocaleString(undefined, { month: 'long', year: 'numeric' })
    };
  };

  const exportLastMonthCSV = () => {
    const { startStr, endStr, label } = getLastMonthRange();
    const rows = state.expenses.filter(e => e.date >= startStr && e.date <= endStr);
    exportCSV(rows, `expenses-${label.replace(' ', '-')}.csv`);
  };

  // Import data from JSON file
  const importData = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const importedData = JSON.parse(e.target.result);
        if (importedData.expenses && Array.isArray(importedData.expenses)) {
          if (window.confirm(`Import ${importedData.expenses.length} expenses? This will replace your current data.`)) {
            dispatch({ type: 'LOAD_DATA', payload: importedData });
            alert('✅ Data imported successfully!');
          }
        } else {
          alert('❌ Invalid file format. Please select a valid expense backup file.');
        }
      } catch (error) {
        alert('❌ Failed to import data: ' + error.message);
      }
    };
    reader.readAsText(file);
    event.target.value = ''; // Reset file input
  };

  // Manual save function (mostly for user confidence)
  const manualSave = () => {
    try {
      localStorage.setItem('expenseTrackerData', JSON.stringify(state));
      alert('✅ Data saved successfully!');
    } catch (error) {
      alert('❌ Failed to save data: ' + error.message);
    }
  };

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: TrendingUp },
    { id: 'expenses', label: 'Add Expenses', icon: Plus },
    { id: 'reports', label: 'Reports', icon: PieChart },
    { id: 'history', label: 'History', icon: Calendar }
  ];

  // Get unique categories
  const categories = useMemo(() => {
    const cats = [...new Set(state.expenses.map(exp => exp.category))];
    return ['All', ...cats.sort()];
  }, [state.expenses]);

  // 🟡 FIXED: Date calculation helpers (use local dates)
  const getDateRanges = () => {
    const today = new Date();
    const todayStr = localDateStr(today);
    
    // Monday-start week
    const day = today.getDay(); // Sun=0..Sat=6
    const mondayOffset = (day + 6) % 7; // 0 if Mon, 1 if Tue, ... 6 if Sun
    const monday = new Date(today);
    monday.setDate(today.getDate() - mondayOffset);
    const weekStart = localDateStr(monday);
    
    // This month (local)
    const monthStart = localDateStr(new Date(today.getFullYear(), today.getMonth(), 1));
    
    return { todayStr, weekStart, monthStart };
  };

  // 🟢 ADDED: previous month stats (for dashboard/history)
  const getLastMonthStats = useMemo(() => {
    const { startStr, endStr, label } = getLastMonthRange();
    const rows = state.expenses.filter(e => e.date >= startStr && e.date <= endStr);
    const total = rows.reduce((sum, e) => sum + (parseFloat(e.totalAmount) || 0), 0);
    return { label, startStr, endStr, rows, total, count: rows.length };
  }, [state.expenses]);

  // Calculate expenses by period and category
  const calculateExpenses = useMemo(() => {
    const { todayStr, weekStart, monthStart } = getDateRanges();
    
    const filterByPeriod = (expenses, period) => {
      switch (period) {
        case 'daily':
          return expenses.filter(exp => exp.date === todayStr);
        case 'weekly':
          return expenses.filter(exp => exp.date >= weekStart);
        case 'monthly':
          return expenses.filter(exp => exp.date >= monthStart);
        default:
          return expenses;
      }
    };

    const filterByCategory = (expenses) => {
      if (selectedCategory === 'All') return expenses;
      return expenses.filter(exp => exp.category === selectedCategory);
    };

    const filteredExpenses = filterByCategory(filterByPeriod(state.expenses, selectedPeriod));
    const totalExpense = filteredExpenses.reduce((sum, exp) => sum + exp.totalAmount, 0);

    // Category breakdown
    const categoryTotals = {};
    state.expenses.forEach(exp => {
      if (!categoryTotals[exp.category]) {
        categoryTotals[exp.category] = { daily: 0, weekly: 0, monthly: 0 };
      }
      if (exp.date === todayStr) categoryTotals[exp.category].daily += exp.totalAmount;
      if (exp.date >= weekStart) categoryTotals[exp.category].weekly += exp.totalAmount;
      if (exp.date >= monthStart) categoryTotals[exp.category].monthly += exp.totalAmount;
    });

    return {
      daily: state.expenses.filter(exp => exp.date === todayStr).reduce((sum, exp) => sum + exp.totalAmount, 0),
      weekly: state.expenses.filter(exp => exp.date >= weekStart).reduce((sum, exp) => sum + exp.totalAmount, 0),
      monthly: state.expenses.filter(exp => exp.date >= monthStart).reduce((sum, exp) => sum + exp.totalAmount, 0),
      filtered: totalExpense,
      categoryTotals,
      filteredExpenses
    };
  }, [state.expenses, selectedPeriod, selectedCategory]);

  const formatNaira = (amount) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const resetForm = () => {
    setExpenseForm({
      productName: '',
      sku: '',
      category: '',
      quantity: '',
      totalAmount: '',
      date: localDateStr() // 🟡 FIX: local date
    });
    setEditingExpense(null);
  };

  const openModal = (expense = null) => {
    setEditingExpense(expense);
    if (expense) {
      setExpenseForm({
        productName: expense.productName,
        sku: expense.sku,
        category: expense.category,
        quantity: expense.quantity.toString(),
        totalAmount: expense.totalAmount.toString(),
        date: expense.date
      });
    }
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    resetForm();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const expenseData = {
      ...expenseForm,
      quantity: parseInt(expenseForm.quantity),
      totalAmount: parseFloat(expenseForm.totalAmount)
    };

    if (editingExpense) {
      dispatch({ type: 'UPDATE_EXPENSE', payload: { ...expenseData, id: editingExpense.id } });
    } else {
      dispatch({ type: 'ADD_EXPENSE', payload: expenseData });
    }
    closeModal();
  };

  const deleteExpense = (id) => {
    if (window.confirm('Are you sure you want to delete this expense?')) {
      dispatch({ type: 'DELETE_EXPENSE', payload: id });
    }
  };

  const filteredExpenses = state.expenses.filter(exp =>
    exp.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    exp.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    exp.sku.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderDashboard = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl -bold aeon-bold gray200">Expense Dashboard</h2>
        {/* Data Management Buttons */}
        <div className="flex items-center space-x-3">
          <button
            onClick={manualSave}
            className="bg-green-600 text-white px-3 py-2 rounded-lg hover:bg-green-700 flex items-center gap-2 text-sm"
            title="Manually save data (auto-saves anyway)"
          >
            <Save className="h-4 w-4" /> Save
          </button>
          <button
            onClick={exportData}
            className="bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2 text-sm"
            title="Download JSON backup file"
          >
            <Download className="h-4 w-4" /> Export JSON
          </button>

          {/* 🟢 ADDED: CSV export buttons */}
          <button
            onClick={exportAllCSV}
            className="bg-indigo-600 text-white px-3 py-2 rounded-lg hover:bg-indigo-700 flex items-center gap-2 text-sm"
            title="Download CSV (open in Excel/Sheets)"
          >
            <Download className="h-4 w-4" /> Export CSV
          </button>
          <button
            onClick={exportLastMonthCSV}
            className="bg-purple-600 text-white px-3 py-2 rounded-lg hover:bg-purple-700 flex items-center gap-2 text-sm"
            title="Download last month's rows as CSV"
          >
            <Download className="h-4 w-4" /> Last Month CSV
          </button>

          <div className="relative">
            <input
              type="file"
              accept=".json"
              onChange={importData}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              title="Import backup file"
            />
            <button className="bg-orange-600 text-white px-3 py-2 rounded-lg hover:bg-orange-700 flex items-center gap-2 text-sm">
              <Upload className="h-4 w-4" /> Import
            </button>
          </div>
        </div>
      </div>

      {/* Data Status Indicator */}
      <div className="bg-white p-4 rounded-lg border border-green-200">
        <p className="text-green-800 text-sm inter">
          <span className="gray200 intermid">📊 Data Status: </span>
          {state.expenses.length} expenses stored locally. 
          <span className="text-green-600 "> Data automatically saves after every change.</span>
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-[14px] border shadow-sm border-blue-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-600 text-sm inter font-medium">Today's Expenses</p>
              <p className="text-2xl aeon-bold text-blue-600">{formatNaira(calculateExpenses.daily)}</p>
            </div>
            <Calendar className="h-8 w-8 text-blue-500" />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-[14px] border border-green-200 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-600 text-sm inter font-medium">This Week's Expenses</p>
              <p className="text-2xl aeon-bold text-green-600">{formatNaira(calculateExpenses.weekly)}</p>
            </div>
            <TrendingUp className="h-8 w-8 text-green-500" />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-[14px] border border-purple-200 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-600 text-sm inter font-medium">This Month's Expenses</p>
              <p className="text-2xl aeon-bold text-purple-600">{formatNaira(calculateExpenses.monthly)}</p>
            </div>
            <Package className="h-8 w-8 text-purple-500" />
          </div>
        </div>
      </div>

      {/* 🟢 ADDED: Last Month Summary card */}
      <div className="bg-white p-4 rounded-[12px] border border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm inter text-gray-600">Last Month ({getLastMonthStats.label})</p>
            <p className="text-xl aeon-bold text-gray-800">{formatNaira(getLastMonthStats.total)}</p>
          </div>
          <button
            onClick={exportLastMonthCSV}
            className="bg-purple-600 text-white px-3 py-2 rounded-lg hover:bg-purple-700 text-sm"
            title="Export last month's data to CSV"
          >
            Export Last Month CSV
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-1">
          {getLastMonthStats.count} entries from {getLastMonthStats.startStr} to {getLastMonthStats.endStr}
        </p>
      </div>

      {/* Category Breakdown */}
      {Object.keys(calculateExpenses.categoryTotals).length > 0 ? (
        <div className="bg-white p-6 rounded-[12px] border border-gray-300">
          <h3 className="text-lg aeon-bold gray200 mb-4">Expenses by Category</h3>
          <div className="space-y-4">
            {Object.entries(calculateExpenses.categoryTotals).map(([category, totals]) => (
              <div key={category} className="border-l-4 border-pink-500 pl-4">
                <div className="flex justify-between items-start">
                  <h4 className="aeon-bold text-gray-800">{category}</h4>
                  <div className="text-right">
                    <p className="text-sm intermid text-gray-500">Today: {formatNaira(totals.daily)}</p>
                    <p className="text-sm intermid text-gray-500">This Week: {formatNaira(totals.weekly)}</p>
                    <p className="aeon-bold gray200">This Month: {formatNaira(totals.monthly)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-white p-6 rounded-lg border">
          <div className="text-center py-8 text-gray-500">
            <Package className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p className="mb-2">No expenses recorded yet</p>
            <p className="text-sm">Start by adding your first expense to see category breakdowns here.</p>
          </div>
        </div>
      )}
    </div>
  );

  const renderExpenses = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl aeon-bold text-gray-800">Add Daily Expenses</h2>
        <button
          onClick={() => openModal()}
          className="bg-green-600 text-white inter  px-4 py-2 rounded-lg hover:bg-green-700 flex items-center gap-2"
        >
          <Plus className="h-4 w-4 " /> Add New Expense
        </button>
      </div>

      {/* Quick Add Form */}
      <div className="bg-white p-6 rounded-[14px] border border-gray-300">
        <h3 className="text-lg aeon-bold gray200 mb-4">Quick Add Expense</h3>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 inter gray200">
          <input
            type="text"
            placeholder="Product Name"
            value={expenseForm.productName}
            onChange={(e) => setExpenseForm({...expenseForm, productName: e.target.value})}
            className="p-3 inter border border-gray-200 rounded-lg outline-none"
            required
          />
          <input
            type="text"
            placeholder="S.Num (e.g., CEMENT-001)"
            value={expenseForm.sku}
            onChange={(e) => setExpenseForm({...expenseForm, sku: e.target.value})}
           className="p-3 inter border border-gray-200 rounded-lg outline-none"
            required
          />
          <input
            type="text"
            placeholder="Category"
            value={expenseForm.category}
            onChange={(e) => setExpenseForm({...expenseForm, category: e.target.value})}
            className="p-3 inter border border-gray-200 rounded-lg outline-none "
            required
          />
          <input
            type="number"
            min="1"
            placeholder="Quantity"
            value={expenseForm.quantity}
            onChange={(e) => setExpenseForm({...expenseForm, quantity: e.target.value})}
            className="p-3 inter border border-gray-200 rounded-lg outline-none"
            required
          />
          <input
            type="number"
            min="0"
            step="0.01"
            placeholder="Total Amount (₦)"
            value={expenseForm.totalAmount}
            onChange={(e) => setExpenseForm({...expenseForm, totalAmount: e.target.value})}
           className="p-3 border inter border-gray-200 rounded-lg outline-none"
            required
          />
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 font-medium inter md:col-span-2 lg:col-span-5"
          >
            Add Expense
          </button>
        </form>
        {expenseForm.totalAmount && (
          <div className="mt-4 p-3 bg-green-50 rounded-lg">
            <p className="text-green-800">
              Total Amount: <span className="font-bold">{formatNaira(parseFloat(expenseForm.totalAmount || 0))}</span>
            </p>
          </div>
        )}
      </div>

      {/* Today's Expenses Summary */}
      <div className="bg-white p-4 rounded-lg border border-blue-200">
        <p className="text-blue-600">
          <span className="aeon-bold">Today's Total Expenses: </span>
          <span className="text-xl aeon-bold">{formatNaira(calculateExpenses.daily)}</span>
        </p>
      </div>

      {/* Recent Expenses - to prevent repetition */}
      {state.expenses.length > 0 ? (
        <div className="bg-white p-6 rounded-[14px] border border-gray-300">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-lg gray200 aeon-bold">Recently Added Expenses</h3>
              <p className="text-sm  inter text-gray-500">Check here to avoid adding duplicate entries</p>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse ">
              <thead>
                <tr className="bg-gray-50 border-b">
                  <th className="px-4 py-3 text-left text-xs intermid text-gray-600 uppercase tracking-wider border-r">Product</th>
                  <th className="px-4 py-3 text-left text-xs intermid text-gray-600 uppercase tracking-wider border-r">SKU</th>
                  <th className="px-4 py-3 text-left text-xs intermid text-gray-600 uppercase tracking-wider border-r">Category</th>
                  <th className="px-4 py-3 text-left text-xs intermid text-gray-600 uppercase tracking-wider border-r">Quantity</th>
                  <th className="px-4 py-3 text-left text-xs intermid text-gray-600 uppercase tracking-wider border-r">Date</th>
                  <th className="px-4 py-3 text-left text-xs intermid text-gray-600 uppercase tracking-wider">Total Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {state.expenses.slice(-15).reverse().map((expense, index) => (
                  <tr key={expense.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 text-sm intermid text-gray-900 border-r">{expense.productName}</td>
                    <td className="px-4 py-3 text-xs intermid text-blue-400 border-r ">{expense.sku}</td>
                    <td className="px-4 py-3 text-sm border-r">
                      <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-xs">
                        {expense.category}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600 border-r text-center">{expense.quantity}</td>
                    <td className="px-4 py-3 text-sm text-gray-600 border-r">{expense.date}</td>
                    <td className="px-4 py-3 text-sm intermid text-green-600">{formatNaira(expense.totalAmount)}</td>
                  </tr>
                ))}
                <tr className="bg-gray-50 border-t-1.5 border-green-200">
                  <td colSpan="5" className="px-4 py-3 text-sm intermid text-green-800 text-right border-r">
                    TOTAL:
                  </td>
                  <td className="px-4 py-3 text-sm intermid text-green-800">
                    {formatNaira(state.expenses.slice(-15).reduce((sum, exp) => sum + exp.totalAmount, 0))}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="bg-white p-6 rounded-lg border">
          <div className="text-center py-8 text-gray-500">
            <Calendar className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p className="mb-2">No expenses added yet</p>
            <p className="text-sm">Your recently added expenses will appear here to help prevent duplicates.</p>
          </div>
        </div>
      )}
    </div>
  );

  const renderReports = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl aeon-bold gray200">Expense Reports</h2>
        <div className="flex space-x-4">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="p-2 border rounded-[12px] border-gray-300 bg-white gray200 inter outline-none "
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="p-2 border rounded-[12px] border-gray-300 bg-white gray200 inter  outline-none"
          >
            {/* 🟡 FIX: removed trailing space */}
            <option value="daily">Today</option>
            <option value="weekly">This Week</option>
            <option value="monthly">This Month</option>
          </select>
        </div>
      </div>

      <div className="bg-white p-6 rounded-[14px] border border-gray-300">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg aeon-bold gray200">
            {selectedCategory === 'All' ? 'All Categories' : selectedCategory} - {selectedPeriod.charAt(0).toUpperCase() + selectedPeriod.slice(1)} Report
          </h3>
          <div className="text-right">
            <p className="text-2xl aeon-bold text-green-600">
              {formatNaira(calculateExpenses.filtered)}
            </p>
            <p className="text-sm gray200 inter">Total Expense</p>
          </div>
        </div>

        {calculateExpenses.filteredExpenses.length > 0 ? (
          <div className="space-y-3">
            {calculateExpenses.filteredExpenses.map(expense => (
              <div key={expense.id} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium intermid">{expense.productName}</p>
                  <p className="text-sm intermid text-gray-600">
                    {expense.category} • {expense.date} • Qty: {expense.quantity}
                  </p>
                </div>
                <div className="text-right">
                  <p className="intermid">{formatNaira(expense.totalAmount)}</p>
                  <p className="text-sm text-gray-600">Qty: {expense.quantity}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 text-gray-500">
            <Package className="h-12 w-12 mx-auto mb-4 opacity-50 inter" />
            <p>No expenses found for the selected period and category.</p>
          </div>
        )}
      </div>
    </div>
  );

  const renderHistory = () => {
    // 🟡 FIX: avoid mutating original array with reverse()
    const reversed = [...filteredExpenses].reverse();

    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl aeon-bold gray200">Expense History</h2>
          <div className="flex items-center space-x-4">
            {/* 🟢 ADDED: Export last month CSV alongside Print */}
            <button
              onClick={exportLastMonthCSV}
              className="bg-purple-600 text-white inter px-4 py-2 rounded-lg hover:bg-purple-700 flex items-center gap-2 print:hidden"
              title="Export last month to CSV"
            >
              <Download className="h-4 w-4" /> Last Month CSV
            </button>
            <button
              onClick={exportAllCSV}
              className="bg-indigo-600 text-white inter px-4 py-2 rounded-lg hover:bg-indigo-700 flex items-center gap-2 print:hidden"
              title="Export all to CSV"
            >
              <Download className="h-4 w-4" /> Export CSV
            </button>
            {/* <button
              onClick={() => window.print()}
              className="bg-blue-600 text-white inter px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2 print:hidden"
            >
              🖨️ Print History
            </button> */}
            <div className="relative bg-white">
              <Search className="h-4 w-4 absolute left-3 top-3 text-gray-400 " />
              <input
                type="text"
                placeholder="Search expenses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 outline-none inter rounded-lg w-64"
              />
            </div>
          </div>
        </div>

        {/* 🟢 ADDED: Last month banner */}
        <div className="bg-white p-4 rounded-[14px] border border-purple-200">
          <div className="flex items-center justify-between">
            <p className="text-purple-700">
              <span className="aeon-bold">Last Month ({getLastMonthStats.label}) Total: </span>
              <span className="aeon-bold">{formatNaira(getLastMonthStats.total)}</span>
              <span className="text-gray-600 text-sm"> • {getLastMonthStats.count} entries</span>
            </p>
            <button
              onClick={exportLastMonthCSV}
              className="bg-purple-600 text-white px-3 py-2 rounded-lg hover:bg-purple-700 text-sm"
            >
              Export Last Month CSV
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            Range: {getLastMonthStats.startStr} — {getLastMonthStats.endStr}
          </p>
        </div>

        <div className="bg-white rounded-[14px] border border-gray-300 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs intermid text-gray-600 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs intermid text-gray-600 uppercase tracking-wider">Product</th>
                  <th className="px-6 py-3 text-left text-xs intermid text-gray-600 uppercase tracking-wider">SKU</th>
                  <th className="px-6 py-3 text-left text-xs intermid text-gray-600 uppercase tracking-wider">Category</th>
                  <th className="px-6 py-3 text-left text-xs intermid text-gray-600 uppercase tracking-wider">Quantity</th>
                  <th className="px-6 py-3 text-left text-xs intermid text-gray-600 uppercase tracking-wider">Total Amount</th>
                  <th className="px-6 py-3 text-left text-xs intermid text-gray-600 uppercase tracking-wider print:hidden">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {reversed.map(expense => (
                  <tr key={expense.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm inter text-gray-600">{expense.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap intermid gray200" >{expense.productName}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs text-blue-600 intermid">{expense.sku}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 inter rounded-full text-xs bg-blue-100 text-blue-600">
                        {expense.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap intermid text-gray-600">{expense.quantity}</td>
                    <td className="px-6 py-4 whitespace-nowrap intermid text-green-600">{formatNaira(expense.totalAmount)}</td>
                    <td className="px-6 py-4 whitespace-nowrap print:hidden">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => openModal(expense)}
                          className="text-blue-600 hover:text-blue-800"
                        >
                          <Edit className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => deleteExpense(expense.id)}
                          className="text-red-600 hover:text-red-800"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg border border-green-200">
          <p className="text-green-800">
            <span className="intermid">Total of all expenses: </span>
            <span className="text-xl aeon-bold">{formatNaira(state.expenses.reduce((sum, exp) => sum + exp.totalAmount, 0))}</span>
          </p>
        </div>
      </div>
    );
  };

  const renderModal = () => {
    if (!showModal) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg w-full max-w-md">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg intermid">
              {editingExpense ? 'Edit Expense' : 'Add New Expense'}
            </h3>
            <button onClick={closeModal} className="text-gray-500 hover:text-gray-700 text-2xl">
              ×
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 inter gray200">
            <input
              type="text"
              placeholder="Product Name"
              value={expenseForm.productName}
              onChange={(e) => setExpenseForm({...expenseForm, productName: e.target.value})}
              className="w-full p-3 border border-gray-300 rounded-lg outline-none"
              required
            />
            <input
              type="text"
              placeholder="SKU (e.g., CEMENT-ABJ-001, STEEL-LOS-002)"
              value={expenseForm.sku}
              onChange={(e) => setExpenseForm({...expenseForm, sku: e.target.value})}
                 className="w-full p-3 border border-gray-300 rounded-lg outline-none"
              required
            />
            <input
              type="text"
              placeholder="Category (e.g., Food, Stationery, etc.)"
              value={expenseForm.category}
              onChange={(e) => setExpenseForm({...expenseForm, category: e.target.value})}
                 className="w-full p-3 border border-gray-300 rounded-lg outline-none"
              required
            />
            <input
              type="number"
              min="1"
              placeholder="Quantity"
              value={expenseForm.quantity}
              onChange={(e) => setExpenseForm({...expenseForm, quantity: e.target.value})}
                 className="w-full p-3 border border-gray-300 rounded-lg outline-none"
              required
            />
            <input
              type="number"
              min="0"
              step="0.01"
              placeholder="Total Amount in Naira (₦)"
              value={expenseForm.totalAmount}
              onChange={(e) => setExpenseForm({...expenseForm, totalAmount: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-lg outline-none"
              required
            />
            <input
              type="date"
              value={expenseForm.date}
              onChange={(e) => setExpenseForm({...expenseForm, date: e.target.value})}
                 className="w-full p-3 border border-gray-300 rounded-lg outline-none"
              required
            />
            
            {expenseForm.totalAmount && (
              <div className="p-3 bg-green-50 rounded-lg">
                <p className="text-green-800">
                  <span className="font-medium">Total Amount: </span>
                  <span className="text-lg font-bold">
                    {formatNaira(parseFloat(expenseForm.totalAmount || 0))}
                  </span>
                </p>
              </div>
            )}

            <div className="flex space-x-3">
              <button 
                type="submit" 
                className="flex-1 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 inter"
              >
                {editingExpense ? 'Update' : 'Add'} Expense
              </button>
              <button 
                type="button" 
                onClick={closeModal} 
                className="flex-1 bg-gray-300 inter text-gray-700 py-3 rounded-lg hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-purple-50">
      <div className="bg-black shadow-sm border-b border-gray-500 rounded-[14px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-2xl aeon-bold text-white">📊 Business Expense Tracker</h1>
              <p className="text-sm text-gray-400 tracking-wide inter">Track daily expenses and monitor spending by category</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-400 tracking-wide aeon-bold">Today's Total</p>
              <p className="text-lg aeon-bold text-green-500">{formatNaira(calculateExpenses.daily)}</p>
            </div>
          </div>
          
          <nav className="flex space-x-8">
            {tabs.map(tab => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 px-1 border-b-2 aeon-bold text-sm ${
                    activeTab === tab.id
                      ? 'border-green-500 text-green-500'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {activeTab === 'dashboard' && renderDashboard()}
          {activeTab === 'expenses' && renderExpenses()}
          {activeTab === 'reports' && renderReports()}
          {activeTab === 'history' && renderHistory()}
        </div>
      </main>

      {renderModal()}
    </div>
  );
}

/*
📝 Notes:
- localStorage is per-origin. "Same origin" means same protocol + host + port.
  If you open http://localhost:3000 and http://localhost:5173 they do NOT share localStorage.
- With the two inserts above, your data persists and stays in sync across multiple tabs
  of the SAME origin without refresh.
*/
