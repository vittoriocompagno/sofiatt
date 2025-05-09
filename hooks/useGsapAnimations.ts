import { useEffect, RefObject } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

type SectionRef = RefObject<HTMLDivElement | null>;

/**
 * Hook per gestire le animazioni GSAP per i titoli e i contenuti delle sezioni
 * @param sectionRefs - Array di riferimenti alle sezioni da animare
 */
export function useGsapAnimations(sectionRefs: SectionRef[]) {
  useEffect(() => {
    // Registra il plugin ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Applicazione animazioni ai titoli grandi
    sectionRefs.forEach((sectionRef) => {
      // Check if sectionRef.current exists
      if (!sectionRef.current) return;
      const section = sectionRef.current;

      const title = section.querySelector('.section-title');
      if (title) {
        // Animazione base per l'entrata
        gsap.fromTo(title,
          { opacity: 0, y: 100 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              end: 'top 20%',
              toggleActions: 'play none none reverse'
            }
          }
        );

        // Effetto di trasformazione durante lo scroll
        gsap.fromTo(title,
          { scale: 1, filter: 'blur(0px)' },
          {
            scale: 0.9,
            filter: 'blur(2px)',
            scrollTrigger: {
              trigger: section,
              start: 'top top',
              end: 'bottom top',
              scrub: true,
            }
          }
        );
      }

      // Animazione del contenuto della sezione
      const content = section.querySelector('.section-content');
      if (content) {
        gsap.fromTo(content,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.3,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 60%', // Adjusted to ensure content animation triggers appropriately
              end: 'top 40%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }
    });

    // Cleanup delle animazioni quando il componente viene smontato
    return () => {
      sectionRefs.forEach((sectionRef) => {
        if (sectionRef.current) {
          const triggers = ScrollTrigger.getAll().filter(trigger => 
            trigger.vars.trigger === sectionRef.current);
          
          triggers.forEach(trigger => trigger.kill());
        }
      });
    };
  }, [sectionRefs]);
}
