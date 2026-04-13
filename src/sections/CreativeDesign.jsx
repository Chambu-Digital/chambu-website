import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { SITE } from '../data/siteData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './CreativeDesign.css';

const DESIGN_WORKS = [
  {  title: 'Logo Design', desc: 'Unique logos that capture your brand essence', bg: '#fdf4ff' },
  {  title: 'Business Cards', desc: 'Premium cards that make a first impression count', bg: '#fff7ed' },
  {  title: 'Letterheads', desc: 'Professional stationery for all communications', bg: '#f0fdf4' },
  {  title: 'Social Media Kits', desc: 'Consistent branded assets for all platforms', bg: '#eff6ff' },
  {  title: 'Flyers & Brochures', desc: 'Eye-catching print materials that sell', bg: '#fff1f2' },
  {  title: 'UI/UX Design', desc: 'Intuitive interfaces your users will love', bg: '#f0f9ff' },
];

export default function CreativeDesign() {
  const ref = useScrollAnimation();
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="section creative-design" id="design" ref={ref}>
      <div className="container">
        {/* Head */}
        <div className="design__head fade-up">
          <p className="section-label">Creative Design</p>
          <h2 className="section-title">Brands That <span>Stand Out.</span></h2>
          <p className="section-sub">
            Your brand is your first impression. We create stunning visual identities that communicate
            your values, attract your ideal clients, and set you apart from the competition.
          </p>
        </div>

        {/* Design works showcase */}
        <div className="design__works fade-up">
          {DESIGN_WORKS.map((work) => (
            <div
              key={work.title}
              className="design-work"
              style={{ '--work-bg': work.bg }}
              onMouseEnter={() => setHoveredId(work.title)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="design-work__body">
                <h4 className="design-work__title">{work.title}</h4>
                <p className="design-work__desc">{work.desc}</p>
              </div>
              <ArrowRight
                size={14}
                className={`design-work__arrow ${hoveredId === work.title ? 'design-work__arrow--visible' : ''}`}
              />
            </div>
          ))}
        </div>

      

        {/* Bottom note */}
        <p className="design__note fade-up">
          Need something custom?{' '}
          <a
            href={SITE.waMsg("Hello Chambu Digital, I need a custom design quote.")}
            target="_blank"
            rel="noopener noreferrer"
          >
            Send us your brief and we'll quote you for free →
          </a>
        </p>
      </div>
    </section>
  );
}
