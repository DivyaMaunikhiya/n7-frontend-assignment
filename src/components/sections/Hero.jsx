import React from 'react';
import { motion } from 'framer-motion';

import heroImg from '../../assets/hero_img.png'; 
import heroRecentActivity from '../../assets/hero_recent_activity.png';
import heroRightSide from '../../assets/hero_right_side.png';
import shellsLogo from '../../assets/logo/shell.png'; 
import smartFinderLogo from '../../assets/logo/smartfinder_logo.png';
import zoomerrLogo from '../../assets/logo/zoomer.png';
import artVenueLogo from '../../assets/logo/artvenue.png';
import kontrastrLogo from '../../assets/logo/kontrastr.png';
import wavesMarathonLogo from '../../assets/logo/wavesmarathon.png';

const Hero = () => {
  return (
    <section className="bg-[#0b101e] text-white pt-32 pb-20 min-h-screen flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col"
        >
          <h1 className="text-5xl lg:text-[4.5rem] font-medium leading-[1.1] mb-6 tracking-tight">
            The new foundation<br />of modern banking
          </h1>
          <p className="text-lg text-gray-300 mb-10 max-w-lg leading-relaxed">
            We drive innovation and growth, provide seamless customer experience and operational excellence
          </p>
          <div className="flex space-x-4 mb-16">
            <button className="bg-gradient-to-r from-[#5a98f2] to-[#2b44e5] text-white px-8 py-3.5 rounded-lg text-sm font-medium tracking-wide hover:from-white hover:to-white hover:text-black transition-all duration-300 shadow-lg">
              REQUEST DEMO
            </button>
            <button className="bg-transparent border border-gray-400 text-white px-8 py-3.5 rounded-lg text-sm font-medium tracking-wide hover:bg-white hover:text-black hover:border-white transition-all duration-300">
              CONTACT US
            </button>
          </div>
          <div>
            <p className="text-gray-400 text-sm mb-4 font-medium">Trusted By:</p>
            <div className="flex items-center gap-6 md:gap-8 flex-wrap opacity-60 hover:opacity-100 transition-all duration-500">
                
                <div className="flex items-center gap-2">
                    <img src={shellsLogo} alt="Shells icon" className="h-5 w-auto object-contain" />
                    <span className="text-sm font-semibold tracking-wider text-gray-300">SHELLS</span>
                </div>
                
                <div className="flex items-center gap-2">
                    <img src={smartFinderLogo} alt="SmartFinder icon" className="h-4 w-auto object-contain" />
                    <span className="text-sm font-semibold tracking-wider text-gray-300">SmartFinder</span>
                </div>
                
                <div className="flex items-center gap-2">
                    <img src={zoomerrLogo} alt="Zoomerr icon" className="h-5 w-auto object-contain" />
                    <span className="text-sm font-semibold tracking-wider text-gray-300">Zoomerr</span>
                </div>
                
                <div className="flex items-center gap-2">
                    <img src={artVenueLogo} alt="ArtVenue icon" className="h-4 w-auto object-contain" />
                    <span className="text-sm font-semibold tracking-wider text-gray-300">ArtVenue</span>
                </div>
                
                <div className="flex items-center gap-2">
                    <img src={kontrastrLogo} alt="Kontrastr icon" className="h-4 w-auto object-contain" />
                    <span className="text-sm font-semibold tracking-wider text-gray-300">kontrastr</span>
                </div>
                
                <div className="flex items-center gap-2">
                    <img src={wavesMarathonLogo} alt="Waves Marathon icon" className="h-4 w-auto object-contain" />
                    <span className="text-[11px] font-semibold tracking-widest text-gray-300 uppercase">Waves Marathon</span>
                </div>

            </div>
          </div>

        </motion.div>
      <motion.div 
          className="relative w-full h-[600px] flex items-center justify-center" 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-gradient-to-tr from-[#003ACE]/60 to-[#00B4FD]/60 rounded-full blur-[120px] pointer-events-none"></div>
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-gradient-to-tr from-[#003ACE]/30 to-[#00B4FD]/30 rounded-full blur-[100px] -z-10"></div>
           <img 
            src={heroImg} 
            alt="User working" 
            className="relative z-10 w-full rounded-3xl object-cover drop-shadow-2xl" 
          />
           
           <motion.img 
            src={heroRecentActivity} 
            alt="Recent Activity" 
            className="absolute z-20 w-[70%] -left-16 bottom-16 drop-shadow-[0_25px_25px_rgba(0,0,0,0.3)]"
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ delay: 0.6, duration: 0.6 }}
          />
          
           <motion.img 
            src={heroRightSide} 
            alt="Account Balance" 
            className="absolute z-20 w-[55%] -right-35 top-10 drop-shadow-[0_25px_25px_rgba(0,0,0,0.3)]"
            initial={{ y: -20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ delay: 0.8, duration: 0.6 }}
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;