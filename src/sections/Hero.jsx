import React, { useEffect, useRef } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { SITE, SERVICES } from '../data/siteData';
import './Hero.css';

export default function Hero() {
  const canvasRef = useRef(null);

  /* Animated dot grid */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let raf;
    let w, h, dots = [];

    function resize() {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
      buildDots();
    }

    function buildDots() {
      dots = [];
      const gap = 38;
      for (let x = 0; x < w; x += gap) {
        for (let y = 0; y < h; y += gap) {
          dots.push({ x, y, r: Math.random() * 0.8 + 0.3, pulse: Math.random() * Math.PI * 2 });
        }
      }
    }

    let t = 0;
    function draw() {
      ctx.clearRect(0, 0, w, h);
      t += 0.012;
      dots.forEach((d) => {
        const alpha = (Math.sin(t + d.pulse) * 0.5 + 0.5) * 0.35 + 0.05;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(160,210,255,${alpha})`;
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    }

    resize();
    draw();
    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section className="hero">
      {/* Background image + brand overlay */}
      <div className="hero__bg" />
      <div className="hero__overlay" />

      <canvas ref={canvasRef} className="hero__canvas" />
      <div className="hero__glow hero__glow--left" />
      <div className="hero__glow hero__glow--right" />

      <div className="container hero__inner">
        <div className="hero__content">
          {/* Badge */}
          <div className="hero__badge">
           Comprehensive Tech Solutions
          </div>

          <h1 className="hero__title">
            Your Vision,
          Our <span className="hero__title-accent"> Expertise.</span>
          </h1>

          <p className="hero__desc">
            From stunning websites and powerful systems to creative brand designs and digital
            marketing  we are your one-stop digital partner in Kenya.
          </p>
          <br/>

          {/* Service pills */}
          <div className="hero__pills">
            {SERVICES.map((s) => (
              <span key={s.id} className="hero__pill" style={{ '--pill-clr': s.color }}>
                {s.emoji} {s.title}
              </span>
            ))}
          </div>

          <div className="hero__actions">
            <a href={SITE.waMsg("Hello Chambu Digital, I'd like to start a project.")} target="_blank" rel="noopener noreferrer" className="btn btn-primary hero__btn">
              Start a Project <ArrowRight size={16} />
            </a>
            <a href="#projects" className="btn btn-outline hero__btn" onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}>
              View Our Work
            </a>
          </div>

        </div>

      </div>

      <button className="hero__scroll-hint" onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}>
        <ChevronDown size={18} />
      </button>
    </section>
  );
}
