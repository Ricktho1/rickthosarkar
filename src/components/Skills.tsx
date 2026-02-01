import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "AI & Machine Learning",
    color: "primary",
    skills: [
      { name: "Deep Learning", level: 95 },
      { name: "Computer Vision", level: 90 },
      { name: "Vision-Language Models", level: 85 },
      { name: "Diffusion Models", level: 80 },
      { name: "Natural Language Processing", level: 80 },
    ],
  },
  {
    title: "Robotics & Autonomy",
    color: "accent",
    skills: [
      { name: "ROS/ROS2", level: 90 },
      { name: "SLAM", level: 85 },
      { name: "Carla/Gazebo Simulation", level: 85 },
      { name: "LiDAR Processing", level: 85 },
      { name: "PID Control", level: 80 },
    ],
  },
  {
    title: "Programming",
    color: "primary",
    skills: [
      { name: "Python", level: 95 },
      { name: "C/C++", level: 85 },
      { name: "TypeScript/ReactJS", level: 80 },
      { name: "LaTeX", level: 75 },
      { name: "Java/Dart", level: 70 },
    ],
  },
  {
    title: "Tools & Frameworks",
    color: "accent",
    skills: [
      { name: "PyTorch", level: 95 },
      { name: "Detectron2", level: 85 },
      { name: "OpenCV", level: 90 },
      { name: "Git/Unix Shell", level: 85 },
      { name: "Flutter", level: 70 },
    ],
  },
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-4 block">SKILLS</span>
          <h2 className="section-title mb-6">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p className="section-subtitle mx-auto">
            A comprehensive skill set spanning AI, robotics, and software development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + categoryIndex * 0.1 }}
              className="glass-card rounded-2xl p-6 lg:p-8"
            >
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <span
                  className={`w-3 h-3 rounded-full ${
                    category.color === "primary" ? "bg-primary" : "bg-accent"
                  }`}
                />
                {category.title}
              </h3>

              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: 0.5 + categoryIndex * 0.1 + skillIndex * 0.05,
                          ease: "easeOut",
                        }}
                        className={`h-full rounded-full ${
                          category.color === "primary"
                            ? "bg-gradient-to-r from-primary to-primary/70"
                            : "bg-gradient-to-r from-accent to-accent/70"
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Tags Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <h3 className="text-lg font-semibold text-foreground mb-6">
            Also Experienced With
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {[
              "LangChain",
              "LangGraph",
              "Transformers",
              "FastAPI",
              "MCP",
              "NumPy",
              "Jupyter",
              "CUDA",
              "Unix Shell",
              "MongoDB",
              "Jetson Xavier/Nano",
              "Raspberry Pi",
              "HTML/CSS",
              "GD Script",
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full bg-muted text-muted-foreground text-sm hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
