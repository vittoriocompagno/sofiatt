type StrengthTagProps = {
  label: string;
};

export function StrengthTag({ label }: StrengthTagProps) {
  return (
    <div className="px-4 py-3 border border-primary/20 hover:border-primary/50 transition-colors bg-white/5 hover:bg-primary/5 text-center">
      <span className="text-xs font-light">{label}</span>
    </div>
  );
}

type StrengthTagsProps = {
  strengths: string[];
};

export function StrengthTags({ strengths }: StrengthTagsProps) {
  return (
    <div className="mt-12">
      <h3 className="text-sm uppercase tracking-wider text-primary mb-6">Punti di forza</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {strengths.map((strength, index) => (
          <StrengthTag key={index} label={strength} />
        ))}
      </div>
    </div>
  );
}
