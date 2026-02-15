'use client';

import { useState } from 'react';
import { ThumbsUp, ThumbsDown, Download, TrendingUp, Clock, Star } from 'lucide-react';

interface CommunityCommand {
  id: string;
  hindiPhrase: string;
  englishTranslation: string;
  deviceAction: string;
  votesUp: number;
  votesDown: number;
  adoptionCount: number;
  status: 'pending' | 'approved' | 'rejected';
  proposer: string;
  submissionDate: string;
}

export default function CommunityCommands() {
  const [filter, setFilter] = useState<'trending' | 'new' | 'approved'>('trending');
  const [commands] = useState<CommunityCommand[]>([
    {
      id: '1',
      hindiPhrase: 'सभी लाइटें बंद करो',
      englishTranslation: 'Turn off all lights',
      deviceAction: 'turn_off_all_lights',
      votesUp: 156,
      votesDown: 12,
      adoptionCount: 89,
      status: 'approved',
      proposer: 'rajesh.base',
      submissionDate: '2024-01-10',
    },
    {
      id: '2',
      hindiPhrase: 'मूवी मोड चालू करो',
      englishTranslation: 'Enable movie mode',
      deviceAction: 'enable_movie_mode',
      votesUp: 234,
      votesDown: 8,
      adoptionCount: 145,
      status: 'approved',
      proposer: 'priya.base',
      submissionDate: '2024-01-12',
    },
    {
      id: '3',
      hindiPhrase: 'सोने का समय',
      englishTranslation: 'Bedtime routine',
      deviceAction: 'bedtime_routine',
      votesUp: 45,
      votesDown: 3,
      adoptionCount: 12,
      status: 'pending',
      proposer: 'amit.base',
      submissionDate: '2024-01-15',
    },
  ]);

  const handleVote = (commandId: string, voteType: 'up' | 'down') => {
    console.log('Voting:', commandId, voteType);
  };

  const handleAdopt = (commandId: string) => {
    console.log('Adopting command:', commandId);
  };

  const filteredCommands = commands.filter(cmd => {
    if (filter === 'approved') return cmd.status === 'approved';
    if (filter === 'new') return cmd.status === 'pending';
    return true;
  }).sort((a, b) => {
    if (filter === 'trending') return b.adoptionCount - a.adoptionCount;
    return new Date(b.submissionDate).getTime() - new Date(a.submissionDate).getTime();
  });

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-fg mb-2">Community Commands</h2>
        <p className="text-sm text-text-secondary">
          Discover and vote on Hindi voice commands created by the community
        </p>
      </div>

      {/* Filters */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        <button
          onClick={() => setFilter('trending')}
          className={`px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
            filter === 'trending'
              ? 'bg-primary text-white'
              : 'bg-surface text-text-secondary hover:text-fg'
          }`}
        >
          <TrendingUp className="w-4 h-4 inline mr-2" />
          Trending
        </button>
        <button
          onClick={() => setFilter('new')}
          className={`px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
            filter === 'new'
              ? 'bg-primary text-white'
              : 'bg-surface text-text-secondary hover:text-fg'
          }`}
        >
          <Clock className="w-4 h-4 inline mr-2" />
          New
        </button>
        <button
          onClick={() => setFilter('approved')}
          className={`px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
            filter === 'approved'
              ? 'bg-primary text-white'
              : 'bg-surface text-text-secondary hover:text-fg'
          }`}
        >
          <Star className="w-4 h-4 inline mr-2" />
          Approved
        </button>
      </div>

      {/* Commands List */}
      <div className="space-y-4">
        {filteredCommands.map((command) => (
          <div key={command.id} className="card">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-fg">
                    {command.hindiPhrase}
                  </h3>
                  {command.status === 'approved' && (
                    <span className="px-2 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-medium">
                      Approved
                    </span>
                  )}
                  {command.status === 'pending' && (
                    <span className="px-2 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-xs font-medium">
                      Pending
                    </span>
                  )}
                </div>
                <p className="text-sm text-text-secondary mb-3">
                  {command.englishTranslation}
                </p>
                <div className="flex items-center gap-4 text-xs text-text-secondary">
                  <span>by {command.proposer}</span>
                  <span>•</span>
                  <span>{command.adoptionCount} adoptions</span>
                  <span>•</span>
                  <span>{command.submissionDate}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2 bg-surface rounded-lg p-2">
                <button
                  onClick={() => handleVote(command.id, 'up')}
                  className="flex items-center gap-1 px-3 py-1 rounded hover:bg-white/5 transition-colors"
                >
                  <ThumbsUp className="w-4 h-4 text-green-400" />
                  <span className="text-sm font-medium text-fg">{command.votesUp}</span>
                </button>
                <div className="w-px h-6 bg-white/10"></div>
                <button
                  onClick={() => handleVote(command.id, 'down')}
                  className="flex items-center gap-1 px-3 py-1 rounded hover:bg-white/5 transition-colors"
                >
                  <ThumbsDown className="w-4 h-4 text-red-400" />
                  <span className="text-sm font-medium text-fg">{command.votesDown}</span>
                </button>
              </div>
              <button
                onClick={() => handleAdopt(command.id)}
                className="btn-primary flex-1 flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                Adopt Command
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="card bg-primary/5 border-primary/20 text-center">
        <h4 className="text-lg font-semibold text-fg mb-2">
          Have an idea for a new command?
        </h4>
        <p className="text-sm text-text-secondary mb-4">
          Propose your Hindi voice command and earn badges when it gets approved!
        </p>
        <button className="btn-primary">
          Propose New Command
        </button>
      </div>
    </div>
  );
}
