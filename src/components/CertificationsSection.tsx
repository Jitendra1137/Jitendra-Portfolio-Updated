import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { link } from "fs";

const certifications = [
  {
    title: "Back-end Web Development",
    issuer: "Internshala Trainings",
    issuedDate: "Oct 2023",
    credentialId: "h1me33jmpn2",
    link:"https://trainings.internshala.com/s/v/3170364/7c58ff5b"

  },
  {
    title: "Front-End Web Development",
    issuer: "Internshala Trainings",
    issuedDate: "Aug 2023",
    credentialId: "dj1bfy63fp4",
    link:"https://trainings.internshala.com/view_certificate/4lh837bz21u/dj1bfy63fp4/"

  },
];

const education = [
  {
    icon: "🎓",
    period: "2017 - 2021",
    title: "Bachelor of Technology - BTech, Computer Science",
    institution: "Institute of Engineering & Science, IPS Academy, Indore",
    grade: "CGPA 7.7",
    highlights: ["Computer Science", "Web Development", "Data Structures"],
  },
  {
    icon: "📚",
    period: "2016 - 2017",
    title: "12th, Mathematics",
    institution: "Bansal Institute Of Education, Jaipur",
  },
  {
    icon: "🏫",
    period: "2014 - 2015",
    title: "10th",
    institution: "Shree Shyam Vidhyapeeth, Jaipur",
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Certifications */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Licenses & <span className="text-gradient">Certifications</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-20">
          {certifications.map((cert, index) => (
            <Card 
              key={index} 
              className="glass-card border-border/30 hover:border-primary/50 transition-all duration-300"
            >
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">{cert.title}</h3>
                <p className="text-muted-foreground text-sm mb-2">{cert.issuer}</p>
                <p className="text-muted-foreground/70 text-xs mb-1">Issued {cert.issuedDate}</p>
                <p className="text-muted-foreground/70 text-xs mb-4">Credential ID: {cert.credentialId}</p>
                <Button variant="outline" size="sm" className="border-primary/50 hover:bg-primary/10">
                  <ExternalLink className="mr-2 h-3 w-3" />
                  <a href={cert.link} target="_blank" rel="noopener noreferrer">
                    Show Credential
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Education */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            <span className="text-gradient">Education</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <Card 
              key={index} 
              className="glass-card border-border/30 hover:border-secondary/50 transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <span className="text-3xl">{edu.icon}</span>
                  <div>
                    <span className="text-sm text-secondary font-medium">{edu.period}</span>
                    <h3 className="text-lg font-bold text-foreground mt-1">{edu.title}</h3>
                    <p className="text-muted-foreground text-sm">{edu.institution}</p>
                    {edu.grade && (
                      <p className="text-muted-foreground/70 text-xs mt-1">Grade: {edu.grade}</p>
                    )}
                    {edu.highlights && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {edu.highlights.map((h) => (
                          <span 
                            key={h} 
                            className="text-xs px-2 py-1 rounded-full bg-secondary/10 text-secondary border border-secondary/30"
                          >
                            {h}
                          </span>
                        ))}
                      </div>
                    )}
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

export default CertificationsSection;
