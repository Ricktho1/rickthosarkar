import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "AI & Machine Learning",
    number: "01",
    skills: [
      { name: "Deep Learning", level: 80 },
      { name: "Computer Vision", level: 90 },
      { name: "Vision-Language Models", level: 85 },
      { name: "Diffusion Models", level: 80 },
      { name: "Federated Learning", level: 75 },
    ],
  },
  {
    title: "Robotics & Autonomy",
    number: "02",
    skills: [
      { name: "ROS/ROS2", level: 90 },
      { name: "SLAM", level: 85 },
      { name: "Motion Planning", level: 80 },
      { name: "LiDAR Processing", level: 85 },
      { name: "Sensor Fusion", level: 80 },
    ],
  },
  {
    title: "Programming",
    number: "03",
    skills: [
      { name: "Python", level: 95 },
      { name: "C++", level: 85 },
      { name: "JavaScript/React", level: 30 },
      { name: "FastAPI", level: 80 },
      { name: "SQL", level: 60 },
    ],
  },
  {
    title: "Tools & Frameworks",
    number: "04",
    skills: [
      { name: "PyTorch", level: 95 },
      { name: "Detectron2", level: 85 },
      { name: "Carla/Gazebo", level: 75 },
      { name: "Docker/Git", level: 85 },
      { name: "CUDA", level: 60 },
    ],
  },
];

const additionalTech = [
  "LangChain", "LangGraph", "Hugging Face", "TensorFlow", "OpenCV",
  "NumPy", "Pandas", "Matplotlib", "Linux", "AWS",
  "MongoDB", "Redis", "gRPC", "WebSockets", "Jupyter",
];

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
          <span className="section-number">07 — Expertise</span>
          <h2 className="section-title mt-4 mb-6">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive skill set spanning AI, robotics, and software development.
          </p>
          <div className="w-24 h-0.5 bg-primary mt-6" />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + categoryIndex * 0.1 }}
              className="paper-card p-6 lg:p-8"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-display text-xl text-foreground">
                  {category.title}
                </h3>
                <span className="font-mono text-xs text-muted-foreground">{category.number}</span>
              </div>

              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-mono text-sm text-foreground">{skill.name}</span>
                      <span className="font-mono text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-1 bg-muted overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: 0.5 + categoryIndex * 0.1 + skillIndex * 0.05,
                          ease: "easeOut",
                        }}
                        className="h-full bg-primary"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

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
