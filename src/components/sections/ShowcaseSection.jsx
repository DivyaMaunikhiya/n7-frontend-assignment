import React from 'react';
import { motion } from 'framer-motion';

import showcaseImg from '../../assets/mask_group1.png'; 

const ShowcaseSection = () => {
  return (
    <section className="bg-[#0b101e] text-white py-32 overflow-hidden border-t border-white/5 selection:bg-accent selection:text-white relative">
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -z-0 pointer-events-none opacity-20">
         <span className="text-[25rem] font-bold text-transparent" style={{ WebkitTextStroke: '2px #3b82f6' }}>
            CB7
         </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center w-full relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 flex flex-col items-start w-full"
        >
          <h2 className="text-4xl lg:text-[4.5rem] font-medium leading-[1.1] mb-6 tracking-tight max-w-4xl text-gray-100">
           A complete cloud-based <br className='hidden md:block'/> core banking.
          </h2>
          
          <p className="text-lg text-gray-300 mb-12 max-w-3xl leading-relaxed">
           Faster time to market with our cloud-based core banking services 
          </p>
          <div className="flex space-x-4 mb-2">
            <button className="bg-gradient-to-r from-[#5a98f2] to-[#2b44e5] text-white px-8 py-3.5 rounded-lg text-sm font-medium tracking-wide hover:from-white hover:to-white hover:text-black transition-all duration-300 shadow-lg uppercase">
              REQUEST DEMO
            </button>
          </div>
          <div className="flex space-x-5 mb-10 mt-6">
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
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="lg:col-span-7 relative w-full h-[500px] lg:h-[600px] flex items-center justify-center lg:justify-end"
        >
           <div className="absolute lg:relative -right-20 lg:-right-10 top-10 lg:top-0 w-full max-w-[500px] lg:max-w-[700px] transform translate-x-[10%] lg:translate-x-[15%]">
             <img 
              src={showcaseImg} 
              alt="Cloud Core Banking Dashboard" 
              className="relative z-10 w-full h-auto object-cover rounded-xl rounded-tr-none rounded-br-none " 
            />

           </div>
           
        </motion.div>

      </div>
    </section>
  );
};

export default ShowcaseSection;