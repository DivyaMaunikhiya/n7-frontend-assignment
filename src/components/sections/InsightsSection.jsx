import React from 'react';
import { motion } from 'framer-motion';

import blueGraphic from '../../assets/insight.png';

const InsightsSection = () => {
  return (
    <section className="bg-[#030712] text-white py-32 relative overflow-hidden">
      <div className="absolute top-1/3 -left-[10%] w-[600px] h-[600px] bg-[#003ACE]/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 flex flex-col items-start"
        >
          <h2 className="text-4xl lg:text-5xl font-normal leading-[1.2] mb-10 tracking-tight text-white max-w-md">
            Get yourself up-to-speed on all the things happening in fintech
          </h2>
          <button className="border border-gray-400/70 text-gray-200 px-10 py-3.5 rounded-lg text-[13px] font-bold tracking-widest hover:bg-white hover:text-black hover:border-white transition-all duration-300 uppercase">
            INSIGHTS
          </button>
        </motion.div>
        <div className="lg:col-span-7 flex flex-col gap-6">
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-[#08101e] border border-white/5 rounded-3xl p-5 flex flex-col md:flex-row gap-8 items-center hover:bg-[#0b1526] transition-colors duration-300"
          >
         <div className="w-full md:w-[45%] aspect-square rounded-2xl overflow-hidden shrink-0">
               <img src={blueGraphic} alt="Fintech Graphic" className="w-full h-full object-cover" />
            </div>
            <div className="w-full md:w-[55%] flex flex-col items-start pr-4 py-4">
               <span className="text-[#00B4FD] text-[11px] font-bold tracking-widest uppercase mb-4">
                 Getting Started
               </span>
               <h3 className="text-2xl lg:text-[1.75rem] font-medium text-white mb-4 leading-snug">
                 How to transition from a traditional to a digital bank
               </h3>
               <p className="text-sm text-gray-500 mb-8">
                 David Grohl &nbsp;&nbsp; <span className="opacity-70">17/08/24</span>
               </p>
               <button className="w-full border border-gray-600/60 text-gray-300 py-3.5 rounded-lg text-[11px] font-bold tracking-widest uppercase hover:bg-white hover:text-black hover:border-white transition-all duration-300">
                  READ MORE
               </button>
            </div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-[#08101e] border border-white/5 rounded-3xl p-8 flex flex-col items-start h-full hover:bg-[#0b1526] transition-colors duration-300"
            >
               <span className="text-[#00B4FD] text-[11px] font-bold tracking-widest uppercase mb-4">
                 Getting Started
               </span>
               <h3 className="text-xl font-medium text-white mb-4 leading-snug">
                 How to transition from a traditional to a digital bank
               </h3>
               <p className="text-sm text-gray-500 mb-8 flex-grow">
                 David Grohl &nbsp;&nbsp; <span className="opacity-70">17/08/24</span>
               </p>
               
               <button className="w-full border border-gray-600/60 text-gray-300 py-3.5 rounded-lg text-[11px] font-bold tracking-widest uppercase hover:bg-white hover:text-black hover:border-white transition-all duration-300 mt-auto">
                  READ MORE
               </button>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-[#08101e] border border-white/5 rounded-3xl p-8 flex flex-col items-start h-full hover:bg-[#0b1526] transition-colors duration-300"
            >
               <span className="text-[#00B4FD] text-[11px] font-bold tracking-widest uppercase mb-4">
                 Getting Started
               </span>
               <h3 className="text-xl font-medium text-white mb-4 leading-snug">
                 How to transition from a traditional to a digital bank
               </h3>
               <p className="text-sm text-gray-500 mb-8 flex-grow">
                 David Grohl &nbsp;&nbsp; <span className="opacity-70">17/08/24</span>
               </p>
               
               <button className="w-full border border-gray-600/60 text-gray-300 py-3.5 rounded-lg text-[11px] font-bold tracking-widest uppercase hover:bg-white hover:text-black hover:border-white transition-all duration-300 mt-auto">
                  READ MORE
               </button>
            </motion.div>

          </div>

          <div className="flex justify-end mt-4">
            <a href="#" className="group flex items-center text-[#00B4FD] w-fit cursor-pointer">
              <div className="relative text-[12px] font-bold tracking-widest uppercase pb-1">
                READ ALL INSIGHTS
                <span className="absolute left-0 bottom-0 w-[45%] h-[1.5px] bg-[#00B4FD] transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </div>
              
              <svg className="w-5 h-5 ml-2.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default InsightsSection;