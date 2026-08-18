'use client';

import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const cases = [
  {
    id: '01',
    category: 'Technology',
    title: 'Building meaningful conversations with technology leaders',
    description:
      'A focused engagement program designed to connect a technology brand with senior decision-makers through relevant conversations and curated experiences.',
    result: '200+',
    resultLabel: 'Decision-makers engaged',
  },
  {
    id: '02',
    category: 'BFSI',
    title: 'Creating visibility across the BFSI ecosystem',
    description:
      'A strategic industry engagement initiative combining thought leadership, executive networking, and digital storytelling.',
    result: '45%',
    resultLabel: 'Higher engagement',
  },
  {
    id: '03',
    category: 'Enterprise',
    title: 'Turning expertise into thought leadership',
    description:
      'A content-led initiative that transformed subject matter expertise into meaningful stories, conversations, and digital experiences.',
    result: '3X',
    resultLabel: 'Content reach',
  },
];

export default function CaseStudiesPage() {
  const [active, setActive] = useState(0);

  const heroRef = useScrollAnimation<HTMLDivElement>({
    animationClass: 'animate-fade-in-left',
    initialTransform: 'translateX(-40px)',
    threshold: 0.12,
    once: false,
  });

  return (
    <main className="case-studies-page">
      <section className="case-hero">
        <div ref={heroRef} className="case-hero-content">
          <span>
            <i />
            CASE STUDIES
          </span>

          <h1>
            Ideas that
            <strong> create impact.</strong>
          </h1>

          <p>
            Explore how strategy, technology, creativity, and meaningful engagement come together to
            create measurable outcomes.
          </p>
        </div>
      </section>

      <section className="case-section">
        <div className="case-container">
          <div className="case-heading">
            <span>SELECTED WORK</span>

            <h2>
              From challenge
              <br />
              to outcome.
            </h2>
          </div>

          <div className="case-layout">
            <div className="case-navigation">
              {cases.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  className={active === index ? 'active' : ''}
                  onClick={() => setActive(index)}
                >
                  <span>{item.id}</span>

                  <strong>{item.category}</strong>

                  <b>↗</b>
                </button>
              ))}
            </div>

            <article className="case-feature">
              <div className="case-feature-top">
                <span>{cases[active].category}</span>

                <strong>{cases[active].id}</strong>
              </div>

              <h3>{cases[active].title}</h3>

              <p>{cases[active].description}</p>

              <div className="case-result">
                <strong>{cases[active].result}</strong>

                <span>{cases[active].resultLabel}</span>
              </div>

              <div className="case-line" />
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
