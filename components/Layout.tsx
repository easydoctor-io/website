import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, Sun, Moon, ChevronDown, Mail } from 'lucide-react';
import { Toaster } from 'react-hot-toast';
import Breadcrumbs from './Breadcrumbs';
import { useGlobal } from '../context/GlobalContext';
import ContactForm from './ContactForm';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = React.useState(false); // Mobile toggle
  const location = useLocation();
  const { isDarkMode, toggleTheme } = useGlobal();

  const isActive = (path: string) => location.pathname === path || (path !== '/' && location.pathname.startsWith(path))
    ? 'text-eh-petrol font-bold dark:text-eh-green' 
    : 'text-eh-black hover:text-eh-petrol font-medium dark:text-gray-300 dark:hover:text-white';

  return (
    <div className="min-h-screen flex flex-col bg-eh-blue dark:bg-eh-dark font-sans transition-colors duration-300">
      <Toaster position="top-center" reverseOrder={false} />
      
      <nav className="bg-eh-white dark:bg-eh-darkSurface border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50 shadow-sm transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            {/* Logo Area */}
            <div className="flex">
              <Link to="/" className="flex-shrink-0 flex items-center gap-1 group" aria-label="Easy Health Home">
                <span className="text-3xl font-extrabold text-eh-green leading-none tracking-tight">Easy</span>
                <span className="text-3xl font-extrabold text-eh-petrol dark:text-white leading-none tracking-tight">Health</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center lg:space-x-8">
                <Link to="/" className={`text-sm transition-colors ${isActive('/')}`}>
                  Home
                </Link>
                
                {/* Solutions Dropdown Trigger */}
                <div className="group relative">
                    <button className={`text-sm font-medium flex items-center gap-1 ${location.pathname.includes('easydoctor') || location.pathname.includes('risk') || location.pathname.includes('security') ? 'text-eh-petrol font-bold' : 'text-eh-black dark:text-gray-300'}`}>
                        Soluzioni <ChevronDown className="h-4 w-4" />
                    </button>
                    {/* Dropdown Menu */}
                    <div className="absolute top-full left-0 w-64 bg-white dark:bg-eh-darkSurface border border-gray-200 dark:border-gray-700 shadow-xl rounded-xl p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all transform translate-y-2 group-hover:translate-y-0 z-50">
                        <Link to="/easydoctor" className="block px-4 py-3 rounded-lg hover:bg-eh-blue dark:hover:bg-gray-700 text-sm">
                            <div className="font-bold text-eh-petrol dark:text-eh-green">easydoctor</div>
                            <div className="text-xs text-gray-500">Digital Patient Engagement</div>
                        </Link>
                        <Link to="/clinical-risk" className="block px-4 py-3 rounded-lg hover:bg-eh-blue dark:hover:bg-gray-700 text-sm">
                            <div className="font-bold text-red-600">Easy Risk</div>
                            <div className="text-xs text-gray-500">Risk Management Clinico</div>
                        </Link>
                        <Link to="/security-consulting" className="block px-4 py-3 rounded-lg hover:bg-eh-blue dark:hover:bg-gray-700 text-sm">
                            <div className="font-bold text-gray-800 dark:text-white">Sicurezza & Dati</div>
                            <div className="text-xs text-gray-500">Consulting & Compliance</div>
                        </Link>
                    </div>
                </div>
                
                <Link to="/chi-siamo" className={`text-sm transition-colors ${isActive('/chi-siamo')}`}>
                  Chi siamo
                </Link>

                <Link to="/blog" className={`text-sm transition-colors ${isActive('/blog')}`}>
                  Notizie
                </Link>

                {/* Theme Toggle */}
                <button 
                  onClick={toggleTheme} 
                  className="p-2 rounded-full text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 transition-colors"
                  aria-label="Toggle Dark Mode"
                >
                  {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </button>
                
                <a 
                  href="#contatti"
                  className="ml-2 inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-semibold rounded-lg text-white bg-eh-petrol hover:bg-eh-green hover:text-eh-petrol transition-all duration-300 shadow-md hover:shadow-lg focus:ring-4 focus:ring-eh-green/30"
                >
                  Contattaci
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center gap-4 lg:hidden">
              <button 
                  onClick={toggleTheme} 
                  className="p-2 rounded-full text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 transition-colors"
              >
                  {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
              
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-eh-petrol hover:bg-eh-blue focus:outline-none focus:ring-2 focus:ring-inset focus:ring-eh-petrol dark:text-eh-green dark:hover:bg-eh-darkSurface"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Apri menu principale</span>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-eh-white dark:bg-eh-darkSurface border-t border-gray-200 dark:border-gray-800 shadow-lg h-screen overflow-y-auto pb-20">
            <div className="pt-2 pb-4 space-y-1 px-4">
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-eh-black dark:text-gray-200 hover:bg-eh-blue hover:text-eh-petrol dark:hover:bg-gray-700">Home</Link>
              
              {/* Mobile Solutions Expandable */}
              <div className="border-b border-gray-100 dark:border-gray-700 pb-2">
                  <button 
                    onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                    className="flex w-full items-center justify-between px-3 py-3 rounded-md text-base font-medium text-eh-black dark:text-gray-200 hover:bg-eh-blue hover:text-eh-petrol"
                  >
                      Soluzioni <ChevronDown className={`h-4 w-4 transform transition-transform ${isSolutionsOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isSolutionsOpen && (
                      <div className="pl-6 space-y-1">
                          <Link to="/easydoctor" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-sm text-gray-600 dark:text-gray-400 font-bold border-l-2 border-eh-petrol">easydoctor (DPE)</Link>
                          <Link to="/clinical-risk" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-sm text-gray-600 dark:text-gray-400 font-bold border-l-2 border-red-500">Easy Risk</Link>
                          <Link to="/security-consulting" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-sm text-gray-600 dark:text-gray-400 font-bold border-l-2 border-gray-500">Sicurezza & Dati</Link>
                      </div>
                  )}
              </div>

              <Link to="/chi-siamo" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-eh-black dark:text-gray-200 hover:bg-eh-blue hover:text-eh-petrol dark:hover:bg-gray-700">Chi Siamo</Link>
              <Link to="/blog" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-eh-black dark:text-gray-200 hover:bg-eh-blue hover:text-eh-petrol dark:hover:bg-gray-700">Notizie</Link>
              
              <div className="border-t border-gray-100 dark:border-gray-700 my-2 pt-2">
                 <Link to="/faq" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-sm text-gray-500 dark:text-gray-400 hover:text-eh-petrol dark:hover:text-eh-green">FAQ</Link>
                 <Link to="/glossario" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-sm text-gray-500 dark:text-gray-400 hover:text-eh-petrol dark:hover:text-eh-green">Glossario</Link>
              </div>
              <a href="#contatti" onClick={() => setIsMenuOpen(false)} className="block mt-4 px-3 py-3 rounded-md text-base font-bold text-center text-white bg-eh-petrol hover:bg-eh-green hover:text-eh-petrol">
                Contattaci
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Breadcrumbs */}
      <Breadcrumbs />

      <main className="flex-1">
        {children}
      </main>

      {/* Global Contact Form - Hidden on CMS routes */}
      {!location.pathname.startsWith('/cms') && (
        <section id="contatti" className="bg-eh-blue dark:bg-eh-darkSurface py-20 border-t border-gray-100 dark:border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Side: CTA */}
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-eh-black dark:text-white mb-6">
                  Parla con noi
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 leading-relaxed">
                  Siamo pronti ad ascoltare le esigenze della tua struttura sanitaria. 
                  Compila il modulo per richiedere una demo o una consulenza specialistica.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center text-eh-petrol dark:text-eh-green shadow-sm border border-gray-100 dark:border-gray-700">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-eh-black dark:text-white">Email</h4>
                      <a href="mailto:info@easydoctor.io" className="text-gray-600 dark:text-gray-400 hover:text-eh-petrol transition-colors">
                        info@easydoctor.io
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side: Form */}
              <div className="w-full">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      )}

      <footer className="bg-eh-black dark:bg-black text-white py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                <div className="md:col-span-2">
                    <div className="flex items-center gap-1 mb-4">
                        <span className="text-2xl font-extrabold text-eh-green leading-none">Easy</span>
                        <span className="text-2xl font-extrabold text-white leading-none">Health</span>
                    </div>
                    <p className="mt-4 text-sm text-gray-400 leading-relaxed max-w-sm">
                        Startup innovativa certificata ISO 9001. <br/>
                        Soluzioni integrate per il Digital Patient Engagement e il Risk Management Clinico.
                    </p>
                </div>
                <div>
                    <h3 className="text-sm font-bold text-eh-white uppercase tracking-wider mb-4">Soluzioni</h3>
                    <ul className="text-sm text-gray-400 space-y-2">
                        <li><Link to="/easydoctor" className="hover:text-eh-green transition-colors">Digital Patient Engagement</Link></li>
                        <li><Link to="/clinical-risk" className="hover:text-eh-green transition-colors">Clinical Risk Management</Link></li>
                        <li><Link to="/security-consulting" className="hover:text-eh-green transition-colors">Sicurezza & Compliance</Link></li>
                    </ul>
                </div>
                <div>
                     <h3 className="text-sm font-bold text-eh-white uppercase tracking-wider mb-4">Contatti & Dati</h3>
                     <ul className="text-sm text-gray-400 space-y-2">
                        <li className="font-semibold text-white">Easy Health srl società Benefit</li>
                        <li>Via Arcivescovo Calabiana, 6</li>
                        <li>20139 Milano (MI)</li>
                        <li>P.IVA: 11607630966</li>
                        <li className="pt-2">
                           <a href="mailto:info@easydoctor.io" className="text-eh-green hover:underline block">info@easydoctor.io</a>
                           <span className="text-gray-500 text-xs">PEC: easyhealth@pec.it</span>
                        </li>
                     </ul>
                </div>
            </div>
            <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                <p>© {new Date().getFullYear()} Easy Health srl società Benefit. Tutti i diritti riservati.</p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                    <Link to="/privacy" className="hover:text-eh-green">Privacy Policy</Link>
                    <Link to="/cookie-policy" className="hover:text-eh-green">Cookie Policy</Link>
                </div>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;