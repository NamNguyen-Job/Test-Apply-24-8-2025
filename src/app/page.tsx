'use client';

import { useState } from 'react';

// Glassmorphism Background Component
const BackgroundPattern = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900" />

      {/* Floating Glass Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-pink-300/20 rounded-full blur-2xl animate-pulse delay-1000" />
      <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-cyan-300/15 rounded-full blur-2xl animate-pulse delay-2000" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          opacity: 0.4,
        }}
      />
    </div>
  );
};

// Purchase Tokens Modal
const PurchaseTokensModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 max-w-md w-full shadow-2xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">Purchase Tokens</h2>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="space-y-4">
          <div className="bg-white/5 rounded-lg p-4 border border-white/10">
            <h3 className="text-lg font-semibold text-white mb-2">
              Basic Package
            </h3>
            <p className="text-white/70 text-sm mb-3">
              100 tokens for basic conversations
            </p>
            <div className="text-2xl font-bold text-white">$9.99</div>
          </div>

          <div className="bg-white/5 rounded-lg p-4 border border-white/10">
            <h3 className="text-lg font-semibold text-white mb-2">
              Premium Package
            </h3>
            <p className="text-white/70 text-sm mb-3">
              500 tokens with priority support
            </p>
            <div className="text-2xl font-bold text-white">$39.99</div>
          </div>

          <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105">
            Purchase Now
          </button>
        </div>
      </div>
    </div>
  );
};

// Chat Panel Component
const ChatPanel = () => {
  const [message, setMessage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Mock messages for demonstration
  const messages = [
    {
      id: 1,
      text: 'Hello! How can I help you today?',
      sender: 'bot',
      time: '10:30 AM',
    },
    {
      id: 2,
      text: "I'd like to know more about your services",
      sender: 'user',
      time: '10:31 AM',
    },
    {
      id: 3,
      text: "I'd be happy to help! We offer AI-powered chat services with various token packages.",
      sender: 'bot',
      time: '10:32 AM',
    },
    {
      id: 4,
      text: 'That sounds great! How do the tokens work?',
      sender: 'user',
      time: '10:33 AM',
    },
    {
      id: 5,
      text: 'Each message consumes tokens based on complexity. You can purchase token packages to continue chatting.',
      sender: 'bot',
      time: '10:34 AM',
    },
  ];

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      // In a real app, this would send the message
      console.log('Sending message:', message);
      setMessage('');
    }
  };

  return (
    <div className="bg-red-500/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl overflow-hidden h-[600px] flex flex-col">
      {/* Chat Header */}
      <div className="bg-white/5 border-b border-white/10 p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-white font-semibold">AI Assistant</h3>
            <p className="text-white/60 text-sm">Online</p>
          </div>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 text-sm"
        >
          Purchase Tokens
        </button>
      </div>

      {/* Message List */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${
              msg.sender === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-2xl ${
                msg.sender === 'user'
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                  : 'bg-white/10 text-white border border-white/20'
              }`}
            >
              <p className="text-sm">{msg.text}</p>
              <p
                className={`text-xs mt-1 ${
                  msg.sender === 'user' ? 'text-white/70' : 'text-white/50'
                }`}
              >
                {msg.time}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Message Input */}
      <div className="border-t border-white/10 p-4">
        <form onSubmit={handleSendMessage} className="flex space-x-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white p-2 rounded-lg transition-all duration-200 transform hover:scale-105"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
          </button>
        </form>
      </div>

      <PurchaseTokensModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

// Main Home Component
export default function Home() {
  return (
    <main className="min-h-screen relative">
      <BackgroundPattern />

      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            AI Chat Assistant
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto">
            Experience the future of conversation with our glassmorphism-styled
            chat interface
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <ChatPanel />
        </div>
      </div>
    </main>
  );
}
