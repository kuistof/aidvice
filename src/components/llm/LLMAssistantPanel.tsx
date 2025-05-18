import React, { useState, useEffect } from 'react';
import { X, Send, CornerDownLeft, Sparkles, Info } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

interface LLMAssistantPanelProps {
  isOpen: boolean;
  onClose: () => void;
  currentPhase?: string; // e.g., "Growth Phase"
  lastProgress?: string; // e.g., "Completed Sales Funnel Setup"
}

const suggestedPrompts = [
  "What should I focus on next?",
  "How can I improve my lead generation?",
  "Explain the Foundation phase in more detail.",
  "What are common pitfalls in the Growth phase?",
];

const LLMAssistantPanel: React.FC<LLMAssistantPanelProps> = ({ 
  isOpen,
  onClose,
  currentPhase = "Foundation Phase", 
  lastProgress = "Onboarding Completed"
}) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');

  // Simulate initial greeting from AI
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          id: 'greeting',
          text: "Hello! I'm your AI Business Advisor. How can I help you today?",
          sender: 'ai',
          timestamp: new Date(),
        }
      ]);
    }
  }, [isOpen, messages.length]);

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;

    const newUserMessage: Message = {
      id: new Date().toISOString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, newUserMessage]);
    setInputValue('');

    // Simulate AI Response (placeholder)
    setTimeout(() => {
      const aiResponse: Message = {
        id: new Date().toISOString() + '-ai',
        text: `I've received your message: "${inputValue}". I'm currently a demo and can't process this, but in a real scenario I would provide a helpful answer! `,
        sender: 'ai',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ease-in-out" onClick={onClose}>
      <div 
        className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-xl flex flex-col transform transition-transform duration-300 ease-in-out translate-x-0"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside panel
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-neutral-200">
          <div className="flex items-center">
            <Sparkles className="h-6 w-6 text-accent mr-2" />
            <h2 className="text-lg font-semibold text-neutral-800">AI Assistant</h2>
          </div>
          <button onClick={onClose} className="p-1 rounded-md text-neutral-500 hover:bg-neutral-100 hover:text-neutral-700">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Context Info */}
        <div className="p-3 bg-sky-50 border-b border-sky-200">
          <div className="flex items-center text-xs text-sky-700">
            <Info size={14} className="mr-1.5 shrink-0" />
            <span>Current Context: <strong>{currentPhase}</strong>. Last Update: <em>{lastProgress}</em>.</span>
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-grow p-4 space-y-4 overflow-y-auto">
          {messages.map(msg => (
            <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div 
                className={`max-w-[80%] p-3 rounded-2xl text-sm 
                            ${msg.sender === 'user' 
                              ? 'bg-accent text-white rounded-br-lg' 
                              : 'bg-neutral-100 text-neutral-800 rounded-bl-lg'}`}
              >
                {msg.text}
                 <div className={`text-xs mt-1 ${msg.sender === 'user' ? 'text-sky-100 opacity-70' : 'text-neutral-500'}`}>
                  {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Suggested Prompts (optional) */}
        {messages.length <= 1 && (
             <div className="px-4 pb-2 border-t border-neutral-200 pt-3">
                <p className="text-xs text-neutral-500 mb-2">Try these:</p>
                <div className="flex flex-wrap gap-2">
                    {suggestedPrompts.map(prompt => (
                        <button 
                            key={prompt}
                            onClick={() => setInputValue(prompt)}
                            className="px-2.5 py-1.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-lg text-xs transition-colors"
                        >
                            {prompt}
                        </button>
                    ))}
                </div>
            </div>
        )}

        {/* Input Area */}
        <div className="p-4 border-t border-neutral-200 bg-white">
          <div className="flex items-center space-x-2">
            <input 
              type="text" 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Ask anything... (e.g., What should I focus on next?)"
              className="flex-grow p-2.5 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent"
            />
            <button 
              onClick={handleSendMessage}
              disabled={!inputValue.trim()}
              className="p-2.5 bg-accent text-white rounded-lg disabled:bg-neutral-300 hover:bg-accent-dark focus:outline-none focus:ring-2 focus:ring-accent-light focus:ring-opacity-50 transform active:scale-95 transition-all duration-150 ease-in-out"
            >
              <Send className="h-5 w-5" />
            </button>
          </div>
           <p className="text-xs text-neutral-400 mt-2 text-center">
            AI responses are for demo purposes. Press <CornerDownLeft size={12} className="inline-block"/> to send.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LLMAssistantPanel; 