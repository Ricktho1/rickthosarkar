import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    title: "AI Intern",
    company: "Field Genie / IOT++ / MultipliedAI",
    location: "Remote",
    period: "May 2025 - July 2025",
    type: "Industry",
    highlights: [
      "Developed Agentic OS building multiple agents and integrating them into LangGraph and LangChain",
      "Implemented and built multiple MCP servers for automating different tasks of the company",
      "Created RAG tools for different MCP agents along with a Vector Database in MongoDB",
      "Worked in backend and frontend using ReactJS and FastAPI to integrate Langgraph agents",
    ],
    tech: ["LangGraph", "LangChain", "PyTorch", "ReactJS", "FastAPI", "MCP"],
  },
  {
    title: "Remote Research Intern",
    company: "Indian Statistical Institute",
    location: "West Bengal, India",
    period: "Nov 2024 - Jan 2025",
    type: "Research",
    highlights: [
      "Studied Vision Language Models like CLIP, BLIP, BLIP2 along with their architecture and implementation",
      "Worked on infusing Normalizing Flow and Variational Auto-Encoder in VLMs to improve performance",
      "Got significantly better results than original papers and publishing paper for the same",
    ],
    tech: ["Transformers", "Vision Language Models", "VAE", "Normalizing Flows", "PyTorch"],
  },
  {
    title: "Onsite Research Intern",
    company: "Visual AI Lab, Changwon National University",
    location: "South Korea",
    period: "May 2024 - July 2024",
    type: "Research",
    highlights: [
      "Comparative study in 2D object detection using YOLOv8 and other YOLO architectures",
      "Implemented BEVFusion research paper by MIT, learning about Swin Transformer",
      "Studied VoxelNet architecture to process LIDAR Point Cloud Data and convert to BEV feature maps",
      "Used Detectron2 library for Transfer learning on custom datasets",
    ],
    tech: ["PyTorch", "CNN", "Transformers", "Detectron2", "CUDA", "Jupyter"],
  },
];

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-4 block">EXPERIENCE</span>
          <h2 className="section-title mb-6">
            Professional <span className="gradient-text">Journey</span>
          </h2>
          <p className="section-subtitle mx-auto">
            From research labs to AI startups, building impactful solutions across the globe.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background md:-translate-x-1/2 z-10" />

              {/* Content Card */}
              <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                <div className="glass-card rounded-2xl p-6 hover-lift hover-glow">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-2 ${
                        exp.type === "Research" 
                          ? "bg-accent/10 text-accent" 
                          : "bg-primary/10 text-primary"
                      }`}>
                        {exp.type}
                      </span>
                      <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                    </div>
                  </div>

                  {/* Company Info */}
                  <div className="flex flex-col gap-2 mb-4">
                    <div className="flex items-center gap-2 text-primary">
                      <Building2 className="w-4 h-4" />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
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
                  <ul className="space-y-2 mb-4">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech) => (
                      <span key={tech} className="tech-chip text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
