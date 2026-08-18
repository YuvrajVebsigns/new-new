'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const services = [
  {
    number: '01',
    title: 'Business Consulting',
    description:
      'Practical consulting solutions designed to help organizations identify opportunities, overcome challenges, improve performance, and achieve sustainable business growth.',
  },
  {
    number: '02',
    title: 'Strategy & Advisory',
    description:
      'Strategic guidance that helps businesses make confident decisions, define clear priorities, and build actionable roadmaps for long-term success.',
  },
  {
    number: '03',
    title: 'Digital Transformation',
    description:
      'Helping organizations embrace technology and modern business practices to improve efficiency, customer experiences, decision-making, and operational performance.',
  },
  {
    number: '04',
    title: 'Technology Consulting',
    description:
      'Technology-focused consulting that connects business objectives with the right solutions, helping organizations adopt smarter and more scalable technology strategies.',
  },
  {
    number: '05',
    title: 'Growth & Market Development',
    description:
      'Identify new opportunities, strengthen market positioning, and develop growth strategies that help businesses expand with confidence.',
  },
  {
    number: '06',
    title: 'Innovation & Transformation',
    description:
      'From new ideas to practical implementation, we help organizations create innovative approaches that deliver meaningful and measurable outcomes.',
  },
];

export default function ServicesPage() {
  const heroContentRef = useScrollAnimation<HTMLDivElement>({
    animationClass: 'animate-fade-in-left',
    initialTransform: 'translateX(-40px)',
    threshold: 0.12,
    once: false,
  });

  return (
    <main className="vishwasai-services-page">
      <div ref={heroContentRef} className="services-page-wrapper">
        {/* =====================================================
            HERO
        ===================================================== */}

        {/* =====================================================
            INTRO
        ===================================================== */}
        {/* <section className="services-intro">
          <div className="services-container">
            <div className="services-intro-grid">
              <div className="services-intro-label">
                <span className="services-intro-line" />
                <span>WHAT WE DO</span>
              </div>

              <div className="services-intro-content">
                <h2>
                  Expertise built around
                  <span> your goals.</span>
                </h2>

                <p>
                  At VishwaSai Consultancy, we believe every business has a unique path to growth.
                  Our consulting approach begins with understanding your challenges, goals, and
                  opportunities before developing solutions that are practical, focused, and built
                  for results.
                </p>
              </div>
            </div>
          </div>
        </section> */}

        {/* =====================================================
            EXPERTISE SECTION
        ===================================================== */}
        <section id="our-services" className="services-expertise">
          <div className="services-section-heading">
            <span className="services-section-label">OUR EXPERTISE</span>

            <h2>
              Consulting with
              <span> purpose.</span>
            </h2>

            <p>
              Helping organizations turn challenges into opportunities through focused expertise and
              innovative thinking.
            </p>
          </div>

          {/* <ExpertiseSection /> */}
        </section>

        {/* =====================================================
            SERVICES GRID
        ===================================================== */}
        <section className="services-details">
          <div className="services-container">
            <div className="services-details-header">
              <div>
                <span className="services-section-label">OUR SERVICES</span>

                <h2>
                  From strategy
                  <span> to execution.</span>
                </h2>
              </div>

              <p>
                A comprehensive range of consulting capabilities designed to help businesses
                navigate change, unlock opportunities, and build lasting value.
              </p>
            </div>

            <div className="services-grid">
              {services.map((service) => (
                <article className="service-item" key={service.number}>
                  <div className="service-item-top">
                    <div className="service-icon">
                      <span>{service.number}</span>
                    </div>

                    <span className="service-arrow" aria-hidden="true">
                      ↗
                    </span>
                  </div>

                  <div className="service-item-content">
                    <h3>{service.title}</h3>

                    <p>{service.description}</p>
                  </div>

                  <div className="service-item-accent" aria-hidden="true" />
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            WHY VISHWASAI
        ===================================================== */}
        <section className="services-why">
          <div className="services-container">
            <div className="services-why-card">
              <div className="services-why-logo">
                <img src="/assets/portfolio/p6.jpg" alt="" aria-hidden="true" />
              </div>

              <div className="services-why-content">
                <span className="services-section-label">WHY VISHWASAI</span>

                <h2>
                  Innovation with purpose.
                  <br />
                  Integrity in every engagement.
                </h2>

                <p>
                  We don&apos;t believe in one-size-fits-all consulting. Every engagement is shaped
                  around the organization&apos;s objectives, challenges, culture, and ambitions.
                </p>

                <div className="services-values">
                  <div>
                    <strong>01</strong>
                    <span>Client First</span>
                  </div>

                  <div>
                    <strong>02</strong>
                    <span>Innovation</span>
                  </div>

                  <div>
                    <strong>03</strong>
                    <span>Integrity</span>
                  </div>

                  <div>
                    <strong>04</strong>
                    <span>Results</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            CONTACT
        ===================================================== */}
        {/* <section id="services-contact">
          <ContactSection />
        </section> */}
      </div>
    </main>
  );
}
