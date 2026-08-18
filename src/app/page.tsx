import HeroSection from '@/components/HeroSection';
import StatisticsSection from '@/components/StatisticsSection';
import ExpertiseSection from '@/components/ExpertiseSection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import BlogsSection from '@/components/BlogsSection';
import BotIcon from '@/components/BotIcon';
import ProjectsSection from '@/components/ProjectsSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <StatisticsSection />
      <ExpertiseSection />
      <ProjectsSection />
      <BlogsSection />
      <BotIcon />
      <FAQSection />
      <ContactSection />
    </main>
  );
}
