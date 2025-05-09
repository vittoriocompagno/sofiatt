import { Section, SectionTitle, SectionContent, StrengthTags } from '@/components/section';

export function SoftSkillsSection() {
  return (
    <Section id="soft-skills" zIndex={7}>
      <SectionTitle>Competenze Trasversali</SectionTitle>

      <SectionContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="relative">
            <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-primary"></div>
            <div className="absolute right-0 bottom-0 w-2 h-2 rounded-full bg-primary"></div>
            <div className="absolute right-0 top-1/2 w-1 h-1 rounded-full bg-primary"></div>
            <div className="absolute left-1/4 bottom-1/4 w-1 h-1 rounded-full bg-primary opacity-50"></div>
            <p className="text-sm font-light leading-relaxed pl-4 pr-4">
              Implementazione di strategie creative attraverso un'analisi delle potenzialità delle aziende per aumentarne la visibilità.
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-primary"></div>
            <div className="absolute right-0 bottom-0 w-2 h-2 rounded-full bg-primary"></div>
            <div className="absolute left-0 bottom-1/2 w-1 h-1 rounded-full bg-primary"></div>
            <div className="absolute right-1/4 top-1/4 w-1 h-1 rounded-full bg-primary opacity-50"></div>
            <p className="text-sm font-light leading-relaxed pl-4 pr-4">
              Responsabile della gestione di eventi al fine di promuovere il Brand Identity delle aziende.
            </p>
          </div>
        </div>
        
        <StrengthTags strengths={[
          'Creatività', 'Empatia', 'Leadership', 'Flessibilità', 'Problem solving', 'Team work'
        ]} />
      </SectionContent>
    </Section>
  );
}
