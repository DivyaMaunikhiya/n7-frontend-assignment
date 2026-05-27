import React from 'react';
import { motion } from 'framer-motion';

import dashboardImg from '../../assets/mask_group.png'; 
import CTABanner from '../compund/CTABanner';

const EfficiencySection = () => {
  // Features divided into two columns exactly like the screenshot
  const featuresLeft = [
    "Customer-On Boarding",
    "Managing deposits and withdrawals",
    "Transaction management",
    "Interest Calculation",
    "Payments processing (cash, cheques, mandates, NEFT, RTGS etc)"
  ];

  const featuresRight = [
    "CRM Activities",
    "Configuring New Banking Products",
    "Loan disbursal and Loan management",
    "Establishing criteria for minimum balances, interest rates, number of withdrawals allowed and so on."
  ];

  const CheckIcon = () => (
    <svg className="w-5 h-5 text-[#2563eb] flex-shrink-0 mt-0.5 mr-3" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
  );

  return (
    <section className="bg-[#0b101e] text-white py-32 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-6 relative w-full h-[400px] lg:h-[600px] flex items-center justify-start"
        >
           <div className="relative w-[120%] max-w-[800px] transform -translate-x-[25%] lg:-translate-x-[30%]">
             <img 
              src={dashboardImg} 
              alt="KYC Dashboard" 
              className="w-full h-auto object-cover rounded-xl shadow-2xl " 
            />
           </div>
        </motion.div>

        {/* RIGHT COLUMN - Text & Features List */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-6 flex flex-col items-start px-6 lg:px-0"
        >
          <h2 className="text-3xl lg:text-4xl font-medium leading-tight mb-10 max-w-xl text-gray-100">
            Run a more efficient, flexible, and digitally connected corebanking system
          </h2>
          
          <h3 className="text-xl font-semibold mb-6">What you will get:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
            <div className="flex flex-col space-y-4">
              {featuresLeft.map((feature, idx) => (
                <div key={`left-${idx}`} className="flex items-start">
                  <CheckIcon />
                  <span className="text-gray-300 text-sm leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>

            {/* Right List */}
            <div className="flex flex-col space-y-4">
              {featuresRight.map((feature, idx) => (
                <div key={`right-${idx}`} className="flex items-start">
                  <CheckIcon />
                  <span className="text-gray-300 text-sm leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>

          </div>

        </motion.div>

      </div>
  <CTABanner 
    title="Take the full advantage of going paper-less now."
    description="CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations"
    watermark="CB7"
  />


    </section>
    
  );
};

export default EfficiencySection;