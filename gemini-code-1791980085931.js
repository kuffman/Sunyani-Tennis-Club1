import React from 'react';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { Trophy } from 'lucide-react';

export default function Navbar({ user }) {
  return (
    <nav className="bg-brand-green text-white p-4 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold">
          <Trophy className="text-brand-lime" />
          Sunyani Tennis Club
        </Link>
        <div className="flex gap-4">
          {user ? (
            <>
              <Link to="/dashboard" className="hover:text-brand-lime transition">Dashboard</Link>
              <button onClick={() => signOut(auth)} className="text-sm bg-red-600 px-3 py-1 rounded hover:bg-red-700">Logout</button>
            </>
          ) : (
            <Link to="/register" className="bg-brand-lime text-brand-dark px-4 py-2 rounded font-semibold hover:bg-lime-400">
              Join / Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}