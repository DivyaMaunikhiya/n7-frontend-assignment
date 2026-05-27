import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import AppShowcase from './components/sections/AppShowcase';
import ShowcaseSection from './components/sections/ShowcaseSection';
import EfficiencySection from './components/sections/EfficiencySection';
import Insights from './components/sections/Insights';
import Footer from './components/layout/Footer';
import TickerSection from './components/sections/TicketSection';
import MobileShowcase from './components/sections/MobileShowcase';
import InsightsSection from './components/sections/InsightsSection';
import CaseStudies from './components/sections/CaseStudies';

function App() {
  return (
    <div className="bg-primary min-h-screen font-sans selection:bg-accent selection:text-white">
      <Navbar />
      <Hero />
      <Features />
      <ShowcaseSection/>
<EfficiencySection/>
<TickerSection/>
<MobileShowcase/>
<InsightsSection/>
<CaseStudies/>
      <Footer />

    </div>
  );
}

export default App;