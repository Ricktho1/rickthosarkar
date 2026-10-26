import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronRight, ChevronDown, ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";

import projectLunar from "@/assets/project-lunar.jpg";
import projectVehicle from "@/assets/project-vehicle.jpg";
import projectPackage from "@/assets/project-package.jpg";
import projectAgri from "@/assets/project-agri.jpg";

export const projects = [
  {
    title: "High-Resolution Elemental Mapping of the Moon’s Surface", category: "Space Science / AI",
    organization: "ISRO / Inter-IIT Tech Meet 13.0", period: "Sep 2024 – Jan 2025",
    description: "Developed a method to analyze XRF data from Chandrayaan-2’s CLASS for elemental mapping of the Moon.",
    details: ["Analyzed astronomical time-series data in FITS format using XSPEC in a Unix-based kernel.", "Applied DCT and Drizzle image processing to structured data to increase spatial resolution."],
    outcome: "Ranked 4th among all 23 IITs for the ISRO High-Prep Problem Statement at Inter-IIT Tech Meet 13.0.",
    tech: ["XRF", "FITS", "XSPEC", "Unix", "DCT", "Drizzle"], image: projectLunar, number: "01",
  },
  {
    title: "Autonomous Vehicle", category: "Robotics / Autonomy",
    organization: "Technical Coordinator · Team Averera, IIT (BHU)", period: "Sep 2023 – Jul 2024",
    description: "Worked on an SAE Level 3 autonomous vehicle using 3D LiDAR and cameras for navigation.",
    details: ["Worked towards applying HDL graph SLAM and the Pure Pursuit package for autonomous navigation.", "Applied CNN-based segmentation and trajectory planning, validated in hardware with real-time inference."],
    outcome: "Validated CNN-based segmentation and trajectory planning in hardware with real-time inference.",
    tech: ["3D LiDAR", "Cameras", "HDL Graph SLAM", "Pure Pursuit", "CNN"], image: projectVehicle, number: "02",
  },
  {
    title: "Agricultural Manual & Autonomous Bots", category: "Robotics",
    organization: "Team Robocon 2024, IIT (BHU)", period: "Dec 2024 – Apr 2025",
    description: "Developed manual and autonomous bots to pick seedlings, paddy rice and empty grain in designated areas.",
    details: ["Simulated and implemented in Gazebo ROS with 2D LiDAR, IMU, cameras and motors using PID control.", "Used Jetson Nano and Raspberry Pi with existing Tele-operations and SLAM packages."],
    outcome: "Qualified Stage 1 of Robocon 2024, represented IIT (BHU) in Stage 2 and exhibited the bot in Stage 3.",
    tech: ["Gazebo", "ROS", "2D LiDAR", "IMU", "PID", "Jetson Nano", "Raspberry Pi", "SLAM"], image: projectAgri, number: "03",
  },
  {
    title: "Autonomous Robotic Bot for Package Control", category: "Robotics / Manipulation",
    organization: "Flipkart Grid 5.0", period: "Sep 2023 – Nov 2023",
    description: "Developed an autonomous robotic arm for identifying and manipulating packages in warehouses.",
    details: ["Implemented a core-XY mechanism and inverse kinematics using Arduino and stepper motors.", "Used YOLOv5 to detect packages with custom datasets from Roboflow."],
    outcome: "Built a package-identification and manipulation system combining visual detection and robotic control.",
    tech: ["Core-XY", "Inverse Kinematics", "Arduino", "Stepper Motors", "YOLOv5", "Roboflow"], image: projectPackage, number: "04",
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
                  alt={`${project.title} — illustrative visualization`}
                  loading="lazy"
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

                <p className="font-mono text-xs text-muted-foreground mb-4">{project.period}</p>
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
                  {expandedProject === project.title ? "Show Less" : "Learn More"}
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
