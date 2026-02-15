'use client';

import { useState } from 'react';
import { Plus, Edit2, Share2, Trash2, Lock, Globe } from 'lucide-react';

interface PersonalCommand {
  id: string;
  hindiPhrase: string;
  englishTranslation: string;
  deviceAction: string;
  isPublic: boolean;
  shareCount: number;
  createdAt: string;
}

export default function MyCommands() {
  const [commands, setCommands] = useState<PersonalCommand[]>([
    {
      id: '1',
      hindiPhrase: 'सुबह का अलार्म लगाओ',
      englishTranslation: 'Set morning alarm',
      deviceAction: 'set_alarm',
      isPublic: true,
      shareCount: 24,
      createdAt: '2024-01-15',
    },
    {
      id: '2',
      hindiPhrase: 'कमरे का तापमान 22 डिग्री करो',
      englishTranslation: 'Set room temperature to 22 degrees',
      deviceAction: 'set_temperature',
      isPublic: false,
      shareCount: 0,
      createdAt: '2024-01-14',
    },
  ]);

  const [showCreateModal, setShowCreateModal] = useState(false);

  const handleShare = (commandId: string) => {
    // Implement Farcaster Frame sharing
    console.log('Sharing command:', commandId);
  };

  const handleDelete = (commandId: string) => {
    setCommands(commands.filter(cmd => cmd.id !== commandId));
  };

  const handleToggleVisibility = (commandId: string) => {
    setCommands(commands.map(cmd => 
      cmd.id === commandId ? { ...cmd, isPublic: !cmd.isPublic } : cmd
    ));
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-fg">My Commands</h2>
          <p className="text-sm text-text-secondary mt-1">
            {commands.length} custom commands created
          </p>
        </div>
        <button
          onClick={() => setShowCreateModal(true)}
          className="btn-primary flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Create
        </button>
      </div>

      {/* Commands List */}
      <div className="space-y-4">
        {commands.map((command) => (
          <div key={command.id} className="card">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-fg">
                    {command.hindiPhrase}
                  </h3>
                  {command.isPublic ? (
                    <Globe className="w-4 h-4 text-primary" />
                  ) : (
                    <Lock className="w-4 h-4 text-text-secondary" />
                  )}
                </div>
                <p className="text-sm text-text-secondary mb-2">
                  {command.englishTranslation}
                </p>
                <div className="flex items-center gap-4 text-xs text-text-secondary">
                  <span>Created {command.createdAt}</span>
                  {command.isPublic && (
                    <span className="flex items-center gap-1">
                      <Share2 className="w-3 h-3" />
                      {command.shareCount} shares
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => handleToggleVisibility(command.id)}
                className="btn-secondary flex-1 flex items-center justify-center gap-2 text-sm"
              >
                {command.isPublic ? (
                  <>
                    <Lock className="w-4 h-4" />
                    Make Private
                  </>
                ) : (
                  <>
                    <Globe className="w-4 h-4" />
                    Make Public
                  </>
                )}
              </button>
              <button
                onClick={() => handleShare(command.id)}
                className="btn-secondary flex-1 flex items-center justify-center gap-2 text-sm"
              >
                <Share2 className="w-4 h-4" />
                Share
              </button>
              <button className="p-3 rounded-lg hover:bg-white/5 transition-colors">
                <Edit2 className="w-4 h-4 text-fg" />
              </button>
              <button
                onClick={() => handleDelete(command.id)}
                className="p-3 rounded-lg hover:bg-red-500/10 transition-colors"
              >
                <Trash2 className="w-4 h-4 text-red-400" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {commands.length === 0 && (
        <div className="card text-center py-12">
          <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
            <Plus className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-xl font-semibold text-fg mb-2">
            No commands yet
          </h3>
          <p className="text-text-secondary mb-6">
            Create your first custom Hindi voice command
          </p>
          <button
            onClick={() => setShowCreateModal(true)}
            className="btn-primary"
          >
            Create Command
          </button>
        </div>
      )}

      {/* Create Modal Placeholder */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="card max-w-md w-full">
            <h3 className="text-xl font-bold text-fg mb-4">Create New Command</h3>
            <p className="text-text-secondary mb-4">
              Command creation form would go here
            </p>
            <button
              onClick={() => setShowCreateModal(false)}
              className="btn-primary w-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
