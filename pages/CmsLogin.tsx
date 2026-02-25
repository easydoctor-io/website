import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { KeyRound, Mail, ArrowRight } from 'lucide-react';
import { toast } from 'react-hot-toast';

const CmsLogin: React.FC = () => {
  const [mode, setMode] = useState<'invite' | 'login'>('invite');
  const [token, setToken] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleInviteSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch('/api/auth/verify-invite', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token })
      });
      const data = await res.json();
      if (data.success) {
        toast.success('Token valido! Completa la registrazione.');
        // In a real app, we'd redirect to a signup page. For demo, we just log them in as a new user.
        localStorage.setItem('cms_user', JSON.stringify({ email: `user_${token}@easydoctor.io`, role: data.role }));
        navigate('/cms/dashboard');
      } else {
        toast.error(data.message || 'Token non valido');
      }
    } catch (error) {
      toast.error('Errore di connessione');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      const data = await res.json();
      if (data.success) {
        toast.success('Accesso effettuato');
        localStorage.setItem('cms_user', JSON.stringify(data.user));
        navigate('/cms/dashboard');
      } else {
        toast.error(data.message || 'Utente non trovato');
      }
    } catch (error) {
      toast.error('Errore di connessione');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 pt-32">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Area Contributor
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Accedi per gestire i tuoi articoli sul blog Easy Health
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          
          <div className="flex justify-center mb-8 border-b">
            <button 
              className={`pb-4 px-4 font-medium text-sm ${mode === 'invite' ? 'border-b-2 border-eh-petrol text-eh-petrol' : 'text-gray-500'}`}
              onClick={() => setMode('invite')}
            >
              Ho un Invito
            </button>
            <button 
              className={`pb-4 px-4 font-medium text-sm ${mode === 'login' ? 'border-b-2 border-eh-petrol text-eh-petrol' : 'text-gray-500'}`}
              onClick={() => setMode('login')}
            >
              Accedi
            </button>
          </div>

          {mode === 'invite' ? (
            <form onSubmit={handleInviteSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Token di Invito</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <KeyRound className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    required
                    value={token}
                    onChange={(e) => setToken(e.target.value)}
                    className="focus:ring-eh-petrol focus:border-eh-petrol block w-full pl-10 sm:text-sm border-gray-300 rounded-md py-3 border text-gray-900"
                    placeholder="Es. INVITE-123"
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-eh-petrol hover:bg-eh-green focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-eh-petrol"
              >
                Verifica Invito <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </form>
          ) : (
            <form onSubmit={handleLoginSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="focus:ring-eh-petrol focus:border-eh-petrol block w-full pl-10 sm:text-sm border-gray-300 rounded-md py-3 border text-gray-900"
                    placeholder="admin@easydoctor.io"
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-eh-petrol hover:bg-eh-green focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-eh-petrol"
              >
                Accedi <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default CmsLogin;
