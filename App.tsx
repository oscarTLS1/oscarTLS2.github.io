import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import PriceSection from './components/PriceSection';
import ExpertConnectSection from './components/ExpertConnectSection';
import AiAdvisorSection from './components/AiAdvisorSection';
import Footer from './components/Footer';
import { APP_NAME, NAV_ITEMS } from './constants';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-lightBg text-darkText">
      <Navbar appName={APP_NAME} navItems={NAV_ITEMS} />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <PriceSection />
        <ExpertConnectSection />
        <AiAdvisorSection />
      </main>
      <Footer appName={APP_NAME} />
    </div>
  );
};

export default App;
