type ExperienceCardProps = {
  period: string;
  title: string;
  subtitle: string;
  details: string[];
  className?: string;
};

export function ExperienceCard({ period, title, subtitle, details, className = '' }: ExperienceCardProps) {
  return (
    <div className={className}>
      <div className="flex flex-col mb-4">
        <span className="text-xs text-muted-foreground uppercase tracking-wider">{period}</span>
        <h3 className="text-lg mt-1">{title}</h3>
        <p className="text-sm text-muted-foreground mt-0.5">{subtitle}</p>
      </div>

      <ul className="space-y-3">
        {details.map((detail, index) => (
          <li key={index} className="text-sm font-light leading-relaxed">
            {detail}
          </li>
        ))}
      </ul>
    </div>
  );
}
