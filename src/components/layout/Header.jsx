import Link from 'next/link';
import { useState } from 'react';
import Button from '../../components/ui/Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-indigo-600">
              AI Tools Hub
            </Link>
            <nav className="hidden md:flex ml-10 space-x-8">
              <Link href="/" className="text-gray-700 hover:text-indigo-600">Home</Link>
              <Link href="/blog" className="text-gray-700 hover:text-indigo-600">Blog</Link>
              <Link href="/tools" className="text-gray-700 hover:text-indigo-600">AI Tools</Link>
              <Link href="/premium" className="text-gray-700 hover:text-indigo-600">Premium</Link>
            </nav>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline">Sign In</Button>
            <Button>Subscribe</Button>
          </div>
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <Link href="/" className="block text-gray-700 hover:text-indigo-600">Home</Link>
            <Link href="/blog" className="block text-gray-700 hover:text-indigo-600">Blog</Link>
            <Link href="/tools" className="block text-gray-700 hover:text-indigo-600">AI Tools</Link>
            <Link href="/premium" className="block text-gray-700 hover:text-indigo-600">Premium</Link>
            <div className="pt-2 space-y-2">
              <Button variant="outline" fullWidth>Sign In</Button>
              <Button fullWidth>Subscribe</Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;