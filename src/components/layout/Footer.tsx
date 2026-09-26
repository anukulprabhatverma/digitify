import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { scrollToService } from '../../utils/scrollUtils';

export const Footer: React.FC = () => {
  const { isDark } = useTheme();

  const logoSrc = isDark
    ? '/brand/digitify-logo-white.png'
    : '/brand/digitify-logo-black.png';

  const handleServiceClick = (targetHash: string, e: React.MouseEvent) => {
    if (window.location.pathname === '/services') {
      e.preventDefault();
      window.history.pushState(null, '', `/services#${targetHash}`);
      scrollToService(targetHash, true);
    }
  };

  return (
    <footer className="w-full border-t border-day-border dark:border-agency-border bg-white dark:bg-[#08080a] text-black dark:text-white pt-12 xs:pt-16 sm:pt-20 pb-10 sm:pb-12 px-4 sm:px-8 md:px-12 transition-colors duration-200 safe-pb">
      <div className="max-w-7xl mx-auto flex flex-col space-y-10 sm:space-y-16">
        {/* Top Row: Brand Statement & Primary Channels */}
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-12 gap-8 sm:gap-10 md:gap-8">
          {/* Brand mark & Tagline */}
          <div className="xs:col-span-2 md:col-span-5 flex flex-col space-y-4">
            <Link to="/" className="inline-block" aria-label="Digitify Home">
              <img
                src={logoSrc}
                alt="Digitify Logo"
                className="h-10 sm:h-12 w-auto object-contain transition-opacity hover:opacity-85"
              />
            </Link>
            <p className="text-sm text-day-subtext dark:text-agency-subtext max-w-sm leading-relaxed">
              Digital marketing, branding, design, and experiences built to move businesses forward.
            </p>
            <div className="pt-2">
              <span className="text-xs font-mono text-day-muted dark:text-agency-muted uppercase tracking-widest block mb-1">
                Direct Inquiries
              </span>
              <a
                href="mailto:anukulprabhatverma@gmail.com"
                className="text-sm text-black dark:text-white hover:text-digitify-purple transition-colors font-mono underline underline-offset-4"
              >
                anukulprabhatverma@gmail.com
              </a>
              <span className="block text-[11px] text-day-muted dark:text-agency-muted mt-1 font-mono">
                Official Inquiries & Delivery
              </span>
            </div>
          </div>

          {/* Services Links */}
          <div className="xs:col-span-1 md:col-span-3 flex flex-col space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-day-muted dark:text-agency-muted">
              Services
            </span>
            <ul className="space-y-2.5 text-sm text-day-subtext dark:text-agency-subtext">
              <li>
                <Link
                  to="/services#digital-marketing"
                  onClick={(e) => handleServiceClick('digital-marketing', e)}
                  className="hover:text-black dark:hover:text-white transition-colors cursor-pointer inline-block py-0.5"
                >
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link
                  to="/services#performance-marketing"
                  onClick={(e) => handleServiceClick('performance-marketing', e)}
                  className="hover:text-black dark:hover:text-white transition-colors cursor-pointer inline-block py-0.5"
                >
                  Performance Marketing
                </Link>
              </li>
              <li>
                <Link
                  to="/services#social-media-management"
                  onClick={(e) => handleServiceClick('social-media-management', e)}
                  className="hover:text-black dark:hover:text-white transition-colors cursor-pointer inline-block py-0.5"
                >
                  Social Media Management
                </Link>
              </li>
              <li>
                <Link
                  to="/services#branding"
                  onClick={(e) => handleServiceClick('branding', e)}
                  className="hover:text-black dark:hover:text-white transition-colors cursor-pointer inline-block py-0.5"
                >
                  Branding & Identity
                </Link>
              </li>
              <li>
                <Link
                  to="/services#graphic-design"
                  onClick={(e) => handleServiceClick('graphic-design', e)}
                  className="hover:text-black dark:hover:text-white transition-colors cursor-pointer inline-block py-0.5"
                >
                  Graphic Design
                </Link>
              </li>
              <li>
                <Link
                  to="/services#web-design"
                  onClick={(e) => handleServiceClick('web-design', e)}
                  className="hover:text-black dark:hover:text-white transition-colors cursor-pointer inline-block py-0.5"
                >
                  Web Design & Experiences
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation Links */}
          <div className="xs:col-span-1 md:col-span-2 flex flex-col space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-day-muted dark:text-agency-muted">
              Navigation
            </span>
            <ul className="space-y-2.5 text-sm text-day-subtext dark:text-agency-subtext">
              <li>
                <Link to="/about" className="hover:text-black dark:hover:text-white transition-colors inline-block py-0.5">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-black dark:hover:text-white transition-colors inline-block py-0.5">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/work" className="hover:text-black dark:hover:text-white transition-colors inline-block py-0.5">
                  Work (06)
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="hover:text-black dark:hover:text-white transition-colors inline-block py-0.5">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-black dark:hover:text-white transition-colors inline-block py-0.5">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="xs:col-span-2 md:col-span-2 flex flex-col space-y-3 pt-2 xs:pt-0">
            <span className="text-xs font-mono uppercase tracking-widest text-day-muted dark:text-agency-muted">
              Connect
            </span>
            <ul className="flex flex-row flex-wrap xs:flex-col gap-x-5 gap-y-2.5 text-sm text-day-subtext dark:text-agency-subtext">
              <li>
                <a
                  href="https://www.instagram.com/digitify.official/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Digitify on Instagram (opens in a new tab)"
                  className="hover:text-black dark:hover:text-white transition-colors inline-flex items-center gap-1 group cursor-pointer"
                >
                  <span>Instagram</span>
                  <ArrowUpRight size={13} className="opacity-40 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black dark:hover:text-white transition-colors inline-flex items-center gap-1 group"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight size={13} className="opacity-40 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href="https://behance.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black dark:hover:text-white transition-colors inline-flex items-center gap-1 group"
                >
                  <span>Behance</span>
                  <ArrowUpRight size={13} className="opacity-40 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href="https://dribbble.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black dark:hover:text-white transition-colors inline-flex items-center gap-1 group"
                >
                  <span>Dribbble</span>
                  <ArrowUpRight size={13} className="opacity-40 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Row: Copyright & Legal */}
        <div className="pt-6 sm:pt-8 border-t border-day-border dark:border-agency-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-day-muted dark:text-agency-muted text-center sm:text-left">
          <p>© 2026 Digitify. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <Link
              to="/privacy"
              className="hover:text-black dark:hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-day-border dark:text-agency-border">|</span>
            <span className="text-day-subtext dark:text-agency-subtext">
              Editorial Creative Agency
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
