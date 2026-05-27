import React from 'react';

const Navbar = () => {
  return (
    <div className="fixed top-8 w-full z-50 flex justify-center px-6">
<nav className="w-full max-w-4xl bg-[#2F2F2FB2]/70 backdrop-blur-xl border border-white/10 rounded-2xl px-8 py-3 flex justify-between items-center shadow-2xl">
        <div className="text-white text-xl font-medium tracking-widest cursor-pointer">
          N7
        </div>
        <div className="hidden md:flex items-center space-x-10 text-[11px] text-gray-300 uppercase tracking-widest font-medium">
          <div className="group relative flex items-center cursor-pointer hover:text-white transition-colors duration-300">
            <span>Solutions</span>
            <svg className="w-3 h-3 ml-1 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] bg-[#2F2F2FB2] border border-white/10 rounded-2xl p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-2xl">
              <div className="grid grid-cols-2 gap-6 normal-case tracking-normal">
                <div>
                  <h4 className="text-white font-semibold mb-1 text-sm">Core Banking CB7</h4>
                  <p className="text-gray-400 text-xs">Optimize procedures, simplify banking operations.</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1 text-sm">Digital Banking N7</h4>
                  <p className="text-gray-400 text-xs">Full capabilities across strategy and design.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="group flex items-center cursor-pointer hover:text-white transition-colors duration-300">
            <span>Resources</span>
            <svg className="w-3 h-3 ml-1 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
          </div>

          <a href="#" className="hover:text-white transition-colors duration-300">About Us</a>
        </div>
        <button className="bg-transparent border border-gray-400 text-gray-200 px-6 py-2 rounded-xl text-[11px] uppercase tracking-widest font-medium hover:bg-white hover:text-black hover:border-white transition-all duration-300">
          Request Demo
        </button>
      </nav>
    </div>
  );
};

export default Navbar;