import React, { useState } from 'react';
import { CreditCard, CalendarCheck } from 'lucide-react';

export default function Dashboard({ user }) {
  const [duesPaid, setDuesPaid] = useState(false);

  const handlePayment = (method) => {
    // In a real app, integrate Paystack or Hubtel here
    alert(`Initiating ${method} payment for GH₵ 150.00...`);
    setTimeout(() => {
      setDuesPaid(true);
      alert("Payment Successful! Dues updated.");
    }, 1500);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 mt-8 grid md:grid-cols-3 gap-6">
      
      {/* Sidebar / Member Card */}
      <div className="col-span-1 bg-white p-6 rounded-xl shadow-md border border-gray-100">
        <h2 className="text-2xl font-bold text-brand-green mb-4">Member ID</h2>
        <div className="bg-slate-100 p-4 rounded-lg text-center mb-6">
          <img src={`https://api.dicebear.com/7.x/initials/svg?seed=${user.email}`} alt="Profile" className="w-24 h-24 rounded-full mx-auto mb-3 border-4 border-brand-lime" />
          <p className="font-bold text-lg">{user.email}</p>
          <span className={`inline-block mt-2 px-3 py-1 rounded-full text-sm font-bold ${duesPaid ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {duesPaid ? 'Active Member' : 'Dues Pending'}
          </span>
        </div>

        {!duesPaid && (
          <div className="bg-red-50 p-4 rounded-lg border border-red-100">
            <h3 className="font-bold text-red-700 mb-2">Outstanding Dues: GH₵ 150.00</h3>
            <p className="text-sm text-gray-600 mb-4">Please clear your monthly dues to book courts.</p>
            <div className="flex flex-col gap-2">
              <button onClick={() => handlePayment('MTN MoMo')} className="bg-yellow-400 text-black py-2 rounded font-bold hover:bg-yellow-500">Pay with MTN MoMo</button>
              <button onClick={() => handlePayment('Telecel Cash')} className="bg-red-600 text-white py-2 rounded font-bold hover:bg-red-700">Pay with Telecel</button>
            </div>
          </div>
        )}
      </div>

      {/* Main Content Area */}
      <div className="col-span-2 space-y-6">
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
          <div className="flex items-center gap-2 mb-4">
            <CalendarCheck className="text-brand-green" />
            <h2 className="text-2xl font-bold text-brand-green">Court Reservations</h2>
          </div>
          {duesPaid ? (
            <div className="bg-slate-50 p-8 text-center rounded-lg border border-dashed border-gray-300">
               {/* Court booking logic goes here */}
               <p className="text-gray-600">Select a date and time to reserve Court 1 or 2.</p>
               <button className="mt-4 bg-brand-green text-white px-6 py-2 rounded hover:bg-brand-dark">Book a Court</button>
            </div>
          ) : (
            <div className="bg-slate-50 p-6 rounded-lg text-center text-gray-500">
              You must pay your outstanding dues to access court booking.
            </div>
          )}
        </div>
      </div>

    </div>
  );
}