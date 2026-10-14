import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // User is created and auto-logged in, App.jsx will route them to Dashboard
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 bg-white p-8 rounded-xl shadow-lg border-t-4 border-brand-lime">
      <h2 className="text-3xl font-bold text-brand-green mb-6 text-center">Join the Club</h2>
      <form onSubmit={handleRegister} className="space-y-4">
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">Email Address</label>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full p-2 border rounded focus:ring-2 focus:ring-brand-lime outline-none" required />
        </div>
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">Password</label>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="w-full p-2 border rounded focus:ring-2 focus:ring-brand-lime outline-none" required />
        </div>
        <button type="submit" className="w-full bg-brand-green text-white py-3 rounded font-bold hover:bg-brand-dark transition">
          Create Account
        </button>
      </form>
    </div>
  );
}