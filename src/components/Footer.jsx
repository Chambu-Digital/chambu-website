import React from 'react';
import { Facebook, Instagram, Twitter, Github, Linkedin, MapPin, Phone, Mail } from 'lucide-react';
import { SITE, NAV_LINKS } from '../data/siteData';
import './Footer.css';

const SERVICES_LINKS = [
  'Website Development',
  'System Development',
  'IT Consultancy',
  'App Development',
  'Creative Design',
  'Digital Marketing',
];

const COMPANY_LINKS = [
  { label: 'Why Choose Us', href: '#why-us' },
  { label: 'Our Projects', href: '#projects' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Payment API', href: '#payment' },
  { label: 'Contact Us', href: '#contact' },
];

const SOCIALS = [
  { icon: <Facebook size={15} />, href: SITE.socials.facebook, label: 'Facebook' },
  { icon: <Instagram size={15} />, href: SITE.socials.instagram, label: 'Instagram' },
  { icon: <Twitter size={15} />, href: SITE.socials.twitter, label: 'Twitter' },
  { icon: <Github size={15} />, href: SITE.socials.github, label: 'GitHub' },
  { icon: <Linkedin size={15} />, href: SITE.socials.linkedin, label: 'LinkedIn' },
];

const BADGES = [
  { label: 'Trusted Agency' },
  { label: '50+ Projects' },
  { label: '24/7 Support' },
];

const scrollTo = (href) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

export default function Footer() {
  return (
    
    <footer className="footer">
      <br/>
      <div className="footer__bg" />

      <div className="container footer__inner">
        {/* Brand column */}
        
        <div className="footer__brand">

          <a href="#" className="footer__logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="footer__logo-icon">
              <img src="/logo.svg" alt="Chambu Digital logo" width="22" height="22" />
            </div>
            <span className="footer__logo-text">Chambu <span>Digital</span></span>
          </a>

          <p className="footer__brand-desc">{SITE.description}</p>

      

          <div className="footer__socials">
            {SOCIALS.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="footer__social" aria-label={s.label}>
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="footer__col">
          <h4 className="footer__col-title">Services</h4>
          <ul className="footer__links">
            {SERVICES_LINKS.map((l) => (
              <li key={l}>
                <a
                  href={SITE.waMsg(`Hello Chambu Digital, I'm interested in your ${l} services.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__link"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div className="footer__col">
          <h4 className="footer__col-title">Company</h4>
          <ul className="footer__links">
            {COMPANY_LINKS.map((l) => (
              <li key={l.label}>
                <button className="footer__link footer__link--btn" onClick={() => scrollTo(l.href)}>
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="footer__col">
          <h4 className="footer__col-title">Contact</h4>
          <ul className="footer__links">
            <li className="footer__contact-item">
              <MapPin size={13} /> {SITE.location}
            </li>
            <li>
              <a href={SITE.wa1} target="_blank" rel="noopener noreferrer" className="footer__link">
                <Phone size={13} /> {SITE.phone1}
              </a>
            </li>
            <li>
              <a href={SITE.wa2} target="_blank" rel="noopener noreferrer" className="footer__link">
                <Phone size={13} /> {SITE.phone2}
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} className="footer__link">
                <Mail size={13} /> {SITE.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
<br/>
      {/* Bottom bar */}
      <div className="container footer__bottom">
        <span>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</span>
      
        <div className="footer__bottom-center">
          <a href="#" className="footer__bottom-link">Privacy Policy</a>
          <a href="#" className="footer__bottom-link">Terms of Service</a>
          <a href="#" className="footer__bottom-link">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
}
