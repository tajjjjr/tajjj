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

interface NavbarProps {
  scrolled: boolean;
}

interface NavLink {
  name: string;
  href: string;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const brandColor = "#CFFF24";

  const baseHeaderClasses = "fixed z-50 transition-all duration-300 ease-in-out w-full font-inter";
  const commonInnerClasses = "w-full lg:w-2/3 mx-auto flex items-center justify-between h-full px-4 sm:px-6 lg:px-8 transition-all duration-300 ease-in-out";
  const blendedInnerClasses = "py-8 bg-transparent";
  const scrolledInnerClasses = "top-4 rounded-full shadow-2xl shadow-indigo-500/10 bg-gray-900/90 backdrop-blur-md py-3 px-8 border border-gray-700";

  const NavLinks: React.FC<{ links: NavLink[] }> = ({ links }) => (
    <div className="hidden lg:flex space-x-10">
      {links.map((link) => (
        <a 
          key={link.name} 
          href={link.href} 
          className="text-sm font-medium transition duration-200"
          style={{ color: brandColor }}
        >
          {link.name}
        </a>
      ))}
    </div>
  );

  return (
    <header className={`${baseHeaderClasses} top-0`}>
      
      <div 
        className={`
          ${commonInnerClasses}
          ${scrolled ? scrolledInnerClasses : blendedInnerClasses}
        `}
      >
        
        {/* LEFT LINKS */}
        <NavLinks links={navLinks.left} />

        {/* CENTER LOGO */}
        <div
          className="flex-shrink-0 font-extrabold text-2xl tracking-wider cursor-pointer transition duration-300"
          style={{ color: brandColor }}
        >
          TAJJJR
        </div>

        {/* RIGHT LINKS */}
        <NavLinks links={navLinks.right} />

        {/* MOBILE MENU BUTTON */}
        <button 
          className="lg:hidden p-2 transition"
          style={{
            background: "transparent",
            border: "none",
            color: brandColor,
            fontSize: "1.75rem",
            lineHeight: 1
          }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE OVERLAY */}
      {isMenuOpen && (
        <div className="lg:hidden fixed top-0 left-0 w-full h-screen bg-gray-900/95 backdrop-blur-sm p-8 flex flex-col items-center justify-center">
          
          {/* CLOSE ICON */}
          <button 
            className="absolute top-6 right-6 p-2"
            style={{
              background: "transparent",
              border: "none",
              color: brandColor,
              fontSize: "2.25rem",
              lineHeight: 1
            }}
            onClick={() => setIsMenuOpen(false)}
          >
            ✕
          </button>
          
          <div className="space-y-6 text-center">
            {[...navLinks.left, ...navLinks.right].map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-3xl font-bold transition"
                style={{ color: brandColor }}
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
