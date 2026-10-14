import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Users, CreditCard } from 'lucide-react';

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto p-6 mt-10">
      <div className="text-center py-20 bg-brand-green text-white rounded-2xl shadow-xl">
        <h1 className="text-5xl font-bold mb-4">Welcome to Sunyani Tennis Club</h1>
        <p className="text-xl mb-8">The premier destination for tennis in the Bono Region.</p>
        <Link to="/register" className="bg-brand-lime text-brand-dark px-8 py-3 rounded-full font-bold text-lg hover:bg-lime-400 transition shadow-lg">
          Become a Member Today
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-16">
        <div className="bg-white p-6 rounded-xl shadow border-t-4 border-brand-lime">
          <Calendar className="w-10 h-10 text-brand-green mb-4" />
          <h3 className="text-xl font-bold mb-2">Book Courts Online</h3>
          <p className="text-gray-600">Reserve your playtime on our Red Clay and Hard courts instantly through the member portal.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow border-t-4 border-brand-lime">
          <CreditCard className="w-10 h-10 text-brand-green mb-4" />
          <h3 className="text-xl font-bold mb-2">Pay Dues via MoMo</h3>
          <p className="text-gray-600">Securely pay your club dues using MTN MoMo, Telecel Cash, or AT Money directly from your phone.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow border-t-4 border-brand-lime">
          <Users className="w-10 h-10 text-brand-green mb-4" />
          <h3 className="text-xl font-bold mb-2">Active Community</h3>
          <p className="text-gray-600">Join our ladders, tournaments, and social events designed for all skill levels.</p>
        </div>
      </div>
    </div>
  );
}