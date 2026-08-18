'use client';

import { Award, Landmark, Leaf, ShieldCheck, UsersRound } from 'lucide-react';

const services = [
  {
    title: 'Cooperative & Financial Societies',
    subtitle: 'PACS & Credit Societies registration compliance.',
    icon: UsersRound,
  },
  {
    title: 'NBFC & Corporate Setup',
    subtitle: 'Documentation & approval advisory.',
    icon: Landmark,
  },
  {
    title: 'Agricultural Support',
    subtitle: 'FPO formation & subsidies.',
    icon: Leaf,
  },
];

const highlights = [
  {
    value: '15+',
    label: 'Years of Domain Expertise',
    icon: Award,
  },
  {
    value: '',
    label: 'Specialized in Rural, Semi-Urban & Cooperative Financial Structuring',
    icon: UsersRound,
  },
  {
    value: '',
    label: 'Transparency, Compliance & Long-term Growth',
    icon: ShieldCheck,
  },
];

export default function StatisticsSection() {
  return (
    <section className="core-services-section">
      <div className="core-services-container">
        <div className="core-services-header">
          <h2>Our Core Services</h2>
        </div>

        <div className="core-services-grid">
          {services.map(({ title, subtitle, icon: Icon }) => (
            <div key={title} className="core-service-card">
              <div className="service-icon-wrap">
                <Icon size={26} strokeWidth={2.3} />
              </div>

              <h3>{title}</h3>
              <p>{subtitle}</p>
            </div>
          ))}
        </div>

        <div className="core-services-bottom">
          {highlights.map(({ value, label, icon: Icon }) => (
            <div key={label} className="core-service-highlight">
              <div className="core-highlight-icon">
                <Icon size={20} strokeWidth={2.2} />
              </div>

              <div className="core-highlight-content">
                {value ? <span className="highlight-number">{value}</span> : null}
                <span className="highlight-label">{label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
