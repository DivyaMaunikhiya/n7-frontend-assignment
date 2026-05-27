import React from 'react';
import { motion } from 'framer-motion';

import phoneImg1 from '../../assets/mobile1.png'; 
import phoneImg2 from '../../assets/mobile2.png'; 
import phoneImg3 from '../../assets/mobile3.png'; 
import bgVector from '../../assets/vector_background.png'; 

import CTABanner from '../compund/CTABanner'; 

const MobileShowcase = () => {
  const CheckIcon = () => (
    <div className="w-5 h-5 rounded-full bg-[#00B4FD] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </div>
  );

  const FeatureBox = ({ title, description, bullets }) => (
    <div className="flex flex-col items-start max-w-sm">
      <h3 className="text-xl font-bold mb-4 text-[#0a101e]">{title}</h3>
      <p className="text-gray-500 text-[15px] leading-relaxed mb-6">
        {description}
      </p>
      <div className="flex flex-col space-y-4">
        {bullets.map((text, i) => (
          <div key={i} className="flex items-start gap-3">
            <CheckIcon />
            <span className="text-sm font-semibold text-[#1e293b]">{text}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="bg-gradient-to-b from-[#f4f9ff] to-[#e8f1fc] overflow-hidden">
      <section className="relative text-black py-32 lg:pb-10">
        <div className="absolute top-[30%] right-[70%] w-[700px] h-[700px] pointer-events-none z-0">
          <img src={bgVector} alt="Background Graphic" className="w-full h-full object-contain" />
        </div>
        <div className="absolute top-[5%] left-[25%] pointer-events-none opacity-20 select-none z-0">
           <span className="text-[35rem] font-bold text-transparent leading-none" style={{ WebkitTextStroke: '1px #003ACE' }}>
              N7
           </span>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 flex flex-col items-start pt-10"
          >
            <h2 className="text-5xl lg:text-[3.5rem] font-medium leading-[1.1] mb-6 text-[#0a101e] tracking-tight">
              Digital banking <br/> out-of-the-box
            </h2>
            <p className="text-[17px] text-gray-500 mb-10 leading-relaxed pr-4">
              N7 helps your financial institution improve the client experience, automate and optimize procedures
            </p>
            <div className="flex flex-col items-start gap-6">
               <button className="bg-gradient-to-r from-[#3b82f6] to-[#1d4ed8] text-white px-8 py-3.5 rounded-lg text-sm font-medium tracking-wide hover:from-white hover:to-white hover:text-black transition-all duration-300 shadow-lg uppercase">
              REQUEST DEMO
            </button>
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
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start gap-48">
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <img src={phoneImg1} alt="Dashboard App" className="w-[280px] drop-shadow-[0_30px_40px_rgba(0,0,0,0.15)] rounded-[2.5rem]" />
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <FeatureBox 
                title="No legacy IT systems"
                description="Our Digital Banking solution and multilayered approach help financial institutions take advantage of digital transformation by ensuring customer trust and regulatory compliance."
                bullets={[
                  "Adaptive & Intelligent API monetization",
                  "Ambient User Experience",
                  "Cloud-native With lower TCO"
                ]}
              />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative mt-8">
              
              
              <img src={phoneImg3} alt="Profile App" className="relative z-10 w-[280px] drop-shadow-[0_30px_40px_rgba(0,0,0,0.15)] rounded-[2.5rem]" />
            </motion.div>
            <div className="absolute top-1/2 right-20 top-[85%] transform translate-x-[40%] -translate-y-[45%] pointer-events-none opacity-20 select-none z-0">
            <span className="text-[60rem] font-bold text-transparent leading-none" style={{ WebkitTextStroke: '1px #003ACE' }}>
                7
            </span>
            </div>
          </div>

          {/* === COLUMN 3: RIGHT === */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start gap-48 pt-32 lg:pt-48">
            
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <FeatureBox 
                title="Fully compliant with regulatory requirement"
                description="The governance of risk management with regulations is achieved by our risk management framework that is fully integrated to work with digital bank's operational-risk protocols and procedures."
                bullets={[
                  "Pre-integrated Security System",
                  "Fully Compliant With Regulatory Requirement",
                  "Digitally Connected Core"
                ]}
              />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <img src={phoneImg2} alt="Analytics App" className="w-[280px] drop-shadow-[0_30px_40px_rgba(0,0,0,0.15)] rounded-[2.5rem]" />
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <FeatureBox 
                title="No traditional branches"
                description="Our Digital Banking out-of-the-box helps you to accelerate innovation while reducing risks and optimising operational costs for a seamless branchless experience."
                bullets={[
                  "Branchless & Paperless Banking",
                  "Digital Transformation Capability",
                  "Optimized, Adoptable and Scalable"
                ]}
              />
            </motion.div>

          </div>

        </div>
      </section>

      <section className="pb-24 pt-10 relative z-20">
        <CTABanner 
          title="Take the full advantage of going paper-less now."
          description="N7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations"
          watermark="N7"
        />
      </section>
      
    </div>
  );
};

export default MobileShowcase;