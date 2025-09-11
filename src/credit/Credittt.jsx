import React, { useState, useEffect } from 'react';
import { Trash2, Plus, CreditCard, TrendingUp, Calendar, Users, DollarSign } from 'lucide-react';
import { acct, add, agenda, bank, del, edit, graph, month, msg, name, notes, pay,paycard,phone,todayy, totall, user,  } from '../assets';

const PaystackPaymentSystem = () => {
  const [activeTab, setActiveTab] = useState('analytics');
  const [recipients, setRecipients] = useState([]);
  const [payments, setPayments] = useState([]);
  const [periodFilter, setPeriodFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState('disconnected');
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    bank: '',
    accountNumber: '',
    description: ''
  });

  const [paymentAmounts, setPaymentAmounts] = useState({});

  // Google Apps Script Configuration - REPLACE WITH YOUR WEB APP URL
  const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwqLBNCuxU_SkF7-NPcxMmxPHFXQOXyDYUVndjD7uyp2zSxBiBou_RLkUyDLGWty8qJ/exec';

  // Paystack configuration
  const PAYSTACK_PUBLIC_KEY = 'pk_test_aa9fab935a0de3dda723d27a2c97257831820cbc'; // Replace with your actual key

  const banks = [
    { value: 'access', label: 'Access Bank' },
    { value: 'gtb', label: 'Guaranty Trust Bank (GTB)' },
    { value: 'zenith', label: 'Zenith Bank' },
    { value: 'first', label: 'First Bank of Nigeria' },
    { value: 'uba', label: 'United Bank for Africa (UBA)' },
    { value: 'fidelity', label: 'Fidelity Bank' },
    { value: 'union', label: 'Union Bank' },
    { value: 'sterling', label: 'Sterling Bank' },
    { value: 'fcmb', label: 'First City Monument Bank (FCMB)' },
    { value: 'ecobank', label: 'Ecobank Nigeria' },
    { value: 'stanbic', label: 'Stanbic IBTC Bank' },
    { value: 'wema', label: 'Wema Bank' },
    { value: 'polaris', label: 'Polaris Bank' },
    { value: 'keystone', label: 'Keystone Bank' },
    { value: 'heritage', label: 'Heritage Bank' },
    { value: 'providus', label: 'Providus Bank' },
    { value: 'suntrust', label: 'SunTrust Bank' },
    { value: 'citi', label: 'Citibank Nigeria' },
    { value: 'standard-chartered', label: 'Standard Chartered Bank' },
    { value: 'jaiz', label: 'Jaiz Bank (Islamic)' },
    { value: 'taj', label: 'TAJ Bank (Islamic)' },
    { value: 'lotus', label: 'Lotus Bank' },
    { value: 'globus', label: 'Globus Bank' },
    { value: 'premium-trust', label: 'Premium Trust Bank' },
    { value: 'titan-trust', label: 'Titan Trust Bank' },
    { value: 'opay', label: 'OPay (Microfinance Bank)' },
    { value: 'kuda', label: 'Kuda Bank (Microfinance)' },
    { value: 'rubies', label: 'Rubies Bank (Microfinance)' },
    { value: 'mint', label: 'Mint Bank (Fintech)' },
    { value: 'sparkle', label: 'Sparkle Bank (Microfinance)' },
    { value: 'moniepoint', label: 'Moniepoint (Microfinance)' },
    { value: 'parallex', label: 'Parallex Bank (Microfinance)' },
    { value: 'safe-haven', label: 'Safe Haven Bank (Microfinance)' },
    { value: 'bowen', label: 'Bowen Bank (Microfinance)' },
    { value: 'coronation', label: 'Coronation Bank (Merchant Bank)' },
    { value: 'nova', label: 'Nova Merchant Bank' },
    { value: 'rand-merchant', label: 'Rand Merchant Bank' }
  ];

  // Google Apps Script API functions - UPDATED WITH CORS FIXES
  const saveRecipientToSheets = async (recipient) => {
    try {
      const response = await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          action: 'addRecipient',
          payload: recipient
        }),
        mode: 'cors', // Explicitly set CORS mode
        credentials: 'omit' // Don't send credentials
      });
      
      // Check if response is ok
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const result = await response.json();
      
      if (!result.success) {
        throw new Error(result.error || 'Unknown error occurred');
      }
      
      setConnectionStatus('connected');
      return result.data;
    } catch (error) {
      console.error('Error saving recipient:', error);
      setConnectionStatus('error');
      
      // More detailed error handling
      if (error.name === 'TypeError' && error.message.includes('Failed to fetch')) {
        throw new Error('Network error: Please check your internet connection and try again.');
      } else if (error.message.includes('CORS')) {
        throw new Error('CORS error: Please check your Google Apps Script deployment settings.');
      } else {
        throw error;
      }
    }
  };

  const savePaymentToSheets = async (payment) => {
    try {
      const response = await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          action: 'addPayment',
          payload: payment
        }),
        mode: 'cors',
        credentials: 'omit'
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const result = await response.json();
      
      if (!result.success) {
        throw new Error(result.error || 'Unknown error occurred');
      }
      
      setConnectionStatus('connected');
      return result.data;
    } catch (error) {
      console.error('Error saving payment:', error);
      setConnectionStatus('error');
      throw error;
    }
  };

  const loadRecipientsFromSheets = async () => {
    try {
      const response = await fetch(`${APPS_SCRIPT_URL}?action=getRecipients`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
        mode: 'cors',
        credentials: 'omit'
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const result = await response.json();
      
      if (result.success) {
        setRecipients(result.data.filter(r => r.id)); // Filter out empty rows
        setConnectionStatus('connected');
      } else {
        throw new Error(result.error || 'Failed to load recipients');
      }
    } catch (error) {
      console.error('Error loading recipients:', error);
      setConnectionStatus('error');
    }
  };

  const loadPaymentsFromSheets = async () => {
    try {
      const response = await fetch(`${APPS_SCRIPT_URL}?action=getPayments`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
        mode: 'cors',
        credentials: 'omit'
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const result = await response.json();
      
      if (result.success) {
        setPayments(result.data.filter(p => p.id)); // Filter out empty rows
        setConnectionStatus('connected');
      } else {
        throw new Error(result.error || 'Failed to load payments');
      }
    } catch (error) {
      console.error('Error loading payments:', error);
      setConnectionStatus('error');
    }
  };

  // Test connection function to help debug CORS issues
  const testConnection = async () => {
    try {
      console.log('Testing connection to:', APPS_SCRIPT_URL);
      
      const response = await fetch(`${APPS_SCRIPT_URL}?action=test`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
        mode: 'cors',
        credentials: 'omit'
      });
      
      console.log('Response status:', response.status);
      console.log('Response headers:', [...response.headers.entries()]);
      
      const result = await response.json();
      console.log('Response data:', result);
      
      return result;
    } catch (error) {
      console.error('Connection test failed:', error);
      return { success: false, error: error.message };
    }
  };

  const initializeAppsScript = async () => {
    try {
      setIsLoading(true);
      setConnectionStatus('connecting');
      
      // Test connection first
      const testResult = await testConnection();
      console.log('Connection test result:', testResult);
      
      // Test connection and load data
      await loadRecipientsFromSheets();
      await loadPaymentsFromSheets();
      
      setConnectionStatus('connected');
    } catch (error) {
      console.error('Error initializing Apps Script:', error);
      setConnectionStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const addRecipient = async () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.bank || !formData.accountNumber) {
      alert('Please fill in all required fields');
      return;
    }

    setIsLoading(true);
    try {
      const newRecipient = {
        id: Date.now(),
        ...formData,
        createdAt: new Date().toISOString()
      };

      // Save to Google Sheets via Apps Script
      await saveRecipientToSheets(newRecipient);
      
      // Update local state
      setRecipients([...recipients, newRecipient]);
      setFormData({
        name: '',
        email: '',
        phone: '',
        bank: '',
        accountNumber: '',
        description: ''
      });
      
      alert('Recipient added successfully!');
    } catch (error) {
      alert(`Error adding recipient: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteRecipient = async (id) => {
    if (window.confirm('Are you sure you want to delete this recipient?')) {
      // For simplicity, we'll just update the local state
      // In production, you might want to implement a "deleted" flag in sheets
      setRecipients(recipients.filter(r => r.id !== id));
    }
  };

  const handleAmountChange = (recipientId, amount) => {
    setPaymentAmounts({
      ...paymentAmounts,
      [recipientId]: amount
    });
  };

  const initiatePayment = async (recipient) => {
    const amount = parseFloat(paymentAmounts[recipient.id] || 0);
    
    if (!amount || amount < 100) {
      alert('Please enter a valid amount (minimum ₦100)');
      return;
    }

    const payment = {
      id: Date.now(),
      recipientId: recipient.id,
      recipientName: recipient.name,
      amount: amount,
      status: 'success',
      reference: 'demo_' + Date.now(),
      date: new Date().toISOString()
    };

    setIsLoading(true);
    try {
      // Save to Google Sheets via Apps Script
      await savePaymentToSheets(payment);
      
      // Update local state
      setPayments([...payments, payment]);
      setPaymentAmounts({
        ...paymentAmounts,
        [recipient.id]: ''
      });
      
      alert('Payment successful!');
      setActiveTab('payments');
    } catch (error) {
      alert(`Error processing payment: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const getFilteredPayments = () => {
    let filtered = payments;
    
    if (periodFilter !== 'all') {
      const now = new Date();
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      
      filtered = filtered.filter(payment => {
        const paymentDate = new Date(payment.date);
        
        switch (periodFilter) {
          case 'today':
            return paymentDate >= today;
          case 'week':
            const weekAgo = new Date(today);
            weekAgo.setDate(weekAgo.getDate() - 7);
            return paymentDate >= weekAgo;
          case 'month':
            const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
            return paymentDate >= monthStart;
          default:
            return true;
        }
      });
    }
    
    if (statusFilter !== 'all') {
      filtered = filtered.filter(payment => payment.status === statusFilter);
    }
    
    return filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
  };

  const getAnalytics = () => {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
    
    const totalSpent = payments.reduce((sum, p) => sum + p.amount, 0);
    const todayPayments = payments.filter(p => new Date(p.date) >= today);
    const monthlyPayments = payments.filter(p => new Date(p.date) >= monthStart);
    
    const todaySpent = todayPayments.reduce((sum, p) => sum + p.amount, 0);
    const monthlySpent = monthlyPayments.reduce((sum, p) => sum + p.amount, 0);
    
    return {
      totalSpent,
      totalPayments: payments.length,
      todaySpent,
      monthlySpent
    };
  };

  // Initialize Apps Script on component mount
  useEffect(() => {
    initializeAppsScript();
  }, []);

  // Load Paystack script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js.paystack.co/v1/inline.js';
    script.async = true;
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const analytics = getAnalytics();
  const filteredPayments = getFilteredPayments();

  const getConnectionStatusColor = () => {
    switch (connectionStatus) {
      case 'connected': return 'text-green-600';
      case 'connecting': return 'text-yellow-600';
      case 'error': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const getConnectionStatusText = () => {
    switch (connectionStatus) {
      case 'connected': return 'Connected to Google Sheets';
      case 'connecting': return 'Connecting...';
      case 'error': return 'Connection Error';
      default: return 'Disconnected';
    }
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="backdrop-blur-lg rounded-[14px] pt-4 pr-8 pb-0 pl-8 mb-8 text-white text-left bg-gradient-to-br 
        from-black to-purple-900">
          <div className="flex mb-1 justify-between items-start">
            <div className="flex">
              <img src={paycard} className="w-12 mr-3" /> 
              <div>
                <h1 className="text-2xl aeon-bold text-white leading-tight">
                  Payment Integration System
                </h1>
                <p className="text-sm text-gray-400 tracking-wide inter mx-1">
                  Manage recipients and track payments efficiently
                </p>
              </div>
            </div>
            
            {/* Connection Status */}
            <div className="text-right">
              <div className={`text-xs ${getConnectionStatusColor()} flex items-center gap-1`}>
                <div className={`w-2 h-2 rounded-full ${
                  connectionStatus === 'connected' ? 'bg-green-500' :
                  connectionStatus === 'connecting' ? 'bg-yellow-500 animate-pulse' :
                  connectionStatus === 'error' ? 'bg-red-500' : 'bg-gray-500'
                }`}></div>
                {getConnectionStatusText()}
              </div>
              {isLoading && (
                <div className="text-xs text-gray-400 mt-1">Syncing data...</div>
              )}
              {/* Test Connection Button - You can remove this after testing */}
              <button
                onClick={testConnection}
                className="text-xs text-blue-400 hover:text-blue-300 mt-1 underline"
                disabled={isLoading}
              >
                Test Connection
              </button>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex space-x-8">
            <div className="flex text-sm gray200 flex items-center space-x-2 pt-4 gap-8 px-1">
              {[
                { id: 'analytics', label: 'Analytics', icon: TrendingUp },
                { id: 'recipients', label: 'Recipients', icon: Users },
                { id: 'payments', label: 'Payment History', icon: Calendar },
              ].map(tab => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    disabled={isLoading}
                    className={`flex items-center space-x-2 py-4 px-1 border-b-2 aeon-bold text-sm outline-none ${
                      activeTab === tab.id
                        ? 'border-green-500 text-green-500'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    } ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    <Icon className="w-5 h-5 mr-2 " />
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="bg-white border border-gray-200 backdrop-blur-lg rounded-[14px] p-8 ">

          {/* Recipients Tab */}
          {activeTab === 'recipients' && (
            <div className="space-y-8">
              {/* Add Recipient Form */}
              <div className="bg-white p-6 rounded-[14px] border border-green-200  hover:shadow-lg
                transition-all duration-300 hover:scale-[1.02]">
        
                <h3 className="text-xl aeon-bold  text-gray-800 mb-6 flex items-center">
                  <span className='bg-green-100 rounded-[8px] w-7 h-7 mr-2' ><img src={add} className="p-1" /></span> 
                  Add New Recipient
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                  <div>
                    <label className="block text-sm intermid gray200 mb-2">
                      <div className='w-6 h-6 rounded-[8px] bg-green-100 border  border-pink-100'>
                        <img src={name} className='p-1' alt="" />
                      </div>Recipient Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      disabled={isLoading}
                      className="w-full outline-none inter gray200 px-4 py-3 border border-gray-300 
                      rounded-lg focus:ring-1 focus:ring-blue-50 focus:border-transparent transition-all disabled:opacity-50"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm intermid gray200 mb-2">
                      <div className='w-6 h-6 rounded-[8px] bg-green-100 border  border-pink-100'>
                        <img src={msg} className='p-1' alt="" />
                      </div>Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      disabled={isLoading}
                      className="w-full outline-none inter gray200 px-4 py-3 border border-gray-300 
                      rounded-lg focus:ring-1 focus:ring-blue-50 focus:border-transparent transition-all disabled:opacity-50"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm intermid gray200 mb-2">
                      <div className='w-6 h-6 rounded-[8px] bg-green-100 border  border-pink-100'>
                        <img src={phone} className='p-1 ' alt="" />
                      </div>Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+234801234567"
                      disabled={isLoading}
                      className="w-full outline-none inter gray200 px-4 py-3 border border-gray-300 
                      rounded-lg focus:ring-1 focus:ring-blue-50 focus:border-transparent transition-all disabled:opacity-50"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm intermid gray200 mb-2">
                      <div className='w-6 h-6 rounded-[8px] bg-green-100 border  border-pink-100'>
                        <img src={bank} className='p-1' alt="" />
                      </div>Bank Name</label>
                    <select
                      name="bank"
                      value={formData.bank}
                      onChange={handleInputChange}
                      disabled={isLoading}
                      className="w-full px-4 py-3 outline-none inter border border-gray-300 rounded-lg focus:ring-1
                      focus:ring-blue-200 gray200 focus:border-transparent transition-all disabled:opacity-50"
                    >
                      <option value="">Select Bank</option>
                      {banks.map(bank => (
                        <option key={bank.value} value={bank.value}>{bank.label}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm intermid gray200 mb-2">
                      <div className='w-6 h-6 rounded-[8px] bg-green-100 border  border-pink-100'>
                        <img src={acct} className='p-1 ' alt="" />
                      </div>Account Number</label>
                    <input
                      type="text"
                      name="accountNumber"
                      value={formData.accountNumber}
                      onChange={handleInputChange}
                      placeholder="1234567890"
                      disabled={isLoading}
                      className="w-full outline-none inter gray200 px-4 py-3 border border-gray-300 
                      rounded-lg focus:ring-1 focus:ring-blue-50 focus:border-transparent transition-all disabled:opacity-50"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm intermid gray200 mb-2">
                      <div className='w-6 h-6 rounded-[8px] bg-green-100 border  border-pink-100'>
                        <img src={notes} className='p-1' alt="" />
                      </div>Description</label>
                    <input
                      type="text"
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      placeholder="Supplier payment"
                      disabled={isLoading}
                      className="w-full outline-none inter gray200 px-4 py-3 border border-gray-300 
                      rounded-lg focus:ring-1 focus:ring-blue-50 focus:border-transparent transition-all disabled:opacity-50"
                    />
                  </div>
                </div>
                
                <button
                  onClick={addRecipient}
                  disabled={isLoading}
                  className="bg-green-600 text-white px-4 py-3 rounded-[14px] hover:bg-gradient-to-r from-green-600 to-blue-600  intermid w-full inter md:col-span-2
                  lg:col-span-5 transform hover:scale-102 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Adding...' : 'Add Recipient'}
                </button>
              </div>

              {/* Recipients List */}
              <div className="space-y-4">
                {recipients.length === 0 ? (
                  <div className="text-center py-16 text-gray-500">
                    <img src={user} className="w-16 h-16 mx-auto mb-4" />
                    <h3 className=" mb-2">No recipients added</h3>
                    <p className="text-sm inter">Add your first recipient to start making payments</p>
                  </div>
                ) : (
                  recipients.map(recipient => (
                    <div key={recipient.id} className="bg-white border border-gray-200 rounded-[14px] p-6 shadow-sm 
                    hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                      <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                        <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-4">
                          <div>
                            <span className="text-xs intermid text-blue-500 uppercase tracking-wide">Name</span>
                            <p className="inter text-gray-900">{recipient.name}</p>
                          </div>
                          <div>
                            <span className="text-xs intermid text-blue-500 uppercase tracking-wide">Email</span>
                            <p className="inter text-xs mt-2 text-gray-900">{recipient.email}</p>
                          </div>
                          <div>
                            <span className="text-xs intermid text-blue-500 uppercase tracking-wide">Bank</span>
                            <p className="inter text-gray-900">{banks.find(b => b.value === recipient.bank)?.label}</p>
                          </div>
                          <div>
                            <span className="text-xs intermid text-blue-500 uppercase tracking-wide">Account</span>
                            <p className="inter text-gray-900">{recipient.accountNumber}</p>
                          </div>
                          <div>
                            <span className="text-xs intermid text-blue-500 uppercase tracking-wide">Phone</span>
                            <p className="inter text-xs text-gray-900">{recipient.phone}</p>
                          </div>
                          <div>
                            <span className="text-xs intermid text-blue-500 uppercase outline-none tracking-wide">Description</span>
                            <p className="inter text-gray-900">{recipient.description || 'N/A'}</p>
                          </div>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-3 lg:w-auto w-full">
                          <input
                            type="number"
                            placeholder="Amount (₦)"
                            value={paymentAmounts[recipient.id] || ''}
                            onChange={(e) => handleAmountChange(recipient.id, e.target.value)}
                            min="100"
                            disabled={isLoading}
                            className="px-4 py-2 border border-gray-300 rounded-xl focus:ring-1 focus:ring-blue-500 outline-none
                            focus:border-transparent w-32 disabled:opacity-50"
                          />
                          <button
                            onClick={() => initiatePayment(recipient)}
                            disabled={isLoading}
                            className="bg-cloud text-white px-6 py-2 rounded-xl intermid hover:!bg-green-600  transition-all duration-200
                             shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            {isLoading ? 'Processing...' : 'Pay Now'}
                          </button>
                          <button
                            onClick={() => deleteRecipient(recipient.id)}
                            disabled={isLoading}
                            className="bg-red-100 text-white px-3 py-2 rounded-[14px] hover:bg-red-300 hover:shadow-md 
                            transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            <div className='h-5 w-5'>
                              <img src={del} className="" />
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}

          {/* Payment History Tab */}
          {activeTab === 'payments' && (
            <div className="space-y-6">
              {/* Filters */}
              <div className="flex flex-wrap gap-4 items-center">
                <div className="flex items-center gap-2">
                  <label className="intermid gray200">Period:</label>
                  <select
                    value={periodFilter}
                    onChange={(e) => setPeriodFilter(e.target.value)}
                     className="p-2 px-5 border rounded-[14px] border-gray-300 bg-white gray200 text-sm inter outline-none"
                  >
                    <option value="all">All Time</option>
                    <option value="today">Today</option>
                    <option value="week">This Week</option>
                    <option value="month">This Month</option>
                  </select>
                </div>
                
                <div className="flex items-center gap-2">
                  <label className="intermid gray200">Status:</label>
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                   className="p-2 px-5 border rounded-[14px] border-gray-300 bg-white gray200 text-sm inter outline-none"
                  >
                    <option value="all">All Status</option>
                    <option value="success">Success</option>
                    <option value="pending">Pending</option>
                  </select>
                </div>
              </div>

          

              {/* Payments Table */}
              <div className="overflow-x-auto bg-white rounded-[14px] border border-blue-200  ">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200 ">
                      <th className="px-6 py-4 text-left text-xs intermid text-gray-600 uppercase tracking-wide">Date</th>
                      <th className="px-6 py-4 text-left text-xs intermid text-gray-600 uppercase tracking-wide">Recipient</th>
                      <th className="px-6 py-4 text-left text-xs intermid text-gray-600 uppercase tracking-wide">Amount</th>
                      <th className="px-6 py-4 text-left text-xs intermid text-gray-600 uppercase tracking-wide">Status</th>
                      <th className="px-6 py-4 text-left text-xs intermid text-gray-600 uppercase tracking-wide">Reference</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y inter divide-gray-200">
                    {filteredPayments.length === 0 ? (
                      <tr>
                        <td colSpan={5} className="px-6 py-16 text-center inter text-gray-500">
                          <img src={agenda} className="w-12 h-12 mx-auto mb-3" />
                          <h3 className=" mb-2">No payments found</h3>
                          <p className="text-sm inter">Your payment history will appear here</p>
                        </td>
                      </tr>
                    ) : (
                      filteredPayments.map(payment => (
                        <tr key={payment.id} className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 whitespace-nowrap text-sm inter text-gray-600">
                            {new Date(payment.date).toLocaleDateString()}
                          </td>
                          <td className="px-6 py-4 text-sm whitespace-nowrap intermid gray200">
                            {payment.recipientName}
                          </td>
                          <td className="px-6 py-4 text-sm whitespace-nowrap intermid text-green-600">
                            ₦{payment.amount.toLocaleString()}
                          </td>
                          <td className="px-6 py-4">
                            <span className={`inline-flex px-3 py-1 inter rounded-full text-xs bg-green-100 text-blue-600${
                              payment.status === 'success' 
                                ? 'bg-green-100 text-green-600' 
                                : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {payment.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-500 font-mono">
                            {payment.reference}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Analytics Tab */}
          {activeTab === 'analytics' && (
            <div className="space-y-8 ">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 ">

               
               <div className="bg-green-500 border  border-green-300 text-white p-6 rounded-[14px] shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-green-100 text-sm  inter font-medium">Total Spent</p>
                     
                      <p className="text-2xl aeon-bold text-pink-50">₦{analytics.totalSpent.toLocaleString()}</p>
                    </div>
                    <div className='w-14 h-14 rounded-full bg-green-100 border shadow-md  border-white'>
                    <img src={pay} className="p-3  text-green-200" />
                  </div>
                  </div>
                </div>

                 <div className="bg-blue-500 border border-blue-300 text-white p-6 rounded-[14px] shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-blue-50 text-sm inter font-medium">Today</p>
                      <p className="text-2xl text-blue-50  aeon-bold">₦{analytics.todaySpent.toLocaleString()}</p>
                    </div>
                      <div className='w-14 h-14 rounded-full bg-blue-100 border shadow-md border-white'>
                    <img src={totall} className="p-3  text-blue-200 " />
                  </div>
                  </div>
                </div>
                   

                     <div className="bg-purple-500 border border-purple-300 text-white  p-6 rounded-[14px] shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-purple-100 inter text-sm font-medium">This Month</p>
                      <p className="text-2xl text-purple-50 aeon-bold">₦{analytics.monthlySpent.toLocaleString()}</p>
                    </div>
                <div className='w-14 h-14 rounded-full bg-purple-100 border border-white shadow-md'>
                      <img src={month} className="p-3 text-purple-200" />
                  </div>
                  </div>
                </div>
                   <div className="bg-pink-500 border border-pink-300 text-white p-6 rounded-[14px] shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-pink-100 text-sm inter font-medium">Total Payments</p>
                       <p className="text-2xl text-green-50  aeon-bold ">{analytics.totalPayments}</p>
                    </div>
                    <div className='w-14 h-14 rounded-full bg-pink-100 border border-white shadow-md'>
                    <img src={todayy} className="p-3 text-pink-200" />
                  </div>
                   
                  </div>
                </div>
                
               
                
                 
              </div>
              
              {payments.length === 0 && (
                <div className="text-center py-16 py-8 text-gray-500 inter">
                  <img src={graph} className="w-16 h-16 mx-auto mb-4" />
                  <h3 className=" mb-2">No data available</h3>
                  <p className="text-sm inter">Make some payments to see analytics</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaystackPaymentSystem;



            // Add this component near the top of your file, after the imports
const AmountPreview = ({ amount }) => {
  const formatAmount = (value) => {
    if (!value) return '---';
    
    // Remove non-digit characters
    const digitsOnly = value.replace(/\D/g, '');
    
    // Format with commas for thousands
    if (digitsOnly) {
      return `₦${parseInt(digitsOnly, 10).toLocaleString('en-US')}`;
    }
    
    return '---';
  };

  return (
    <div className="mt-2 text-sm text-gray-600">
      <span className="font-medium">Preview: </span>
      {formatAmount(amount)}
    </div>
  );
};

// Then in your recipients list, update the payment input section to include the preview:
{recipients.map(recipient => (
  <div key={recipient.id} className="bg-white border border-gray-200 rounded-[14px] p-6 shadow-md hover:shadow-md transition-all">
    <div className="flex flex-col lg:flex-row lg:items-center gap-6">
      <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-4">
        {/* ... your existing recipient details ... */}
      </div>
      
      <div className="flex flex-col sm:flex-row gap-3 lg:w-auto w-full">
        <div>
          <input
            type="number"
            placeholder="Amount (₦)"
            value={paymentAmounts[recipient.id] || ''}
            onChange={(e) => handleAmountChange(recipient.id, e.target.value)}
            min="100"
            disabled={isLoading}
            className="px-4 py-2 border border-gray-300 rounded-xl focus:ring-1 focus:ring-blue-500 outline-none
            focus:border-transparent w-32 disabled:opacity-50"
          />
          {/* Add the AmountPreview component below the input */}
          <AmountPreview amount={paymentAmounts[recipient.id]} />
        </div>
        <button
          onClick={() => initiatePayment(recipient)}
          disabled={isLoading || !paystackLoaded}
          className="bg-cloud text-white px-6 py-2 rounded-xl intermid hover:!bg-green-600 transition-all duration-200
          shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Processing...' : 'Pay Now'}
        </button>
        <button
          onClick={() => deleteRecipient(recipient.id)}
          disabled={isLoading}
          className="bg-red-100 text-white px-3 py-2 rounded-[14px] hover:bg-red-300 hover:shadow-md 
          transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <div className='h-5 w-5'>
            <img src={del} className="" alt="Delete" />
          </div>
        </button>
      </div>
    </div>
  </div>
))}