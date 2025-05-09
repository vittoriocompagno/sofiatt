import { useRef, RefObject } from 'react';

/**
 * Hook che crea e gestisce i riferimenti per tutte le sezioni del portfolio
 * @returns Un oggetto contenente tutti i riferimenti alle sezioni
 */
export function useSectionRefs() {
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const educationalSkillsRef = useRef<HTMLDivElement>(null);
  const softSkillsRef = useRef<HTMLDivElement>(null);

  // Restituisco sia i singoli refs che un array con tutti i refs
  // per facilità di utilizzo in diversi contesti
  return {
    heroRef,
    aboutRef,
    educationRef,
    workRef,
    skillsRef,
    educationalSkillsRef,
    softSkillsRef,
    allRefs: [heroRef, aboutRef, educationRef, workRef, skillsRef, educationalSkillsRef, softSkillsRef]
  };
}
