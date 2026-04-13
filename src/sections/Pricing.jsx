import React, { useState } from 'react';
import { Check, ArrowRight, Sparkles } from 'lucide-react';
import { PRICING, DESIGN_PRICING, SITE } from '../data/siteData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Pricing.css';

const TABS = [
  { id: 'web', label: 'Website & Systems' },
  { id: 'design', label: 'Creative Design' },
];

function PlanCards({ plans, waContext }) {
  return (
    <div className="pricing__grid">
      {plans.map((plan) => (
        <div key={plan.id} className={`pricing-card fade-up ${plan.highlight ? 'pricing-card--featured' : ''}`}>
          {plan.badge && (
            <div className="pricing-card__badge">
              <Sparkles size={12} /> {plan.badge}
            </div>
          )}
          <div className="pricing-card__header">
            <h3 className="pricing-card__name">{plan.name}</h3>
            <div className="pricing-card__price">
              {plan.originalPrice && (
                <span className="pricing-card__original">{plan.originalPrice}</span>
              )}
              <span className="pricing-card__amount">{plan.price}</span>
              <span className="pricing-card__period">/ {plan.period}</span>
            </div>
          </div>

          <ul className="pricing-card__features">
            {plan.features.map((f) => (
              <li key={f} className="pricing-card__feature">
                <Check size={14} /> {f}
              </li>
            ))}
          </ul>

          <a
            href={SITE.waMsg(
              plan.id === 'enterprise'
                ? `Hello Chambu Digital, I'm interested in your Enterprise solution.`
                : `Hello Chambu Digital, I'm interested in your ${plan.name} ${waContext} package.`
            )}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn pricing-card__cta ${plan.highlight ? 'btn-primary' : 'btn-outline'}`}
          >
            {plan.id === 'enterprise' ? 'Request Custom Quote' : 'Get Started'}
            <ArrowRight size={15} />
          </a>
        </div>
      ))}
    </div>
  );
}

export default function Pricing() {
  const ref = useScrollAnimation();
  const [activeTab, setActiveTab] = useState('web');

  return (
    <section className="section pricing" id="pricing" ref={ref}>
      <div className="container">
        <div className="pricing__head fade-up">
          <p className="section-label">Investment Plans</p>
          <h2 className="section-title">Clear Pricing. <span>No Surprises.</span></h2>
          <p className="section-sub">
            Transparent pricing for every service we offer pick a plan or reach out for a custom quote.
          </p>
        </div>

        {/* Tabs */}
        {/* <div className="pricing__tabs fade-up">
          {TABS.map((t) => (
            <button
              key={t.id}
              className={`pricing__tab ${activeTab === t.id ? 'pricing__tab--active' : ''}`}
              onClick={() => setActiveTab(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div> */}

        {activeTab === 'web'
          ? <PlanCards plans={PRICING} waContext="web development" />
          : <PlanCards plans={DESIGN_PRICING} waContext="design" />
        }

        <p className="pricing__note fade-up">
          Need something custom?{' '}
          <a href={SITE.waMsg("Hello Chambu Digital, I'd like to discuss custom pricing options.")} target="_blank" rel="noopener noreferrer">
            Let's discuss your specific requirements →
          </a>
        </p>
      </div>
    </section>
  );
}
