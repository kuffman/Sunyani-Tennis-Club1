import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import Navbar from './components/Navbar';

export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  if (loading) return <div className="h-screen flex items-center justify-center text-brand-green">Loading...</div>;

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50">
        <Navbar user={user} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={user ? <Navigate to="/dashboard" /> : <Register />} />
          <Route path="/dashboard" element={user ? <Dashboard user={user} /> : <Navigate to="/register" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}