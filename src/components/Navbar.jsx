import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS, SITE } from '../data/siteData';
import './Navbar.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLink = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
     

      <div className="navbar__inner container">
        {/* Logo */}
        <a href="#" className="navbar__logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="navbar__logo-icon">
            <img src="/logo.svg" alt="Chambu Digital logo" width="22" height="22" />
          </div>
          <span className="navbar__logo-text">Chambu <span>Digital</span></span>
        </a>

        {/* Desktop nav */}
        <nav className="navbar__links">
          {NAV_LINKS.map((l) => (
            <button key={l.label} className="navbar__link" onClick={() => handleLink(l.href)}>
              {l.label}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <a href={SITE.wa1} target="_blank" rel="noopener noreferrer" className="btn btn-primary navbar__cta">
          Get Started
        </a>

        {/* Mobile toggle */}
        <button className="navbar__toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`navbar__drawer ${open ? 'navbar__drawer--open' : ''}`}>
        {NAV_LINKS.map((l) => (
          <button key={l.label} className="navbar__drawer-link" onClick={() => handleLink(l.href)}>
            {l.label}
          </button>
        ))}
        <div className="navbar__drawer-divider" />
        <a href={SITE.wa1} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ marginTop: '0.25rem', width: '100%', justifyContent: 'center' }}>
          Get Started
        </a>
      </div>
    </header>
  );
}
