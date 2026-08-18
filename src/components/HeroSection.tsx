'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const rotatingWords = ['Strategy', 'Technology', 'Innovation', 'Transformation'];

const capabilities = [
  // {
  //   number: '01',
  //   title: 'Strategy',
  //   text: 'Turning complex business challenges into clear strategic direction.',
  // },
  // {
  //   number: '02',
  //   title: 'Technology',
  //   text: 'Building technology-led solutions that create measurable value.',
  // },
  // {
  //   number: '03',
  //   title: 'Transformation',
  //   text: 'Helping organizations adapt, evolve, and grow with confidence.',
  // },
];

export default function HeroSection() {
  const [activeWord, setActiveWord] = useState(0);
  const [mousePosition, setMousePosition] = useState({
    x: 50,
    y: 50,
  });

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveWord((current) => (current + 1) % rotatingWords.length);
    }, 2600);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: (event.clientX / window.innerWidth) * 100,
        y: (event.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section
      className="hero-section"
      style={
        {
          '--mouse-x': `${mousePosition.x}%`,
          '--mouse-y': `${mousePosition.y}%`,
        } as React.CSSProperties
      }
    >
      {/* Background */}
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-noise" aria-hidden="true" />

      <div className="hero-glow hero-glow-blue" aria-hidden="true" />
      <div className="hero-glow hero-glow-red" aria-hidden="true" />
      <div className="hero-mouse-glow" aria-hidden="true" />

      {/* Decorative background shapes */}
      <div className="hero-orbit hero-orbit-one" aria-hidden="true">
        <span />
      </div>

      <div className="hero-orbit hero-orbit-two" aria-hidden="true">
        <span />
      </div>

      <div className="hero-dot-pattern" aria-hidden="true" />

      <div className="hero-container">
        {/* Top bar */}
        <header className="hero-topbar">
          <div className="hero-brand">
            <div className="hero-brand-mark">
              <span>V</span>
            </div>

            <div className="hero-brand-text">
              <strong>VISHWASAI</strong>
              <span>CONSULTANCY</span>
            </div>
          </div>

          <div className="hero-topbar-status">
            <span className="hero-status-dot" />
            <span>CONSULTING FOR WHAT&apos;S NEXT</span>
          </div>
        </header>

        {/* Main hero */}
        <div className="hero-main">
          {/* Left content */}
          <div className="hero-content">
            <div className="hero-eyebrow">
              <span className="hero-eyebrow-line" />
              <span>BUSINESS • TECHNOLOGY • GROWTH</span>
            </div>

            <h1 className="hero-title">
              <span className="hero-title-line">Turning</span>

              <span className="hero-title-line hero-title-outline">complexity</span>

              <span className="hero-title-line">
                into
                <span key={rotatingWords[activeWord]} className="hero-title-gradient hero-word">
                  {' '}
                  {rotatingWords[activeWord]}
                </span>
              </span>
            </h1>

            <p className="hero-description">
              VishwaSai Consultancy helps organizations navigate complex business and technology
              challenges through practical strategy, intelligent solutions, and transformation-led
              thinking.
            </p>

            <div className="hero-actions">
              <Link href="/contact" className="hero-primary-button">
                <span>Start a Conversation</span>
                <span className="hero-button-arrow">↗</span>
              </Link>

              <Link href="/services" className="hero-secondary-button">
                <span>Explore Our Services</span>
                <span className="hero-secondary-arrow">→</span>
              </Link>
            </div>

            {/* Mini stats */}
            {/* <div className="hero-stats">
              <div className="hero-stat">
                <strong>01</strong>
                <span>Strategic Thinking</span>
              </div>

              <div className="hero-stat">
                <strong>02</strong>
                <span>Technology Expertise</span>
              </div>

              <div className="hero-stat">
                <strong>03</strong>
                <span>Measurable Outcomes</span>
              </div> */}
          </div>

          {/* Interactive visual */}
          <div className="hero-visual">
            <div className="hero-visual-label hero-label-top">
              <span />
              INTELLIGENT CONSULTING
            </div>

            <div className="hero-visual-ring hero-visual-ring-one">
              <span className="hero-ring-dot hero-ring-dot-one" />
              <span className="hero-ring-dot hero-ring-dot-two" />
            </div>

            <div className="hero-visual-ring hero-visual-ring-two">
              <span className="hero-ring-dot hero-ring-dot-three" />
            </div>

            <div className="hero-visual-ring hero-visual-ring-three" />

            {/* Main V logo */}
            <div className="hero-core">
              <div className="hero-core-inner">
                <span className="hero-core-v">V</span>

                <span className="hero-core-text">VISHWASAI</span>

                <span className="hero-core-small">CONSULTANCY</span>
              </div>
            </div>

            <div className="hero-core-pulse" />

            {/* Floating cards */}
            <div className="hero-floating-card hero-card-top">
              <span className="hero-floating-number">01</span>

              <div>
                <strong>Think</strong>
                <span>Strategically</span>
              </div>
            </div>

            <div className="hero-floating-card hero-card-right">
              <span className="hero-floating-number">02</span>

              <div>
                <strong>Build</strong>
                <span>Intelligently</span>
              </div>
            </div>

            <div className="hero-floating-card hero-card-bottom">
              <span className="hero-floating-number">03</span>

              <div>
                <strong>Grow</strong>
                <span>Confidently</span>
              </div>
            </div>

            <div className="hero-visual-caption">
              <span>V</span>
              <div>
                <strong>THE VISION</strong>
                <small>Strategy · Technology · Growth</small>
              </div>
            </div>
          </div>
        </div>

        {/* Capability cards */}
        <div className="hero-capabilities">
          {capabilities.map((item) => (
            <div key={item.number} className="hero-capability">
              <span className="hero-capability-number">{item.number}</span>

              <div className="hero-capability-content">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>

              <span className="hero-capability-arrow">↗</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll-indicator">
        <span>SCROLL TO EXPLORE</span>

        <div className="hero-scroll-line">
          <span />
        </div>
      </div>
    </section>
  );
}
