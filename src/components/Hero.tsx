import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";
import profileImage from "@/assets/profile.jpg";
import resumeAsset from "@/assets/resume.pdf.asset.json";

const stats = [
  { value: "4", label: "Projects" },
  { value: "3", label: "Internships" },
  { value: "5,000+", label: "Students Represented" },
];

export function Hero() {
  return (
    <section className="min-h-screen relative overflow-hidden pt-20 lg:pt-0">
      {/* Grid Paper Background */}
      <div className="absolute inset-0 grid-paper" />
      
      {/* Noise Texture */}
      <div className="absolute inset-0 noise-overlay" />

      {/* Accent Line - Top */}
      <motion.div 
        className="absolute top-0 left-0 h-1 bg-primary"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full py-12 lg:py-0">
          
          {/* Left Column - Main Content */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-6 leading-[0.95]"
            >
              <span className="text-foreground">Ricktho</span>
              <br />
              <span className="text-foreground">Sarkar</span>
              <span className="text-primary">.</span>
            </motion.h1>

            {/* Role Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              {["AI Researcher", "Roboticist", "Computer Vision"].map((tag, i) => (
                <span 
                  key={tag} 
                  className="research-badge"
                  style={{ animationDelay: `${0.6 + i * 0.1}s` }}
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed"
            >
              Building intelligent systems at the intersection of AI, robotics, and autonomy. 
              Pursuing an MSc in Robotics and Artificial Intelligence at{" "}
              <span className="text-foreground font-medium marker-highlight">UCL</span>,
              following a B.Tech in Electrical Engineering from IIT (BHU) Varanasi.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-mono uppercase tracking-wider text-sm px-8 rounded-none hover-brutal"
              >
                <a href="#projects">
                  View Research
                  <ArrowUpRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-background font-mono uppercase tracking-wider text-sm px-8 rounded-none hover-brutal"
              >
                <a href="#contact">Contact</a>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="lg"
                className="text-muted-foreground hover:text-foreground font-mono uppercase tracking-wider text-sm underline-grow"
              >
                <a href={resumeAsset.url} target="_blank" rel="noopener noreferrer">
                  Resume ↗
                </a>
              </Button>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="grid grid-cols-3 gap-3 sm:gap-8 border-t border-border pt-8 [&_.stat-highlight]:text-3xl sm:[&_.stat-highlight]:text-5xl"
            >
              {stats.map((stat, i) => (
                <div key={stat.label}>
                  <div className="stat-highlight">{stat.value}</div>
                  <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Image & Social */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col items-center lg:items-end">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative mb-8"
            >
              {/* Image Frame - Brutalist offset border */}
              <div className="relative">
                <div className="absolute inset-0 border-2 border-primary translate-x-4 translate-y-4" />
              <div className="relative w-64 h-72 md:w-72 md:h-80 lg:w-80 lg:h-96 overflow-hidden border-2 border-foreground">
                  <img 
                    src={profileImage} 
                    alt="Ricktho Sarkar" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="flex gap-2 mt-8"
            >
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
                  className="w-12 h-12 border-2 border-border hover:border-primary flex items-center justify-center group transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <motion.a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-mono text-xs uppercase tracking-widest"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span>Scroll</span>
          <ArrowDown className="w-4 h-4" />
        </motion.a>
      </motion.div>

      {/* Side Annotation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="absolute right-4 top-1/2 -translate-y-1/2 hidden xl:block"
      >
        <div className="font-mono text-xs text-muted-foreground transform rotate-90 origin-center whitespace-nowrap">
          Open to Research Opportunities — 2026
        </div>
      </motion.div>
    </section>
  );
}
