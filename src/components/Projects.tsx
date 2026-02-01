import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronRight, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";

// Project images
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
      "Developed a method to analyze XRF data from Chandrayaan-2's CLASS for elemental mapping of the Moon",
      "Analyzed astronomical Time Series Data in FITS format with software like XSPEC in Unix-based kernel",
      "Applied image processing techniques like DCT and Drizzle on structured data to increase the spatial resolution",
      "Worked with raw spectral data to extract elemental abundances across lunar surface regions",
    ],
    outcome: "Ranked 4th among all 23 IITs in Inter-IIT Tech Meet 13.0 for this High-Prep Problem Statement of ISRO.",
    tech: ["Python", "GoLang", "XSPEC", "Time Series Data", "Image Processing", "DCT", "Drizzle Algorithm"],
    image: projectLunar,
    featured: true,
  },
  {
    title: "Autonomous Vehicle System",
    category: "Robotics / Autonomy",
    organization: "Team Averera, IIT (BHU)",
    description:
      "Building SAE Level 3 Autonomous Vehicle to autonomously navigate using 3D LIDAR and Cameras.",
    details: [
      "Building SAE Level 3 Autonomous Vehicle to autonomously navigate using 3D LIDAR and Cameras",
      "Working towards applying HDL graph SLAM implementing autonomous navigation using Pure Pursuit package",
      "Applied CNN-based segmentation and trajectory planning, validated in hardware, along with real-time inference",
      "Integrated sensor fusion with LiDAR, cameras, and IMU for robust perception",
      "Tested packages on CARLA simulator before deployment on physical vehicle",
      "Set up Jetson Xavier for remote autonomous driving operations",
    ],
    outcome: "Successfully demonstrated autonomous navigation in complex environments with real-time inference on Jetson Xavier.",
    tech: ["Python", "Carla", "ROS", "PID", "3D Object Detection", "Jetson Xavier", "HDL Graph SLAM", "Pure Pursuit"],
    image: projectVehicle,
    featured: true,
  },
  {
    title: "Client Selection in Federated Learning",
    category: "ML Research",
    organization: "DRDO Research Project, IIT(BHU)",
    description:
      "Developed a client selection framework leveraging reinforcement learning for efficient simulation in federated learning environments.",
    details: [
      "Developed a client selection framework leveraging reinforcement learning for efficient simulation",
      "Optimized outcomes by tuning privacy budget and introducing novel parameters related to drone clients",
      "Enhanced performance by integrating novel methods with approaches from complementary research",
      "Addressed challenges of non-IID data distribution in distributed learning scenarios",
      "Implemented differential privacy mechanisms to ensure data security",
    ],
    outcome: "Improved model convergence and accuracy with differential privacy in heterogeneous federated settings for defense applications.",
    tech: ["Differential Privacy", "Federated Learning", "Reinforcement Learning", "PyTorch", "Distributed Systems"],
    image: projectFederated,
    featured: true,
  },
  {
    title: "Agricultural Autonomous Robot",
    category: "Robotics",
    organization: "ABU Robocon 2024, IIT(BHU)",
    description:
      "Developed Manual and Autonomous Bots for picking seedlings, paddy rice, and empty grain in designated areas.",
    details: [
      "Developed Manual and Autonomous Bots for picking seedlings, paddy rice, and empty grain in designated areas",
      "Simulated and implemented in Gazebo ROS using 2D LIDAR, IMU, cameras and motors with PID control",
      "Utilized Jetson Nano and Raspberry Pi and implemented built packages like Tele-operations and SLAM",
      "Designed custom mechanical systems for precise agricultural task execution",
      "Integrated computer vision for crop detection and localization",
      "Coordinated between mechanical, electronics, and software teams as Team Lead",
    ],
    outcome: "Qualified Stage 1 of National Robocon 2024 and got an opportunity to exhibit our bot at the finals.",
    tech: ["Python", "Gazebo", "ROS", "Segmentation", "PID", "Jetson Nano", "Raspberry Pi", "SLAM"],
    image: projectAgri,
    featured: true,
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

        {/* All Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="glass-card rounded-3xl overflow-hidden hover-lift group"
            >
              {/* Project Image */}
              <div className="relative h-48 md:h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                <span className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-sm font-medium backdrop-blur-sm">
                  {project.category}
                </span>
              </div>

              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                  {project.title}
                </h3>

                <p className="text-primary font-medium mb-4">
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
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                        Key Contributions
                      </h4>
                      <ul className="space-y-2">
                        {project.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-2 border-t border-border">
                      <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-accent" />
                        Outcome
                      </h4>
                      <p className="text-sm text-muted-foreground">{project.outcome}</p>
                    </div>
                  </motion.div>
                )}

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {(expandedProject === project.title ? project.tech : project.tech.slice(0, 5)).map((tech) => (
                    <span key={tech} className="tech-chip text-xs">
                      {tech}
                    </span>
                  ))}
                  {expandedProject !== project.title && project.tech.length > 5 && (
                    <span className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground">
                      +{project.tech.length - 5} more
                    </span>
                  )}
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
                    {expandedProject === project.title ? (
                      <ChevronDown className="w-4 h-4 ml-1" />
                    ) : (
                      <ChevronRight className="w-4 h-4 ml-1" />
                    )}
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
