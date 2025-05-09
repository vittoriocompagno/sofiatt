type LanguageBarProps = {
  language: string;
  level: string;
  percentage?: number;
};

export function LanguageBar({ language, level, percentage = 100 }: LanguageBarProps) {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="text-sm font-light">{language}</span>
        <span className="text-xs text-muted-foreground">{level}</span>
      </div>
      <div className="relative flex items-center">
        <div className="h-4 w-4 rounded-full bg-primary absolute left-0 z-10"></div>
        {percentage < 100 ? (
          <>
            <div className="h-0.5 w-full bg-muted"></div>
            <div className="h-0.5 bg-[var(--sofi-green)] absolute left-0" style={{ width: `${percentage}%` }}></div>
            <div className="h-4 w-4 rounded-full bg-primary absolute z-10" style={{ left: `${percentage}%` }}></div>
            <div className="h-4 w-4 rounded-full bg-primary absolute right-0 z-10"></div>
          </>
        ) : (
          <>
            <div className="h-0.5 w-full bg-[var(--sofi-green)]"></div>
            <div className="h-4 w-4 rounded-full bg-primary absolute right-0 z-10"></div>
          </>
        )}
      </div>
    </div>
  );
}
