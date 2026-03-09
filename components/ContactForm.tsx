import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    cognome: '',
    email: '',
    azienda: '',
    messaggio: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ nome: '', cognome: '', email: '', azienda: '', messaggio: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="bg-white dark:bg-eh-darkSurface rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100 dark:border-gray-800 transition-colors duration-300" id="contact-form">
      <h3 className="text-2xl font-bold text-eh-black dark:text-white mb-6">Inviaci un messaggio</h3>
      
      {isSuccess ? (
        <div className="bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 p-4 rounded-lg border border-green-200 dark:border-green-800 mb-6 flex items-center gap-3">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
          <p className="font-medium">Messaggio inviato con successo! Ti contatteremo al più presto.</p>
        </div>
      ) : null}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="nome" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nome *</label>
            <input 
              type="text" 
              id="nome" 
              name="nome" 
              required
              value={formData.nome}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-eh-petrol dark:focus:ring-eh-green focus:border-transparent transition-shadow outline-none"
              placeholder="Il tuo nome"
            />
          </div>
          <div>
            <label htmlFor="cognome" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Cognome *</label>
            <input 
              type="text" 
              id="cognome" 
              name="cognome" 
              required
              value={formData.cognome}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-eh-petrol dark:focus:ring-eh-green focus:border-transparent transition-shadow outline-none"
              placeholder="Il tuo cognome"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email aziendale *</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-eh-petrol dark:focus:ring-eh-green focus:border-transparent transition-shadow outline-none"
            placeholder="nome@azienda.it"
          />
        </div>

        <div>
          <label htmlFor="azienda" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Azienda / Struttura *</label>
          <input 
            type="text" 
            id="azienda" 
            name="azienda" 
            required
            value={formData.azienda}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-eh-petrol dark:focus:ring-eh-green focus:border-transparent transition-shadow outline-none"
            placeholder="Nome della tua struttura"
          />
        </div>

        <div>
          <label htmlFor="messaggio" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Messaggio *</label>
          <textarea 
            id="messaggio" 
            name="messaggio" 
            required
            rows={4}
            value={formData.messaggio}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-eh-petrol dark:focus:ring-eh-green focus:border-transparent transition-shadow outline-none resize-none"
            placeholder="Come possiamo aiutarti?"
          ></textarea>
        </div>

        <div className="pt-2">
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-eh-petrol hover:bg-eh-petrol/90 dark:bg-eh-green dark:hover:bg-eh-green/90 text-white dark:text-eh-darkSurface font-bold py-3 px-6 rounded-lg transition-colors flex justify-center items-center disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Invio in corso...
              </>
            ) : (
              'Invia Messaggio'
            )}
          </button>
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-4">
          Inviando questo modulo, accetti la nostra <a href="/privacy" className="underline hover:text-eh-petrol dark:hover:text-eh-green">Privacy Policy</a>.
        </p>
      </form>
    </div>
  );
};

export default ContactForm;