import { useState, useCallback } from 'react';
import { MultiplayerMessage } from '@/types/multiplayer';

/**
 * Hook for managing room chat
 */
export const useRoomChat = (roomId: string) => {
  const [messages, setMessages] = useState<MultiplayerMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = useCallback(
    async (message: string, senderAddress: string, senderUsername: string) => {
      if (!message.trim()) return;

      const newMessage: MultiplayerMessage = {
        id: `msg-${Date.now()}`,
        roomId,
        sender: senderAddress,
        senderUsername,
        message: message.trim(),
        timestamp: new Date(),
        type: 'chat',
      };

      setMessages((prev) => [...prev, newMessage]);

      // Mock API call to send message
      // await sendMessageToRoom(roomId, newMessage);
    },
    [roomId]
  );

  const addSystemMessage = useCallback(
    (message: string) => {
      const systemMessage: MultiplayerMessage = {
        id: `sys-${Date.now()}`,
        roomId,
        sender: 'system',
        senderUsername: 'System',
        message,
        timestamp: new Date(),
        type: 'system',
      };

      setMessages((prev) => [...prev, systemMessage]);
    },
    [roomId]
  );

  const clearMessages = useCallback(() => {
    setMessages([]);
  }, []);

  return {
    messages,
    isLoading,
    sendMessage,
    addSystemMessage,
    clearMessages,
  };
};
