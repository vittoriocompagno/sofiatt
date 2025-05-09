import { Section, SectionTitle, SectionContent } from '@/components/section';
import { ContactInfo } from '@/components/section/ContactInfo';

export function ContactSection() {
  return (
    <Section id="contact" zIndex={10} backgroundImageOverlay="/sofi-green.jpg">
      <SectionTitle colorClass="text-primary-foreground">Contattami</SectionTitle>
      <SectionContent>
        <div className="mt-12 text-primary-foreground space-y-6">
          <p className="text-lg font-light leading-relaxed">
            Vuoi collaborare, hai domande o desideri semplicemente metterti in contatto?
            <br />
            Scrivimi senza impegno!
          </p>
          {/* Qui puoi aggiungere un form di contatto, email o link ai social */}
          <ContactInfo contacts={[
            { label: 'Email', value: 'sofiatuttolomondo@icloud.com' },
            { label: 'Telefono', value: '+39 333 1234567' },
          ]} />
        </div>
      </SectionContent>
    </Section>
  );
}
