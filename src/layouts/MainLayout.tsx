import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const MainLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gray-800 text-white shadow-lg">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          {/* Hamburger Menu Button */}
          <button 
            onClick={toggleMenu}
            className="p-2 focus:outline-none focus:ring-2 focus:ring-white rounded-md"
            aria-label="Toggle menu"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            </svg>
          </button>
          
          {/* Page Title */}
          <h1 className="text-xl font-bold">Sample App</h1>
          
          {/* Spacer to balance the layout */}
          <div className="w-6"></div>
        </div>
      </header>

      {/* Sidebar Menu - Slides in from left */}
      <div 
        className={`fixed inset-y-0 left-0 transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } w-64 bg-gray-900 text-white p-6 transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex justify-end">
          <button 
            onClick={toggleMenu}
            className="p-2 focus:outline-none focus:ring-2 focus:ring-white rounded-md"
            aria-label="Close menu"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
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
        
        <nav className="mt-8">
          <ul className="space-y-4">
            <li>
              <Link 
                to="/" 
                className="block py-2 px-4 rounded hover:bg-gray-700 transition-colors"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/form" 
                className="block py-2 px-4 rounded hover:bg-gray-700 transition-colors"
                onClick={toggleMenu}
              >
                User Form
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Overlay when menu is open */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMenu}
        ></div>
      )}

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
