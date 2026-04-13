import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { SITE } from '../data/siteData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Marketing.css';

const TABS = [
  { id: 'search', label: 'Search Ads' },
  { id: 'video', label: 'Video Ads' },
  { id: 'display', label: 'Display Ads' },
  { id: 'seo', label: 'SEO' },
];

const TAB_CONTENT = {
  search: {
    title: 'Google Search Ads',
    desc: 'Capture high-intent prospects actively searching for your products or services with strategic keyword targeting and compelling ad copy that converts.',
    bullets: ['Keyword research & targeting', 'A/B tested ad copy', 'Conversion tracking', 'Bid strategy optimization'],
    fee: '30% of ad spend',
    example: 'KES 50,000 ad spend + KES 15,000 service = KES 65,000',
    waMsg: "Hello Chambu Digital, I'm interested in your Google Search Ads services.",
  },
  video: {
    title: 'Google Video Ads',
    desc: 'Engage your audience with compelling video ads on YouTube and across the web to build brand awareness and drive conversions at scale.',
    bullets: ['YouTube pre-roll & bumper ads', 'Audience targeting', 'View-through conversions', 'Video performance analytics'],
    fee: '30% of ad spend',
    example: 'KES 50,000 ad spend + KES 15,000 service = KES 65,000',
    waMsg: "Hello Chambu Digital, I'm interested in your Google Video Ads services.",
  },
  display: {
    title: 'Google Display Ads',
    desc: 'Expand your reach with visually striking banner ads that build brand awareness and retarget potential customers across the web.',
    bullets: ['Custom banner design', 'Retargeting campaigns', 'Placement optimization', 'Brand lift measurement'],
    fee: '30% of ad spend',
    example: 'KES 50,000 ad spend + KES 15,000 service = KES 65,000',
    waMsg: "Hello Chambu Digital, I'm interested in your Google Display Ads services.",
  },
  seo: {
    title: 'SEO & Optimization',
    desc: 'Dominate organic search results with technical SEO, content strategy, and link-building campaigns that deliver sustainable long-term growth.',
    bullets: ['Technical SEO audit', 'On-page optimization', 'Content strategy', 'Local SEO for Kenya'],
    fee: 'Monthly retainer',
    example: 'Starting from KES 20,000/month',
    waMsg: "Hello Chambu Digital, I'm interested in your SEO services.",
  },
};

export default function Marketing() {
  const [active, setActive] = useState('search');
  const ref = useScrollAnimation();
  const content = TAB_CONTENT[active];

  return (
    <section className="section marketing" id="marketing" ref={ref}>
      <div className="container">
        <div className="marketing__layout">
          {/* Left: copy */}
          <div className="marketing__left fade-up">
            <p className="section-label">Digital Marketing</p>
            <h2 className="section-title">Amplify Your <span>Brand</span></h2>
            <p className="section-sub">
              Data-driven Google Ads campaigns and SEO strategies that drive qualified traffic, increase conversions, and deliver measurable ROI.
            </p>

            {/* Tabs */}
            <div className="marketing__tabs">
              {TABS.map((t) => (
                <button
                  key={t.id}
                  className={`marketing__tab ${active === t.id ? 'marketing__tab--active' : ''}`}
                  onClick={() => setActive(t.id)}
                >
                  {t.label}
                </button>
              ))}
            </div>

            <a
              href={SITE.waMsg("Hello Chambu Digital, I'd like to discuss digital marketing solutions.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Boost Your Presence <ArrowRight size={15} />
            </a>
          </div>

          {/* Right: tab content card */}
          <div className="marketing__right fade-up">
            <div className="marketing__card card" key={active}>
              <h3 className="marketing__card-title">{content.title}</h3>
              <p className="marketing__card-desc">{content.desc}</p>

              <ul className="marketing__bullets">
                {content.bullets.map((b) => (
                  <li key={b} className="marketing__bullet">
                    <span className="marketing__bullet-dot" />
                    {b}
                  </li>
                ))}
              </ul>

              <div className="marketing__pricing-info">
                <div className="marketing__info-row">
                  <span className="marketing__info-label">Service fee</span>
                  <span className="marketing__info-value">{content.fee}</span>
                </div>
                <div className="marketing__info-row">
                  <span className="marketing__info-label">Example</span>
                  <span className="marketing__info-example">{content.example}</span>
                </div>
              </div>

              <a
                href={SITE.waMsg(content.waMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline marketing__card-cta"
              >
                Get Started <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
