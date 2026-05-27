import React, { useState } from 'react';
import { motion } from 'framer-motion';

import caseStudyImg from '../../assets/insight.png'; 
import zoomerLogo from '../../assets/logo/zoomer.png';
import shellsLogo from '../../assets/logo/shell.png';
import smartFinderLogo from '../../assets/logo/smartfinder_logo.png';
import artVenueLogo from '../../assets/logo/artvenue.png';

const CaseStudiesSection = () => {
  const [active, setActive] = useState(1);

  const cards = [
    { id: 0, tag: "GETTING STARTED", title: "How we help brand reach out to more people", brand: "SHELLS" , logo: shellsLogo },
    { id: 1, tag: "GETTING STARTED", title: "How we help brand reach out to more people", brand: "SmartFinder", logo: smartFinderLogo  },
    { id: 2, tag: "GETTING STARTED", title: "How we help brand reach out to more people", brand: "Zoomerr", logo: zoomerLogo  },
    { id: 3, tag: "GETTING STARTED", title: "How we help brand reach out to more people", brand: "ArtVenue", logo: artVenueLogo  },
  ];

  const nextSlide = () => setActive((prev) => (prev + 1) % cards.length);
  const prevSlide = () => setActive((prev) => (prev - 1 + cards.length) % cards.length);

  return (
    <section className="bg-[#030712] text-white py-24 relative overflow-hidden">
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl lg:text-[3.5rem] text-center font-medium mb-24 text-white tracking-tight"
      >
        Our Case Studies
      </motion.h2>
      <div className="relative w-full max-w-7xl mx-auto h-[400px] lg:h-[450px] flex items-center justify-center mb-16" style={{ perspective: 1000 }}>
        
        {cards.map((card, index) => {
          let position = 'hidden';
          if (index === active) position = 'center';
          else if (index === (active - 1 + cards.length) % cards.length) position = 'left';
          else if (index === (active + 1) % cards.length) position = 'right';

          const variants = {
            center: { x: '0%', scale: 1, zIndex: 30, opacity: 1, rotateY: 0 },
            left: { x: '-15%', scale: 0.85, zIndex: 10, opacity: 0.3, rotateY: 15 }, 
            right: { x: '15%', scale: 0.85, zIndex: 10, opacity: 0.3, rotateY: -15 },
            hidden: { x: '0%', scale: 0.5, zIndex: 0, opacity: 0 }
          };

          return (
            <motion.div
              key={card.id}
              initial={false}
              animate={position}
              variants={variants}
              transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
              className="absolute w-full max-w-[900px] h-full"
              style={{ transformOrigin: 'center center -100px' }}
            >
              <div className="w-full h-full bg-[#070e1a] border border-white/5 rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.6)] flex flex-col md:flex-row">
                <div className="w-full md:w-[40%] bg-[#070e1a] flex items-center justify-center overflow-hidden relative shrink-0">
<img
  src={caseStudyImg}
  alt="Visual"
  className="w-full h-full object-contain object-center rounded-2xl lg:rounded-[2rem]"
/>
                </div>
                <div className="w-full md:w-[60%] p-8 lg:p-10 flex flex-col justify-center items-start">
                  <span className="text-[#00B4FD] text-xs font-bold tracking-widest uppercase mb-4 opacity-80">
                    {card.tag}
                  </span>
                  <h3 className="text-3xl lg:text-[2.5rem] font-medium text-white mb-8 leading-tight tracking-tight">
                    {card.title}
                  </h3>
                  <div className="flex items-center gap-3.5 mb-10">
                    {card.logo && (
                      <img 
                        src={card.logo} 
                        alt={`${card.brand} logo`} 
                        className="h-6 w-auto object-contain shrink-0 max-w-[40px]" 
                      />
                    )}
                    <span className="text-[1.35rem] font-bold text-[#64748b] tracking-tight">
                      {card.brand}
                    </span>
                  </div>
                  
                  <button className="w-full border border-gray-600/60 text-gray-300 py-3.5 rounded-lg text-[11px] font-bold tracking-widest uppercase hover:bg-white hover:text-black hover:border-white transition-all duration-300 mt-auto">
                    READ MORE
                  </button>
                </div>

              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-40 mt-12 mb-16 flex flex-col md:flex-row items-center justify-between">
        
        <div className="hidden md:block flex-1"></div>
        <div className="flex items-center gap-6 flex-1 justify-center">
          <button onClick={prevSlide} className="w-12 h-12 rounded-full border border-[#00B4FD] flex items-center justify-center text-[#00B4FD] hover:bg-[#00B4FD] hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
          </button>
          
          <div className="flex gap-2.5">
            {cards.map((_, i) => (
              <div key={i} className={`h-2.5 rounded-full transition-all duration-300 ${i === active ? 'w-8 bg-[#00B4FD]' : 'w-2.5 bg-gray-700'}`}></div>
            ))}
          </div>

          <button onClick={nextSlide} className="w-12 h-12 rounded-full border border-[#00B4FD] flex items-center justify-center text-[#00B4FD] hover:bg-[#00B4FD] hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>

        <div className="flex-1 flex justify-center md:justify-end mt-8 md:mt-0">
          <a href="#" className="group flex items-center text-[#00B4FD] w-fit cursor-pointer">
            <div className="relative text-[12px] font-bold tracking-widest uppercase pb-1">
              VIEW ALL
              <span className="absolute left-0 bottom-0 w-[45%] h-[1.5px] bg-[#00B4FD] transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </div>
            
            <svg className="w-5 h-5 ml-2.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

      </div>

    </section>
  );
};

export default CaseStudiesSection;