import React, { useState } from 'react';
import { Send, CheckCircle, Loader2 } from 'lucide-react';
import { toast } from 'react-hot-toast';

const ContactForm: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
    privacy: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.privacy) {
        toast.error("È necessario accettare l'informativa sulla privacy.");
        return;
    }
    
    setIsLoading(true);
    
    // Simulo invio
    setTimeout(() => {
        setIsLoading(false);
        setIsSent(true);
        toast.success("Messaggio inviato con successo!");
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isSent) {
    return (
        <div className="bg-eh-green/10 rounded-2xl p-8 text-center border border-eh-green">
            <div className="w-16 h-16 bg-eh-green text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold text-eh-petrol mb-2">Grazie per averci contattato!</h3>
            <p className="text-gray-600">Abbiamo ricevuto la tua richiesta. Un nostro consulente ti risponderà entro 24 ore lavorative.</p>
            <button onClick={() => setIsSent(false)} className="mt-6 text-sm font-bold text-eh-petrol underline">Invia un altro messaggio</button>
        </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100" id="contact-form">
      <h3 className="text-2xl font-bold text-eh-black mb-6">Richiedi informazioni</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Nome e Cognome *</label>
                <input 
                    required
                    name="name"
                    type="text" 
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-eh-petrol focus:bg-white outline-none transition-all"
                    placeholder="Mario Rossi"
                />
            </div>
            <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Struttura / Azienda *</label>
                <input 
                    required
                    name="company"
                    type="text" 
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-eh-petrol focus:bg-white outline-none transition-all"
                    placeholder="Ospedale / Clinica / Ente"
                />
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Email Aziendale *</label>
                <input 
                    required
                    name="email"
                    type="email" 
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-eh-petrol focus:bg-white outline-none transition-all"
                    placeholder="mario.rossi@ospedale.it"
                />
            </div>
            <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Telefono</label>
                <input 
                    name="phone"
                    type="tel" 
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-eh-petrol focus:bg-white outline-none transition-all"
                    placeholder="+39 333 ..."
                />
            </div>
        </div>

        <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Come possiamo aiutarti? *</label>
            <textarea 
                required
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-eh-petrol focus:bg-white outline-none transition-all resize-none"
                placeholder="Descrivi brevemente le tue esigenze (es. Demo Easy Risk, Consulenza GDPR...)"
            ></textarea>
        </div>

        <div className="flex items-start gap-3 pt-2">
            <input 
                required
                name="privacy"
                type="checkbox" 
                id="privacy"
                checked={formData.privacy}
                onChange={(e) => setFormData({...formData, privacy: e.target.checked})}
                className="mt-1 h-4 w-4 text-eh-petrol focus:ring-eh-petrol border-gray-300 rounded"
            />
            <label htmlFor="privacy" className="text-xs text-gray-500">
                Ho letto e accetto la <a href="/privacy" target="_blank" className="text-eh-petrol underline">Privacy Policy</a> e acconsento al trattamento dei miei dati personali per essere ricontattato.
            </label>
        </div>

        <button 
            type="submit" 
            disabled={isLoading}
            className="w-full bg-eh-petrol text-white font-bold py-4 rounded-xl hover:bg-eh-green hover:text-eh-petrol transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
        >
            {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
            Invia Richiesta
        </button>
      </form>
    </div>
  );
};

export default ContactForm;