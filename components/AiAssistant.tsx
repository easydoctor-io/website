import React, { useState, useRef, useEffect } from 'react';
import { Send, X, Bot, Sparkles } from 'lucide-react';
import { ChatMessage } from '../types';
import { sendClinicalQueryStream } from '../services/geminiService';
import { useLocation } from 'react-router-dom';

const AiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Salve Dottore. Posso aiutarla a trovare lo strumento di validazione giusto per il suo paziente. Provi a chiedere: "Quale strumento usare per la valutazione post-ictus?"', timestamp: new Date() }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!query.trim()) return;

    const userMsg: ChatMessage = { role: 'user', text: query, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setQuery('');
    setIsLoading(true);

    try {
        // Prepare a placeholder for the model response
        const placeholderMsg: ChatMessage = { role: 'model', text: '', timestamp: new Date() };
        setMessages(prev => [...prev, placeholderMsg]);

        const stream = sendClinicalQueryStream(userMsg.text, location.pathname);
        
        let fullText = '';
        
        for await (const chunk of stream) {
            fullText += chunk;
            setMessages(prev => {
                const newArr = [...prev];
                newArr[newArr.length - 1] = { ...newArr[newArr.length - 1], text: fullText };
                return newArr;
            });
        }
    } catch (e) {
        console.error("Chat Error", e);
        setMessages(prev => [...prev, { role: 'model', text: "Errore di connessione.", timestamp: new Date() }]);
    } finally {
        setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-eh-petrol hover:bg-eh-green text-white hover:text-eh-petrol rounded-full p-4 shadow-lg flex items-center gap-2 transition-all transform hover:scale-105"
        >
          <Sparkles className="h-6 w-6" />
          <span className="font-medium pr-1 hidden sm:inline">AI Clinica</span>
        </button>
      )}

      {isOpen && (
        <div className="bg-white dark:bg-eh-darkSurface rounded-2xl shadow-2xl w-[90vw] sm:w-96 flex flex-col border border-gray-200 dark:border-gray-700 overflow-hidden transition-all h-[500px] animate-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="bg-eh-petrol p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <Bot className="h-5 w-5" />
              <h3 className="font-semibold">Assistente MediScale</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-eh-green/20 p-1 rounded">
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Chat Area */}
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50 dark:bg-eh-dark space-y-4 custom-scrollbar">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-lg p-3 text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-eh-petrol text-white rounded-tr-none' 
                    : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 rounded-tl-none shadow-sm'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && messages[messages.length - 1].text === '' && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3 rounded-tl-none shadow-sm flex items-center gap-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-75"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white dark:bg-eh-darkSurface border-t border-gray-200 dark:border-gray-700">
            <div className="relative">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Chiedi sugli strumenti clinici..."
                className="w-full pl-4 pr-12 py-3 bg-gray-100 dark:bg-gray-900 border-none rounded-xl focus:ring-2 focus:ring-eh-petrol focus:bg-white dark:focus:bg-gray-800 text-gray-900 dark:text-white transition-all text-sm"
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !query.trim()}
                className="absolute right-2 top-2 p-1.5 bg-eh-petrol text-white rounded-lg hover:bg-eh-green hover:text-eh-petrol disabled:opacity-50 transition"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AiAssistant;