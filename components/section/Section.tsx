'use client';

import { RefObject, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

type SectionProps = {
  id?: string;
  zIndex: number;
  children: React.ReactNode;
  backgroundImageOverlay?: string; // path opzionale per overlay immagine
  backgroundVideoOverlay?: string; // path opzionale per overlay video
};

export function Section({ id, zIndex, children, backgroundImageOverlay, backgroundVideoOverlay }: SectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Configura le animazioni GSAP per questa sezione
  useEffect(() => {
    if (!sectionRef.current) return;
    const section = sectionRef.current;
    
    // Registra sempre ScrollTrigger all'inizio
    gsap.registerPlugin(ScrollTrigger);

    // Trova gli elementi da animare in questa sezione
    const title = section.querySelector('.section-title');
    const content = section.querySelector('.section-content');

    // Array per tenere traccia delle animazioni create per questa sezione
    const animations: gsap.core.Animation[] = [];

    // Animazione del titolo
    if (title) {
      // Animazione di entrata più drammatica e pronunciata
      const titleEnterAnim = gsap.fromTo(title,
        { 
          opacity: 0, 
          x: -50, // Aumentato movimento orizzontale
          scale: 0.9, // Inizia leggermente più piccolo
          rotationZ: -2, // Leggera rotazione per effetto drammatico
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          rotationZ: 0,
          duration: 1.2, // Durata aumentata
          ease: 'power3.out', // Easing più pronunciato
          scrollTrigger: {
            trigger: section,
            start: 'top 85%', // Inizia prima di vedere la sezione
            end: 'top 50%', // Finisce a metà viewport
            toggleActions: 'play complete none reverse',
          }
        }
      );
      animations.push(titleEnterAnim);
      
      // Effetto parallasse più pronunciato durante lo scroll
      const titleScrollAnim = gsap.fromTo(title,
        { yPercent: 0, scale: 1 },
        {
          yPercent: -12, // Movimento verticale più pronunciato
          scale: 1.05, // Leggero zoom durante lo scroll
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: 'bottom top',
            scrub: 0.8, // Inerzia più pronunciata per effetto più fluido
            pin: false, // Non pinniamo l'elemento
          }
        }
      );
      animations.push(titleScrollAnim);
    }

    // Animazione del contenuto
    if (content) {
      const contentAnim = gsap.fromTo(content,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 60%',
            end: 'top 30%',
            toggleActions: 'play complete reverse reset',
            scrub: 0.5, // Animazione fluida con lo scroll, valore 0.5 per leggero ritardo
            once: false // Assicura che l'animazione possa ripetersi in entrambe le direzioni
          }
        }
      );
      animations.push(contentAnim);
    }

    // Cleanup delle animazioni quando il componente viene smontato
    return () => {
      animations.forEach(animation => {
        if (animation.scrollTrigger) {
          animation.scrollTrigger.kill();
        }
        animation.kill();
      });
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`relative overflow-hidden h-[100vh] w-full sticky top-0 flex flex-col bg-secondary z-[${zIndex}] section-background
        items-start justify-start pt-16
        sm:pt-0 sm:items-start sm:justify-center
        px-4 sm:pl-6 sm:pr-4 md:pl-12 md:pr-8 lg:pl-16 lg:pr-12 xl:pl-24`}
      style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Overlay condizionale - priorità al video se entrambi presenti */}
      {backgroundVideoOverlay ? (
        <video
          src={backgroundVideoOverlay}
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover  z-0 pointer-events-none select-none brightness-40 "
        />
      ) : backgroundImageOverlay && (
        <img
          src={backgroundImageOverlay}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-60 z-0 pointer-events-none select-none"
        />
      )}
      <div className="relative z-10 w-full max-w-full">
        {children}
      </div>
    </section>
  );
}

// Esportiamo anche il tipo RefObject per altri componenti che potrebbero averne bisogno
export type SectionRefObject = RefObject<HTMLDivElement | null>;
