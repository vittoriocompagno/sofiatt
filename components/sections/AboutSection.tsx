import { Section, SectionTitle, SectionContent, ContactInfo } from '@/components/section';

export function AboutSection() {
  return (
    <Section id="about" zIndex={2}>
      <SectionTitle>Chi sono</SectionTitle>

      <SectionContent>
        <p className="text-sm md:text-base font-light leading-relaxed mb-6 md:mb-12">
          Sono una studentessa di Scienze delle Attività Motorie e Sportive con esperienza in ospitalità, vendita e marketing. Ho sviluppato competenze comunicative e di gestione delle relazioni con i clienti. Sono dinamica, curiosa e orientata agli obiettivi, capace di adattarmi a diversi contesti e affrontare le sfide con creatività e determinazione.
        </p>

        <ContactInfo contacts={[
          { label: 'Telefono', value: '3342271183' },
          { label: 'Email', value: 'sofiatuttolomondo@icloud.com' },
          { label: 'Città', value: 'Palermo' }
        ]} />
      </SectionContent>
    </Section>
  );
}
