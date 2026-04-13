import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { PROJECTS, SITE } from '../data/siteData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Projects.css';

const CATEGORIES = ['All', 'Website', 'E-Commerce', 'POS', 'Dashboards', 'System Solutions'];

function BrowserMockup({ project }) {
  const [logoFailed, setLogoFailed] = useState(false);
  const domain = project.url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');
  const showLogo = project.logo && !logoFailed;

  return (
    <div className="browser-mockup" style={{ '--project-clr': project.color }}>
      {/* Chrome bar */}
      <div className="browser-mockup__chrome">
        <div className="browser-mockup__dots">
          <span /><span /><span />
        </div>
        <div className="browser-mockup__url">{domain}</div>
        <ExternalLink size={11} className="browser-mockup__ext" />
      </div>

      {/* Viewport — logo or initials fallback */}
      <div
        className="browser-mockup__viewport"
        style={showLogo
          ? { background: project.logoBg || '#ffffff' }
          : undefined
        }
      >
        {showLogo ? (
          <img
            src={project.logo}
            alt={`${project.title} logo`}
            className="browser-mockup__logo"
            onError={() => setLogoFailed(true)}
          />
        ) : (
          <>
            <div className="browser-mockup__initials">{project.initials}</div>
            <div className="browser-mockup__tagline">{project.subtitle}</div>
          </>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  const [active, setActive] = useState('All');
  const ref = useScrollAnimation();

  const filtered = active === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  return (
    <section className="section projects" id="projects" ref={ref}>
      <div className="container">
        <div className="projects__head fade-up">
          <p className="section-label">Portfolio</p>
          <h2 className="section-title">Featured <span>Projects</span></h2>
          <p className="section-sub">
            Real websites and systems we've built for businesses across Kenya — live and serving customers every day.
          </p>
        </div>

        {/* Category filters */}
        <div className="projects__filters fade-up">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              className={`projects__filter ${active === c ? 'projects__filter--active' : ''}`}
              onClick={() => setActive(c)}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="projects__grid">
          {filtered.map((p) => (
            <div key={p.id} className="project-card fade-up">
              <BrowserMockup project={p} />
              <div className="project-card__body">
                <span className="project-card__category">{p.category}</span>
                <h3 className="project-card__title">{p.title}</h3>
                <p className="project-card__desc">{p.desc}</p>
                <div className="project-card__tags">
                  {p.tags.map((t) => (
                    <span key={t} className="project-card__tag">{t}</span>
                  ))}
                </div>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card__link"
                >
                  View Live Site <ExternalLink size={13} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="projects__cta fade-up">
          <a
            href={SITE.waMsg("Hello Chambu Digital, I'd like to request your full portfolio.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            Request Full Portfolio
          </a>
        </div>
      </div>
    </section>
  );
}
