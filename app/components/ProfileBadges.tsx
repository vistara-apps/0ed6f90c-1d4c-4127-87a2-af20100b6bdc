'use client';

import { useState } from 'react';
import { Award, Star, TrendingUp, Users, Zap, Crown } from 'lucide-react';

interface Badge {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  earned: boolean;
  earnedDate?: string;
  progress?: number;
  maxProgress?: number;
  icon: React.ReactNode;
}

export default function ProfileBadges() {
  const [badges] = useState<Badge[]>([
    {
      id: '1',
      name: 'Smart Home Master',
      description: 'Created 10+ custom commands',
      imageUrl: '/badges/smart-home-master.png',
      earned: true,
      earnedDate: '2024-01-10',
      icon: <Crown className="w-6 h-6" />,
    },
    {
      id: '2',
      name: 'Hindi AI Pioneer',
      description: 'First 100 users on the platform',
      imageUrl: '/badges/pioneer.png',
      earned: true,
      earnedDate: '2024-01-05',
      icon: <Star className="w-6 h-6" />,
    },
    {
      id: '3',
      name: 'Community Leader',
      description: 'Get 50+ votes on your commands',
      imageUrl: '/badges/community-leader.png',
      earned: false,
      progress: 23,
      maxProgress: 50,
      icon: <Users className="w-6 h-6" />,
    },
    {
      id: '4',
      name: 'Viral Creator',
      description: 'Have a command adopted 100+ times',
      imageUrl: '/badges/viral-creator.png',
      earned: false,
      progress: 45,
      maxProgress: 100,
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      id: '5',
      name: 'Quick Adopter',
      description: 'Adopt 20 community commands',
      imageUrl: '/badges/quick-adopter.png',
      earned: false,
      progress: 12,
      maxProgress: 20,
      icon: <Zap className="w-6 h-6" />,
    },
  ]);

  const earnedBadges = badges.filter(b => b.earned);
  const inProgressBadges = badges.filter(b => !b.earned);

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Profile Header */}
      <div className="card text-center">
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-4 flex items-center justify-center">
          <Award className="w-12 h-12 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-fg mb-2">Your Profile</h2>
        <p className="text-text-secondary mb-4">
          Connect wallet to display your Basename and onchain badges
        </p>
        <button className="btn-primary">
          Connect Wallet
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="card text-center">
          <div className="text-3xl font-bold text-primary mb-1">
            {earnedBadges.length}
          </div>
          <div className="text-sm text-text-secondary">Badges Earned</div>
        </div>
        <div className="card text-center">
          <div className="text-3xl font-bold text-primary mb-1">24</div>
          <div className="text-sm text-text-secondary">Commands</div>
        </div>
        <div className="card text-center">
          <div className="text-3xl font-bold text-primary mb-1">156</div>
          <div className="text-sm text-text-secondary">Shares</div>
        </div>
      </div>

      {/* Earned Badges */}
      <div>
        <h3 className="text-xl font-bold text-fg mb-4">
          Earned Badges ({earnedBadges.length})
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {earnedBadges.map((badge) => (
            <div key={badge.id} className="card">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                  {badge.icon}
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-fg mb-1">
                    {badge.name}
                  </h4>
                  <p className="text-sm text-text-secondary mb-2">
                    {badge.description}
                  </p>
                  <p className="text-xs text-primary">
                    Earned {badge.earnedDate}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* In Progress Badges */}
      <div>
        <h3 className="text-xl font-bold text-fg mb-4">
          In Progress ({inProgressBadges.length})
        </h3>
        <div className="space-y-4">
          {inProgressBadges.map((badge) => (
            <div key={badge.id} className="card">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 rounded-lg bg-surface border border-white/10 flex items-center justify-center flex-shrink-0">
                  {badge.icon}
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-fg mb-1">
                    {badge.name}
                  </h4>
                  <p className="text-sm text-text-secondary">
                    {badge.description}
                  </p>
                </div>
              </div>
              {badge.progress !== undefined && badge.maxProgress !== undefined && (
                <div>
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-text-secondary">Progress</span>
                    <span className="text-fg font-medium">
                      {badge.progress} / {badge.maxProgress}
                    </span>
                  </div>
                  <div className="w-full h-2 bg-surface rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-300"
                      style={{
                        width: `${(badge.progress / badge.maxProgress) * 100}%`,
                      }}
                    ></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Leaderboard Teaser */}
      <div className="card bg-primary/5 border-primary/20 text-center">
        <h4 className="text-lg font-semibold text-fg mb-2">
          🏆 Join the Leaderboard
        </h4>
        <p className="text-sm text-text-secondary mb-4">
          Compete with other creators and earn exclusive rewards
        </p>
        <button className="btn-secondary">
          View Leaderboard
        </button>
      </div>
    </div>
  );
}
