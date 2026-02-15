'use client';

import { useEffect, useState } from 'react';
import { sdk } from '@farcaster/miniapp-sdk';
import { Mic, Home, Users, Trophy, Settings2 } from 'lucide-react';
import VoiceCommandInterface from './components/VoiceCommandInterface';
import MyCommands from './components/MyCommands';
import CommunityCommands from './components/CommunityCommands';
import ProfileBadges from './components/ProfileBadges';

type TabType = 'home' | 'commands' | 'community' | 'profile';

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // CRITICAL: Call sdk.actions.ready() to prevent infinite loading
    sdk.actions.ready();
    setIsReady(true);
  }, []);

  if (!isReady) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-fg">Loading Hindi Voice AI...</p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-bg pb-20">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-surface border-b border-white/10 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <Mic className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-fg">Hindi Voice AI</h1>
                <p className="text-xs text-text-secondary">Control with your voice</p>
              </div>
            </div>
            <button className="p-2 rounded-lg hover:bg-white/5 transition-colors">
              <Settings2 className="w-5 h-5 text-fg" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        {activeTab === 'home' && <VoiceCommandInterface />}
        {activeTab === 'commands' && <MyCommands />}
        {activeTab === 'community' && <CommunityCommands />}
        {activeTab === 'profile' && <ProfileBadges />}
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-surface border-t border-white/10 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-around py-3">
            <button
              onClick={() => setActiveTab('home')}
              className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-all ${
                activeTab === 'home' 
                  ? 'text-primary bg-primary/10' 
                  : 'text-text-secondary hover:text-fg'
              }`}
            >
              <Home className="w-6 h-6" />
              <span className="text-xs font-medium">Home</span>
            </button>
            
            <button
              onClick={() => setActiveTab('commands')}
              className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-all ${
                activeTab === 'commands' 
                  ? 'text-primary bg-primary/10' 
                  : 'text-text-secondary hover:text-fg'
              }`}
            >
              <Mic className="w-6 h-6" />
              <span className="text-xs font-medium">Commands</span>
            </button>
            
            <button
              onClick={() => setActiveTab('community')}
              className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-all ${
                activeTab === 'community' 
                  ? 'text-primary bg-primary/10' 
                  : 'text-text-secondary hover:text-fg'
              }`}
            >
              <Users className="w-6 h-6" />
              <span className="text-xs font-medium">Community</span>
            </button>
            
            <button
              onClick={() => setActiveTab('profile')}
              className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-all ${
                activeTab === 'profile' 
                  ? 'text-primary bg-primary/10' 
                  : 'text-text-secondary hover:text-fg'
              }`}
            >
              <Trophy className="w-6 h-6" />
              <span className="text-xs font-medium">Profile</span>
            </button>
          </div>
        </div>
      </nav>
    </main>
  );
}
