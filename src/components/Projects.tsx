import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronRight, ChevronDown, ChevronUp, ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";

import projectLunar from "@/assets/project-lunar.jpg";
import projectVehicle from "@/assets/project-vehicle.jpg";
import projectPackage from "@/assets/project-package.jpg";
import projectAgri from "@/assets/project-agri.jpg";
import projectFederated from "@/assets/project-federated.svg";
import projectVision from "@/assets/project-vision.svg";
import projectBc from "@/assets/project-bc.svg";
import projectYolo from "@/assets/project-yolo.svg";
import projectChatbot from "@/assets/project-chatbot.svg";
import projectMeteor from "@/assets/project-meteor.svg";
import projectFrogger from "@/assets/project-frogger.svg";
import projectTodo from "@/assets/project-todo.svg";

// Pictures taken straight from the project repositories on GitHub
const projectRobodog = "https://github.com/Ricktho1/AI_guide_smart_dog/raw/main/docs/img/demo.gif";
const projectMission = "https://github.com/Ricktho1/Mission_Planner/raw/main/Images/QGC_mission_planner.png";

type ProjectLink = { label: string; url: string };

type Project = {
  title: string; category: string; organization: string; period: string;
  description: string; details: string[]; outcome: string; tech: string[];
  image: string; number: string; links: ProjectLink[];
};

type MiniProject = { title: string; description: string; image: string; link: ProjectLink };

export const featuredProjects: Project[] = [
  {
    title: "Nudge: AI Assistance Dog for Deaf & Blind People", category: "Robotics / Agentic AI",
    organization: "AgentVerse 2026 · Google DeepMind Award", period: "7 – 8 Nov 2026",
    description: "Built in 24 hours with a team of five: a Unitree Go2 quadruped in MuJoCo that hears the house for its owner, finds them, tells them what happened and leads them by the handle.",
    details: [
      "Two simulated ears feed YAMNet and spectral rules to identify sounds like doorbells, knocks and smoke alarms, and locate where they came from.",
      "Finds the owner with YOLOv8n on the head camera, a probability map over rooms and the owner’s voice, then alerts them by vibration, light bar, screen and speech.",
      "Everything runs locally: plain-code safety reflexes that can never be overridden, with Gemma 4 via Ollama making judgement calls and Whisper for voice commands.",
    ],
    outcome: "Won the Google DeepMind Gemini prize and 2nd place in the Robotics Track at AgentVerse 2026, with 96% of alert sounds detected, no smoke alarm ever missed and 0% false alerts.",
    tech: ["Unitree Go2", "MuJoCo", "YAMNet", "Whisper", "Gemma 4", "Ollama", "YOLOv8n", "Piper TTS"], image: projectRobodog, number: "01",
    links: [{ label: "GitHub", url: "https://github.com/Ricktho1/AI_guide_smart_dog" }],
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
    links: [{ label: "Team Averera", url: "https://www.teamaverera.com/" }],
  },
];

