import React from 'react';

const TickerSection = () => {
  const TickerBlock = ({ brand }) => (
    <div className="flex items-center space-x-6 shrink-0 px-4">
      <span className="text-black font-semibold text-4xl lg:text-[2.5rem] tracking-tight flex items-center gap-3 shrink-0 whitespace-nowrap">
        Say 
        <span className="animate-waving-hand inline-block origin-bottom-right text-4xl">👋</span> 
        to the new way of banking
      </span>
      <svg className="w-10 h-10 text-gray-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v20m10-10H2m15.071-7.071L4.93 19.07M4.93 4.93l14.142 14.142" />
      </svg>
      <span className="text-[#2563eb] font-bold text-4xl lg:text-[2.5rem] tracking-tight shrink-0 whitespace-nowrap">
        {brand}
      </span>
      <svg className="w-10 h-10 text-gray-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v20m10-10H2m15.071-7.071L4.93 19.07M4.93 4.93l14.142 14.142" />
      </svg>
    </div>
  );

  const brands = ["CB7", "N7", "CB7", "N7", "CB7", "N7"];

  return (
    <section className="bg-white py-5 border-y border-gray-200 overflow-hidden flex items-center relative h-24 lg:h-32">
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: flex;
            width: max-content;
            animation: marquee 40s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
          
          @keyframes wave {
            0% { transform: rotate(0.0deg); }
            10% { transform: rotate(14.0deg); }
            20% { transform: rotate(-8.0deg); }
            30% { transform: rotate(14.0deg); }
            40% { transform: rotate(-4.0deg); }
            50% { transform: rotate(10.0deg); }
            60% { transform: rotate(0.0deg); }
            100% { transform: rotate(0.0deg); }
          }
          .animate-waving-hand {
            animation: wave 2.5s infinite;
          }
        `}
      </style>
      <div className="animate-marquee cursor-default">
        <div className="flex shrink-0 items-center">
           {brands.map((brand, idx) => <TickerBlock key={`first-${idx}`} brand={brand} />)}
        </div>
        <div className="flex shrink-0 items-center">
           {brands.map((brand, idx) => <TickerBlock key={`second-${idx}`} brand={brand} />)}
        </div>
      </div>
    </section>
  );
};

export default TickerSection;