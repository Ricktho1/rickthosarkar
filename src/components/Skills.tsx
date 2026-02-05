import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "AI & Machine Learning",
    skills: [
      { name: "Deep Learning", level: "Expert" },
      { name: "Computer Vision", level: "Expert" },
      { name: "Vision-Language Models", level: "Advanced" },
      { name: "Diffusion Models", level: "Advanced" },
      { name: "Federated Learning", level: "Intermediate" },
    ],
  },
  {
    title: "Robotics & Autonomy",
    skills: [
      { name: "ROS/ROS2", level: "Expert" },
      { name: "SLAM", level: "Advanced" },
      { name: "Motion Planning", level: "Advanced" },
      { name: "LiDAR Processing", level: "Advanced" },
      { name: "Sensor Fusion", level: "Advanced" },
    ],
  },
  {
    title: "Programming",
    skills: [
      { name: "Python", level: "Expert" },
      { name: "C++", level: "Advanced" },
      { name: "JavaScript/React", level: "Basic" },
      { name: "FastAPI", level: "Advanced" },
      { name: "SQL", level: "Intermediate" },
    ],
  },
  {
    title: "Tools & Frameworks",
    skills: [
      { name: "PyTorch", level: "Expert" },
      { name: "Detectron2", level: "Advanced" },
      { name: "Carla/Gazebo", level: "Intermediate" },
      { name: "Docker/Git", level: "Advanced" },
      { name: "CUDA", level: "Intermediate" },
    ],
  },
];

const additionalTech = [
  "LangChain", "LangGraph", "Hugging Face", "TensorFlow", "OpenCV",
  "NumPy", "Pandas", "Matplotlib", "Linux", "AWS",
  "MongoDB", "Redis", "gRPC", "WebSockets", "Jupyter",
];

const getLevelStyle = (level: string) => {
  switch (level) {
    case "Expert":
      return "bg-primary text-primary-foreground border-primary";
    case "Advanced":
      return "bg-accent text-accent-foreground border-accent";
    case "Intermediate":
      return "bg-muted text-foreground border-border";
    default:
      return "bg-background text-muted-foreground border-border";
  }
};

const getLevelDots = (level: string) => {
  switch (level) {
    case "Expert":
      return 4;
    case "Advanced":
      return 3;
    case "Intermediate":
      return 2;
    default:
      return 1;
  }
};

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 lg:py-32 relative overflow-hidden">
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
            Technical <span className="text-primary">Skills</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive skill set spanning AI, robotics, and software development.
          </p>
          <div className="w-24 h-0.5 bg-primary mt-6" />
        </motion.div>

        {/* Skills Grid - Card Layout with Dot Indicators */}
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + categoryIndex * 0.1 }}
              className="paper-card p-6 lg:p-8"
            >
              <h3 className="font-display text-xl text-foreground mb-6 pb-4 border-b border-border">
                {category.title}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: 0.4 + categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                    className="flex items-center justify-between group"
                  >
                    <span className="font-mono text-sm text-foreground group-hover:text-primary transition-colors">
                      {skill.name}
                    </span>
                    
                    <div className="flex items-center gap-3">
                      {/* Dot Indicators */}
                      <div className="flex gap-1.5">
                        {[1, 2, 3, 4].map((dot) => (
                          <motion.div
                            key={dot}
                            initial={{ scale: 0 }}
                            animate={isInView ? { scale: 1 } : {}}
                            transition={{
                              duration: 0.3,
                              delay: 0.6 + categoryIndex * 0.1 + skillIndex * 0.05 + dot * 0.05,
                            }}
                            className={`w-2.5 h-2.5 rounded-full border ${
                              dot <= getLevelDots(skill.level)
                                ? "bg-primary border-primary"
                                : "bg-transparent border-muted-foreground/30"
                            }`}
                          />
                        ))}
                      </div>
                      
                      {/* Level Badge */}
                      <span
                        className={`px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider border ${getLevelStyle(
                          skill.level
                        )}`}
                      >
                        {skill.level}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-8 flex flex-wrap justify-center gap-6"
        >
          {["Expert", "Advanced", "Intermediate", "Basic"].map((level) => (
            <div key={level} className="flex items-center gap-2">
              <div className="flex gap-1">
                {[1, 2, 3, 4].map((dot) => (
                  <div
                    key={dot}
                    className={`w-2 h-2 rounded-full border ${
                      dot <= getLevelDots(level)
                        ? "bg-primary border-primary"
                        : "bg-transparent border-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>
              <span className="font-mono text-xs text-muted-foreground">{level}</span>
            </div>
          ))}
        </motion.div>

        {/* Additional Tech Tags */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12"
        >
          <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6">
            Also Experienced With
          </h3>
          <div className="flex flex-wrap gap-2">
            {additionalTech.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.9 + index * 0.02 }}
                className="tech-chip"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
