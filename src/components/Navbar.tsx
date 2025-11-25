import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// --- Navbar Links Data ---
const getNavLinks = (isLoggedIn: boolean) => ({
  left: [
    { name: "Blog", href: "#blog" },
    { name: "Projects", href: "/projects" },
  ],
  right: [
    { name: "Our Story", href: "/our-story" },
    { name: "Contact Us", href: "/#contact" },
    { name: isLoggedIn ? 'Dashboard' : 'Login', href: isLoggedIn ? '#dashboard' : '#login' },
  ],
});

interface NavbarProps {
  scrolled: boolean;
  onLoginClick?: () => void;
  onHomeClick?: () => void;
  isLoggedIn?: boolean;
}

interface NavLink {
  name: string;
  href: string;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled, onLoginClick, onHomeClick, isLoggedIn }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const brandColor = "#CFFF24";
  const navLinks = getNavLinks(isLoggedIn || false);

  const baseHeaderClasses =
    "fixed z-50 transition-all duration-300 ease-in-out w-full font-inter top-0 flex justify-center";
  const commonInnerClasses =
    "w-full lg:w-2/3 relative grid grid-cols-3 items-center h-full px-4 sm:px-6 lg:px-8 transition-all duration-300 ease-in-out py-8";
  const blendedInnerClasses = "bg-transparent";
  const scrolledInnerClasses =
    "rounded-full shadow-2xl shadow-indigo-500/10 bg-gray-900/90 backdrop-blur-md border border-gray-700";

  const NavLinks: React.FC<{ links: NavLink[] }> = ({ links }) => (
    <div className="hidden lg:flex space-x-10">
      {links.map((link) => (
        (link.name === 'Projects' || link.name === 'Our Story') ? (
          <Link
            key={link.name}
            to={link.href}
            className="text-sm font-medium transition duration-200 cursor-pointer"
            style={{ color: brandColor }}
          >
            {link.name}
          </Link>
        ) : (link.name === 'Login' || link.name === 'Dashboard') ? (
          <a 
            key={link.name} 
            href={link.href} 
            onClick={(e) => { e.preventDefault(); onLoginClick?.(); }}
            className="text-sm font-medium transition duration-200 cursor-pointer"
            style={{ color: brandColor }}
          >
            {link.name}
          </a>
        ) : (
          <a
            key={link.name}
            href={link.href}
            className="text-sm font-medium transition duration-200"
            style={{ color: brandColor }}
          >
            {link.name}
          </a>
        )
      ))}
    </div>
  );

  return (
    <header className={baseHeaderClasses}>
      
      <div
        className={`
          ${commonInnerClasses}
          ${scrolled ? scrolledInnerClasses : blendedInnerClasses}
        `}
      >
        {/* LEFT LINKS */}
        <div className="justify-self-start">
          <NavLinks links={navLinks.left} />
        </div>

        {/* CENTER LOGO */}
        <div className="justify-self-center">
          <Link 
            to="/"
            className="font-extrabold text-2xl tracking-wider cursor-pointer transition duration-300"
            style={{ color: "#FFFFFF" }}
            onClick={() => onHomeClick?.()}
          >
            TAJJJR
          </Link>
        </div>

        {/* RIGHT LINKS */}
        <div className="justify-self-end">
          <NavLinks links={navLinks.right} />
        </div>

        {/* MOBILE MENU BUTTON - Positioned absolutely on mobile */}
        <button
          className="lg:hidden absolute right-4 sm:right-6 p-2 transition"
          style={{
            background: "transparent",
            border: "none",
            color: brandColor,
            fontSize: "1.75rem",
            lineHeight: 1,
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
              lineHeight: 1,
            }}
            onClick={() => setIsMenuOpen(false)}
          >
            ✕
          </button>

          <div className="space-y-6 text-center">
            {[...navLinks.left, ...navLinks.right].map((link) => (
              (link.name === 'Projects' || link.name === 'Our Story') ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block text-3xl font-bold transition cursor-pointer"
                  style={{ color: brandColor }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ) : (link.name === 'Login' || link.name === 'Dashboard') ? (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    onLoginClick?.();
                    setIsMenuOpen(false);
                  }}
                  className="block text-3xl font-bold transition cursor-pointer"
                  style={{ color: brandColor }}
                >
                  {link.name}
                </a>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-3xl font-bold transition"
                  style={{ color: brandColor }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              )
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