export const moreProjects: Project[] = [
  {
    title: "Behaviour Cloning for a Mobile Manipulator", category: "Robot Learning",
    organization: "UCL COMP0245 · Group 10", period: "2026",
    description: "Taught a simulated Robotnik mobile manipulator (skid-steer base + 7-DoF Kinova arm) to drive to a 3D target and touch it, learning from a model-based expert.",
    details: [
      "Built three MLP policies on robot-frame features: one for the wheels, plus HOLD and REACH networks for the arm, switched by a latched navigation flag.",
      "Trained with DAgger over three rounds, letting the policy recover from its own mistakes; plain behaviour cloning succeeded in 0 of 200 test episodes.",
      "Ran a head-to-head comparison against my teammates’ linear regression and random forest controllers on the same 1,000 random cases.",
    ],
    outcome: "99.1% of 1,000 random trials within 5 cm of the target (90.0% including targets as close as 0.9 m), at 0.21 ms per step.",
    tech: ["PyTorch", "DAgger", "Behaviour Cloning", "PyBullet", "Pinocchio", "MLP"], image: projectBc, number: "04",
    links: [
      { label: "My Branch", url: "https://github.com/Ricktho1/Behaviour_cloning_robotnik/tree/ricktho" },
      { label: "GitHub", url: "https://github.com/Ricktho1/Behaviour_cloning_robotnik" },
    ],
  },
  {
    title: "Agricultural Manual & Autonomous Bots", category: "Robotics",
    organization: "Team Robocon 2024, IIT (BHU)", period: "Jan 2024 – Apr 2024",
    description: "Developed manual and autonomous bots to pick seedlings, paddy rice and empty grain in designated areas.",
    details: ["Simulated and implemented in Gazebo ROS with 2D LiDAR, IMU, cameras and motors using PID control.", "Used Jetson Nano and Raspberry Pi with existing Tele-operations and SLAM packages."],
    outcome: "Qualified Stage 1 of Robocon 2024, represented IIT (BHU) in Stage 2 and exhibited the bot in Stage 3.",
    tech: ["Gazebo", "ROS", "2D LiDAR", "IMU", "PID", "Jetson Nano", "Raspberry Pi", "SLAM"], image: projectAgri, number: "05",
    links: [{ label: "GitHub", url: "https://github.com/Ricktho1/Robocon-2024" }],
  },
  {
    title: "Drone Mission Planner & 3D Shortest Path", category: "Drones / Planning",
    organization: "VECROS Tasks", period: "PX4 · Gazebo",
    description: "Flies a simulated PX4 quadcopter through a set of waypoints, reporting time and distance left at every moment, and finds shortest paths between points in 3D.",
    details: [
      "Mission planning with pymavlink and DroneKit on a PX4 SITL drone in Gazebo, monitored in QGroundControl.",
      "Reports remaining time and distance live, or elapsed time and distance to the next waypoint after each one is reached.",
      "Computes shortest paths in 3D across randomly weighted points with NetworkX, shown on an interactive plot.",
    ],
    outcome: "The drone completes the full waypoint mission and lands at the final waypoint, with the flown path plotted in Matplotlib and QGroundControl.",
    tech: ["PX4", "Gazebo", "QGroundControl", "pymavlink", "DroneKit", "NetworkX", "Python"], image: projectMission, number: "06",
    links: [{ label: "GitHub", url: "https://github.com/Ricktho1/Mission_Planner" }],
  },
  {
    title: "Autonomous Robotic Bot for Package Control", category: "Robotics / Manipulation",
    organization: "Flipkart Grid 5.0", period: "Sep 2023 – Nov 2023",
    description: "Developed an autonomous robotic arm for identifying and manipulating packages in warehouses.",
    details: ["Implemented a core-XY mechanism and inverse kinematics using Arduino and stepper motors.", "Used YOLOv5 to detect packages with custom datasets from Roboflow."],
    outcome: "Honourable mention and a top-30 finish among 100+ teams, with a package-identification and manipulation system combining visual detection and robotic control.",
    tech: ["Core-XY", "Inverse Kinematics", "Arduino", "Stepper Motors", "YOLOv5", "Roboflow"], image: projectPackage, number: "07",
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
    tech: ["Federated Learning", "Reinforcement Learning", "Differential Privacy", "Meta-Learning"], image: projectFederated, number: "08",
    links: [{ label: "Read the Paper Details", url: "#research" }],
  },
  {
    title: "YOLO Object Counting", category: "Computer Vision",
    organization: "GitHub", period: "Computer vision",
    description: "A modified YOLO detection pipeline that counts the objects it detects in images and video.",
    details: ["Builds on YOLO object detection and adds counting on top of the detections."],
    outcome: "A reusable starting point for counting objects with YOLO.",
    tech: ["YOLO", "Python", "OpenCV", "Object Detection"], image: projectYolo, number: "09",
    links: [{ label: "GitHub", url: "https://github.com/Ricktho1/Yolo-count-modified" }],
  },
  {
    title: "VISION-23", category: "Computer Vision / Simulation",
    organization: "Robotics Club, IIT (BHU)", period: "2023",
    description: "The official arena for Vision’23, the Robotics Club’s image-processing robotics competition for freshers, built as an OpenAI Gym environment.",
    details: ["Participants write code that detects a target and navigates a simulated robot to the goal.", "Runs on Python with PyBullet for physics and OpenCV for vision."],
    outcome: "Used to run and evaluate submissions for the club’s Vision’23 competition.",
    tech: ["Python", "PyBullet", "OpenCV", "OpenAI Gym"], image: projectVision, number: "10",
    links: [{ label: "GitHub", url: "https://github.com/Ricktho1/VISION-23" }],
  },
  {
    title: "Chatbot", category: "NLP",
    organization: "GitHub", period: "Natural language processing",
    description: "A conversational chatbot that understands a user’s message and replies in natural language.",
    details: ["Takes a user’s text input, works out what they are asking and generates a reply."],
    outcome: "A working conversational agent, built as part of my work in natural language processing.",
    tech: ["Python", "NLP"], image: projectChatbot, number: "11",
    links: [{ label: "GitHub", url: "https://github.com/Ricktho1/Chatbot" }],
  },
];

