import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { SERVICES, SITE } from '../data/siteData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Services.css';

export default function Services() {
  const ref = useScrollAnimation();
  const [activeId, setActiveId] = useState(SERVICES[0].id);
  const active = SERVICES.find((s) => s.id === activeId);

  return (
    <section className="section services" id="services" ref={ref}>
      <div className="container">
        {/* Head */}
        <div className="services__head fade-up">
          <p className="section-label">What We Do</p>
          <h2 className="section-title">One Partner. <span>Every Digital Need.</span></h2>
          <p className="section-sub">
            From your first logo to a full enterprise system  we handle every aspect of your digital journey
            so you can focus on what you do best.
          </p>
        </div>

        {/* Interactive layout */}
        <div className="services__layout fade-up">
          {/* Service tabs (left) */}
          <div className="services__tabs">
            {SERVICES.map((s) => (
              <button
                key={s.id}
                className={`services__tab ${activeId === s.id ? 'services__tab--active' : ''}`}
                onClick={() => setActiveId(s.id)}
                style={{ '--svc-clr': s.color }}
              >
                <span className="services__tab-emoji">{s.emoji}</span>
                <span className="services__tab-label">{s.title}</span>
                <ArrowRight size={14} className="services__tab-arrow" />
              </button>
            ))}
          </div>

          {/* Detail panel (right) */}
          <div
            className="services__detail"
            key={active.id}
            style={{ '--svc-clr': active.color, '--svc-clr-dim': active.colorDim }}
          >
            <div className="services__detail-header">
              <div className="services__detail-emoji">{active.emoji}</div>
              <div>
                <h3 className="services__detail-title">{active.title}</h3>
                <p className="services__detail-desc">{active.desc}</p>
              </div>
            </div>

            <ul className="services__detail-features">
              {active.features.map((f) => (
                <li key={f} className="services__detail-feature">
                  <Check size={14} className="services__check" />
                  {f}
                </li>
              ))}
            </ul>

            <div className="services__detail-tags">
              {active.tags.map((t) => (
                <span key={t} className="service-card__tag">{t}</span>
              ))}
            </div>

            <a
              href={SITE.waMsg(`Hello Chambu Digital, I'm interested in your ${active.title} services.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary services__detail-cta"
            >
              Discuss This Service <ArrowRight size={15} />
            </a>
          </div>
        </div>

        {/* Bottom mini-cards grid */}
        <div className="services__mini-grid">
          {SERVICES.map((s) => (
            <a
              key={s.id}
              href={SITE.waMsg(`Hello Chambu Digital, I'm interested in your ${s.title} services.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="services__mini-card"
              style={{ '--svc-clr': s.color, '--svc-clr-dim': s.colorDim }}
            >
              <span className="services__mini-emoji">{s.emoji}</span>
              <span className="services__mini-title">{s.title}</span>
              <ArrowRight size={13} className="services__mini-arrow" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
