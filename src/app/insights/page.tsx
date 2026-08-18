'use client';

import { useMemo, useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const insights = [
  {
    category: 'Technology',
    number: '01',
    title: 'The evolving role of technology leadership in a digital-first world',
    excerpt:
      'How technology leaders are balancing innovation, business priorities, and organizational transformation.',
    date: '12 AUG 2026',
    read: '5 MIN READ',
  },
  {
    category: 'Leadership',
    number: '02',
    title: 'Why meaningful executive conversations matter more than ever',
    excerpt:
      'The importance of authentic conversations and trusted relationships in a rapidly changing business environment.',
    date: '04 AUG 2026',
    read: '4 MIN READ',
  },
  {
    category: 'Business',
    number: '03',
    title: 'From visibility to value: building stronger B2B relationships',
    excerpt:
      'Moving beyond awareness to create relationships that deliver measurable business value.',
    date: '28 JUL 2026',
    read: '6 MIN READ',
  },
  {
    category: 'Technology',
    number: '04',
    title: 'AI, cloud, and the next chapter of enterprise transformation',
    excerpt:
      'Understanding how emerging technologies are reshaping enterprise strategies and opportunities.',
    date: '19 JUL 2026',
    read: '7 MIN READ',
  },
  {
    category: 'Leadership',
    number: '05',
    title: 'What makes a technology community truly valuable?',
    excerpt:
      'Exploring the ingredients behind communities that create knowledge, connections, and long-term value.',
    date: '10 JUL 2026',
    read: '5 MIN READ',
  },
  {
    category: 'Business',
    number: '06',
    title: 'Creating experiences that turn conversations into opportunities',
    excerpt:
      'How thoughtful experiences can create stronger connections between brands and decision-makers.',
    date: '02 JUL 2026',
    read: '4 MIN READ',
  },

  // NEW CARDS
  {
    category: 'Technology',
    number: '07',
    title: 'Building a future-ready technology strategy',
    excerpt:
      'How organizations can align technology investments with long-term growth, resilience, and innovation.',
    date: '25 JUN 2026',
    read: '6 MIN READ',
  },
  {
    category: 'Leadership',
    number: '08',
    title: 'Leading through change with clarity and confidence',
    excerpt:
      'Practical perspectives on helping teams navigate uncertainty while staying focused on meaningful outcomes.',
    date: '18 JUN 2026',
    read: '5 MIN READ',
  },
  {
    category: 'Business',
    number: '09',
    title: 'The new rules of meaningful B2B engagement',
    excerpt:
      'Why relevance, personalization, and genuine value are becoming essential to modern business relationships.',
    date: '11 JUN 2026',
    read: '5 MIN READ',
  },
  {
    category: 'Technology',
    number: '10',
    title: 'Turning data into decisions that drive growth',
    excerpt:
      'Exploring how better data strategies can help leaders make faster, smarter, and more confident decisions.',
    date: '03 JUN 2026',
    read: '6 MIN READ',
  },
  {
    category: 'Leadership',
    number: '11',
    title: 'The power of communities in shaping technology leadership',
    excerpt:
      'How connected leadership communities encourage collaboration, knowledge sharing, and new opportunities.',
    date: '27 MAY 2026',
    read: '4 MIN READ',
  },
  {
    category: 'Business',
    number: '12',
    title: 'Designing experiences that people remember',
    excerpt:
      'How intentional experiences can strengthen brand perception and create lasting relationships with audiences.',
    date: '20 MAY 2026',
    read: '5 MIN READ',
  },
];

const filters = ['All', 'Technology', 'Leadership', 'Business'];

export default function InsightsPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  // const heroRef = useScrollAnimation<HTMLDivElement>({
  //   animationClass: 'animate-fade-in-left',
  //   initialTransform: 'translateX(-40px)',
  //   threshold: 0.12,
  //   once: false,
  // });

  const gridRef = useScrollAnimation<HTMLDivElement>({
    animationClass: 'animate-fade-in-up',
    initialTransform: 'translateY(40px)',
    threshold: 0.1,
    once: false,
  });

  const filteredInsights = useMemo(() => {
    if (activeFilter === 'All') {
      return insights;
    }

    return insights.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  return (
    <main className="insights-page">
      {/* PAGE HEADING */}
      <section className="insights-page-heading">
        <div className="insights-heading-container">
          <div className="insights-heading-content">
            <div className="insights-heading-label">
              <span />
              INSIGHTS & IDEAS
              <span />
            </div>
            <h1>
              Ideas worth
              <span> exploring.</span>
            </h1>
            <p>Discover thoughts on technology, leadership, and business transformation</p>
          </div>
        </div>
      </section>

      {/* INSIGHTS */}

      <section className="insights-section">
        <div className="insights-container">
          <div className="insights-top">
            <div>
              <span>FROM OUR THINKING</span>

              <h2>Latest insights</h2>
            </div>

            <div className="insights-filters">
              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  className={activeFilter === filter ? 'active' : ''}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div ref={gridRef} className="insights-grid">
            {filteredInsights.map((item) => (
              <article key={item.number} className="insight-card">
                <div className="insight-card-top">
                  <span>{item.category}</span>

                  <strong>{item.number}</strong>
                </div>

                <h3>{item.title}</h3>

                <p>{item.excerpt}</p>

                <div className="insight-card-bottom">
                  <span>{item.date}</span>

                  <span>{item.read}</span>

                  <b>↗</b>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
