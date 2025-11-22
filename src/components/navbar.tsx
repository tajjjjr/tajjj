import React, { useState } from 'react';
import { Menu, X, ChevronDown, BookOpen, Layers, Users, Phone } from 'lucide-react';

// --- Navbar Links Data ---
const navLinks = {
  left: [
    { name: 'Blog', href: '#blog', icon: BookOpen },
    { name: 'Projects', href: '#projects', icon: Layers },
  ],
  right: [
    { name: 'Our Story', href: '#story', icon: Users },
    { name: 'Contact Us', href: '#contact', icon: Phone },
  ]
};

// --- Navbar Component ---
interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const baseClasses = "fixed z-50 transition-all duration-300 ease-in-out w-full font-inter";
  const blendedClasses = "top-0 py-8 bg-transparent text-gray-300";
  const scrolledClasses = "top-4 left-1/2 -translate-x-1/2 max-w-5xl mx-auto rounded-full shadow-2xl shadow-indigo-500/10 bg-gray-900/90 backdrop-blur-md text-white py-3 px-8 border border-gray-700";

  const linkTextColor = scrolled ? "hover:text-indigo-400 text-gray-300" : "hover:text-indigo-400 text-gray-300";
  const logoTextColor = scrolled ? "text-indigo-400" : "text-white";

  // Helper component for rendering links
  const NavLinks: React.FC<{ links: typeof navLinks.left }> = ({ links }) => (
    <div className="hidden lg:flex space-x-10">
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className={`flex items-center gap-1 text-sm font-medium transition duration-200 ${linkTextColor}`}
        >
          <link.icon className="w-4 h-4" />
          {link.name}
        </a>
      ))}
    </div>
  );

  return (
    <header className={`${baseClasses} ${scrolled ? scrolledClasses : blendedClasses}`}>
      <div className="flex items-center justify-between h-full px-4 sm:px-6 lg:px-8">
        <NavLinks links={navLinks.left} />

        <div className={`flex-shrink-0 font-extrabold text-2xl tracking-wider cursor-pointer transition duration-300 ${logoTextColor}`}>
          TAJJJR
        </div>

        <NavLinks links={navLinks.right} />

        <button
          className={`lg:hidden p-2 rounded-full transition ${scrolled ? 'bg-gray-800/70 text-white' : 'bg-white/10 text-white'}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden fixed top-0 left-0 w-full h-screen bg-gray-900/95 backdrop-blur-sm transition-opacity duration-300 p-8 flex flex-col items-center justify-center">
          <button
            className="absolute top-6 right-6 p-2 text-white hover:text-indigo-400"
            onClick={() => setIsMenuOpen(false)}
          >
            <X className="w-8 h-8" />
          </button>

          <div className="space-y-6 text-center">
            {[...navLinks.left, ...navLinks.right].map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-3xl font-bold text-white hover:text-indigo-400 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
