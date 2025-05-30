
import React from 'react';
import { ShoppingBag, Package, Home } from 'lucide-react';

const QuickStartGuide: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-[#0D0F12]">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-2xl font-bold mb-12 text-gradient">
          Quick Start Guide
        </h2>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          <div className="neo-card p-6 hover:scale-[1.02] transition-all duration-300">
            <div className="mx-auto bg-deutscher-purple/20 rounded-full w-12 h-12 flex items-center justify-center mb-3">
              <ShoppingBag className="h-6 w-6 text-deutscher-purple-light" />
            </div>
            <h3 className="text-xl font-bold mb-2">1. Shop Online</h3>
            <p className="text-gray-300">Shop your favorite U.S. store online.</p>
          </div>
          <div className="neo-card p-6 hover:scale-[1.02] transition-all duration-300">
            <div className="mx-auto bg-deutscher-purple/20 rounded-full w-12 h-12 flex items-center justify-center mb-3">
              <Package className="h-6 w-6 text-deutscher-purple-light" />
            </div>
            <h3 className="text-xl font-bold mb-2">2. Use U.S. Address</h3>
            <p className="text-gray-300">Use your free U.S. shipping address.</p>
          </div>
          <div className="neo-card p-6 hover:scale-[1.02] transition-all duration-300">
            <div className="mx-auto bg-deutscher-purple/20 rounded-full w-12 h-12 flex items-center justify-center mb-3">
              <Home className="h-6 w-6 text-deutscher-purple-light" />
            </div>
            <h3 className="text-xl font-bold mb-2">3. Get Delivery</h3>
            <p className="text-gray-300">We forward your package to Germany fast!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickStartGuide;
