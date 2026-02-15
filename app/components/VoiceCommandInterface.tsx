'use client';

import { useState } from 'react';
import { Mic, MicOff, Lightbulb, Volume2, Thermometer, Lock } from 'lucide-react';

interface Command {
  id: string;
  hindiPhrase: string;
  englishTranslation: string;
  deviceAction: string;
  icon: React.ReactNode;
}

const quickCommands: Command[] = [
  {
    id: '1',
    hindiPhrase: 'बत्ती जला दो',
    englishTranslation: 'Turn on the light',
    deviceAction: 'turn_on_light',
    icon: <Lightbulb className="w-5 h-5" />,
  },
  {
    id: '2',
    hindiPhrase: 'आवाज़ बढ़ाओ',
    englishTranslation: 'Increase volume',
    deviceAction: 'increase_volume',
    icon: <Volume2 className="w-5 h-5" />,
  },
  {
    id: '3',
    hindiPhrase: 'तापमान कम करो',
    englishTranslation: 'Decrease temperature',
    deviceAction: 'decrease_temp',
    icon: <Thermometer className="w-5 h-5" />,
  },
  {
    id: '4',
    hindiPhrase: 'दरवाज़ा बंद करो',
    englishTranslation: 'Lock the door',
    deviceAction: 'lock_door',
    icon: <Lock className="w-5 h-5" />,
  },
];

export default function VoiceCommandInterface() {
  const [isListening, setIsListening] = useState(false);
  const [currentCommand, setCurrentCommand] = useState('');
  const [lastExecuted, setLastExecuted] = useState<Command | null>(null);

  const handleVoiceToggle = () => {
    setIsListening(!isListening);
    if (!isListening) {
      // Simulate voice recognition
      setTimeout(() => {
        setCurrentCommand('बत्ती जला दो');
        setTimeout(() => {
          setIsListening(false);
          setLastExecuted(quickCommands[0]);
          setCurrentCommand('');
        }, 1500);
      }, 1000);
    }
  };

  const handleQuickCommand = (command: Command) => {
    setLastExecuted(command);
    // Simulate command execution
    setTimeout(() => {
      // Command executed
    }, 500);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Voice Input Section */}
      <div className="card text-center py-12">
        <div className="mb-6">
          <button
            onClick={handleVoiceToggle}
            className={`w-32 h-32 rounded-full mx-auto flex items-center justify-center transition-all duration-300 ${
              isListening
                ? 'bg-primary voice-button-active scale-110'
                : 'bg-primary/20 hover:bg-primary/30'
            }`}
          >
            {isListening ? (
              <Mic className="w-16 h-16 text-white" />
            ) : (
              <MicOff className="w-16 h-16 text-primary" />
            )}
          </button>
        </div>

        <h2 className="text-2xl font-bold text-fg mb-2">
          {isListening ? 'सुन रहा हूँ...' : 'बोलने के लिए टैप करें'}
        </h2>
        <p className="text-text-secondary mb-6">
          {isListening ? 'Listening...' : 'Tap to speak'}
        </p>

        {currentCommand && (
          <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 max-w-md mx-auto">
            <p className="text-lg font-semibold text-primary">{currentCommand}</p>
          </div>
        )}

        {lastExecuted && !isListening && !currentCommand && (
          <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 max-w-md mx-auto">
            <p className="text-sm text-text-secondary mb-1">Last executed:</p>
            <p className="text-lg font-semibold text-green-400">{lastExecuted.hindiPhrase}</p>
            <p className="text-sm text-text-secondary">{lastExecuted.englishTranslation}</p>
          </div>
        )}
      </div>

      {/* Quick Commands */}
      <div>
        <h3 className="text-xl font-bold text-fg mb-4">Quick Commands</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {quickCommands.map((command) => (
            <button
              key={command.id}
              onClick={() => handleQuickCommand(command)}
              className="card text-left hover:scale-105 transition-transform"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  {command.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-lg font-semibold text-fg mb-1 truncate">
                    {command.hindiPhrase}
                  </p>
                  <p className="text-sm text-text-secondary">
                    {command.englishTranslation}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Tips */}
      <div className="card bg-primary/5 border-primary/20">
        <h4 className="text-lg font-semibold text-fg mb-3">💡 Pro Tips</h4>
        <ul className="space-y-2 text-sm text-text-secondary">
          <li>• Speak clearly in Hindi for best results</li>
          <li>• Create custom commands in the Commands tab</li>
          <li>• Share your commands with the community to earn badges</li>
          <li>• Connect your wallet to claim onchain rewards</li>
        </ul>
      </div>
    </div>
  );
}
