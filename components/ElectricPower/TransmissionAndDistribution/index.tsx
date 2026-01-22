'use client';
import React, { useState, useEffect } from 'react';
import DesignAndEngineering from './DesignAndEngineering';
import TowerTesting from './TowerTesting';
import ElectricalTesting from './ElectricalTesting';
import TypeTesting from './TypeTesting';

export default function Index() {
  const [activeMainTab, setActiveMainTab] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        const tabIndex = parseInt(hash);
        if (!isNaN(tabIndex) && tabIndex >= 0 && tabIndex <= 3) {
          setActiveMainTab(tabIndex);
        }
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const mainTabs = [
    { id: 0, title: 'Design & Engineering', description: 'Innovative structural solutions' },
    { id: 1, title: 'Tower Testing', description: 'Quality assurance & validation' },
    { id: 2, title: 'Electrical Testing', description: 'Performance & safety checks' },
    { id: 3, title: 'Type Testing', description: 'Comprehensive material testing' }
  ];

  const handleMainTabClick = (tabId) => {
    setActiveMainTab(tabId);
    setMobileMenuOpen(false);
    window.history.pushState(null, '', `#${tabId}`);
  };

  const renderContent = () => {
    switch(activeMainTab) {
      case 0:
        return <DesignAndEngineering />;
      case 1:
        return <TowerTesting />;
      case 2:
        return <ElectricalTesting />;
      case 3:
        return <TypeTesting />;
      default:
        return <DesignAndEngineering />;
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-2 md:px-4 py-4">
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out;
        }
      `}</style>

      {/* Mobile Menu Button */}
      <div className="lg:hidden mb-4">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex items-center gap-2 px-4 py-2 bg-[#101631] text-white rounded-lg w-full justify-between"
        >
          <span>{mainTabs[activeMainTab].title}</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Main Tabs */}
      <div className="mb-6">
        <div className={`grid grid-cols-1 lg:grid-cols-4 gap-3 ${mobileMenuOpen ? 'block' : 'hidden lg:grid'}`}>
          {mainTabs.map((tab) => {
            const isActive = activeMainTab === tab.id;
            const hasSubTabs = tab.id === 0 || tab.id === 1;
            
            return (
              <button
                key={tab.id}
                onClick={() => handleMainTabClick(tab.id)}
                className={`p-4 rounded-xl transition-all duration-300 w-full text-left border relative ${
                  isActive 
                    ? 'bg-[#101631] text-white border-[#101631]' 
                    : 'bg-white text-gray-700 border-gray-200 hover:border-[#101631]'
                }`}
              >
                <div className="flex flex-col">
                  <h3 className="font-semibold text-base">{tab.title}</h3>
                  <p className={`text-xs mt-2 ${isActive ? 'text-gray-300' : 'text-gray-500'}`}>
                    {tab.description}
                  </p>
                </div>
                {isActive && hasSubTabs && (
                  <div className="hidden lg:block absolute -bottom-1.5 left-0 right-0 h-0.5 bg-[#CD091B]"></div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Content Area */}
      {renderContent()}
    </div>
  );
}