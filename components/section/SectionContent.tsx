type SectionContentProps = {
  children: React.ReactNode;
};

export function SectionContent({ children }: SectionContentProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 lg:gap-24 h-full items-start mt-16 sm:mt-0 sm:items-center pt-0 sm:pt-28 md:pt-32 lg:pt-40 overflow-y-auto pb-8 md:pb-16">
      <div className="md:col-span-1 self-center">
        {/* Spazio per eventuale contenuto a sinistra */}
      </div>
      <div className="md:col-span-2 w-full max-w-full lg:max-w-2xl section-content self-center pr-1 md:pr-4">
        {children}
      </div>
    </div>
  );
}
