import SkillRing from "./SkillRing";
import { 
  SiLinux, 
  SiAmazonwebservices, 
  SiDocker, 
  SiKubernetes, 
  SiTerraform, 
  SiJenkins, 
  SiGithub, 
  SiReact,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiGit,
  SiPython,
  SiRedhat,
  SiSonarqube,
  SiGrafana
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { FaJava } from "react-icons/fa";

const ProfileOrbit = () => {
  // Primary DevOps skills (innermost ring) - highlighted
  const primarySkills = [
    { icon: <SiLinux size={18} />, name: "Linux", isPrimary: true },
    { icon: <SiAmazonwebservices size={18} />, name: "AWS", isPrimary: true },
    { icon: <SiDocker size={18} />, name: "Docker", isPrimary: true },
    { icon: <SiKubernetes size={18} />, name: "Kubernetes", isPrimary: true },
    { icon: <SiTerraform size={18} />, name: "Terraform", isPrimary: true },
    { icon: <SiJenkins size={18} />, name: "Jenkins", isPrimary: true },
    { icon: <SiGithub size={18} />, name: "GitHub", isPrimary: true },
    { icon: <VscAzure size={18} />, name: "Azure", isPrimary: true },
  ];

  // Secondary DevOps/Cloud skills (middle ring)
  const secondarySkills = [
    { icon: <SiRedhat size={16} />, name: "Red Hat Linux" },
    { icon: <SiSonarqube size={16} />, name: "SonarQube" },
    { icon: <FaJava size={16} />, name: "Maven" },
    { icon: <SiGrafana size={16} />, name: "Grafana" },
    { icon: <SiGit size={16} />, name: "Git" },
    { icon: <SiPython size={16} />, name: "Python" },
  ];

  // Frontend skills (outer ring)
  const frontendSkills = [
    { icon: <SiReact size={14} />, name: "React" },
    { icon: <SiTypescript size={14} />, name: "TypeScript" },
    { icon: <SiJavascript size={14} />, name: "JavaScript" },
    { icon: <SiHtml5 size={14} />, name: "HTML5" },
    { icon: <SiCss3 size={14} />, name: "CSS3" },
    { icon: <SiNodedotjs size={14} />, name: "Node.js" },
  ];

  return (
    <div className="relative flex items-center justify-center w-[400px] h-[400px] md:w-[500px] md:h-[500px]">
      {/* Outer glow effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 blur-3xl animate-pulse-glow" />
      
      {/* Outer ring - Frontend skills */}
      <SkillRing 
        size={480} 
        duration={35} 
        reverse 
        skills={frontendSkills} 
        ringColor="border-muted-foreground/20"
      />
      
      {/* Middle ring - Secondary DevOps */}
      <SkillRing 
        size={360} 
        duration={25} 
        skills={secondarySkills} 
        ringColor="border-secondary/30"
      />
      
      {/* Inner ring - Primary DevOps (highlighted) */}
      <SkillRing 
        size={240} 
        duration={20} 
        reverse 
        skills={primarySkills} 
        ringColor="border-primary/50"
      />
      
      {/* Profile image container */}
      <div className="relative z-10 w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary/50 glow-primary animate-float">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20" />
        <div className="w-full h-full bg-muted flex items-center justify-center text-4xl md:text-5xl font-bold text-gradient">
          JK
        </div>
      </div>
      
      {/* Status badge */}
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 z-20 px-4 py-1.5 rounded-full glass-card border border-accent/50 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
        <span className="text-xs font-medium text-foreground">Available for Work</span>
      </div>
    </div>
  );
};

export default ProfileOrbit;
