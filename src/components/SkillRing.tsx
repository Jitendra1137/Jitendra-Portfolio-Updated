import { ReactNode } from "react";

interface SkillRingProps {
  size: number;
  duration: number;
  reverse?: boolean;
  skills: { icon: ReactNode; name: string; isPrimary?: boolean }[];
  ringColor: string;
}

const SkillRing = ({ size, duration, reverse, skills, ringColor }: SkillRingProps) => {
  const radius = size / 2;
  
  return (
    <div
      className={`absolute rounded-full border-2 ${ringColor} ${
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
        const x = Math.cos(radian) * (radius - 20);
        const y = Math.sin(radian) * (radius - 20);
        
        return (
          <div
            key={skill.name}
            className={`absolute flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${
              skill.isPrimary 
                ? "bg-primary/20 border-2 border-primary glow-primary" 
                : "bg-muted/50 border border-border/50"
            }`}
            style={{
              left: `calc(50% + ${x}px - 20px)`,
              top: `calc(50% + ${y}px - 20px)`,
              transform: reverse 
                ? `rotate(${-angle + (360 / duration) * Date.now() / 1000}deg)` 
                : `rotate(${-angle}deg)`,
              animation: reverse 
                ? `spin-slow ${duration}s linear infinite` 
                : `spin-slow-reverse ${duration}s linear infinite`,
            }}
            title={skill.name}
          >
            <div 
              className="text-foreground"
              style={{
                animation: reverse 
                  ? `spin-slow ${duration}s linear infinite` 
                  : `spin-slow-reverse ${duration}s linear infinite`,
              }}
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
