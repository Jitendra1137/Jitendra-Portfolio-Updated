import { Mail, Github, Linkedin } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "jitendrakumarjat81@gmail.com",
    href: "mailto:jitendrakumarjat81@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/Jitendra1137",
    href: "https://github.com/Jitendra1137",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/jitendrakumarjat",
    href: "https://linkedin.com/in/jitendrakumarjat",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {contactLinks.map((contact, index) => (
            <a
              key={index}
              href={contact.href}
              target={contact.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="glass-card border-border/30 hover:border-accent/50 transition-all duration-300 h-full">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:glow-accent transition-all">
                    <contact.icon className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{contact.label}</h3>
                  <p className="text-sm text-muted-foreground group-hover:text-accent transition-colors">
                    {contact.value}
                  </p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
