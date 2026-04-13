import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SITE } from '../data/siteData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Payment.css';

const NETWORKS = [
  { name: 'M-Pesa', color: '#00b300', short: 'MP' },
  { name: 'Airtel Money', color: '#e2000f', short: 'AM' },
  { name: 'T-Kash', color: '#0047ba', short: 'TK' },
];

const FEATURES = [
  {
    title: 'Multi-Network Payments',
    desc: 'Accept M-Pesa, Airtel Money & T-Kash through one unified API with real-time STK Push.',
    tags: ['M-Pesa STK', 'Airtel Money', 'T-Kash', 'Real-time'],
  },
  {
    title: 'Multi-Client Support',
    desc: 'Manage multiple businesses and merchants from a single API platform with separate transaction logs.',
    tags: ['Individual API keys', 'Merchant settings', 'Transaction logs'],
  },
  {
    title: 'Developer Friendly',
    desc: 'RESTful API with comprehensive documentation, code examples, and 24/7 uptime guarantee.',
    tags: ['REST API', 'Webhooks', 'SDKs', '24/7 uptime'],
  },
];

export default function Payment() {
  const ref = useScrollAnimation();

  return (
    <section className="section payment" id="payment" ref={ref}>
      <div className="container">
        <div className="payment__head fade-up">
          <p className="section-label">Payment Gateway</p>
          <h2 className="section-title">One API. <span>All Networks.</span></h2>
          <p className="section-sub">
            Accept payments from M-Pesa, Airtel Money & T-Kash through a single unified API.
            Perfect for POS systems, e-commerce sites, and mobile applications.
          </p>
        </div>

        {/* Network badges */}
        <div className="payment__networks fade-up">
          {NETWORKS.map((n) => (
            <div key={n.name} className="network-badge">
              <div className="network-badge__icon" style={{ '--net-clr': n.color }}>
                {n.short}
              </div>
              <span className="network-badge__name">{n.name}</span>
             
            </div>
          ))}
        </div>

        {/* Feature cards */}
        <div className="payment__features">
          {FEATURES.map((f, i) => (
            <div key={i} className="payment-feat card fade-up">
              <h3 className="payment-feat__title">{f.title}</h3>
              <p className="payment-feat__desc">{f.desc}</p>
              <div className="payment-feat__tags">
                {f.tags.map((t) => (
                  <span key={t} className="service-card__tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div className="payment__cta-strip fade-up">
          <div className="payment__cta-text">
            <span>Start FREE with 100 transactions · No setup fees · Secure & reliable</span>
          </div>
          <div className="payment__cta-btns">
            <a
              href="https://www.chambudigital.co.ke/register"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Register Your Business <ArrowRight size={15} />
            </a>
            <a
              href="https://www.chambudigital.co.ke/login"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              Login to Dashboard
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
