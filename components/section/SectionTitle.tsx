type SectionTitleProps = {
  children: React.ReactNode;
  colorClass?: string;
};

export function SectionTitle({ children, colorClass }: SectionTitleProps) {
  // Divide il testo in parole separate per metterle su righe diverse
  const words = typeof children === 'string' 
    ? children.split(' ')
    : [children]; // Se non è una stringa, la tratta come un'unica parola
  
  return (
    <h2 className={`section-title font-bold absolute
               top-4 sm:top-8 left-4 sm:left-6 md:left-12
               lg:top-2 lg:left-4 xl:top-2 xl:left-4 2xl:top-0 2xl:left-2
               leading-none
               text-5xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-8xl 2xl:text-9xl ${colorClass ?? 'text-primary'}`}>
      <div className="flex flex-col space-y-[-0.2em]">
        {words.map((word, index) => (
          <span key={index}>{word}</span>
        ))}
      </div>
    </h2>
  );
}
