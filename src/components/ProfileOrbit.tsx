import SkillRing from "./SkillRing";
import { FaMicrosoft } from "react-icons/fa";
import {
  SiLinux,
  SiAmazon,
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiJenkins,
  SiGithub,
} from "react-icons/si";

/* ------------------------------
   Icon Container (UI polish)
------------------------------ */
const IconWrap = ({ children }) => (
  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 backdrop-blur border border-white/10 shadow-md">
    {children}
  </div>
);

const ProfileOrbit = () => {
  /* ------------------------------
     INNER RING (Core DevOps)
  ------------------------------ */
  const innerRing = [
    {
      icon: <IconWrap><SiLinux size={30} color="#FCC624" /></IconWrap>,
      name: "Linux",
    },
    {
      icon: <IconWrap><SiAmazon size={30} color="#FF9900" /></IconWrap>,
      name: "AWS",
    },
    {
      icon: <IconWrap><SiDocker size={30} color="#2496ED" /></IconWrap>,
      name: "Docker",
    },
    {
      icon: <IconWrap><SiKubernetes size={30} color="#326CE5" /></IconWrap>,
      name: "Kubernetes",
    },
  ];

  /* ------------------------------
     OUTER RING (CI/CD + Cloud)
  ------------------------------ */
  const outerRing = [
    {
      icon: <IconWrap><SiTerraform size={30} color="#7B42BC" /></IconWrap>,
      name: "Terraform",
    },
    {
      icon: <IconWrap><SiJenkins size={30} color="#D24939" /></IconWrap>,
      name: "Jenkins",
    },
    {
      icon: <IconWrap><SiGithub size={30} color="#ffffff" /></IconWrap>,
      name: "GitHub",
    },
    {
      icon: <IconWrap><FaMicrosoft size={30} color="#0089D6" /></IconWrap>,
      name: "Azure",
    },
  ];

  return (
    <div className="relative flex items-center justify-center w-[360px] h-[360px] md:w-[460px] md:h-[460px]">

      {/* Soft Glow Background */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-500/20 via-indigo-500/20 to-purple-500/20 blur-3xl" />

      {/* OUTER RING */}
      <SkillRing
        size={560}
        duration={36}
        skills={outerRing}
        ringColor="border-blue-500"
        iconSize={56}
      />

      {/* INNER RING */}
      <SkillRing
        size={360}
        duration={26}
        reverse
        skills={innerRing}
        ringColor="border-blue-500"
        iconSize={56}
      />

      {/* CENTER PROFILE */}
      <div className="relative z-10 w-36 h-36 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white/20 shadow-xl group transition-all duration-500 hover:scale-[1.36]">
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/10" />
        <img
          src="j.png"
          alt="Profile"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.36]"
        />
      </div>

      {/* STATUS BADGE */}
      <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-black/60 backdrop-blur border border-white/10 shadow-lg flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-sm text-white/90 font-medium">
          DevOps Engineer
        </span>
      </div>
    </div>
  );
};

export default ProfileOrbit;
