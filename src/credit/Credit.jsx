import React, { useState, useEffect } from 'react';
import { Trash2, Plus, CreditCard, TrendingUp, Calendar, Users, DollarSign } from 'lucide-react';
import { acct, agenda, bank, graph, month, msg, name, pay,phone,todayy, totall, user,  } from '../assets';

const PaystackPaymentSystem = () => {
  const [activeTab, setActiveTab] = useState('recipients');
  const [recipients, setRecipients] = useState([]);
  const [payments, setPayments] = useState([]);
  const [periodFilter, setPeriodFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  
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

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const addRecipient = () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.bank || !formData.accountNumber) {
      alert('Please fill in all required fields');
      return;
    }

    const newRecipient = {
      id: Date.now(),
      ...formData,
      createdAt: new Date().toISOString()
    };

    setRecipients([...recipients, newRecipient]);
    setFormData({
      name: '',
      email: '',
      phone: '',
      bank: '',
      accountNumber: '',
      description: ''
    });
  };

  const deleteRecipient = (id) => {
    if (window.confirm('Are you sure you want to delete this recipient?')) {
      setRecipients(recipients.filter(r => r.id !== id));
    }
  };

  const handleAmountChange = (recipientId, amount) => {
    setPaymentAmounts({
      ...paymentAmounts,
      [recipientId]: amount
    });
  };

  const initiatePayment = (recipient) => {
    const amount = parseFloat(paymentAmounts[recipient.id] || 0);
    
    if (!amount || amount < 100) {
      alert('Please enter a valid amount (minimum ₦100)');
      return;
    }

    // Check if PaystackPop is available
    if (typeof window.PaystackPop === 'undefined') {
      // For demo purposes, simulate payment success
      const payment = {
        id: Date.now(),
        recipientId: recipient.id,
        recipientName: recipient.name,
        amount: amount,
        status: 'success',
        reference: 'demo_' + Date.now(),
        date: new Date().toISOString()
      };
      
      setPayments([...payments, payment]);
      setPaymentAmounts({
        ...paymentAmounts,
        [recipient.id]: ''
      });
      alert('Demo payment successful! (In production, this would use Paystack)');
      setActiveTab('payments');
      return;
    }

    const handler = window.PaystackPop.setup({
      key: PAYSTACK_PUBLIC_KEY,
      email: recipient.email,
      amount: amount * 100, // Convert to kobo
      currency: 'NGN',
      ref: 'pay_' + Date.now(),
      metadata: {
        recipient_id: recipient.id,
        recipient_name: recipient.name,
      },
      callback: function(response) {
        const payment = {
          id: Date.now(),
          recipientId: recipient.id,
          recipientName: recipient.name,
          amount: amount,
          status: 'success',
          reference: response.reference,
          date: new Date().toISOString(),
          paystackResponse: response
        };
        
        setPayments(prev => [...prev, payment]);
        setPaymentAmounts({
          ...paymentAmounts,
          [recipient.id]: ''
        });
        alert('Payment successful!');
        setActiveTab('payments');
      },
      onClose: function() {
        alert('Payment cancelled');
      }
    });

    handler.openIframe();
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

  return (
    <div className="min-h-screen  p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white/10 backdrop-blur-lg rounded-[14px] p-8 mb-8 text-white text-left bg-gradient-to-br from-black  to-indigo-900 ">
          <div className="flex  justify-left mb-4 ">
            {/* <CreditCard className="w-8 h-8 mr-3" /> */}
            <h1 className="text-2xl aeon-bold">Payment Intergration System</h1>
          </div>
          <p className="text-sm text-gray-400 tracking-wide inter ">Manage recipients and track payments efficiently</p>
        </div>

        {/* Navigation Tabs */}
        <div className="border border-green-200 backdrop-blur-lg inter bg-white rounded-lg p-2 mb-8">
          <div className="flex space-x-2 gray200">
            {[
              { id: 'recipients', label: 'Recipients', icon: Users },
              { id: 'payments', label: 'Payment History', icon: Calendar },
              { id: 'analytics', label: 'Analytics', icon: TrendingUp }
            ].map(tab => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 flex items-center justify-center px-4 py-4   aeon-bold border border-purple-100 
                    rounded-[14px] 
                     transition-all duration-300 ${
                    activeTab === tab.id 
                      
                      ? 'bg-gradient-to-br from-green-900  to-black  backdrop-blur-lg text-green-500'
                      : 'border-transparent text-gray-500 hover:text-green-600 hover:border-green-200'
                  }`}
                >
                  <Icon className="w-5 h-5 mr-2" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Content Area */}
        <div className="bg-white border border-gray-200 backdrop-blur-lg rounded-[14px] p-8 ">

          
          {/* Recipients Tab */}
          {activeTab === 'recipients' && (
            <div className="space-y-8">
              {/* Add Recipient Form */}
              {/* <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200"> */}

                 <div className="bg-white p-6 rounded-[14px] border border-green-200  hover:shadow-lg
       transition-all duration-300 
      hover:scale-[1.02]">
                <h3 className="text-2xl aeon-bold  text-gray-800 mb-6 flex items-center">
                  <Plus className="w-6 h-6 mr-2" />
                  Add New Recipient
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                  <div>

                    <label className="block text-sm intermid gray200 mb-2"> <span><img src={name} className='w-4 h-4' alt="" /></span>Recipient Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                         className="w-full outline-none inter gray200 px-4 py-3 border border-gray-300 
                         rounded-lg focus:ring-1 focus:ring-blue-50 focus:border-transparent transition-all"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm intermid gray200 mb-2"><span><img src={msg} className='w-4 h-4' alt="" /></span>Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                               className="w-full outline-none inter gray200 px-4 py-3 border border-gray-300 
                         rounded-lg focus:ring-1 focus:ring-blue-50 focus:border-transparent transition-all"
                  
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm intermid gray200 mb-2"><span><img src={phone} className='w-4 ' alt="" /></span>Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+234801234567"
                                className="w-full outline-none inter gray200 px-4 py-3 border border-gray-300 
                         rounded-lg focus:ring-1 focus:ring-blue-50 focus:border-transparent transition-all"
                    
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm intermid gray200 mb-2"><span><img src={bank} className='w-5 h-4' alt="" /></span>Bank Name</label>
                    <select
                      name="bank"
                      value={formData.bank}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 outline-none inter border border-gray-300 rounded-lg focus:ring-1
                       focus:ring-blue-200 gray200 focus:border-transparent transition-all"
                    >
                      <option value="">Select Bank</option>
                      {banks.map(bank => (
                        <option key={bank.value} value={bank.value}>{bank.label}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm intermid gray200 mb-2"><span><img src={acct} className='w-4 ' alt="" /></span>Account Number</label>
                    <input
                      type="text"
                      name="accountNumber"
                      value={formData.accountNumber}
                      onChange={handleInputChange}
                      placeholder="1234567890"
                            className="w-full outline-none inter gray200 px-4 py-3 border border-gray-300 
                         rounded-lg focus:ring-1 focus:ring-blue-50 focus:border-transparent transition-all"
                  
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm intermid gray200 mb-2"><span><img src={name} className='w-4 h-4' alt="" /></span>Description</label>
                    <input
                      type="text"
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      placeholder="Supplier payment"
                    
                           className="w-full outline-none inter gray200 px-4 py-3 border border-gray-300 
                         rounded-lg focus:ring-1 focus:ring-blue-50 focus:border-transparent transition-all"
                    
                    />
                  </div>
                </div>
                
                <button
                  onClick={addRecipient}
                //   className="bg-gradient-to-r from-green-600 to-blue-600 text-white  py-3 rounded-[14px] 
                //   font-semibold hover:from-green-700 hover:to-blue-700 transform hover:scale-105 transition-all w-full
                //   duration-200 shadow-lg"
                // >
               className="bg-green-600 text-white px-4 py-3 rounded-[14px] hover:bg-gradient-to-r from-green-600 to-blue-600  font-medium w-full inter md:col-span-2
             lg:col-span-5 transform hover:scale-102 transition-all"
          >
                  Add Recipient
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
                            <p className="inter text-gray-900">{recipient.phone}</p>
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
                            className="px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500
                             focus:border-transparent w-32"
                          />
                          <button
                            onClick={() => initiatePayment(recipient)}
                            className="bg-cloud text-white px-6 py-2 rounded-xl font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-200 shadow-md hover:shadow-lg"
                          >
                            Pay Now
                          </button>
                          <button
                            onClick={() => deleteRecipient(recipient.id)}
                            className="bg-red-500 text-white px-3 py-2 rounded-xl hover:bg-red-600 transition-all duration-200"
                          >
                            <Trash2 className="w-4 h-4" />
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
                     className="p-2 px-5 border rounded-[14px] border-gray-300 bg-white gray200 inter outline-none"
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
                   className="p-2 px-5 border rounded-[14px] border-gray-300 bg-white gray200 inter outline-none"
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
                  <tbody className="divide-y divide-gray-200">
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
                          <td className="px-6 py-4 text-sm text-gray-900">
                            {new Date(payment.date).toLocaleDateString()}
                          </td>
                          <td className="px-6 py-4 text-sm font-medium text-gray-900">
                            {payment.recipientName}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-900 font-semibold">
                            ₦{payment.amount.toLocaleString()}
                          </td>
                          <td className="px-6 py-4">
                            <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${
                              payment.status === 'success' 
                                ? 'bg-green-100 text-green-800' 
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
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white border border-blue-300 text-white p-6 rounded-[14px] shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-blue-500 text-sm inter font-medium">Total Spent</p>
                      <p className="text-2xl aeon-bold text-blue-600">₦{analytics.totalSpent.toLocaleString()}</p>
                    </div>
                    <img src={totall} className="w-8 h-8 text-blue-200" />
                  </div>
                </div>
                
               <div className="bg-white border border-green-300 text-white p-6 rounded-[14px] shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-green-500 text-sm inter font-medium">Total Payments</p>
                      <p className="text-2xl text-green-600  aeon-bold text-green-600">{analytics.totalPayments}</p>
                    </div>
                    <img src={pay} className="w-8 h-8 text-green-200" />
                  </div>
                </div>
                
                 <div className="bg-white border border-purple-300 text-white p-6 rounded-[14px] shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-purple-500 inter text-sm font-medium">This Month</p>
                      <p className="text-2xl text-purple-600 aeon-bold">₦{analytics.monthlySpent.toLocaleString()}</p>
                    </div>
                    <img src={month} className="w-8 h-8 text-purple-200" />
                  </div>
                </div>
                
                  <div className="bg-white border border-orange-300 text-white p-6 rounded-[14px] shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-orange-500 text-sm inter font-medium">Today</p>
                      <p className="text-2xl text-orange-600  aeon-bold">₦{analytics.todaySpent.toLocaleString()}</p>
                    </div>
                    <img src={todayy} className="w-9 h-9 text-orange-200" />
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