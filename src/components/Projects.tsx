import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronRight, ChevronDown, ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";

import projectLunar from "@/assets/project-lunar.jpg";
import projectVehicle from "@/assets/project-vehicle.jpg";
import projectPackage from "@/assets/project-package.jpg";
import projectAgri from "@/assets/project-agri.jpg";
import projectRobodog from "@/assets/project-robodog.svg";
import projectFederated from "@/assets/project-federated.svg";
import projectVision from "@/assets/project-vision.svg";
import projectQuant from "@/assets/project-quant.svg";

type ProjectLink = { label: string; url: string };

export const projects: {
  title: string; category: string; organization: string; period: string;
  description: string; details: string[]; outcome: string; tech: string[];
  image: string; number: string; links: ProjectLink[];
}[] = [
  {
    title: "AI Robot Assistance Dog for Deaf & Blind People", category: "Robotics / Agentic AI",
    organization: "AgentVerse 2026 · Google DeepMind Award", period: "7 – 8 Nov 2026",
    description: "Built in 24 hours with a team of five: a Unitree Go2 quadruped in MuJoCo that hears alerts, finds its owner and guides them.",
    details: ["Used YAMNet with spectral rules on simulated stereo audio for sound detection and localisation, and Whisper for spoken commands.", "Ran the whole system as fully local AI: Gemma 4 via Ollama for decisions and YOLOv8n for vision."],
    outcome: "Won the Google DeepMind Award at AgentVerse 2026 (UCL AI Society) among 400+ participants, with 96% sound detection and 0% false alerts.",
    tech: ["Unitree Go2", "MuJoCo", "YAMNet", "Whisper", "Gemma 4", "Ollama", "YOLOv8n"], image: projectRobodog, number: "01",
    links: [],
  },
  {
    title: "High-Resolution Elemental Mapping of the Moon’s Surface", category: "Space Science / AI",
    organization: "ISRO / Inter-IIT Tech Meet 13.0", period: "Sep 2024 – Jan 2025",
    description: "Developed a method to analyze XRF data from Chandrayaan-2’s CLASS for elemental mapping of the Moon.",
    details: ["Analyzed astronomical time-series data in FITS format using XSPEC in a Unix-based kernel.", "Applied DCT and Drizzle image processing to structured data to increase spatial resolution."],
    outcome: "Ranked 4th among all 23 IITs for the ISRO High-Prep Problem Statement at Inter-IIT Tech Meet 13.0.",
    tech: ["XRF", "FITS", "XSPEC", "Unix", "DCT", "Drizzle", "Python", "Go"], image: projectLunar, number: "02",
    links: [],
  },
  {
    title: "Autonomous Vehicle", category: "Robotics / Autonomy",
    organization: "Technical Coordinator · Team Averera, IIT (BHU)", period: "Sep 2023 – Jul 2024",
    description: "Worked on an SAE Level 3 autonomous vehicle using 3D LiDAR and cameras for navigation.",
    details: ["Worked towards applying HDL graph SLAM and the Pure Pursuit package for autonomous navigation.", "Applied CNN-based segmentation and trajectory planning, validated in hardware with real-time inference.", "Simulated in CARLA with ROS and deployed on a Jetson Xavier with PID control."],
    outcome: "Validated CNN-based segmentation and trajectory planning in hardware with real-time inference.",
    tech: ["3D LiDAR", "Cameras", "HDL Graph SLAM", "Pure Pursuit", "CNN", "ROS", "CARLA", "Jetson Xavier"], image: projectVehicle, number: "03",
    links: [
      { label: "Sample Video", url: "https://drive.google.com/file/d/1fqR32DyKsybwOtGJQTwd0Qjxw9hV2wr1/view" },
      { label: "Team Averera", url: "https://www.teamaverera.com/" },
    ],
  },
  {
    title: "Agricultural Manual & Autonomous Bots", category: "Robotics",
    organization: "Team Robocon 2024, IIT (BHU)", period: "Jan 2024 – Apr 2024",
    description: "Developed manual and autonomous bots to pick seedlings, paddy rice and empty grain in designated areas.",
    details: ["Simulated and implemented in Gazebo ROS with 2D LiDAR, IMU, cameras and motors using PID control.", "Used Jetson Nano and Raspberry Pi with existing Tele-operations and SLAM packages."],
    outcome: "Qualified Stage 1 of Robocon 2024, represented IIT (BHU) in Stage 2 and exhibited the bot in Stage 3.",
    tech: ["Gazebo", "ROS", "2D LiDAR", "IMU", "PID", "Jetson Nano", "Raspberry Pi", "SLAM"], image: projectAgri, number: "04",
    links: [{ label: "DD Robocon", url: "http://www.ddrobocon.in/index.php" }],
  },
  {
    title: "Autonomous Robotic Bot for Package Control", category: "Robotics / Manipulation",
    organization: "Flipkart Grid 5.0", period: "Sep 2023 – Nov 2023",
    description: "Developed an autonomous robotic arm for identifying and manipulating packages in warehouses.",
    details: ["Implemented a core-XY mechanism and inverse kinematics using Arduino and stepper motors.", "Used YOLOv5 to detect packages with custom datasets from Roboflow."],
    outcome: "Honourable mention and a top-30 finish among 100+ teams, with a package-identification and manipulation system combining visual detection and robotic control.",
    tech: ["Core-XY", "Inverse Kinematics", "Arduino", "Stepper Motors", "YOLOv5", "Roboflow"], image: projectPackage, number: "05",
    links: [
      { label: "Video", url: "https://www.youtube.com/watch?v=LkgdX7k3M0I" },
      { label: "Documentation", url: "https://docs.google.com/document/d/1jgyB6n9W82oVNq5gm8kLpuxP8gcEZxgXiXwt3AA8va4/edit" },
    ],
  },
  {
    title: "Client Selection in Federated Learning", category: "Research / ML",
    organization: "DRDO Research Project, IIT (BHU)", period: "Research project",
    description: "Built a reinforcement-learning framework that chooses which drone clients train a shared model, while protecting their privacy.",
    details: ["Developed a client selection framework leveraging reinforcement learning for efficient simulation.", "Tuned the privacy budget and introduced novel parameters related to drone clients.", "Integrated novel methods with approaches from complementary research."],
    outcome: "Led to the MAML-Select paper, currently under review at IEEE Transactions in AI.",
    tech: ["Federated Learning", "Reinforcement Learning", "Differential Privacy", "Meta-Learning"], image: projectFederated, number: "06",
    links: [{ label: "Read the Paper Details", url: "#research" }],
  },
  {
    title: "VISION-23", category: "Computer Vision / Simulation",
    organization: "Robotics Club, IIT (BHU) · GitHub", period: "2023",
    description: "The official arena for Vision’23, the Robotics Club’s image-processing robotics competition for freshers, built as an OpenAI Gym environment.",
    details: ["Participants write code that detects a target and navigates a simulated robot to the goal.", "Runs on Python with PyBullet for physics and OpenCV for vision."],
    outcome: "Used to run and evaluate submissions for the club’s Vision’23 competition.",
    tech: ["Python", "PyBullet", "OpenCV", "OpenAI Gym"], image: projectVision, number: "07",
    links: [{ label: "GitHub", url: "https://github.com/Ricktho1/VISION-23" }],
  },
  {
    title: "Quant Resources", category: "Open Source",
    organization: "GitHub", period: "Open source",
    description: "A community library of books and guides for quantitative finance interviews and study.",
    details: ["Collects classic interview and quant finance texts in one place for students preparing for quant roles.", "Open for others to contribute their own resources."],
    outcome: "My most popular repository, with 505 stars and 77 forks.",
    tech: ["Quant Finance", "Open Source"], image: projectQuant, number: "08",
    links: [{ label: "GitHub", url: "https://github.com/Ricktho1/Quant_resources" }],
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
                <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
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
                  {project.links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target={link.url.startsWith("#") ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-foreground hover:text-primary transition-colors underline-grow"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
