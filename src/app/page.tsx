import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import SkillsSection from '@/components/skills-section';
import ProjectsSection from '@/components/projects-section';
import AboutMeSection from '@/components/about-me-section';
import CertificationsSection from '@/components/certifications-section';
import Footer from '@/components/footer';
import TestimonialsSection from '@/components/testimonials-section';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <div className="relative z-10 bg-background">
          <SkillsSection />
          <ProjectsSection />
          <TestimonialsSection />
          <AboutMeSection />
          <CertificationsSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
