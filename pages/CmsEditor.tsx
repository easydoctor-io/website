import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import { Save, Image as ImageIcon, ArrowLeft, Headphones, Loader2 } from 'lucide-react';
import { toast } from 'react-hot-toast';

const CmsEditor: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');
  const [coverImage, setCoverImage] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [status, setStatus] = useState('draft');
  const [isSaving, setIsSaving] = useState(false);
  const [isGeneratingAudio, setIsGeneratingAudio] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [user, setUser] = useState<{ email: string; role: string; name?: string } | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('cms_user');
    if (!storedUser) {
      navigate('/cms/login');
      return;
    }
    setUser(JSON.parse(storedUser));

    if (id) {
      fetchPost(id);
    }
  }, [id, navigate]);

  const fetchPost = async (postId: string) => {
    try {
      const res = await fetch(`/api/posts/${postId}`);
      const data = await res.json();
      if (res.ok) {
        setTitle(data.title);
        setContent(data.content);
        setTags(data.tags.join(', '));
        setStatus(data.status);
        setPreviewImage(data.coverImage);
        setAudioUrl(data.audioUrl);
      } else {
        toast.error('Post non trovato');
        navigate('/cms/dashboard');
      }
    } catch (error) {
      toast.error('Errore nel caricamento del post');
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setCoverImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.type.startsWith('image/')) {
        setCoverImage(file);
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreviewImage(reader.result as string);
        };
        reader.readAsDataURL(file);
      } else {
        toast.error('Carica solo file immagine');
      }
    }
  };

  const handleSave = async () => {
    if (!title || !content) {
      toast.error('Titolo e contenuto sono obbligatori');
      return;
    }

    setIsSaving(true);
    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('content', content);
      formData.append('tags', JSON.stringify(tags.split(',').map(t => t.trim()).filter(t => t)));
      formData.append('status', status);
      if (user) {
        formData.append('authorEmail', user.email);
        if (user.name) formData.append('authorName', user.name);
      }
      if (coverImage) formData.append('coverImage', coverImage);

      const url = id ? `/api/posts/${id}` : '/api/posts';
      const method = id ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        body: formData,
      });

      const data = await res.json();
      
      if (res.ok) {
        toast.success('Articolo salvato con successo');
        if (!id) {
          navigate(`/cms/editor/${data.id}`, { replace: true });
        }
      } else {
        toast.error(data.error || 'Errore durante il salvataggio');
      }
    } catch (error) {
      toast.error('Errore di connessione');
    } finally {
      setIsSaving(false);
    }
  };

  const handleGenerateAudio = async () => {
    if (!id) {
      toast.error('Salva l\'articolo prima di generare l\'audio');
      return;
    }
    
    setIsGeneratingAudio(true);
    try {
      const res = await fetch(`/api/posts/${id}/generate-audio`, {
        method: 'POST'
      });
      const data = await res.json();
      
      if (res.ok) {
        setAudioUrl(data.audioUrl);
        toast.success('Audio generato con successo!');
      } else {
        toast.error(data.error || 'Errore durante la generazione');
      }
    } catch (error) {
      toast.error('Errore di connessione');
    } finally {
      setIsGeneratingAudio(false);
    }
  };

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ['link', 'image'],
      ['clean']
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-4">
            <button onClick={() => navigate('/cms/dashboard')} className="text-gray-500 hover:text-eh-petrol">
              <ArrowLeft className="h-6 w-6" />
            </button>
            <h1 className="text-3xl font-bold text-gray-900">{id ? 'Modifica Articolo' : 'Nuovo Articolo'}</h1>
          </div>
          <div className="flex gap-4 items-center">
            <select 
              value={status} 
              onChange={(e) => setStatus(e.target.value)}
              className="border-gray-300 rounded-lg shadow-sm focus:ring-eh-petrol focus:border-eh-petrol text-gray-900"
            >
              <option value="draft">Bozza</option>
              <option value="published">Pubblicato</option>
            </select>
            <button 
              onClick={handleSave}
              disabled={isSaving}
              className="bg-eh-petrol text-white px-6 py-2 rounded-lg font-medium hover:bg-eh-green flex items-center gap-2 disabled:opacity-70"
            >
              {isSaving ? <Loader2 className="h-5 w-5 animate-spin" /> : <Save className="h-5 w-5" />}
              Salva
            </button>
          </div>
        </div>

        {/* Editor Form */}
        <div className="bg-white shadow rounded-xl p-8 space-y-8">
          
          {/* Title */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Titolo dell'articolo</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full text-2xl font-bold border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-eh-petrol px-0 py-2 placeholder-gray-300 text-gray-900"
              placeholder="Inserisci un titolo accattivante..."
            />
          </div>

          {/* Cover Image Drag & Drop */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Immagine di Copertina</label>
            <div 
              className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-colors ${previewImage ? 'border-eh-petrol bg-eh-petrol/5' : 'border-gray-300 hover:border-eh-petrol hover:bg-gray-50'}`}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
            >
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleImageChange} 
                accept="image/*" 
                className="hidden" 
              />
              
              {previewImage ? (
                <div className="relative w-full h-64">
                  <img src={previewImage} alt="Cover Preview" className="w-full h-full object-cover rounded-lg" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity rounded-lg">
                    <p className="text-white font-medium flex items-center gap-2"><ImageIcon className="h-5 w-5" /> Cambia Immagine</p>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-8">
                  <ImageIcon className="h-12 w-12 text-gray-400 mb-4" />
                  <p className="text-gray-600 font-medium">Trascina un'immagine qui o clicca per caricare</p>
                  <p className="text-sm text-gray-400 mt-2">Formati supportati: JPG, PNG (Max 5MB)</p>
                </div>
              )}
            </div>
          </div>

          {/* Tags */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Tag / Categorie (separati da virgola)</label>
            <input
              type="text"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-eh-petrol focus:border-eh-petrol text-gray-900"
              placeholder="Es. Risk Management, Sanità Digitale, Innovazione"
            />
          </div>

          {/* Audio Generation */}
          {id && (
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                    <Headphones className="h-5 w-5 text-eh-petrol" />
                    Versione Podcast (Text-to-Speech)
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">Genera un file audio leggibile per questo articolo usando l'AI.</p>
                </div>
                <button
                  onClick={handleGenerateAudio}
                  disabled={isGeneratingAudio}
                  className="bg-white border border-eh-petrol text-eh-petrol px-4 py-2 rounded-lg font-medium hover:bg-eh-petrol hover:text-white transition-colors flex items-center gap-2 disabled:opacity-70"
                >
                  {isGeneratingAudio ? <Loader2 className="h-5 w-5 animate-spin" /> : <Headphones className="h-5 w-5" />}
                  {audioUrl ? 'Rigenera Audio' : 'Genera Audio'}
                </button>
              </div>
              {audioUrl && (
                <div className="mt-4">
                  <audio controls className="w-full" src={audioUrl}>
                    Il tuo browser non supporta l'elemento audio.
                  </audio>
                </div>
              )}
            </div>
          )}

          {/* Rich Text Editor */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Corpo dell'articolo</label>
            <div className="h-96 mb-12 text-gray-900">
              <ReactQuill 
                theme="snow" 
                value={content} 
                onChange={setContent} 
                modules={modules}
                className="h-full"
                placeholder="Inizia a scrivere il tuo articolo qui..."
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CmsEditor;
