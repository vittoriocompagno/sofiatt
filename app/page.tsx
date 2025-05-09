import {
  HeroSection,
  AboutSection,
  EducationSection,
  EducationalSkillsSection,
  WorkSection,
  SkillsSection,
  SoftSkillsSection,
  ContactSection
} from '@/components/sections';

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Copyright e contatti spostati nella sezione di contatto */}
      {/*mao*/}
      {/* Sezioni */}
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <EducationalSkillsSection />
      <WorkSection />
      <SkillsSection />
      <SoftSkillsSection />
      <ContactSection />

    </main>
  );
}