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

  // Close mobile menu on route navigation and manage body scroll lock
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

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
      <header className="sticky top-0 z-40 w-full bg-white/95 dark:bg-[#08080a]/95 backdrop-blur-md border-b border-day-border dark:border-agency-border px-3 xs:px-4 sm:px-8 md:px-12 py-2.5 sm:py-3.5 transition-colors duration-200">
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
              className="h-8 xs:h-9 sm:h-10 md:h-11 lg:h-12 w-auto object-contain transition-opacity duration-200 group-hover:opacity-80"
            />
          </Link>

          {/* Center: Live Time / IST Ticker */}
          <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-day-muted dark:text-agency-muted tracking-wider">
            <span className="h-1.5 w-1.5 rounded-full bg-day-muted/60 dark:bg-agency-muted/60" />
            <span>{currentTime || '00:00, India'}</span>
          </div>

          {/* Right: Availability, Nav, Theme Toggle & Showreel */}
          <div className="flex items-center gap-1.5 xs:gap-2 sm:gap-3">
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
              className="flex items-center justify-center w-8 h-8 xs:w-9 xs:h-9 rounded-full border border-day-border dark:border-agency-border text-day-subtext dark:text-agency-subtext hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white transition-all cursor-pointer shrink-0 active:scale-95"
              title={isDark ? 'Switch to Day Mode' : 'Switch to Night Mode'}
              aria-label={isDark ? 'Switch to Day Mode' : 'Switch to Night Mode'}
            >
              {isDark ? (
                <Sun size={14} className="transition-transform duration-300 hover:rotate-45" />
              ) : (
                <Moon size={14} className="transition-transform duration-300 hover:-rotate-12" />
              )}
            </button>

            {/* Play Showreel Modal Trigger */}
            <button
              onClick={() => setIsShowreelOpen(true)}
              className="flex items-center justify-center w-8 h-8 xs:w-9 xs:h-9 rounded-full border border-day-border dark:border-agency-border text-day-subtext dark:text-agency-subtext hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white transition-all cursor-pointer shrink-0 active:scale-95"
              title="Play Agency Showreel"
              aria-label="Play Agency Showreel"
            >
              <Play size={12} className="ml-0.5 fill-current" />
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden flex items-center justify-center w-8 h-8 xs:w-9 xs:h-9 rounded-full border border-day-border dark:border-agency-border text-day-subtext dark:text-agency-subtext hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white focus:outline-none cursor-pointer shrink-0 active:scale-95"
              aria-label="Toggle Navigation Menu"
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen Mobile Navigation Drawer with Explicit Close & Safe Area Support */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white/98 dark:bg-[#08080a]/98 backdrop-blur-xl text-black dark:text-white flex flex-col justify-between p-4 xs:p-6 sm:p-10 md:hidden safe-pt safe-pb overflow-y-auto animate-fadeIn">
          <div className="flex flex-col space-y-6">
            {/* Top Bar with Brand + Close Button */}
            <div className="flex items-center justify-between pb-4 border-b border-day-border dark:border-agency-border">
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-2"
                aria-label="Digitify Home"
              >
                <img
                  src={logoSrc}
                  alt="Digitify Logo"
                  className="h-8 w-auto object-contain"
                />
              </Link>

              <div className="flex items-center gap-2">
                {/* Mobile theme toggle */}
                <button
                  onClick={toggleTheme}
                  className="flex items-center justify-center w-10 h-10 rounded-full border border-day-border dark:border-agency-border text-day-subtext dark:text-agency-subtext hover:text-black dark:hover:text-white active:scale-95"
                  aria-label="Toggle Theme"
                >
                  {isDark ? <Sun size={15} /> : <Moon size={15} />}
                </button>

                {/* Explicit Close Button */}
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center w-10 h-10 rounded-full border border-day-border dark:border-agency-border text-day-subtext dark:text-agency-subtext hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white active:scale-95 cursor-pointer"
                  aria-label="Close Navigation Menu"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Live IST Status indicator */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-day-border dark:border-agency-border bg-day-surface dark:bg-agency-surface text-xs font-mono text-day-subtext dark:text-agency-subtext w-fit">
              <span className="h-1.5 w-1.5 rounded-full bg-digitify-purple animate-pulse" />
              <span>{currentTime}</span>
            </div>

            {/* Touch-Friendly Nav Links */}
            <nav className="flex flex-col divide-y divide-day-border/60 dark:divide-agency-border/60">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`min-h-[52px] text-xl xs:text-2xl font-display font-medium tracking-tight flex items-center justify-between py-3 transition-colors ${
                      isActive
                        ? 'text-digitify-purple font-semibold pl-1'
                        : 'text-day-subtext dark:text-agency-subtext hover:text-black dark:hover:text-white active:text-black dark:active:text-white'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight size={18} className={isActive ? 'text-digitify-purple' : 'opacity-40'} />
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Drawer Footer Actions */}
          <div className="pt-6 border-t border-day-border dark:border-agency-border flex flex-col space-y-3 mt-6">
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-black text-white dark:bg-white dark:text-black text-xs uppercase tracking-widest font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors shadow-sm"
            >
              <span>Start a Project</span>
              <ArrowUpRight size={14} />
            </Link>

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsShowreelOpen(true);
              }}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-full border border-day-border dark:border-agency-border text-xs uppercase tracking-widest text-black dark:text-white hover:bg-day-surface dark:hover:bg-agency-surface transition-colors"
            >
              <Play size={13} />
              <span>Watch Showreel</span>
            </button>

            <div className="flex items-center justify-between text-[11px] text-day-muted dark:text-agency-muted font-mono pt-1">
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
