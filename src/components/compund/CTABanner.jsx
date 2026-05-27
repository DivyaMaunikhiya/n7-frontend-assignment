import React from 'react';
import { motion } from 'framer-motion';

const CTABanner = ({ 
  title = "Take the full advantage of going paper-less now.", 
  description = "CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations",
  watermark = "CB7" 
}) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-16">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="relative w-full bg-gradient-to-r from-[#0e172a] to-[#03060c] rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] px-8 py-16 lg:px-16 lg:py-20 border border-white/5"
      >
        <div className="absolute top-1/2 right-0 lg:right-6 transform -translate-y-1/2 pointer-events-none opacity-40 select-none z-0">
           <span className="text-[35vw] lg:text-[26rem] font-bold text-transparent leading-none tracking-tighter" style={{ WebkitTextStroke: '1px #1e3a8a' }}>
              {watermark}
           </span>
        </div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          <div className="flex-1 max-w-2xl text-center lg:text-left">
            <h2 className="text-4xl lg:text-[3.5rem] font-medium leading-[1.1] mb-6 text-gray-100 tracking-tight">
              {title}
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
              {description}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <button className="bg-transparent border border-gray-400 text-white px-8 py-3.5 rounded-lg text-sm font-medium tracking-wide hover:bg-white hover:text-black hover:border-white transition-all duration-300 uppercase">
              CONTACT US
            </button>
            <button className="bg-gradient-to-r from-[#3b82f6] to-[#1d4ed8] text-white px-8 py-3.5 rounded-lg text-sm font-medium tracking-wide hover:from-white hover:to-white hover:text-black transition-all duration-300 shadow-lg uppercase">
              REQUEST DEMO
            </button>
          </div>

        </div>

      </motion.div>
    </div>
  );
};

export default CTABanner;