import React from 'react';
import { NavTab } from '../types';
import { Sparkles, Briefcase, Star, Users, MapPin } from 'lucide-react';

interface MobileNavProps {
  currentTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({
  currentTab,
  onSelectTab,
}) => {
  const tabs = [
    { key: 'home' as NavTab, label: 'Əsas', icon: Sparkles },
    { key: 'services' as NavTab, label: 'Xidmətlər', icon: Briefcase },
    { key: 'results' as NavTab, label: 'Gülüşlər', icon: Star },
    { key: 'team' as NavTab, label: 'Həkimlər', icon: Users },
    { key: 'contact' as NavTab, label: 'Əlaqə', icon: MapPin },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0E0E10]/95 backdrop-blur-lg border-t border-[#C9A96E]/20 px-2 py-2">
      <div className="grid grid-cols-5 items-center">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = currentTab === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => {
                onSelectTab(tab.key);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`flex flex-col items-center justify-center py-1 transition-colors ${
                isActive ? 'text-[#C9A96E]' : 'text-[#8A857D] hover:text-[#E5E1E4]'
              }`}
            >
              <Icon className="w-5 h-5 mb-0.5" />
              <span className="text-[10px] tracking-wider font-medium">
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
