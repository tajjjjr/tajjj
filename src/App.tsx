import React, { useState, useEffect, useCallback } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Footer } from './components/Footer';
import { Login } from './components/Login';
import { Dashboard } from './components/Dashboard';

export default function App() {
  const SCROLL_THRESHOLD = 75;
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentPage, setCurrentPage] = useState<'app' | 'login' | 'dashboard'>('app');
  const [token, setToken] = useState<string | null>(() => localStorage.getItem('token'));

  const handleScroll = useCallback(() => {
    const isPastThreshold = window.scrollY > SCROLL_THRESHOLD;
    if (isPastThreshold !== isScrolled) {
      setIsScrolled(isPastThreshold);
    }
  }, [isScrolled]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const handleLogin = (authToken: string) => {
    localStorage.setItem('token', authToken);
    setToken(authToken);
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setCurrentPage('app');
  };

  if (currentPage === 'login') {
    return <Login onLogin={handleLogin} />;
  }

  if (currentPage === 'dashboard') {
    return <Dashboard token={token!} onLogout={handleLogout} />;
  }

  return (
    <div className="min-h-screen w-full bg-[#050505] text-white overflow-x-hidden selection:bg-[#C7F246] selection:text-black">
      <Navbar 
        scrolled={isScrolled} 
        onLoginClick={() => setCurrentPage(token ? 'dashboard' : 'login')} 
        onHomeClick={() => setCurrentPage('app')}
        isLoggedIn={!!token}
      />
      <Outlet />
      <Footer />
    </div>
  );
}
