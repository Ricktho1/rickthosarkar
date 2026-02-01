import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 border-t border-border relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-muted/30 to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-xl font-bold gradient-text">RS</span>
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} Ricktho Sarkar. All rights reserved.
            </p>
          </div>

          {/* Tagline */}
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Built with <Heart className="w-4 h-4 text-destructive fill-current" /> and AI
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Ricktho1"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
            </a>
            <a
              href="https://linkedin.com/in/rickthosarkar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
            </a>
            <a
              href="mailto:ricktho.sarkar.cd.eee22@itbhu.ac.in"
              className="p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
