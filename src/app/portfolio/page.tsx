'use client';

import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const portfolioItems = [
  {
    id: 1,
    number: '01',
    title: 'Business Growth Strategy',
    category: 'Strategy',
    description:
      'Developed a focused growth strategy helping an organization identify new opportunities, strengthen market positioning, and establish a clear roadmap for sustainable expansion.',
    image: '/assets/portfolio/p1.jpg',
    stats: 'Strategy | Growth | Transformation',
  },
  {
    id: 2,
    number: '02',
    title: 'Digital Transformation',
    category: 'Technology',
    description:
      'Supported a transformation initiative focused on modernizing business processes, improving operational efficiency, and creating a stronger digital foundation.',
    image: '/assets/portfolio/p2.webp',
    stats: 'Digital | Technology | Efficiency',
  },
  {
    id: 3,
    number: '03',
    title: 'Market Development Program',
    category: 'Growth',
    description:
      'Created a market development framework designed to identify high-value opportunities, strengthen customer engagement, and accelerate business growth.',
    image: '/assets/portfolio/p3.webp',
    stats: 'Market | Opportunities | Growth',
  },
  {
    id: 4,
    number: '04',
    title: 'Technology Advisory',
    category: 'Advisory',
    description:
      'Provided technology advisory support to align business priorities with practical technology solutions, enabling better decisions and scalable operations.',
    image: '/assets/portfolio/p4.webp',
    stats: 'Technology | Advisory | Scale',
  },
  {
    id: 5,
    number: '05',
    title: 'Innovation Initiative',
    category: 'Innovation',
    description:
      'Helped an organization develop an innovation-focused approach to identify new possibilities, evaluate ideas, and turn promising concepts into practical initiatives.',
    image: '/assets/portfolio/p5.jpg',
    stats: 'Innovation | Ideas | Execution',
  },
  {
    id: 6,
    number: '06',
    title: 'Business Transformation',
    category: 'Transformation',
    description:
      'Designed a structured transformation approach focused on improving organizational capabilities, strengthening processes, and preparing the business for its next stage of growth.',
    image: '/assets/portfolio/p6.jpg',
    stats: 'People | Process | Performance',
  },
];

const portfolioStats = [
  {
    value: '600+',
    label: 'Organizations & Businesses',
  },
  {
    value: '50K+',
    label: 'Professionals & Decision Makers',
  },
  {
    value: '100%',
    label: 'Commitment to Excellence',
  },
];

