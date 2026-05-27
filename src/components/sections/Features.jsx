import React from 'react';

import coreBankingLogo from '../../assets/logo/core_banking_logo.png';
import digitalBankingLogo from '../../assets/logo/degital_banking_logo.png';
import openBankingLogo from '../../assets/logo/open_banking_logo.png';
import loanOriginationLogo from '../../assets/logo/loan_orientation_system_logo.png';
import loanManagementLogo from '../../assets/logo/loan_management_system_logo.png';

const featuresData = [
  {
    title: "Core Banking CB7",
    desc: "CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations for your employees, improve risk management, increase productivity, and ensure full regulatory compliance.",
    icon: coreBankingLogo, 
    tag: null
  },
  {
    title: "Digital Banking N7",
    desc: "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients",
    icon: digitalBankingLogo,
    tag: null
  },
  {
    title: "Open Banking",
    desc: "Our API banking helps you to gain actionable insights, enable account aggregation, streamline customer onboarding, KYC, and payment initiation, offer predictive budgeting tools, and introduce enhanced credit scoring.",
    icon: openBankingLogo,
    tag: null
  },
  {
    title: "Loan Origination System",
    desc: "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients",
    icon: loanOriginationLogo,
    tag: "NBFC"
  },
  {
    title: "Loan Management System",
    desc: "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients",
    icon: loanManagementLogo, 
    tag: "NBFC"
  }
];

const Features = () => {
  return (
    <section className="bg-[#0b101e] text-white py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-4 flex flex-col items-start">
          <h2 className="text-4xl font-medium mb-10 leading-tight">All of our solutions are tailor-made to your needs</h2>
           <button className="bg-transparent border border-gray-400 text-white px-8 py-3.5 rounded-lg text-sm font-medium tracking-wide hover:bg-white hover:text-black hover:border-white transition-all duration-300">
              REQUEST DEMO
            </button>
        </div>
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {featuresData.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-start">
              <div className="flex justify-between w-full items-start mb-6">
                <div className={`w-14 h-14 flex items-center justify-center rounded-sm `}>
                   <img src={feature.icon} alt={feature.title} className="w-10 h-10 object-contain" />
                </div>
                {feature.tag && (
                  <span className="text-gray-500 text-xs font-mono tracking-widest mt-2">{feature.tag}</span>
                )}
              </div>
              <h3 className="text-2xl font-medium mb-4 text-gray-100">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">{feature.desc}</p>
             <a href="#" className="mt-auto group flex items-center text-[#00B4FD] w-fit cursor-pointer">
  <div className="relative text-[13px] font-bold tracking-widest uppercase pb-1">
    LEARN MORE
    <span className="absolute left-0 bottom-0 w-[45%] h-[1.5px] bg-[#00B4FD] transition-all duration-300 ease-in-out group-hover:w-full"></span>
  </div>
  <svg className="w-5 h-5 ml-2.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
</a>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;