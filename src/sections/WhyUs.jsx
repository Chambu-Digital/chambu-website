import React from 'react';
import { ArrowRight } from 'lucide-react'; // kept only for CTA button
import { WHY_US, PROCESS_STEPS, SITE } from '../data/siteData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './WhyUs.css';

export default function WhyUs() {
  const ref = useScrollAnimation();

  return (
    <section className="section whyus" id="why-us" ref={ref}>
      <div className="container">
        {/* Head */}
        <div className="whyus__head fade-up">
          <p className="section-label">Why Chambu Digital</p>
          <h2 className="section-title">Built for Business. <span>Made for Kenya.</span></h2>
          <p className="section-sub">
            We combine world-class technical expertise with deep local knowledge to deliver
            solutions that truly work for the Kenyan market.
          </p>
        </div>

        {/* Reasons grid */}
        <div className="whyus__grid">
          {WHY_US.map((item) => (
            <div key={item.title} className="whyus-card fade-up">
              <div className="whyus-card__emoji">{item.emoji}</div>
              <h3 className="whyus-card__title">{item.title}</h3>
              <p className="whyus-card__desc">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Process steps */}
        <div className="whyus__process fade-up">
          <div className="whyus__process-head">
            <p className="section-label">Our Process</p>
            <h3 className="whyus__process-title">How We Work</h3>
          </div>
          <div className="whyus__steps">
            {PROCESS_STEPS.map((step) => (
              <div key={step.step} className="whyus__step">
                <div className="whyus__step-num">{step.step}</div>
                <h4 className="whyus__step-title">{step.title}</h4>
                <p className="whyus__step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA strip */}
        <div className="whyus__cta fade-up">
          <div className="whyus__cta-copy">
            <h3>Ready to get started?</h3>
            <p>Join over 50 satisfied businesses across Kenya who trust Chambu Digital.</p>
          </div>
          <a
            href={SITE.waMsg("Hello Chambu Digital, I'd like to discuss a project with you.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Let's Talk <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
