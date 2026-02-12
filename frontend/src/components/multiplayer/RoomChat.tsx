import React, { useState } from 'react';
import { MultiplayerMessage } from '@/types/multiplayer';

interface RoomChatProps {
  messages: MultiplayerMessage[];
  onSendMessage: (message: string) => void;
}

/**
 * Chat component for game rooms
 */
export const RoomChat: React.FC<RoomChatProps> = ({ messages, onSendMessage }) => {
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      onSendMessage(input);
      setInput('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow h-96 flex flex-col">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">Chat</h3>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.length === 0 ? (
          <p className="text-center text-gray-500 dark:text-gray-400 text-sm">
            No messages yet. Start the conversation!
          </p>
        ) : (
          messages.map((msg) => (
            <div key={msg.id}>
              {msg.type === 'system' ? (
                <div className="text-center">
                  <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-sm rounded-full">
                    {msg.message}
                  </span>
                </div>
              ) : (
                <div className="flex items-start gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                    {msg.senderUsername[0].toUpperCase()}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="font-semibold text-gray-900 dark:text-white text-sm">
                        {msg.senderUsername}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {new Date(msg.timestamp).toLocaleTimeString()}
                      </span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      {msg.message}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))
        )}
      </div>

      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type a message..."
            className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg
                     focus:ring-2 focus:ring-purple-500 focus:border-transparent
                     bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          />
          <button
            onClick={handleSend}
            className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold 
                     rounded-lg transition-colors"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};
