import React from 'react';
import { MessageCircle, Mail, MapPin, ArrowRight, Phone } from 'lucide-react';
import { SITE } from '../data/siteData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Contact.css';

export default function Contact() {
  const ref = useScrollAnimation();

  return (
    <section className="section contact" id="contact" ref={ref}>
      <div className="container">
        {/* CTA band */}
        <div className="contact__cta-band fade-up">
          <div className="contact__cta-band-bg" />
          <div className="contact__cta-inner">
            <div className="contact__cta-copy">
              <h2 className="contact__cta-title">Ready to Accelerate<br />Your Business?</h2>
              <p className="contact__cta-sub">
                Let's collaborate to create powerful digital solutions that drive results
                and transform your vision into reality.
              </p>
            </div>
            <div className="contact__cta-actions">
              <a
                href={SITE.waMsg("Hello Chambu Digital, I'd like to schedule a consultation about my project.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary contact__cta-btn"
              >
                Start a Conversation <ArrowRight size={16} />
              </a>
              <a
                href={SITE.waMsg("Hello Chambu Digital, I'd like to see some examples of your work.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline contact__cta-btn"
              >
                Request Portfolio
              </a>
            </div>
          </div>
        </div>

        {/* Contact cards */}
        <div className="contact__cards fade-up">
          <a href={SITE.wa1} target="_blank" rel="noopener noreferrer" className="contact-card card">
            <div className="contact-card__icon contact-card__icon--whatsapp">
              <MessageCircle size={20} />
            </div>
            <div>
              <div className="contact-card__label">WhatsApp</div>
              <div className="contact-card__value">{SITE.phone1}</div>
              <div className="contact-card__value">{SITE.phone2}</div>
            </div>
          </a>

          <a href={`mailto:${SITE.email}`} className="contact-card card">
            <div className="contact-card__icon contact-card__icon--email">
              <Mail size={20} />
            </div>
            <div>
              <div className="contact-card__label">Email</div>
              <div className="contact-card__value">{SITE.email}</div>
            </div>
          </a>

          <div className="contact-card card">
            <div className="contact-card__icon contact-card__icon--location">
              <MapPin size={20} />
            </div>
            <div>
              <div className="contact-card__label">Location</div>
              <div className="contact-card__value">{SITE.location}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
