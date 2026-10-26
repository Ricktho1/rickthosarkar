import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, MapPin, Calendar } from "lucide-react";

export const experiences = [
  {
    title: "AI Intern", company: "Field Genie / IOT++ / MultipliedAI", location: "Remote",
    period: "12 May 2025 – 14 Jul 2025", type: "Industry", number: "01",
    highlights: [
      "Developed an Agentic OS, building multiple agents and integrating them into LangGraph and LangChain.",
      "Implemented multiple MCP servers to automate company tasks using FastAPI.",
    ], tech: ["LangGraph", "LangChain", "MCP", "FastAPI"],
  },
  {
    title: "Research Intern", company: "Indian Statistical Institute", location: "Remote",
    period: "25 Nov 2024 – 25 Jan 2025", type: "Research", number: "02",
    highlights: [
      "Worked on CLIP, BLIP and BLIP2 vision-language models, studying their architecture and implementation.",
      "Worked on integrating Normalizing Flow and Variational Auto-Encoders into VLMs to improve performance.",
    ], tech: ["CLIP", "BLIP", "BLIP2", "Normalizing Flow", "VAE"],
  },
  {
    title: "Research Intern", company: "Visual AI Lab, Changwon National University", location: "South Korea · Onsite",
    period: "15 May 2024 – 15 Jul 2024", type: "Research", number: "03",
    highlights: [
      "Implemented MIT's BEVFusion research paper and studied the Swin Transformer.",
      "Used Facebook AI Research's Detectron2 library for transfer learning on a custom dataset.",
    ], tech: ["BEVFusion", "Swin Transformer", "Detectron2", "Transfer Learning"],
  },
];

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dot-grid opacity-30" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="section-title mb-6">
            Professional <span className="text-primary">Journey</span>
          </h2>
          <p className="section-subtitle">
            From research labs to AI startups, building impactful solutions across the globe.
          </p>
          <div className="w-24 h-0.5 bg-primary mt-6" />
        </motion.div>

        {/* Experience Cards */}
        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <motion.article
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="paper-card p-6 md:p-8 hover-brutal"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Number */}
                <div className="hidden md:block font-mono text-5xl font-bold text-primary/20">
                  {exp.number}
                </div>

                {/* Content */}
                <div className="flex-1">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <span className={`inline-block px-3 py-1 font-mono text-[10px] uppercase tracking-widest mb-2 ${
                        exp.type === "Research" 
                          ? "bg-accent/10 text-accent border border-accent/20" 
                          : "bg-primary/10 text-primary border border-primary/20"
                      }`}>
                        {exp.type}
                      </span>
                      <h3 className="font-display text-2xl text-foreground">{exp.title}</h3>
                    </div>
                    <span className="font-mono text-xs text-muted-foreground md:hidden">{exp.number}</span>
                  </div>

                  {/* Company Info */}
                  <div className="flex flex-col gap-2 mb-6">
                    <div className="flex items-center gap-2 text-primary font-mono text-sm">
                      <Building2 className="w-4 h-4" />
                      {exp.company}
                    </div>
                    <div className="flex flex-wrap items-center gap-4 font-mono text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-3 mb-6">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech) => (
                      <span key={tech} className="tech-chip">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
