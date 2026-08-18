'use client';

import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const faqHighlights = [
  {
    number: '01',
    title: 'Strategy',
    description:
      'Understand how we approach business strategy, growth, and transformation challenges.',
  },
  {
    number: '02',
    title: 'Technology',
    description:
      'Learn how our technology-focused consulting can support modernization and innovation.',
  },
  {
    number: '03',
    title: 'Engagement',
    description:
      'Find out what working with VishwaSai Consultancy looks like from start to finish.',
  },
];

export default function FAQPage() {
  const heroContentRef = useScrollAnimation<HTMLDivElement>({
    animationClass: 'animate-fade-in-left',
    initialTransform: 'translateX(-40px)',
    threshold: 0.12,
    once: false,
  });

  const faqIntroRef = useScrollAnimation<HTMLDivElement>({
    animationClass: 'animate-fade-in-up',
    initialTransform: 'translateY(40px)',
    threshold: 0.12,
    once: false,
  });

  return (
    <main className="vishwasai-faq-page">
      <div ref={heroContentRef} className="faq-page-wrapper">
        {/* =====================================================
            HERO
            ===================================================== */}

        <section className="vishwasai-faq-hero">
          <div className="faq-hero-orb faq-hero-orb-blue" aria-hidden="true" />

          <div className="faq-hero-orb faq-hero-orb-red" aria-hidden="true" />

          <div className="faq-hero-ring" aria-hidden="true" />

          <div className="faq-container">
            <div className="faq-hero-layout">
              {/* Logo */}
              <div className="faq-hero-logo">
                <Image
                  src="/assets/vishwasai-logo.png"
                  alt="VishwaSai Consultancy"
                  width={200}
                  height={200}
                />
              </div>

              {/* Content */}
              <div className="faq-hero-content">
                <div className="faq-eyebrow">
                  <span />
                  VISHWASAI CONSULTANCY
                  <span />
                </div>

                <h1 className="faq-hero-title">
                  Questions?
                  <br />
                  <span>We&apos;ve got answers.</span>
                </h1>

                <p className="faq-hero-description">
                  Find answers to common questions about our consulting approach, services,
                  engagement process, and how we help organizations move forward with confidence.
                </p>

                <div className="faq-hero-line">
                  <span />
                  <strong>CLARITY &amp; CONFIDENCE</strong>
                  <span />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            INTRO
            ===================================================== */}

        <section className="faq-intro-section">
          <div className="faq-container">
            <div ref={faqIntroRef} className="faq-intro-grid">
              <div className="faq-intro-label">
                <span />
                NEED TO KNOW
              </div>

              <div className="faq-intro-content">
                <h2>
                  The answers you need,
                  <span> before you begin.</span>
                </h2>

                <p>
                  Choosing the right consulting partner is an important decision. We&apos;ve
                  answered some of the questions organizations commonly ask about our services,
                  approach, and collaboration process.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            FAQ HIGHLIGHTS
            ===================================================== */}

        <section className="faq-highlights-section">
          <div className="faq-container">
            <div className="faq-highlights-grid">
              {faqHighlights.map((item) => (
                <article key={item.number} className="faq-highlight-card">
                  <div className="faq-highlight-number">{item.number}</div>

                  <div className="faq-highlight-content">
                    <h3>{item.title}</h3>

                    <p>{item.description}</p>
                  </div>

                  <span className="faq-highlight-arrow" aria-hidden="true">
                    ↗
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            FAQ COMPONENT
            ===================================================== */}

        <section className="faq-main-section">
          <div className="faq-container">
            <div className="faq-main-heading">
              <span className="faq-section-label">FREQUENTLY ASKED QUESTIONS</span>

              <h2>
                Everything you need
                <span> to know.</span>
              </h2>

              <p>
                Still have questions? Explore the answers below or get in touch with our team for a
                conversation tailored to your needs.
              </p>
            </div>

            {/* <div className="faq-component-wrapper">
              <FAQSection />
            </div> */}
          </div>
        </section>

        {/* =====================================================
            CTA
            ===================================================== */}

        <section className="faq-cta-section">
          <div className="faq-cta-orb" />

          <div className="faq-container">
            <div className="faq-cta-card">
              <div className="faq-cta-mark">
                <span>V</span>
              </div>

              <div className="faq-cta-content">
                <span className="faq-section-label">STILL HAVE QUESTIONS?</span>

                <h2>
                  Let&apos;s talk about
                  <span> your goals.</span>
                </h2>

                <p>
                  Every organization is different. If you couldn&apos;t find the answer you&apos;re
                  looking for, our team is ready to understand your challenge and explore the right
                  path forward with you.
                </p>

                <a href="#faq-contact" className="faq-cta-button">
                  Talk to Our Team
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            CONTACT
            ===================================================== */}
        {/* 
        <section id="faq-contact">
          <ContactSection />
        </section> */}
      </div>
    </main>
  );
}
