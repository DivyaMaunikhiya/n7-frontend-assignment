import React from 'react';

const insightsData = [
  { title: "How to transition from a traditional to a digital bank", author: "David Grohl", date: "17/08/24" },
  { title: "How to transition from a traditional to a digital bank", author: "David Grohl", date: "17/08/24" },
  { title: "How to transition from a traditional to a digital bank", author: "David Grohl", date: "17/08/24" },
];

const Insights = () => {
  return (
    <section className="bg-primary text-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <h2 className="text-4xl font-semibold mb-8 leading-tight">Get yourself up-to-speed on all the things happening in fintech</h2>
          <button className="bg-transparent border border-white/20 px-6 py-2 rounded text-sm hover:bg-white/10 transition">
            INSIGHTS
          </button>
        </div>
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#121A2F] rounded-2xl p-10 flex justify-center items-center h-64 md:h-auto">
             <div className="grid grid-cols-2 gap-4">
                <div className="w-16 h-16 bg-accent rotate-45 rounded-sm"></div>
                <div className="w-16 h-16 bg-accent rotate-45 rounded-sm"></div>
                <div className="w-16 h-16 bg-accent rotate-45 rounded-sm"></div>
                <div className="w-16 h-16 bg-accent rotate-45 rounded-sm"></div>
             </div>
          </div>

          {/* Article Cards */}
          {insightsData.map((item, idx) => (
            <div key={idx} className="bg-[#121A2F] p-8 rounded-2xl flex flex-col justify-between">
              <div>
                <p className="text-gray-400 text-xs tracking-widest uppercase mb-3">GETTING STARTED</p>
                <h3 className="text-xl font-medium mb-4">{item.title}</h3>
                <p className="text-sm text-gray-500 mb-6">{item.author} &nbsp;&nbsp; {item.date}</p>
              </div>
              <button className="self-start border border-white/10 px-5 py-2 rounded text-xs hover:bg-white/5 transition">
                READ MORE
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;