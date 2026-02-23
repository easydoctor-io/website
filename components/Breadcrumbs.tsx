import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { VERTICALS } from '../data/clinicalData';
import { BLOG_POSTS } from '../data/blogPosts';

const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  if (pathnames.length === 0) return null;

  const getBreadcrumbName = (value: string, index: number) => {
    // Check if it's a Blog Post ID
    const blogPost = BLOG_POSTS.find(post => post.id === value);
    if (blogPost) return <span className="truncate max-w-[150px] inline-block align-bottom">{blogPost.title}</span>;

    // Static mappings
    switch (value) {
      case 'easydoctor': return 'Piattaforma';
      case 'chi-siamo': return 'Chi Siamo';
      case 'catalogo': return 'Catalogo PROM';
      case 'blog': return 'Notizie';
      case 'faq': return 'FAQ';
      case 'glossario': return 'Glossario';
      case 'privacy': return 'Privacy Policy';
      case 'cookie-policy': return 'Cookie Policy';
      default: return value.charAt(0).toUpperCase() + value.slice(1);
    }
  };

  return (
    <nav aria-label="Breadcrumb" className="bg-eh-blue dark:bg-eh-dark py-3 px-4 sm:px-6 lg:px-8 border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex items-center space-x-2 text-sm">
        <Link to="/" className="text-gray-500 hover:text-eh-petrol dark:text-gray-400 dark:hover:text-eh-green transition-colors">
          <Home className="h-4 w-4" />
        </Link>
        
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;

          return (
            <React.Fragment key={to}>
              <ChevronRight className="h-4 w-4 text-gray-400" />
              {isLast ? (
                <span className="font-semibold text-eh-petrol dark:text-eh-green">
                  {getBreadcrumbName(value, index)}
                </span>
              ) : (
                <Link to={to} className="text-gray-500 hover:text-eh-petrol dark:text-gray-400 dark:hover:text-eh-green transition-colors">
                  {getBreadcrumbName(value, index)}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </nav>
  );
};

export default Breadcrumbs;