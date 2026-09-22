import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Play, Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react';
import { ShowreelModal } from './ShowreelModal';
import { useTheme } from '../../context/ThemeContext';

export const Header: React.FC = () => {
  const [currentTime, setCurrentTime] = useState('');
  const [isShowreelOpen, setIsShowreelOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { isDark, toggleTheme } = useTheme();

  // Keep live IST time updated
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const istString = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      });
      setCurrentTime(`${istString}, India`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Close mobile menu on route navigation
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Work', path: '/work' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Contact', path: '/contact' },
  ];

  // Correct logo variant per theme
  const logoSrc = isDark
    ? '/brand/digitify-logo-white.png'
    : '/brand/digitify-logo-black.png';

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-white/90 dark:bg-[#08080a]/90 backdrop-blur-md border-b border-day-border dark:border-agency-border px-4 sm:px-8 md:px-12 py-3 sm:py-3.5 transition-colors duration-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left: Brand Logo (Tight-cropped, authoritative visual scale) */}
          <Link
            to="/"
            className="flex items-center group cursor-pointer focus:outline-none rounded shrink-0 py-0.5"
            aria-label="Digitify Home"
          >
            <img
              src={logoSrc}
              alt="Digitify Logo"
              className="h-9 sm:h-10 md:h-11 lg:h-12 w-auto object-contain transition-opacity duration-200 group-hover:opacity-80"
            />
          </Link>

          {/* Center: Live Time / IST Ticker */}
          <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-day-muted dark:text-agency-muted tracking-wider">
            <span className="h-1.5 w-1.5 rounded-full bg-day-muted/60 dark:bg-agency-muted/60" />
            <span>{currentTime || '00:00, India'}</span>
          </div>

          {/* Right: Availability, Nav, Theme Toggle & Showreel */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Availability status badge */}
            <div className="hidden xl:flex items-center gap-2 text-xs font-mono px-3 py-1 rounded-full border border-day-border dark:border-agency-border bg-day-surface dark:bg-agency-surface text-day-subtext dark:text-agency-subtext">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-digitify-purple opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-digitify-purple"></span>
              </span>
              <span className="tracking-wide">AVAILABLE FOR SELECT PROJECTS</span>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-3 py-1.5 text-xs uppercase tracking-wider transition-colors rounded-full ${
                      isActive
                        ? 'text-black dark:text-white font-semibold bg-black/5 dark:bg-white/10'
                        : 'text-day-subtext dark:text-agency-subtext hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Sun / Moon Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-day-border dark:border-agency-border text-day-subtext dark:text-agency-subtext hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white transition-all cursor-pointer shrink-0"
              title={isDark ? 'Switch to Day Mode' : 'Switch to Night Mode'}
              aria-label={isDark ? 'Switch to Day Mode' : 'Switch to Night Mode'}
            >
              {isDark ? (
                <Sun size={15} className="transition-transform duration-300 hover:rotate-45" />
              ) : (
                <Moon size={15} className="transition-transform duration-300 hover:-rotate-12" />
              )}
            </button>

            {/* Play Showreel Modal Trigger */}
            <button
              onClick={() => setIsShowreelOpen(true)}
              className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-day-border dark:border-agency-border text-day-subtext dark:text-agency-subtext hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white transition-all cursor-pointer shrink-0"
              title="Play Agency Showreel"
              aria-label="Play Agency Showreel"
            >
              <Play size={12} className="ml-0.5 fill-current" />
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden flex items-center justify-center p-2 text-day-subtext dark:text-agency-subtext hover:text-black dark:hover:text-white focus:outline-none cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white/98 dark:bg-black/98 text-black dark:text-white flex flex-col justify-between p-6 sm:p-10 md:hidden pt-20 animate-fadeIn">
          <div className="flex flex-col space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-day-border dark:border-agency-border">
              <div className="flex items-center gap-2 text-xs font-mono text-day-muted dark:text-agency-muted tracking-wider">
                <span className="h-2 w-2 rounded-full bg-digitify-purple animate-pulse" />
                <span>{currentTime}</span>
              </div>
              {/* Mobile theme toggle */}
              <button
                onClick={toggleTheme}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-day-border dark:border-agency-border text-xs font-mono text-day-subtext dark:text-agency-subtext hover:text-black dark:hover:text-white"
              >
                {isDark ? <Sun size={13} /> : <Moon size={13} />}
                <span>{isDark ? 'Day Mode' : 'Night Mode'}</span>
              </button>
            </div>

            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-2xl font-display font-medium tracking-tight flex items-center justify-between py-2 border-b border-day-border/50 dark:border-agency-border/40 ${
                      isActive
                        ? 'text-black dark:text-white pl-2 border-digitify-purple'
                        : 'text-day-subtext dark:text-agency-subtext hover:text-black dark:hover:text-white'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight size={18} className="opacity-40" />
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="pt-8 border-t border-day-border dark:border-agency-border flex flex-col space-y-4">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsShowreelOpen(true);
              }}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-full border border-day-border dark:border-agency-border text-xs uppercase tracking-widest text-black dark:text-white hover:bg-day-surface dark:hover:bg-agency-surface"
            >
              <Play size={13} />
              <span>Watch Showreel</span>
            </button>

            <div className="flex items-center justify-between text-xs text-day-muted dark:text-agency-muted font-mono pt-2">
              <span>DIGITIFY AGENCY</span>
              <span>© 2026</span>
            </div>
          </div>
        </div>
      )}

      {/* Showreel Modal */}
      <ShowreelModal
        isOpen={isShowreelOpen}
        onClose={() => setIsShowreelOpen(false)}
      />
    </>
  );
};
