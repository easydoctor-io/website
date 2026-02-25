import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Plus, Edit, Trash2, LogOut, FileText } from 'lucide-react';
import { toast } from 'react-hot-toast';

interface Post {
  id: string;
  title: string;
  status: string;
  createdAt: string;
}

const CmsDashboard: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [user, setUser] = useState<{ email: string; role: string; name?: string } | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('cms_user');
    if (!storedUser) {
      navigate('/cms/login');
      return;
    }
    const parsedUser = JSON.parse(storedUser);
    setUser(parsedUser);
    fetchPosts(parsedUser.email);
  }, [navigate]);

  const fetchPosts = async (email: string) => {
    try {
      const res = await fetch(`/api/posts/user/${email}`);
      const data = await res.json();
      setPosts(data);
    } catch (error) {
      toast.error('Errore nel caricamento dei post');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('cms_user');
    navigate('/cms/login');
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard Contributor</h1>
            <p className="text-gray-600 mt-1">Benvenuto, {user.name || user.email}</p>
          </div>
          <div className="flex gap-4">
            <Link 
              to="/cms/editor"
              className="bg-eh-petrol text-white px-4 py-2 rounded-lg font-medium hover:bg-eh-green flex items-center gap-2"
            >
              <Plus className="h-5 w-5" /> Nuovo Articolo
            </Link>
            <button 
              onClick={handleLogout}
              className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 flex items-center gap-2"
            >
              <LogOut className="h-5 w-5" /> Esci
            </button>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Titolo</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stato</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data Creazione</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Azioni</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {posts.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-6 py-12 text-center text-gray-500">
                    <FileText className="h-12 w-12 mx-auto text-gray-400 mb-3" />
                    Nessun articolo trovato. Inizia a scrivere!
                  </td>
                </tr>
              ) : (
                posts.map((post) => (
                  <tr key={post.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{post.title}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        post.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {post.status === 'published' ? 'Pubblicato' : 'Bozza'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(post.createdAt).toLocaleDateString('it-IT')}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Link to={`/cms/editor/${post.id}`} className="text-eh-petrol hover:text-eh-green mr-4 inline-flex items-center gap-1">
                        <Edit className="h-4 w-4" /> Modifica
                      </Link>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default CmsDashboard;
