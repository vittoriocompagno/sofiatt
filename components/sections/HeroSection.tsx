'use client';

import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentTime, setCurrentTime] = useState<string>('');
  
  // Aggiorna l'ora corrente ogni secondo
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}:${seconds}`);
    };
    
    // Aggiorna subito l'ora
    updateTime();
    
    // Imposta un intervallo per aggiornare l'ora ogni secondo
    const interval = setInterval(updateTime, 1000);
    
    // Pulisci l'intervallo quando il componente viene smontato
    return () => clearInterval(interval);
  }, []);

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
      
      // Rimossa l'animazione di scroll per il titolo come richiesto
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
      className={`relative overflow-hidden h-[100vh] w-full sticky top-0 flex flex-col bg-background section-background
        items-start justify-start pt-16
        sm:pt-0 sm:items-start sm:justify-center
        px-4 sm:pl-6 sm:pr-4 md:pl-12 md:pr-8 lg:pl-16 lg:pr-12 xl:pl-24`}
      style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Video overlay */}
      <video
        src="/bg.mp4"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none select-none brightness-40"
      />
      
      {/* Orologio in alto a sinistra */}
      <div className="absolute top-4 left-4 z-20 text-primary-foreground font-mono text-sm md:text-base">
        {currentTime}
      </div>
      
      {/* Località in alto a destra */}
      <div className="absolute top-4 right-4 z-20 text-primary-foreground font-light text-sm md:text-base">
        Palermo, Italy
      </div>
      
      {/* Link CONTATTAMI in basso a destra */}
      <div className="absolute bottom-8 right-4 z-20">
        <a 
          href="mailto:sofia.tuttolomondo@example.com" 
          className="text-primary-foreground hover:text-primary transition-colors duration-300 font-medium text-xs md:text-sm uppercase tracking-wider"
        >
          Contattami
        </a>
      </div>
      
      {/* Copyright in basso a sinistra */}
      <div className="absolute bottom-8 left-4 z-20 text-primary-foreground/70 text-xs md:text-sm">
        &copy; {new Date().getFullYear()} Sofia Tuttolomondo. Tutti i diritti riservati.
      </div>
      
      <div className="relative z-10 w-full max-w-full">
        {/* Container principale con posizionamento personalizzato */}
        <div className="relative space-y-6 sm:space-y-8 max-w-5xl w-full
                        flex flex-col
                        self-start
                        mt-[30vh] sm:mt-0">
          {/* Contenuto testuale */}
          <div className="relative z-10 flex flex-col space-y-6 sm:space-y-8 w-full max-w-5xl">
            <h1 className="section-title
                          font-bold tracking-tighter leading-none
                          text-primary-foreground
                          text-5xl
                          sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] 2xl:text-[12rem]">
              Sofia <span className="block sm:inline font-bold text-primary-foreground">Tuttolomondo</span>
            </h1>
            <p className="section-content font-light text-primary-foreground text-sm max-w-[85%] md:text-base md:max-w-lg">
              Studentessa di Scienze delle Attività Motorie e Sportive con esperienza in ospitalità, vendita e marketing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
