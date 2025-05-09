import { Section, SectionTitle, SectionContent, ExperienceCard } from '@/components/section';

export function EducationSection() {
  return (
    <Section id="education" zIndex={3}>
      <SectionTitle>Formazione</SectionTitle>

      <SectionContent>
        <ExperienceCard
          period="2021 - in corso"
          title="Università degli Studi di Palermo"
          subtitle="Scienze delle attività motorie e sportive"
          details={[
            "Acquisizione di competenze teoriche e pratiche in ambito sportivo e motorio.",
            "Eccellente rendimento in Biochimica e Fisiologia della Nutrizione (30 e lode).",
            "Focus su promozione della salute e benessere psico-motorio."
          ]}
          className="mb-12"
        />
      </SectionContent>
    </Section>
  );
}
