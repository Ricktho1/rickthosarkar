import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "High-Resolution Elemental Mapping of the Moon",
    category: "Space Science / AI",
    organization: "ISRO / Inter-IIT Tech Meet",
    description:
      "Developed AI-powered analysis pipeline for lunar elemental composition mapping using satellite spectroscopy data. Created high-resolution maps combining multiple data sources.",
    approach:
      "Applied deep learning models for spectral analysis and data fusion, implementing custom architectures for handling multi-spectral satellite imagery.",
    outcome: "Achieved higher resolution elemental maps than existing methods, recognized at Inter-IIT.",
    tech: ["PyTorch", "Spectral Analysis", "Remote Sensing", "Data Fusion"],
    featured: true,
  },
  {
    title: "Autonomous Vehicle System",
    category: "Robotics / Autonomy",
    organization: "Team Averera, IIT (BHU)",
    description:
      "Core member developing full-stack autonomous driving system including perception, planning, and control modules for driverless vehicle competitions.",
    approach:
      "Implemented sensor fusion using LiDAR, cameras, and IMU. Developed path planning algorithms and integrated ROS-based control systems.",
    outcome: "Successfully demonstrated autonomous navigation in complex environments.",
    tech: ["ROS", "LIDAR", "SLAM", "Carla", "C++", "Python"],
    featured: true,
  },
  {
    title: "Federated Learning Client Selection",
    category: "ML Research",
    organization: "DRDO Project",
    description:
      "Research on optimizing client selection strategies in federated learning environments with non-IID data distributions for defense applications.",
    approach:
      "Developed novel selection algorithms that account for data heterogeneity and communication constraints in distributed learning scenarios.",
    outcome: "Improved model convergence speed and final accuracy in heterogeneous federated settings.",
    tech: ["PyTorch", "Federated Learning", "Distributed Systems", "Python"],
    featured: false,
  },
  {
    title: "Agricultural Autonomous Robot",
    category: "Robotics",
    organization: "ABU Robocon",
    description:
      "Designed and built autonomous robot for agricultural tasks as part of the national Robocon competition team.",
    approach:
      "Integrated computer vision for crop detection, developed motion control systems, and implemented autonomous navigation.",
    outcome: "Competed at national level representing IIT (BHU).",
    tech: ["ROS", "OpenCV", "Arduino", "Mechanical Design", "PCB Design"],
    featured: false,
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  return (
    <section id="projects" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 neural-grid opacity-30" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-4 block">PROJECTS</span>
          <h2 className="section-title mb-6">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="section-subtitle mx-auto">
            From lunar mapping to autonomous vehicles — projects that push the boundaries of AI and robotics.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {projects
            .filter((p) => p.featured)
            .map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                className="glass-card rounded-3xl overflow-hidden hover-lift group"
              >
                {/* Gradient Header */}
                <div className="h-2 bg-gradient-to-r from-primary to-accent" />

                <div className="p-8">
                  {/* Category Badge */}
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                    {project.category}
                  </span>

                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {project.title}
                  </h3>

                  <p className="text-primary font-medium mb-4">
                    {project.organization}
                  </p>

                  <p className="text-muted-foreground mb-6">
                    {project.description}
                  </p>

                  {/* Expandable Details */}
                  {expandedProject === project.title && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mb-6 space-y-4"
                    >
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Approach</h4>
                        <p className="text-sm text-muted-foreground">{project.approach}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Outcome</h4>
                        <p className="text-sm text-muted-foreground">{project.outcome}</p>
                      </div>
                    </motion.div>
                  )}

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span key={tech} className="tech-chip text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-4">
                    <Button
                      variant="ghost"
                      className="text-primary hover:text-primary hover:bg-primary/10"
                      onClick={() =>
                        setExpandedProject(
                          expandedProject === project.title ? null : project.title
                        )
                      }
                    >
                      {expandedProject === project.title ? "Show Less" : "Learn More"}
                      <ChevronRight
                        className={`w-4 h-4 ml-1 transition-transform ${
                          expandedProject === project.title ? "rotate-90" : ""
                        }`}
                      />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>

        {/* Other Projects */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects
            .filter((p) => !p.featured)
            .map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="glass-card rounded-2xl p-6 hover-lift hover-glow"
              >
                <span className="inline-block px-2 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium mb-3">
                  {project.category}
                </span>

                <h3 className="text-lg font-bold text-foreground mb-2">
                  {project.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span key={tech} className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
