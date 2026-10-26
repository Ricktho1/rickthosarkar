import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border relative">
      {/* Background */}
      <div className="absolute inset-0 grid-paper opacity-20" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Copyright */}
          <div>
            <span className="font-display text-2xl text-foreground">
              RS<span className="text-primary">.</span>
            </span>
            <p className="font-mono text-xs text-muted-foreground mt-2 uppercase tracking-wider">
              © {currentYear} Ricktho Sarkar
            </p>
          </div>

          {/* Tagline */}
          <div className="text-center">
            <p className="font-mono text-sm text-muted-foreground">
              Ready to collaborate?{" "}
              <a href="#contact" className="text-primary underline-grow">
                Let's talk
              </a>
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-end gap-2">
            {[
              { icon: Github, href: "https://github.com/Ricktho1", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/rickthosarkar", label: "LinkedIn" },
              { icon: Mail, href: "mailto:sarkar.ricktho@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="w-10 h-10 border border-border hover:border-primary flex items-center justify-center group transition-colors"
                aria-label={label}
              >
                <Icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-border flex flex-wrap justify-between items-center gap-4">
          <p className="font-mono text-xs text-muted-foreground">
            Built with React, Tailwind, and Framer Motion
          </p>
          <p className="font-mono text-xs text-muted-foreground">
            London, United Kingdom
          </p>
        </div>
      </div>
    </footer>
  );
}
