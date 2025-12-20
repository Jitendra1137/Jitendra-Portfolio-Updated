import { ReactNode } from "react";

interface SkillRingProps {
  size: number;
  duration: number;
  reverse?: boolean;
  skills: { icon: ReactNode; name: string; isPrimary?: boolean }[];
  ringColor: string;
  iconSize?: number;
}

const SkillRing = ({ size, duration, reverse, skills, ringColor, iconSize = 48 }: SkillRingProps) => {
  const radius = size / 2;
  const halfIcon = iconSize / 2;
  
  return (
    <div
      className={`absolute rounded-full border ${ringColor} ${
        reverse ? "animate-spin-slow-reverse" : "animate-spin-slow"
      }`}
      style={{
        width: size,
        height: size,
        animationDuration: `${duration}s`,
      }}
    >
      {skills.map((skill, index) => {
        const angle = (360 / skills.length) * index;
        const radian = (angle * Math.PI) / 180;
        const x = Math.cos(radian) * (radius - halfIcon);
        const y = Math.sin(radian) * (radius - halfIcon);
        
        return (
          <div
            key={skill.name}
            className={`absolute flex items-center justify-center rounded-full transition-all duration-300 ${
              skill.isPrimary 
                ? "bg-card border-2 border-primary shadow-lg shadow-primary/30" 
                : "bg-card/80 border border-border/50"
            }`}
            style={{
              width: iconSize,
              height: iconSize,
              left: `calc(50% + ${x}px - ${halfIcon}px)`,
              top: `calc(50% + ${y}px - ${halfIcon}px)`,
            }}
            title={skill.name}
          >
            {/* Counter-rotation wrapper to keep icons upright */}
            <div 
              className={reverse ? "animate-spin-slow" : "animate-spin-slow-reverse"}
              style={{ animationDuration: `${duration}s` }}
            >
              {skill.icon}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SkillRing;
