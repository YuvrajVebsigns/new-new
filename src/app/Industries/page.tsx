'use client';

import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const industries = [
  {
    number: '01',
    title: 'Technology',
    description:
      'Helping technology organizations build stronger market presence, engage decision-makers, and create meaningful business opportunities.',
    tags: ['IT', 'Cloud', 'AI', 'SaaS'],
  },
  {
    number: '02',
    title: 'BFSI',
    description:
      'Creating focused engagement platforms for banking, financial services, and insurance organizations.',
    tags: ['Banking', 'FinTech', 'Insurance', 'Payments'],
  },
  {
    number: '03',
    title: 'Healthcare',
    description:
      'Connecting healthcare innovators, technology providers, and business leaders around meaningful industry conversations.',
    tags: ['Healthcare', 'MedTech', 'Digital Health'],
  },
  {
    number: '04',
    title: 'Manufacturing',
    description:
      'Supporting manufacturing organizations with strategic communication, technology engagement, and industry visibility.',
    tags: ['Industry 4.0', 'Automation', 'IoT'],
  },
  {
    number: '05',
    title: 'Retail & E-commerce',
    description:
      'Helping retail businesses connect with technology leaders and explore opportunities created by digital transformation.',
    tags: ['Retail', 'E-commerce', 'Digital'],
  },
  {
    number: '06',
    title: 'Telecom',
    description:
      'Building conversations around connectivity, infrastructure, digital transformation, and emerging technologies.',
    tags: ['5G', 'Connectivity', 'Infrastructure'],
  },
];

export default function IndustriesPage() {
  const [activeIndustry, setActiveIndustry] = useState(0);

  const heroRef = useScrollAnimation<HTMLDivElement>({
    animationClass: 'animate-fade-in-left',
    initialTransform: 'translateX(-40px)',
    threshold: 0.12,
    once: false,
  });

  const gridRef = useScrollAnimation<HTMLDivElement>({
    animationClass: 'animate-fade-in-up',
    initialTransform: 'translateY(40px)',
    threshold: 0.1,
    once: false,
  });

  return (
    <main className="industries-page">
      {/* PAGE HEADING */}
      <section className="industries-page-heading">
        <div className="industries-heading-content">
          <div className="industries-heading-label">
            <span />
            INDUSTRIES WE SERVE
            <span />
          </div>
          <h1>
            Where expertise meets
            <span> opportunity.</span>
          </h1>
          <p>
            We connect businesses, technology leaders, and decision-makers across the industries
            shaping India&apos;s next chapter.
          </p>
          <a className="industries-heading-link" href="#industry-explorer">
            Explore our sectors <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>

      {/* HERO */}
      <section className="industries-hero">
        <div ref={heroRef} className="industries-hero-content">
          <span className="industries-eyebrow">
            <i />
            INDUSTRIES WE SERVE
          </span>

          <h1>
            Expertise across
            <span> industries.</span>
          </h1>

          <p>
            Connecting businesses, technology leaders, and decision-makers across India&apos;s most
            dynamic industries.
          </p>

          <div className="industries-hero-stats">
            <div>
              <strong>06</strong>
              <span>Focus sectors</span>
            </div>
            <div>
              <strong>01</strong>
              <span>Connected approach</span>
            </div>
          </div>
        </div>

        <div className="industries-hero-number" aria-hidden="true">
          06
        </div>
      </section>

      {/* INDUSTRIES */}
      <section id="industry-explorer" className="industries-section">
        <div className="industries-container">
          <div className="industries-intro">
            <div>
              <span>THE INDUSTRY EXPLORER</span>
              <h2>
                Choose a sector.
                <br />
                Find the opportunity.
              </h2>
            </div>

            <p>
              Select an industry to see the conversations, capabilities, and opportunities we help
              bring into focus.
            </p>
          </div>

          <div ref={gridRef} className="industries-layout">
            {/* LEFT LIST */}
            <div className="industries-list">
              {industries.map((industry, index) => (
                <button
                  key={industry.title}
                  type="button"
                  className={`industry-list-item ${activeIndustry === index ? 'active' : ''}`}
                  onMouseEnter={() => setActiveIndustry(index)}
                  onFocus={() => setActiveIndustry(index)}
                >
                  <span>{industry.number}</span>

                  <strong>{industry.title}</strong>

                  <b>↗</b>
                </button>
              ))}
            </div>

            {/* ACTIVE CARD */}
            <div className="industry-feature">
              <div className="industry-feature-number">{industries[activeIndustry].number}</div>

              <span>INDUSTRY FOCUS</span>

              <h3>{industries[activeIndustry].title}</h3>

              <p>{industries[activeIndustry].description}</p>

              <div className="industry-tags">
                {industries[activeIndustry].tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <div className="industry-feature-line" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
