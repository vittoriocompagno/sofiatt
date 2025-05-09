type SkillBarProps = {
  name: string;
  percentage: number;
  dots?: number;
};

export function SkillBar({ name, percentage, dots = 5 }: SkillBarProps) {
  const filledDots = Math.round((percentage / 100) * dots);
  
  return (
    <li className="text-sm font-light">
      <div className="flex items-center justify-between">
        <span>{name}</span>
        <div className="flex space-x-1">
          {Array.from({ length: dots }).map((_, index) => (
            <div 
              key={index} 
              className={`w-2 h-2 rounded-full ${index < filledDots ? 'bg-primary' : 'bg-muted'}`}
            />
          ))}
        </div>
      </div>
      <div className="w-full h-1 bg-muted mt-1">
        <div className="h-full bg-primary" style={{ width: `${percentage}%` }}></div>
      </div>
    </li>
  );
}