export const projects: Project[] = [...featuredProjects, ...moreProjects];

export const miniProjects: MiniProject[] = [
  {
    title: "Meteor Shooter", description: "A 2D arcade game: steer your ship, shoot down incoming meteors and survive as long as you can.",
    image: projectMeteor, link: { label: "GitHub", url: "https://github.com/Ricktho1/Cops_debugit/tree/main/Meteor_Shooter" },
  },
  {
    title: "Blade Frogger", description: "A take on the classic Frogger: hop across lanes of moving obstacles without getting hit.",
    image: projectFrogger, link: { label: "GitHub", url: "https://github.com/Ricktho1/Cops_debugit/tree/main/Blade_Frogger" },
  },
  {
    title: "To-Do List", description: "An Android app for adding, checking off and managing everyday tasks.",
    image: projectTodo, link: { label: "GitHub", url: "https://github.com/Ricktho1/Cops_debugit/tree/main/To%20do%20list" },
  },
];

function ProjectCard({ project, index, animate }: { project: Project; index: number; animate: boolean }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={animate ? { opacity: 1, y: 0 } : {}}
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
        {expanded && (
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
          {(expanded ? project.tech : project.tech.slice(0, 4)).map((tech) => (
            <span key={tech} className="tech-chip">
              {tech}
            </span>
          ))}
          {!expanded && project.tech.length > 4 && (
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
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "Show Less" : "Learn More"}
            {expanded ? (
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
  );
}

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showMore, setShowMore] = useState(false);

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

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} animate={isInView} />
          ))}
        </div>

        {/* More Projects (collapsible) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Button
            variant="ghost"
            aria-expanded={showMore}
            onClick={() => setShowMore(!showMore)}
            className="w-full flex items-center justify-between p-4 border border-border hover:border-primary transition-colors mb-8"
          >
            <span className="font-mono text-xs uppercase tracking-widest text-foreground">
              More Projects ({moreProjects.length + miniProjects.length})
            </span>
            {showMore ? (
              <ChevronUp className="w-4 h-4 text-primary" />
            ) : (
              <ChevronDown className="w-4 h-4 text-primary" />
            )}
          </Button>

          {showMore && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {moreProjects.map((project, index) => (
                  <ProjectCard key={project.title} project={project} index={index} animate={true} />
                ))}
              </div>

              {/* Mini Projects */}
              <h3 className="font-display text-2xl md:text-3xl text-foreground mb-2">
                Mini <span className="text-primary">Projects</span>
              </h3>
              <p className="text-muted-foreground mb-8">
                Games and an Android app from{" "}
                <a
                  href="https://github.com/Ricktho1/Cops_debugit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline-grow"
                >
                  COPS DebugIt
                </a>
                .
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {miniProjects.map((mini, index) => (
                  <motion.article
                    key={mini.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="paper-card group hover-brutal"
                  >
                    <div className="relative h-36 overflow-hidden">
                      <img
                        src={mini.image}
                        alt={`${mini.title} — illustrative visualization`}
                        loading="lazy"
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                      />
                    </div>
                    <div className="p-5">
                      <h4 className="font-display text-lg text-foreground mb-2">{mini.title}</h4>
                      <p className="text-sm text-muted-foreground mb-4">{mini.description}</p>
                      <a
                        href={mini.link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-foreground hover:text-primary transition-colors underline-grow"
                      >
                        {mini.link.label}
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
