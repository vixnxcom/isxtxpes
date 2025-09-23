import React, { useState, useRef } from 'react';
import { Plus, Trash2, Download, Eye, Calculator } from 'lucide-react';
import { coins, del, edit, gen, inv, set } from '../assets';

const InvoiceGenerator = () => {
  const [invoice, setInvoice] = useState({
    invoiceNumber: 'INV-001',
    date: new Date().toISOString().split('T')[0],
    dueDate: '',
    company: {
      name: 'Your Company Name',
      address: '123 Business Street',
      city: 'Business City',
      zipCode: '12345',
      phone: '+1 (555) 123-4567',
      email: 'contact@company.com'
    },
    customer: {
      name: '',
      email: '',
      address: '',
      city: '',
      zipCode: '',
      phone: ''
    },
    items: [
      { id: 1, description: '', quantity: 1, rate: 0, amount: 0 }
    ],
    notes: '',
    terms: 'Payment is due within 30 days',
    taxAmount: 0,
    discountAmount: 0
  });

  const [showPreview, setShowPreview] = useState(false);
  const printRef = useRef();

  const addItem = () => {
    const newItem = {
      id: invoice.items.length + 1,
      description: '',
      quantity: 1,
      rate: 0,
      amount: 0
    };
    setInvoice(prev => ({
      ...prev,
      items: [...prev.items, newItem]
    }));
  };

  const removeItem = (id) => {
    setInvoice(prev => ({
      ...prev,
      items: prev.items.filter(item => item.id !== id)
    }));
  };

  const updateItem = (id, field, value) => {
    setInvoice(prev => ({
      ...prev,
      items: prev.items.map(item => {
        if (item.id === id) {
          const updatedItem = { ...item, [field]: value };
          if (field === 'quantity' || field === 'rate') {
            updatedItem.amount = updatedItem.quantity * updatedItem.rate;
          }
          return updatedItem;
        }
        return item;
      })
    }));
  };

  const updateCompany = (field, value) => {
    setInvoice(prev => ({
      ...prev,
      company: { ...prev.company, [field]: value }
    }));
  };

  const updateCustomer = (field, value) => {
    setInvoice(prev => ({
      ...prev,
      customer: { ...prev.customer, [field]: value }
    }));
  };

  const calculateSubtotal = () => {
    return invoice.items.reduce((sum, item) => sum + (item.amount || 0), 0);
  };

  const calculateDiscount = () => {
    return invoice.discountAmount || 0;
  };

  const calculateTax = () => {
    return invoice.taxAmount || 0;
  };

  const calculateTotal = () => {
    return calculateSubtotal() - calculateDiscount() + calculateTax();
  };

  const generatePDF = () => {
    window.print();
  };

  const InvoicePreview = () => (
    <div ref={printRef} className="max-w-4xl mx-auto bg-white rounded-[14px] p-8 border border-gray-200">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-xl aeon-bold text-pink-600 mb-2">Customer Invoice</h1>
          <p className="text-gray-600 inter text-sm">Invoice #: {invoice.invoiceNumber}</p>
          <p className="text-gray-600 inter text-sm">Date: {invoice.date}</p>
          {invoice.dueDate && <p className="text-gray-600  aeon-bold text-xs">Due Date: {invoice.dueDate}</p>}
        </div>
        <div className="text-right">
          <h2 className="text-xl aeon-bold gray200">{invoice.company.name}</h2>
          <p className="text-gray-600 text-sm inter">{invoice.company.address}</p>
          <p className="text-gray-600 text-sm inter">{invoice.company.city}, {invoice.company.zipCode}</p>
          <p className="text-gray-600 text-sm inter">{invoice.company.phone}</p>
          <p className="text-gray-600 inter text-xs">{invoice.company.email}</p>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-lg aeon-bold tracking-wider mb-2  gray200">Bill To:</h3>
        <div className="bg-pink-50 p-4 text-sm border border-gray-200 rounded-[14px]">
          <p className="aeon-bold gray200 tracking-wide">{invoice.customer.name}</p>
          <p className="text-gray-600 inter">{invoice.customer.address}</p>
          <p className="text-gray-600 inter">{invoice.customer.city}, {invoice.customer.zipCode}</p>
          <p className="text-gray-600 inter">{invoice.customer.phone}</p>
          <p className="text-gray-600 inter">{invoice.customer.email}</p>
        </div>
      </div>
<div className="mb-8 rounded-[14px] border border-gray-200  overflow-hidden">
  <table className="w-full">
    <thead className="bg-pink-50">
      <tr>
        <th className="p-3 text-sm font-medium intermid tracking-wide text-gray-600 text-left first:rounded-tl-[13px]">
          Description
        </th>
        <th className="p-3 text-sm font-medium intermid tracking-wide text-gray-600 text-center">
          Qty
        </th>
        <th className="p-3 text-sm font-medium intermid tracking-wide text-gray-600 text-right">
          Rate
        </th>
        <th className="p-3 text-sm font-medium intermid tracking-wide text-gray-600 text-right last:rounded-tr-[13px]">
          Amount
        </th>
      </tr>
    </thead>
    <tbody className="divide-y divide-gray-200 bg-white">
      {invoice.items.map((item, index) => (
        <tr 
          key={item.id} 
          className={`hover:bg-pink-50 transition-colors duration-150 ${
            index === invoice.items.length - 1 ? 'last-row' : ''
          }`}
        >
          <td className={`p-3 text-sm text-gray-600 intermid tracking-wide  ${
            index === invoice.items.length - 1 ? 'rounded-bl-[13px] ' : ''
          }`}>
            {item.description}
          </td>
          <td className="p-3 font-medium text-gray-500 intermid tracking-wide text-center">
            {item.quantity}
          </td>
          <td className="p-3 font-medium text-gray-500 intermid tracking-wide text-right">
            ₦{item.rate.toFixed(2)}
          </td>
          <td className={`p-3 font-medium text-gray-500 intermid tracking-wide text-right ${
            index === invoice.items.length - 1 ? 'rounded-br-[13px]' : ''
          }`}>
            ₦{item.amount.toFixed(2)}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

      <div className="flex justify-end mb-8">
        <div className="w-64">
          <div className="flex justify-between py-2">
            <span className='intermid font-medium gray200 tracking-wide'>Subtotal:</span>
            <span className='text-gray-600 intermid font-medium tracking-wide'>₦{calculateSubtotal().toFixed(2)}</span>
          </div>
          {invoice.discountAmount > 0 && (
            <div className="flex justify-between py-2 text-gray-500">
              <span className='inter tracking-wide'>Discount:</span>
              <span className='intermid tracking-wide text-gray-500'>-₦{calculateDiscount().toFixed(2)}</span>
            </div>
          )}
          {invoice.taxAmount > 0 && (
            <div className="flex justify-between py-2 text-gray-500">
              <span className='inter tracking-wide'>Tax:</span>
             <span className='intermid tracking-wide text-gray-500'>₦{calculateTax().toFixed(2)}</span>
            </div>
          )}
          <div className="flex justify-between py-2 text-xl  border-t border-gray-300">
            <span className='intermid tracking-wide text-green-600 tracking-wider text-md '>Total:</span>
            <span className='aeon-bold text-green-600 tracking-wider'>₦{calculateTotal().toFixed(2)}</span>
          </div>
        </div>
      </div>

      {invoice.notes && (
        <div className="mb-6">
          <h3 className="aeon-bold gray200 tracking-wide mb-2">Notes:</h3>
          <p className="text-gray-600 inter text-sm">{invoice.notes}</p>
        </div>
      )}

      {invoice.terms && (
        <div>
          <h3 className="aeon-bold gray200 tracking-wide mb-2">Terms & Conditions:</h3>
          <p className="text-gray-600 inter text-sm">{invoice.terms}</p>
        </div>
      )}
    </div>
  );

  if (showPreview) {
    return (
      <div className="min-h-screen  py-4">
        <div className="max-w-4xl mx-auto ">
          <div className="flex justify-between items-center mb-6">
            <button
              onClick={() => setShowPreview(false)}
              className=" border border-pink-500 inter tracking-wide  text-sm text-pink-500 px-4 py-2 rounded-[14px] hover:bg-pink-600 hover:text-white"
            >
              ← Back to Edit
            </button>
            <button
              onClick={generatePDF}
              className=" border text-indigo-500 border-blue-500  px-4 py-2 
               inter text-sm tracking-wide rounded-[14px] hover:bg-indigo-600 hover:!text-white flex items-center gap-2"
            >
              <Download size={16} />
              Print/Save PDF
            </button>
          </div>
          <InvoicePreview />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
        <div className="bg-gradient-to-br from-black  to-pink-900 backdrop-blur-lg shadow-sm border-b border-gray-500 rounded-[14px]">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4 ">
                      <div>
                        <h1 className="text-2xl aeon-bold text-white flex flex-row ">
                          <span><img src={gen} className="w-12 mr-3 rounded-[4px]" /></span>Invoice Generator</h1>
                        <p className="text-sm text-gray-400 tracking-wide mb-8 inter mt-1">Generate customers invoices - fast, simple, and accurate</p>
                      </div>
                      <button
              onClick={() => setShowPreview(true)}
              className="bg-indigo-700 text-white inter px-6 py-2 rounded-[14px] hover:bg-green-600 flex items-center 
              gap-2 transform hover:scale-105 transition-all"
            >
              <Eye size={16} />
              Preview Invoice
            </button>
                    </div>
                    </div>
                    </div>

      <div className="max-w-6xl bg-white mx-auto rounded-[14px] mt-8">
        <div className="bg-white  p-6  border border-purple-200 rounded-[14px]">
          {/* <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl aeon-bold gray200">Invoice Generator</h1>
            <button
              onClick={() => setShowPreview(true)}
              className="bg-purple-600 text-white inter px-6 py-2 rounded-[14px] hover:bg-green-700 flex items-center gap-2"
            >
              <Eye size={16} />
              Preview Invoice
            </button>
          </div> */}
        
                    

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Company Information */}
            <div>
              <h2 className="text-xl aeon-bold text-pink-600 mb-4">Company Information</h2>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Company Name"
                  value={invoice.company.name}
                  onChange={(e) => updateCompany('name', e.target.value)}
                  className="w-full p-3 border inter gray200 bg-pink-50 border-purple-300 rounded-[14px] 
                  focus:outline-none focus:shadow-sm"
                />
                <input
                  type="text"
                  placeholder="Address"
                  value={invoice.company.address}
                  onChange={(e) => updateCompany('address', e.target.value)}
                  className="w-full p-3 border inter gray200 bg-pink-50 border-purple-300 rounded-[14px] 
                  focus:outline-none focus:shadow-sm"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="City"
                    value={invoice.company.city}
                    onChange={(e) => updateCompany('city', e.target.value)}
                  className="w-full p-3 border inter gray200 bg-pink-50 border-purple-300 rounded-[14px] 
                  focus:outline-none focus:shadow-sm"
                  />
                  <input
                    type="text"
                    placeholder="Zip Code"
                    value={invoice.company.zipCode}
                    onChange={(e) => updateCompany('zipCode', e.target.value)}
                    className="w-full p-3 border inter gray200 bg-pink-50 border-purple-300 rounded-[14px] 
                  focus:outline-none focus:shadow-sm"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Phone"
                  value={invoice.company.phone}
                  onChange={(e) => updateCompany('phone', e.target.value)}
                 className="w-full p-3 border inter gray200 bg-pink-50 border-purple-300 rounded-[14px] 
                  focus:outline-none focus:shadow-sm"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={invoice.company.email}
                  onChange={(e) => updateCompany('email', e.target.value)}
                 className="w-full p-3 border inter gray200 bg-pink-50 border-purple-300 rounded-[14px] 
                  focus:outline-none focus:shadow-sm"
                />
              </div>
            </div>

            {/* Customer Information */}
            <div>
              <h2 className="text-xl aeon-bold mb-4 text-pink-600">Customer Information</h2>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Customer Name"
                  value={invoice.customer.name}
                  onChange={(e) => updateCustomer('name', e.target.value)}
                 className="w-full p-3 border inter text-gray-700  border-purple-300 rounded-[14px] 
                  focus:outline-none focus:shadow-sm"
                />
                <input
                  type="email"
                  placeholder="Customer Email"
                  value={invoice.customer.email}
                  onChange={(e) => updateCustomer('email', e.target.value)}
                  className="w-full p-3 border inter text-gray-700  border-purple-300 rounded-[14px] 
                  focus:outline-none focus:shadow-sm"
                />
                <input
                  type="text"
                  placeholder="Address"
                  value={invoice.customer.address}
                  onChange={(e) => updateCustomer('address', e.target.value)}
                  className="w-full p-3 border inter text-gray-700  border-purple-300 rounded-[14px] 
                  focus:outline-none focus:shadow-sm"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="City"
                    value={invoice.customer.city}
                    onChange={(e) => updateCustomer('city', e.target.value)}
                   className="w-full p-3 border inter text-gray-700  border-purple-300 rounded-[14px] 
                  focus:outline-none focus:shadow-sm"
                  />
                  <input
                    type="text"
                    placeholder="Zip Code"
                    value={invoice.customer.zipCode}
                    onChange={(e) => updateCustomer('zipCode', e.target.value)}
                    className="w-full p-3 border inter text-gray-700 border-purple-300 rounded-[14px] 
                  focus:outline-none focus:shadow-sm"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Phone"
                  value={invoice.customer.phone}
                  onChange={(e) => updateCustomer('phone', e.target.value)}
                 className="w-full p-3 border inter text-gray-700  border-purple-300 rounded-[14px] 
                  focus:outline-none focus:shadow-sm"
                />
              </div>
            </div>
          </div>

          {/* Invoice Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div>
              <label className="block text-sm aeon-bold text-gray-700 mb-2">Invoice Number</label>
              <input
                type="text"
                value={invoice.invoiceNumber}
                onChange={(e) => setInvoice(prev => ({ ...prev, invoiceNumber: e.target.value }))}
                 className="w-full p-3 border inter text-gray-600 text-sm  border-purple-300 rounded-[14px] 
                  focus:outline-none focus:shadow-sm"
              />
            </div>
            <div>
              <label className="block text-sm aeon-bold text-gray-700 mb-2">Date</label>
              <input
                type="date"
                value={invoice.date}
                onChange={(e) => setInvoice(prev => ({ ...prev, date: e.target.value }))}
                 className="w-full p-3 border inter text-gray-600  border-purple-300 rounded-[14px] 
                  focus:outline-none focus:shadow-sm"
              />
            </div>
            <div>
              <label className="block text-sm aeon-bold text-gray-700 mb-2">Due Date</label>
              <input
                type="date"
                value={invoice.dueDate}
                onChange={(e) => setInvoice(prev => ({ ...prev, dueDate: e.target.value }))}
               className="w-full p-3 border inter text-gray-600  border-purple-300 rounded-[14px] 
                  focus:outline-none focus:shadow-sm"
              />
            </div>
          </div>

          {/* Items */}
          <div className="mb-8 py-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl aeon-bold">Items</h2>
              <button
                onClick={addItem}
                className="border border-green-600 text-green-600 px-4 py-1 rounded-[14px] inter hover:!bg-green-600 
                hover:text-white flex text-sm items-center gap-2"
              >
                <Plus size={16} />
                Add Item
              </button>
            </div>

          
              <div className="overflow-x-auto mb-6">
  <div className="rounded-[14px] border border-gray-300  overflow-hidden">
    <table className="w-full">
      <thead className="bg-pink-50">
        <tr>
          <th className="p-3 text-sm font-medium tracking-wide intermid text-gray-600 text-left">
            Description
          </th>
          <th className="p-3 text-sm font-medium tracking-wide intermid text-gray-600 text-center w-24">
            Quantity
          </th>
          <th className="p-3 text-sm font-medium tracking-wide intermid text-gray-600 text-center w-32">
            Rate (₦)
          </th>
          <th className="p-3 text-sm font-medium tracking-wide intermid text-gray-600 text-center w-32">
            Amount (₦)
          </th>
          <th className="p-3 text-sm font-medium tracking-wide intermid text-gray-600 text-center w-16">
            Action
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200 bg-white">
        {invoice.items.map((item) => (
          <tr key={item.id} className=" transition">
            <td className="p-2">
              <input
                type="text"
                value={item.description}
                onChange={(e) =>
                  updateItem(item.id, "description", e.target.value)
                }
                className="w-full p-2 border-0 intermid tracking-widest text-xs text-gray-700 focus:outline-none"
                placeholder="Item description"
              />
            </td>
            <td className="p-2">
              <input
                type="number"
                value={item.quantity}
                onChange={(e) =>
                  updateItem(item.id, "quantity", parseFloat(e.target.value) || 0)
                }
                className="w-full p-2 border-0 intermid gray200 focus:outline-none text-center"
                min="0"
                step="0.01"
              />
            </td>
            <td className="p-2">
              <input
                type="number"
                value={item.rate}
                onChange={(e) =>
                  updateItem(item.id, "rate", parseFloat(e.target.value) || 0)
                }
                className="w-full gray200 p-2 border-0 focus:outline-none text-center"
                min="0"
                step="0.01"
              />
            </td>
            <td className="p-3 text-gray-600 tracking-wider font-medium text-right intermid">
              ₦{item.amount.toFixed(2)}
            </td>
            <td className="p-2 text-center">
              <button
                onClick={() => removeItem(item.id)}
                className="text-red-600 hover:text-red-800"
                disabled={invoice.items.length === 1}
              >
                <div className="w-7 h-7 rounded-full bg-red-100 flex items-center justify-center">
                  <img src={del} className="p-2" />
                </div>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>
</div>


          {/* Totals and Settings */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div>
          
                <h3 className="text-lg aeon-bold mb-4 gray200 flex items-center gap-2">
              <span className='border border-blue-100 bg-blue-50 w-6 rounded-[8px]'> 
                 <img src={set} alt="" className='p-1'/> </span>
                   Additional Settings</h3>

              <div className="space-y-4">
                <div>
                  <label className="inline-flex items-center justify-center mt-2
              text-xs aeon-bold  rounded-[14px] border border-blue-200 bg-blue-50 text-indigo-600 px-4 py-1 mb-2">
                Tax Amount (₦)
               </label>

                  <input
                    type="number"
                    value={invoice.taxAmount}
                    onChange={(e) => setInvoice(prev => ({ ...prev, taxAmount: parseFloat(e.target.value) || 0 }))}
                    className="w-full  p-3 border border-gray-300 rounded-[14px] focus:outline-none focus:shadow-sm"
                    min="0"
                    step="0.01"
                    placeholder="0.00"
                  />
                </div>
                <div>
                    <label className="inline-flex items-center justify-center mt-2
              text-xs aeon-bold  rounded-[14px] border border-blue-200 bg-blue-50 text-indigo-600 px-4 py-1 mb-2">Discount Amount (₦)</label>
                  <input
                    type="number"
                    value={invoice.discountAmount}
                    onChange={(e) => setInvoice(prev => ({ ...prev, discountAmount: parseFloat(e.target.value) || 0 }))}
                    className="w-full p-3 border border-gray-300 rounded-[14px] focus:outline-none focus:shadow-sm"
                    min="0"
                    step="0.01"
                    placeholder="0.00"
                  />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg aeon-bold mb-4 gray200 flex items-center gap-2">
              <span className='border border-blue-100 bg-blue-50 w-6 rounded-[8px]'> 
                 <img src={inv} alt="" className='p-1'/> </span>
                Invoice Summary
              </h3>
              <div className="border border-gray-300 p-4 rounded-[14px] space-y-2">
                <div className="flex justify-between intermid text-sm text-gray-700 tracking-wider">
                  <span>Subtotal:</span>
                  <span className="gray200 intermid">₦{calculateSubtotal().toFixed(2)}</span>
                </div>
                {invoice.discountAmount > 0 && (
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Discount:</span>
                    <span>-₦{calculateDiscount().toFixed(2)}</span>
                  </div>
                )}
                {invoice.taxAmount > 0 && (
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Tax:</span>
                    <span>₦{calculateTax().toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-xl  border-t border-gray-300 pt-2 intermid">
                  <span className='text-green-600 intermid '>Total:</span>
                  <span className='aeon-bold tracking-wider text-green-700'>₦{calculateTotal().toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Notes and Terms */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
                   <label className="inline-flex items-center justify-center mt-2
              text-xs aeon-bold  rounded-[14px] border border-blue-200 bg-blue-50 text-indigo-600 px-4 py-1 mb-2">Notes</label>
              <textarea
                value={invoice.notes}
                onChange={(e) => setInvoice(prev => ({ ...prev, notes: e.target.value }))}
                rows="4"
                className="w-full p-3 border text-gray-700 border-blue-300 inter rounded-[14px] focus:outline-none  focus:shadow-lg"
                placeholder="Additional notes or comments... "
              />
            </div>
            <div>
                    <label className="inline-flex items-center justify-center mt-2
              text-xs aeon-bold  rounded-[14px] border border-blue-200 bg-blue-50 text-indigo-600 px-4 py-1 mb-2">Terms & Conditions</label>
              <textarea
                value={invoice.terms}
                onChange={(e) => setInvoice(prev => ({ ...prev, terms: e.target.value }))}
                rows="4"
                className="w-full p-3 border border-blue-300 rounded-[14px] text-gray-700 inter focus:outline-none focus:shadow-lg"
                placeholder="Payment terms and conditions..."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceGenerator;