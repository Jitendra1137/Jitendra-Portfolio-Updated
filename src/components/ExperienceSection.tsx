import { Briefcase } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

const experiences = [
  {
    icon: "💻",
    period: "Jul 2025 - Present",
    duration: "6+ months",
    title: "DevOps Engineer",
    company: "8bit System Private Limited · Full-time",
    location: "Jaipur, Rajasthan, India · On-site",
    description: [],
    skills: ["Linux", "Red Hat Linux", "AWS", "Docker", "Kubernetes", "Terraform", "Jenkins", "GitHub", "Azure", "CI/CD"],
    isPrimary: true,
  },
  {
    icon: "☁️",
    period: "Oct 2024 - Jun 2025",
    duration: "9 months",
    title: "DevOps Engineer",
    company: "Hisan Labs - Hisan Labs Pvt Ltd · Internship",
    location: "Pune, Maharashtra, India · Remote",
    description: [
      "Worked on a large-scale CRM application with 18+ microservices and React-based frontend modules.",
      "Provisioned AWS infrastructure (S3, RDS, EKS, IAM) using Terraform for secure and scalable deployments.",
      "Containerized services with Docker and deployed on Kubernetes (EKS) clusters.",
      "Built and optimized Jenkins CI/CD pipelines using GitHub, Maven, and SonarQube.",
    ],
    skills: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins", "GitHub", "Maven", "SonarQube", "EKS"],
    isPrimary: true,
  },
  {
    icon: "🚀",
    period: "Jun 2023 - Jan 2024",
    duration: "8 months",
    title: "Frontend Developer",
    company: "Internshala · Trainee",
    location: "India · Remote",
    description: [
      "Developed responsive and user-friendly web interfaces.",
      "Collaborated on frontend architecture and ensured cross-browser compatibility.",
    ],
    skills: ["HTML", "CSS", "JavaScript", "React.js"],
    isPrimary: false,
  },
];

const ExperienceSection = () => {
  const primarySkills = ["Linux", "AWS", "Docker", "Kubernetes", "Terraform", "Jenkins", "GitHub", "Azure"];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building scalable systems and automating infrastructure across cloud platforms
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="glass-card border-border/30 hover:border-primary/50 transition-all duration-300 overflow-hidden group"
            >
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Timeline */}
                  <div className="flex flex-col items-center md:items-start md:w-48 shrink-0">
                    <span className="text-4xl mb-2">{exp.icon}</span>
                    <span className="text-sm text-primary font-medium">{exp.period}</span>
                    <span className="text-xs text-muted-foreground">{exp.duration}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-gradient transition-all">
                      {exp.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-2">{exp.company}</p>
                    <p className="text-muted-foreground/70 text-xs mb-4">{exp.location}</p>

                    {exp.description.length > 0 && (
                      <ul className="space-y-2 mb-4">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant={primarySkills.includes(skill) ? "default" : "secondary"}
                          className={
                            primarySkills.includes(skill)
                              ? "bg-primary/20 text-primary border border-primary/50 hover:bg-primary/30"
                              : "bg-muted/50 text-muted-foreground border border-border/50"
                          }
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
