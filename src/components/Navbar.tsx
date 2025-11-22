import React, { useState } from 'react';

// --- Navbar Links Data ---
const navLinks = {
  left: [
    { name: 'Blog', href: '#blog' },
    { name: 'Projects', href: '#projects' },
  ],
  right: [
    { name: 'Our Story', href: '#story' },
    { name: 'Contact Us', href: '#contact' },
  ]
};

// --- Navbar Component ---
interface NavbarProps {
  scrolled: boolean;
}

interface NavLink {
  name: string;
  href: string;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const baseHeaderClasses = "fixed z-50 transition-all duration-300 ease-in-out w-full font-inter";
  const commonInnerClasses = "w-full lg:w-2/3 mx-auto flex items-center justify-between h-full px-4 sm:px-6 lg:px-8 transition-all duration-300 ease-in-out";
  const blendedInnerClasses = "py-8 bg-transparent text-gray-300";
  const scrolledInnerClasses = "top-4 rounded-full shadow-2xl shadow-indigo-500/10 bg-gray-900/90 backdrop-blur-md text-white py-3 px-8 border border-gray-700";
  
  const linkTextColor = scrolled ? "hover:text-indigo-400 text-gray-300" : "hover:text-indigo-400 text-gray-300";
  const logoTextColor = scrolled ? "text-indigo-400" : "text-white";

  const NavLinks: React.FC<{ links: NavLink[] }> = ({ links }) => (
    <div className="hidden lg:flex space-x-10">
      {links.map((link) => (
        <a 
          key={link.name} 
          href={link.href} 
          className={`text-sm font-medium transition duration-200 ${linkTextColor}`}
        >
          {link.name}
        </a>
      ))}
    </div>
  );

  return (
    <header className={`${baseHeaderClasses} ${scrolled ? 'top-0' : 'top-0'}`}>
      
      <div 
        className={`
          ${commonInnerClasses}
          ${scrolled ? scrolledInnerClasses : blendedInnerClasses}
          ${scrolled ? 'relative' : ''} 
        `}
      >
        
        {/* LEFT LINKS */}
        <NavLinks links={navLinks.left} />

        {/* CENTER LOGO */}
        <div className={`flex-shrink-0 font-extrabold text-2xl tracking-wider cursor-pointer transition duration-300 ${logoTextColor}`}>
          TAJJJR
        </div>

        {/* RIGHT LINKS */}
        <NavLinks links={navLinks.right} />

        {/* MOBILE MENU BUTTON */}
        <button 
          className={`lg:hidden p-2 rounded-full transition ${scrolled ? 'bg-gray-800/70 text-white' : 'bg-white/10 text-white'}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* MOBILE OVERLAY */}
      {isMenuOpen && (
        <div className="lg:hidden fixed top-0 left-0 w-full h-screen bg-gray-900/95 backdrop-blur-sm transition-opacity duration-300 p-8 flex flex-col items-center justify-center">
          <button 
            className="absolute top-6 right-6 p-2 text-white hover:text-indigo-400" 
            onClick={() => setIsMenuOpen(false)}
          >
            Close
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
