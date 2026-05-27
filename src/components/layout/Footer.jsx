import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#030712] text-white pt-20 pb-12 relative overflow-hidden">
      <style>
        {`
          @keyframes sweepGradient {
            0% { background-position: 100% 100%; }
            25% { background-position: 100% 0%; }
            50% { background-position: 0% 0%; }
            75% { background-position: 0% 100%; }
            100% { background-position: 100% 100%; }
          }
          .animate-gradient-text {
            background-size: 300% 300%;
            animation: sweepGradient 8s linear infinite;
          }
        `}
      </style>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-[300px] bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#00B4FD]/10 via-[#003ACE]/5 to-transparent pointer-events-none z-0"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-32 gap-10">
          
          <div className="flex-1 max-w-2xl">
            <h2 className="text-4xl lg:text-[3.2rem] font-medium mb-6 leading-[1.1] tracking-tight">
              Take the full advantage of <br className="hidden lg:block" /> going paper-less now.
            </h2>
            <p className="text-gray-400 text-[15px] leading-relaxed max-w-xl">
              CB7 helps your financial institution improve the client experience, 
              automate and optimize procedures, simplify banking operations
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <button className="bg-transparent border border-gray-500 text-white px-8 py-3.5 rounded-lg text-[12px] font-bold tracking-widest hover:bg-white hover:text-black transition-all duration-300 uppercase">
              CONTACT US
            </button>
            <button className="bg-gradient-to-r from-[#4ba1fa] to-[#1546db] text-white px-8 py-3.5 rounded-lg text-[12px] font-bold tracking-widest shadow-[0_10px_20px_rgba(21,70,219,0.2)] hover:from-white hover:to-white hover:text-[#1546db] transition-all duration-300 uppercase">
              REQUEST DEMO
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          <div className="lg:col-span-4 flex items-start -mt-10">
            <span className="text-[14rem] lg:text-[18rem] font-bold leading-none tracking-tighter select-none pointer-events-none bg-gradient-to-br from-[#00B4FD] via-[#003ACE] to-[#00B4FD] text-transparent bg-clip-text animate-gradient-text">
              N7
            </span>
          </div>
          <div className="lg:col-span-3 flex flex-col">
            <div className="mb-12">
              <h4 className="font-semibold text-white mb-6 text-sm tracking-wide">London</h4>
              <p className="text-[#8f9bb3] text-[13px] leading-relaxed">
                Linktia Infosystems Ltd — CB7,<br/>
                26 Main Road Sundridge, TN14 6EP,<br/>
                England, United Kingdom.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-6 text-sm tracking-wide">Solutions</h4>
              <ul className="space-y-4 text-[#8f9bb3] text-[13px]">
                {['Core Banking CB7', 'Digital Banking N7', 'Open Banking', 'Loan Origination System', 'Loan Management System', 'Digital Transformation'].map((item, i) => (
                  <li key={i}>
                    <a href="#" className="flex justify-between items-center w-full pr-8 hover:text-white transition-colors group">
                      <span>{item}</span>
                      <span className="text-[#00B4FD] group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="lg:col-span-3 flex flex-col">
            <div className="mb-12">
              <h4 className="font-semibold text-white mb-6 text-sm tracking-wide">Dubai</h4>
              <p className="text-[#8f9bb3] text-[13px] leading-relaxed">
                Linktia Infosystems Ltd —<br/>
                CB7, Jumeirah Business, Center 5<br/>
                Cluster W, Jumeirah Lakes Towers,<br/>
                Dubai, United Arab Emirates
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-6 text-sm tracking-wide">N7 Banking</h4>
              <ul className="space-y-4 text-[#8f9bb3] text-[13px]">
                {['About Us', 'Solutions', 'Contact', 'Company', 'Careers', 'Insights', 'Core Team', 'Brand Center'].map((item, i) => (
                  <li key={i}>
                    <a href="#" className="flex justify-between items-center w-full pr-8 hover:text-white transition-colors group">
                      <span>{item}</span>
                      <span className="text-[#00B4FD] group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="lg:col-span-2 flex flex-col">
            <div className="mb-12">
              <h4 className="font-semibold text-white mb-6 text-sm tracking-wide">London</h4>
              <p className="text-[#8f9bb3] text-[13px] leading-relaxed">
                Linktia Infosystems Ltd —<br/>
                CB7, Nirmal, Anand Nagar,<br/>
                Suncity Road, Pune,<br/>
                Maharashtra, 411041, India
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-6 text-sm tracking-wide">Our Socials</h4>
              <ul className="space-y-4 text-[#8f9bb3] text-[13px]">
                {['LinkedIn', 'X'].map((item, i) => (
                  <li key={i}>
                    <a href="#" className="flex justify-between items-center w-full pr-8 hover:text-white transition-colors group">
                      <span>{item}</span>
                      <span className="text-[#00B4FD] group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 mt-10">
          <div className="lg:col-start-5 lg:col-span-8">
            <p className="text-[12px] text-[#6b7280] font-semibold leading-relaxed tracking-wide">
              Copyright © 2022 by Linktia Infosystems Limited — [CB7 and N7 as Commercial Brand] — [Registered under the Companies Act 2006 in England and Wales | Number of Incorporation 13200992]
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;