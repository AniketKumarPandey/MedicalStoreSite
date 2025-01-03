import React from 'react';
import { Clock, Truck, HeartPulse } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Your Trusted Healthcare Partner
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Quality medicines and healthcare products delivered with care. 
              Serving our community with dedication since 2020.
            </p>
            <a 
              href="#products"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition inline-block"
            >
              Browse Products
            </a>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&q=80&w=800"
              alt="Medical Store"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Clock className="h-8 w-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">24/7 Service</h3>
            <p className="text-gray-600">Available round the clock for your medical needs</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Truck className="h-8 w-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
            <p className="text-gray-600">Quick home delivery for your convenience</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <HeartPulse className="h-8 w-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Expert Advice</h3>
            <p className="text-gray-600">Professional healthcare guidance</p>
          </div>
        </div>
      </div>
    </div>
  );
}