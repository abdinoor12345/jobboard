import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State for menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggles the `isOpen` state
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 mb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-blue-600">
              JobBoard
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link to="/jobs" className="text-gray-700 hover:text-blue-600">Jobs</Link>
            <Link to="/companies" className="text-gray-700 hover:text-blue-600">Companies</Link>
            <Link to="/post-job" className="text-gray-700 hover:text-blue-600">Post a Job</Link>
            <Link to="/dashboard" className="text-gray-700 hover:text-blue-600">Dashboard</Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-700 hover:text-blue-600">
              {isOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-4 pt-2 pb-4 space-y-4 border-t border-gray-200 text-start">
          <Link to="/" className="block text-gray-700 hover:text-blue-600">Home</Link>
          <Link to="/jobs" className="block text-gray-700 hover:text-blue-600">Jobs</Link>
          <Link to="/companies" className="block text-gray-700 hover:text-blue-600">Companies</Link>
          <Link to="/post-job" className="block text-gray-700 hover:text-blue-600">Post a Job</Link>
          <Link to="/dashboard" className="block text-gray-700 hover:text-blue-600">Dashboard</Link>
        </div>
      )}
    </nav>
  );
}