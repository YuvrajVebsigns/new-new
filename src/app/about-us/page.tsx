'use client';

// import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const pillars = [
  {
    number: '01',
    title: 'Our History',
    shortTitle: 'History',
    icon: '◷',
    description:
      'Vishwasai Consultancy LLP has been serving the co-operative and financial ecosystem since 2009, building expertise across agriculture co-operative credit societies, multistate co-operative societies, NBFCs and FPOs.',
  },
  {
    number: '02',
    title: 'Our Vision',
    shortTitle: 'Vision',
    icon: '◎',
    description:
      'To create stronger, more efficient and sustainable organisations by combining professional consultancy, financial knowledge, co-operative principles and practical business guidance.',
  },
  {
    number: '03',
    title: 'Our Mission',
    shortTitle: 'Mission',
    icon: '✓',
    description:
      'To empower agriculture co-operative credit societies, NBFCs and FPOs with knowledge, tools, strategies, compliance support and practical solutions for sustainable growth.',
  },
];

// const leaders = [
//   {
//     id: 1,
//     name: 'Dr. Ashok Eknathrao Pagire',
//     title: 'Founder & Director',
//     qualifications: 'Doctorate in Cooperation & Finance',
//     experience: '15+ Years in Co-operative Sector',
//     image: '/assets/about/leader-1.jpg',
//     description:
//       'Visionary leader with expertise in agricultural finance and co-operative development',
//   },
//   {
//     id: 2,
//     name: 'Neelesh Panadonroth Goswali',
//     title: 'Engagement Head',
//     qualifications: 'Expert in Compliance & Legal',
//     experience: 'Specialized in Co-op Organizations',
//     image: '/assets/about/leader-2.jpg',
//     description: 'Strategic thinker focused on organizational growth and compliance management',
//   },
// ];

const achievements = [
  {
    id: 1,
    stat: '30+',
    label: 'States Covered',
    description: 'Serving across multiple Indian states with localized expertise',
  },
  {
    id: 2,
    stat: '49%',
    label: 'FPOs/Federations Guided',
    description: 'Supporting farmer producer organizations and federation growth',
  },
  {
    id: 3,
    stat: '200+',
    label: 'Workshops & Training',
    description: 'Conducted educational sessions and skill development programs',
  },
  {
    id: 4,
    stat: '100+',
    label: 'NBFCs Advised',
    description: 'Providing strategic guidance to non-banking financial companies',
  },
];

export default function AboutUsPage() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [activePillar, setActivePillar] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: (event.clientX / window.innerWidth) * 100,
        y: (event.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    const elements = section.querySelectorAll<HTMLElement>('[data-about-reveal]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add('about-visible');
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -50px 0px',
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <main
      ref={sectionRef}
      className="about-page"
      style={
        {
          '--mouse-x': `${mousePosition.x}%`,
          '--mouse-y': `${mousePosition.y}%`,
        } as React.CSSProperties
      }
    >
      {/* Background decoration */}
      <div className="about-grid" aria-hidden="true" />
      <div className="about-blue-orb" aria-hidden="true" />
      <div className="about-red-orb" aria-hidden="true" />
      <div className="about-mouse-glow" aria-hidden="true" />

      {/* =====================================================
          HERO / ABOUT HEADER
      ===================================================== */}

      <section className="about-hero-section">
        <div className="about-container">
          <header className="about-hero-header" data-about-reveal>
            <div className="about-page-label">
              <span className="about-page-label-line" />
              <span>ABOUT US</span>
              <span className="about-page-label-line" />
            </div>

            <p className="about-hero-description">
              Your trusted partner in navigating the complex world of agriculture co-operative
              credit societies, NBFCs and FPOs with 15+ years of proven expertise.
            </p>

            <div className="about-hero-stats">
              <div className="about-stat">
                <strong>15+</strong>
                <span>Years Experience</span>
              </div>
              <div className="about-stat">
                <strong>100+</strong>
                <span>Organizations Served</span>
              </div>
              <div className="about-stat">
                <strong>2009</strong>
                <span>Founded</span>
              </div>
            </div>
          </header>
        </div>
      </section>

      {/* =====================================================
          COMPANY ACHIEVEMENTS SECTION
      ===================================================== */}

      <section className="about-achievements-section" data-about-reveal>
        <div className="about-container">
          <div className="about-achievements-header">
            <span className="about-small-label">ACHIEVEMENT</span>
            <h2>Company Achievement</h2>
          </div>

          <div className="about-achievements-grid">
            {achievements.map((achievement) => (
              <div key={achievement.id} className="about-achievement-card">
                <div className="about-achievement-stat">{achievement.stat}</div>
                <h3 className="about-achievement-label">{achievement.label}</h3>
                <p className="about-achievement-description">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          WHO WE ARE SECTION (DISABLED)
      ===================================================== */}

      {/* =====================================================
          HISTORY / VISION / MISSION
      ===================================================== */}

      <section className="about-pillars-section" data-about-reveal>
        <div className="about-container">
          <div className="about-pillars-header">
            <div>
              <span className="about-small-label">OUR FOUNDATION</span>
              <h2>
                Built on <span>Purpose</span>
              </h2>
            </div>
            <p>
              Our approach combines professional expertise with co-operative values to create
              practical and sustainable solutions.
            </p>
          </div>

          <div className="about-pillars">
            {pillars.map((pillar, index) => (
              <button
                key={pillar.number}
                type="button"
                className={`about-pillar ${activePillar === index ? 'about-pillar-active' : ''}`}
                onClick={() => setActivePillar(index)}
                onMouseEnter={() => setActivePillar(index)}
                aria-pressed={activePillar === index}
              >
                <span className="about-pillar-top">{pillar.number}</span>
                <span className="about-pillar-icon">{pillar.icon}</span>
                <span className="about-pillar-title">{pillar.title}</span>
                <span className="about-pillar-description">{pillar.description}</span>
                <span className="about-pillar-bottom">
                  <span>EXPLORE</span>
                  <span>↗</span>
                </span>
              </button>
            ))}
          </div>

          {/* Active pillar detail */}
          {/* <div className="about-active-detail">
            <div className="about-active-detail-number">
              {pillars[activePillar].number}
            </div>
            <div className="about-active-detail-content">
              <span>{pillars[activePillar].shortTitle}</span>
              <h3>{pillars[activePillar].title}</h3>
              <p>{pillars[activePillar].description}</p>
            </div>
            <div className="about-active-detail-mark">V</div>
          </div> */}
        </div>
      </section>

      {/* =====================================================
          MISSION STATEMENT
      ===================================================== */}

      <section className="about-statement" data-about-reveal>
        <div className="about-statement-mark">V</div>
        <div className="about-container">
          <div className="about-statement-content">
            <span>OUR COMMITMENT</span>
            <h2>
              Knowledge.
              <strong>Strategy.</strong>
              Growth.
            </h2>
            <p>
              We are dedicated to helping our clients achieve operational efficiency, regulatory
              compliance and sustainable growth while upholding the core values of co-operative
              principles.
            </p>
          </div>
        </div>
        <div className="about-statement-line" aria-hidden="true" />
      </section>

      {/* =====================================================
          CALL TO ACTION
      ===================================================== */}

      <section className="about-cta-section" data-about-reveal>
        <div className="about-container">
          <div className="about-cta-content">
            <h2>Ready to Transform Your Organization?</h2>
            <p>Let&apos;s work together to unlock the potential of your co-operative.</p>
            <Link href="/contact" className="about-cta-button">
              <span>Get in Touch</span>
              <span className="about-cta-arrow" aria-hidden="true">
                ↗
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
