import { Section, SectionTitle, SectionContent, ExperienceCard } from '@/components/section';

export function WorkSection() {
  return (
    <Section id="experience" zIndex={5}>
      <SectionTitle>Esperienza</SectionTitle>

      <SectionContent>
        <ExperienceCard
          period="2024 - 2025"
          title="Caseificio Bompietro - Palermo"
          subtitle="Brand Ambassador"
          details={[
            "Implementazione di strategie creative attraverso un'analisi delle potenzialità delle aziende per aumentarne la visibilità.",
            "Interazione diretta con i clienti per fornire informazioni sui prodotti e raccogliere feedback."
          ]}
          className="mb-16"
        />

        <ExperienceCard
          period="2021 - 2023"
          title="Citrus Club"
          subtitle="Floor Staff"
          details={[
            "Responsabile della gestione di eventi al fine di promuovere il Brand Identity delle aziende.",
            "Risoluzione proattiva di problematiche operative e gestione dei reclami dei clienti."
          ]}
        />
      </SectionContent>
    </Section>
  );
}
