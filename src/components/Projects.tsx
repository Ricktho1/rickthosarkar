import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronRight, ChevronDown, ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";

import projectLunar from "@/assets/project-lunar.jpg";
import projectVehicle from "@/assets/project-vehicle.jpg";
import projectFederated from "@/assets/project-federated.jpg";
import projectAgri from "@/assets/project-agri.jpg";

const projects = [
  {
    title: "High-Resolution Elemental Mapping of the Moon",
    category: "Space Science / AI",
    organization: "ISRO / Inter-IIT Tech Meet 13.0",
    description:
      "Developed a method to analyze XRF data from Chandrayaan-2's CLASS for elemental mapping of the Moon's surface.",
    details: [
      "Analyzed astronomical Time Series Data in FITS format with XSPEC in Unix-based kernel",
      "Applied image processing techniques like DCT and Drizzle to increase spatial resolution",
      "Worked with raw spectral data to extract elemental abundances across lunar regions",
    ],
    outcome: "Ranked 4th among all 23 IITs in Inter-IIT Tech Meet 13.0",
    tech: ["Python", "GoLang", "XSPEC", "Time Series", "DCT", "Drizzle"],
    image: projectLunar,
    number: "01",
  },
  {
    title: "Autonomous Vehicle System",
    category: "Robotics / Autonomy",
    organization: "Team Averera, IIT (BHU)",
    description:
      "Building SAE Level 3 Autonomous Vehicle using 3D LIDAR and Cameras for navigation.",
    details: [
      "Implementing HDL graph SLAM with Pure Pursuit for autonomous navigation",
      "Applied CNN-based segmentation and trajectory planning with real-time inference",
      "Integrated sensor fusion with LiDAR, cameras, and IMU for robust perception",
    ],
    outcome: "Demonstrated autonomous navigation on Jetson Xavier",
    tech: ["ROS", "Carla", "SLAM", "Jetson Xavier", "3D Detection"],
    image: projectVehicle,
    number: "02",
  },
  {
    title: "Federated Learning Client Selection",
    category: "ML Research",
    organization: "DRDO Research Project, IIT(BHU)",
    description:
      "Developed a client selection framework leveraging reinforcement learning for federated environments.",
    details: [
      "Optimized outcomes by tuning privacy budget with novel drone-client parameters",
      "Addressed challenges of non-IID data distribution in distributed learning",
      "Implemented differential privacy mechanisms for data security",
    ],
    outcome: "Improved model convergence with differential privacy",
    tech: ["Differential Privacy", "Federated Learning", "RL", "PyTorch"],
    image: projectFederated,
    number: "03",
  },
  {
    title: "Agricultural Autonomous Robot",
    category: "Robotics",
    organization: "ABU Robocon 2024, IIT(BHU)",
    description:
      "Developed autonomous bots for agricultural tasks including seedling and paddy handling.",
    details: [
      "Simulated in Gazebo ROS using 2D LIDAR, IMU, cameras with PID control",
      "Utilized Jetson Nano and Raspberry Pi with SLAM and Tele-operations",
      "Integrated computer vision for crop detection and localization",
    ],
    outcome: "Qualified Stage 1 of National Robocon 2024",
    tech: ["Gazebo", "ROS", "Segmentation", "PID", "Jetson Nano"],
    image: projectAgri,
    number: "04",
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  return (
    <section id="projects" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-paper opacity-30" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="section-title mb-6">
            Featured <span className="text-primary">Work</span>
          </h2>
          <p className="section-subtitle">
            From lunar mapping to autonomous vehicles — pushing the boundaries of AI and robotics.
          </p>
          <div className="w-24 h-0.5 bg-primary mt-6" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="paper-card group"
            >
              {/* Project Image */}
              <div className="relative h-48 md:h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                
                {/* Project Number */}
                <span className="absolute top-4 right-4 font-mono text-6xl font-bold text-primary/20">
                  {project.number}
                </span>
                
                {/* Category Badge */}
                <span className="absolute bottom-4 left-4 px-3 py-1 bg-primary text-primary-foreground font-mono text-xs uppercase tracking-wider">
                  {project.category}
                </span>
              </div>

              <div className="p-6 md:p-8">
                <h3 className="font-display text-xl md:text-2xl text-foreground mb-2">
                  {project.title}
                </h3>

                <p className="font-mono text-xs uppercase tracking-wider text-primary mb-4">
                  {project.organization}
                </p>

                <p className="text-muted-foreground mb-4">
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
                      <h4 className="font-mono text-xs uppercase tracking-wider text-foreground mb-3">
                        Key Contributions
                      </h4>
                      <ul className="space-y-2">
                        {project.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                            <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-4 border-t border-border">
                      <h4 className="font-mono text-xs uppercase tracking-wider text-foreground mb-2">
                        Outcome
                      </h4>
                      <p className="text-sm text-accent">{project.outcome}</p>
                    </div>
                  </motion.div>
                )}

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {(expandedProject === project.title ? project.tech : project.tech.slice(0, 4)).map((tech) => (
                    <span key={tech} className="tech-chip">
                      {tech}
                    </span>
                  ))}
                  {expandedProject !== project.title && project.tech.length > 4 && (
                    <span className="font-mono text-xs text-muted-foreground px-2 py-1">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>

                {/* Actions */}
                <Button
                  variant="ghost"
                  className="font-mono text-xs uppercase tracking-wider text-primary hover:text-primary hover:bg-primary/10 p-0"
                  onClick={() =>
                    setExpandedProject(
                      expandedProject === project.title ? null : project.title
                    )
                  }
                >
                  {expandedProject === project.title ? "Show Less" : "Read More"}
                  {expandedProject === project.title ? (
                    <ChevronDown className="w-4 h-4 ml-2" />
                  ) : (
                    <ChevronRight className="w-4 h-4 ml-2" />
                  )}
                </Button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
