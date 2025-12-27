import { Download, Briefcase } from "lucide-react";
import ProfileOrbit from "./ProfileOrbit";
import TypewriterText from "./TypewriterText";
import { Button } from "./ui/button";

const HeroSection = () => {
  const roles= [
  "DevOps Engineer",
  "Cloud & AWS Engineer",
  "CI/CD Pipeline Specialist",
  "Docker & Kubernetes Practitioner",
  "Infrastructure as Code (Terraform)",
  "Monitoring & ELK Stack Engineer",
  "Site Reliability Enthusiast",
  "Automation & Cloud Security"
];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          {/* Profile Orbit */}
          <div className="order-1 lg:order-2">
            <ProfileOrbit />
          </div>

          {/* Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left max-w-xl">
            <p className="text-primary font-medium mb-2 animate-fade-in">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-foreground animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Jitendra Kumar
              <span className="block text-gradient">Jat</span>
            </h1>
            <div className="text-xl md:text-2xl text-muted-foreground mb-6 h-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <TypewriterText texts={roles} />
            </div>
            <p className="text-muted-foreground mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: "0.3s" }}>
              Passionate about building scalable infrastructure, automating deployments,
              and creating seamless CI/CD pipelines with modern DevOps practices.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Button className="group glow-primary" size="lg">
                <Briefcase className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                <a href="#experience">View Experience</a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary/50 text-white"
                asChild
              >
                <a href="/Jitendra_Kumar_Jat_Resume.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