export default function PortfolioPage() {
  const heroContentRef = useScrollAnimation<HTMLDivElement>({
    animationClass: 'animate-fade-in-left',
    initialTransform: 'translateX(-40px)',
    threshold: 0.12,
    once: false,
  });

  const cardRef = useScrollAnimation<HTMLDivElement>({
    animationClass: 'animate-fade-in-up',
    initialTransform: 'translateY(40px)',
    threshold: 0.1,
  });

  return (
    <main className="vishwasai-portfolio-page">
      <div ref={heroContentRef} className="portfolio-page-wrapper">
        {/* =====================================================
            PAGE HEADING
        ===================================================== */}

        <section className="portfolio-page-heading">
          <div className="portfolio-container">
            <div className="portfolio-heading-content">
              <div className="portfolio-heading-label">
                <span />
                OUR PORTFOLIO
              </div>
              <h1>
                Turning
                <span> visions </span>
                into reality.
              </h1>
              <p>Explore our selected work and strategic engagements that transform businesses</p>
            </div>
          </div>
        </section>

        {/* =====================================================
            HERO
        ===================================================== */}

        {/* <section className="vishwasai-portfolio-hero">
          <div className="portfolio-hero-orb portfolio-hero-orb-blue" aria-hidden="true" />

          <div className="portfolio-hero-orb portfolio-hero-orb-red" aria-hidden="true" />

          <div className="portfolio-hero-ring" aria-hidden="true" />

          <div className="portfolio-container">
            <div className="portfolio-hero-layout">
              <div className="portfolio-hero-logo">
                <Image
                  src="/assets/vishwasai-logo.png"
                  alt="VishwaSai Consultancy"
                  width={200}
                  height={200}
                />
              </div>

              <div className="portfolio-hero-content">
                <div className="portfolio-eyebrow">
                  <span />
                  VISHWASAI CONSULTANCY
                  <span />
                </div>

                <h1 className="portfolio-hero-title">
                  Our
                  <span> work.</span>
                  <br />
                  Your
                  <span> possibilities.</span>
                </h1>

                <p className="portfolio-hero-description">
                  Explore selected consulting initiatives, transformation programs, and strategic
                  engagements designed to create meaningful business outcomes.
                </p>

                <div className="portfolio-hero-line">
                  <span />
                  <strong>INNOVATION &amp; INTEGRITY</strong>
                  <span />
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* =====================================================
            INTRO
        ===================================================== */}

        {/* <section className="portfolio-intro">
          <div className="portfolio-container">
            <div className="portfolio-intro-grid">
              <div className="portfolio-intro-label">
                <span />
                OUR WORK
              </div>

              <div className="portfolio-intro-content">
                <h2>
                  Turning
                  <span> challenges </span>
                  into opportunities.
                </h2>

                <p>
                  Every engagement at VishwaSai Consultancy begins with a clear understanding of the
                  client&apos;s goals and challenges. We combine strategic thinking, technology,
                  innovation, and practical execution to help organizations move forward with
                  confidence.
                </p>
              </div>
            </div>
          </div>
        </section> */}

        {/* =====================================================
            PORTFOLIO
        ===================================================== */}

        <section className="portfolio-section">
          <div className="portfolio-container">
            <div className="portfolio-section-heading">
              <div>
                <span className="portfolio-section-label">SELECTED ENGAGEMENTS</span>

                <h2>
                  Ideas that create
                  <span> impact.</span>
                </h2>
              </div>

              <p>
                A selection of the type of strategic, technology, and transformation work we deliver
                for organizations.
              </p>
            </div>

            <div ref={cardRef} className="portfolio-grid">
              {portfolioItems.map((item) => (
                <article key={item.id} className="portfolio-card">
                  <div className="portfolio-card-image">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={700}
                      height={450}
                      className="portfolio-image"
                    />

                    <div className="portfolio-image-overlay">
                      <span>{item.category}</span>
                    </div>

                    <div className="portfolio-card-number">{item.number}</div>
                  </div>

                  <div className="portfolio-card-content">
                    <div className="portfolio-card-top">
                      <span className="portfolio-card-category">{item.category}</span>

                      <span className="portfolio-card-arrow" aria-hidden="true">
                        ↗
                      </span>
                    </div>

                    <h3>{item.title}</h3>

                    <p className="portfolio-description">{item.description}</p>

                    <div className="portfolio-card-stats">{item.stats}</div>

                    <div className="portfolio-card-accent" aria-hidden="true" />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            STATS
        ===================================================== */}

        <section className="portfolio-stats-section">
          <div className="portfolio-stats-orb" />

          <div className="portfolio-container">
            <div className="portfolio-stats-heading">
              <span className="portfolio-section-label">OUR REACH</span>

              <h2>
                Experience backed by
                <span> meaningful impact.</span>
              </h2>
            </div>

            <div className="portfolio-stats-container">
              {portfolioStats.map((stat, index) => (
                <div className="portfolio-stat-box" key={stat.label}>
                  <span className="portfolio-stat-number">0{index + 1}</span>

                  <h3>{stat.value}</h3>

                  <p>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            CLOSING CTA
        ===================================================== */}

        <section className="portfolio-closing">
          <div className="portfolio-container">
            <div className="portfolio-closing-card">
              <div className="portfolio-closing-logo">
                <img src="/assets/vishwasai-logo.png" alt="" aria-hidden="true" />
              </div>

              <div className="portfolio-closing-content">
                <span className="portfolio-section-label">YOUR NEXT CHAPTER</span>

                <h2>
                  Let&apos;s create something
                  <span> meaningful together.</span>
                </h2>

                <p>
                  Have a business challenge, transformation opportunity, or new idea? Let&apos;s
                  explore what we can build together.
                </p>

                <a href="#portfolio-contact" className="portfolio-contact-button">
                  Start a Conversation
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            CONTACT
        ===================================================== */}

        {/* <section id="portfolio-contact">
          <ContactSection />
        </section> */}
      </div>
    </main>
  );
}
