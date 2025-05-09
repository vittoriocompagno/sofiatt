import { Section, SectionTitle, SectionContent } from '@/components/section';

export function EducationalSkillsSection() {
  return (
    <Section id="educational-skills" zIndex={4} backgroundImageOverlay="/sofi-green.jpg">
      <SectionTitle colorClass="text-primary-foreground">Formazione Specifica</SectionTitle>

      <SectionContent>
        <div className="mt-12 text-primary-foreground">
          <h4 className="text-sm uppercase tracking-wider mb-4">Competenze formative</h4>
          <ul className="space-y-3">
            <li className="text-sm font-light leading-relaxed">
              Acquisizione di competenze teoriche e pratiche in ambito sportivo e motorio.
            </li>
            <li className="text-sm font-light leading-relaxed">
              Eccellente rendimento in Biochimica e Fisiologia della Nutrizione (30 e lode).
            </li>
            <li className="text-sm font-light leading-relaxed">
              Focus su promozione della salute e benessere psico-motorio.
            </li>
          </ul>
        </div>
      </SectionContent>
    </Section>
  );
}
