import React from 'react';

const AppShowcase = () => {
  return (
    <section className="bg-gradient-to-b from-primary to-slate-900 text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex justify-between items-end mb-16">
          <div className="max-w-xl">
            <h2 className="text-4xl font-semibold mb-4">Digital banking out-of-the-box</h2>
            <p className="text-gray-400">N7 helps your financial institution improve the client experience, automate and optimize procedures.</p>
          </div>
          <button className="bg-accent text-white px-6 py-3 rounded font-medium hover:bg-blue-600 transition">
            REQUEST DEMO
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <img src="/assets/Home.jpg" alt="Home Screen" className="rounded-[40px] shadow-2xl border-8 border-black w-full" />
          <div className="flex flex-col justify-center px-4">
             <h3 className="text-2xl font-semibold mb-4">Fully compliant with regulatory requirement</h3>
             <p className="text-gray-400 mb-6">The governance of risk management with regulations is achieved by our risk management framework that is fully integrated.</p>
             <ul className="space-y-4">
                <li className="flex items-center text-sm text-gray-300">
                  <span className="text-accent mr-3">✔️</span> Pre-integrated Security System
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <span className="text-accent mr-3">✔️</span> Digitally Connected Core
                </li>
             </ul>
          </div>
          <img src="/assets/Transaction 2.png" alt="Transaction Screen" className="rounded-[40px] shadow-2xl border-8 border-black w-full translate-y-12" />
        </div>

      </div>
    </section>
  );
};

export default AppShowcase;