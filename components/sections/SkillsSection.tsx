import { Section, SectionTitle, SectionContent, SkillBar, LanguageBar } from '@/components/section';

export function SkillsSection() {
  return (
    <Section id="skills" zIndex={6}>
      <SectionTitle>Competenze</SectionTitle>

      <SectionContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-sm uppercase tracking-wider text-primary mb-4">Competenze professionali</h3>
            <ul className="space-y-6">
              <SkillBar name="Marketing & Branding" percentage={80} />
              <SkillBar name="Gestione operativa" percentage={65} />
              <SkillBar name="Comunicazione e Vendita" percentage={95} />
              <SkillBar name="Problem solving" percentage={85} />
            </ul>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-wider text-primary mb-4">Lingue</h3>
            <div className="space-y-8">
              <LanguageBar language="Italiano" level="Madrelingua" percentage={100} />
              <LanguageBar language="Inglese" level="Livello A2" percentage={30} />
            </div>

            <div className="mt-10">
              <div className="flex justify-center">
                <div className="relative w-32 h-32">
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionContent>
    </Section>
  );
}
