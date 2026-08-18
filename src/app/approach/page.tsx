'use client';

import { useState } from 'react';

const approaches = [
  {
    number: '01',
    title: 'Understand',
    text: 'We start by understanding your business, audience, objectives, and the larger market context. Through focused conversations and careful research, we identify what matters most, where the real opportunity lies, and what could hold progress back.',
  },
  {
    number: '02',
    title: 'Strategize',
    text: 'We translate insights into a focused strategy designed around your goals and the people who matter. The result is a clear set of priorities, messages, and actions that gives your team confidence about what to do next.',
  },
  {
    number: '03',
    title: 'Connect',
    text: 'We create meaningful opportunities to connect brands with relevant leaders, communities, and audiences. We build the right relationships through thoughtful experiences and relevant conversations rather than relying on reach alone.',
  },
  {
    number: '04',
    title: 'Activate',
    text: 'We bring the strategy to life through experiences, content, campaigns, and digital engagement. Every activity is shaped to feel consistent, useful, and memorable across the channels where your audience already spends time.',
  },
  {
    number: '05',
    title: 'Measure',
    text: 'We evaluate outcomes, learn from performance, and continuously improve the impact of every initiative. We connect activity to meaningful indicators, share what the data is telling us, and refine the approach so each cycle creates stronger results.',
  },
];

const principles = [
  {
    number: '01',
    title: 'Clarity first',
    text: 'We turn complex challenges into clear priorities, practical choices, and a focused path forward.',
  },
  {
    number: '02',
    title: 'People matter',
    text: 'The strongest outcomes begin with genuine understanding of the leaders, teams, and communities involved.',
  },
  {
    number: '03',
    title: 'Built for action',
    text: 'Every recommendation is designed to move from a good idea to meaningful execution and measurable progress.',
  },
  {
    number: '04',
    title: 'Long-term value',
    text: 'We build relationships and solutions that continue creating value well beyond a single engagement.',
  },
];

export default function ApproachPage() {
  const [active, setActive] = useState(0);

  // const heroRef = useScrollAnimation<HTMLDivElement>({
  //   animationClass: 'animate-fade-in-left',
  //   initialTransform: 'translateX(-40px)',
  //   threshold: 0.12,
  //   once: false,
  // });

  return (
    <main className="approach-page">
      <section className="portfolio-page-heading">
        <div className="portfolio-container">
          <div className="portfolio-heading-content">
            <div className="portfolio-heading-label">
              <span />
              OUR APPROACH
            </div>
            <h1>
              Strategy with
              <span> purpose.</span>
            </h1>
            <p>Turning insight, connection, and execution into meaningful business outcomes</p>
          </div>
        </div>
      </section>

      {/* <section className="approach-hero">
        <div ref={heroRef} className="approach-hero-content">
          <span>
            <i />
            OUR APPROACH
          </span>

          <h1>
            Strategy with
            <strong> purpose.</strong>
          </h1>

          <p>
            We combine industry understanding, strategic thinking, meaningful relationships, and
            measurable execution to create lasting value.
          </p>
        </div>
      </section> */}

      {/* <section className="approach-philosophy">
        <div className="approach-container">
          <div className="philosophy-grid">
            <div className="philosophy-label">
              <span>OUR PHILOSOPHY</span>
              <div className="vertical-line" aria-hidden="true" />
            </div>

            <div className="philosophy-content">
              <h2>
                Good strategy creates
                <span>momentum.</span>
              </h2>
              <p className="philosophy-lead">
                We believe meaningful progress happens when insight, relationships, and execution
                work together.
              </p>
              <p>
                Our approach brings structure to ambitious ideas. We listen closely, find the
                opportunity inside the challenge, and build a practical plan that people can
                believe in and act on.
              </p>
              <div className="philosophy-signature">
                <b>+</b>
                <span>INSIGHT. CONNECTION. IMPACT.</span>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="approach-principles">
        <div className="approach-container">
          <div className="principles-heading">
            <div>
              <span>WHAT GUIDES US</span>
              <h2>
                Principles that shape
                <span>every engagement.</span>
              </h2>
            </div>
            <p>
              We bring the same care, discipline, and curiosity to every challenge, whether the goal
              is growth, transformation, or stronger connection.
            </p>
          </div>

          <div className="principles-grid">
            {principles.map((principle) => (
              <article className="principle-card" key={principle.number}>
                <span>{principle.number}</span>
                <div className="principle-icon" aria-hidden="true">
                  <i />
                </div>
                <h3>{principle.title}</h3>
                <p>{principle.text}</p>
                <div className="card-line" aria-hidden="true" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="approach-section">
        <div className="approach-container">
          <div className="approach-heading">
            <span>HOW WE WORK</span>

            <h2>
              Simple thinking.
              <br />
              Meaningful outcomes.
            </h2>
          </div>

          <div className="approach-process">
            <div className="approach-steps">
              {approaches.map((item, index) => (
                <button
                  type="button"
                  key={item.number}
                  className={active === index ? 'active' : ''}
                  onClick={() => setActive(index)}
                  onMouseEnter={() => setActive(index)}
                >
                  <span>{item.number}</span>

                  <strong>{item.title}</strong>

                  <b>→</b>
                </button>
              ))}
            </div>

            <div className="approach-feature">
              <span className="approach-feature-number">{approaches[active].number}</span>

              <div>
                <small>STEP {approaches[active].number}</small>

                <h3>{approaches[active].title}</h3>

                <p>{approaches[active].text}</p>
              </div>

              <div className="approach-progress">
                <span
                  style={{
                    width: `${((active + 1) / approaches.length) * 100}%`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
