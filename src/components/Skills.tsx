import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Bot, Brain } from "lucide-react";

const categories = [
  { title: "Programming", icon: Code, skills: ["C++", "Python", "Java", "HTML", "Git"] },
  { title: "Robotics & Simulation", icon: Bot, skills: ["ROS2", "Pybullet", "Gazebo"] },
  { title: "Vision & Deep Learning", icon: Brain, skills: ["PyTorch", "OpenCV"] },
];
const interests = ["Robotics", "Computer Vision", "Natural Language Processing", "Leadership", "Management"];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section id="skills" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 grid-paper opacity-30" />
      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={ref}>
        <h2 className="section-title mb-6">Technical <span className="text-primary">Skills</span></h2>
        <div className="w-24 h-0.5 bg-primary mb-12" />
        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.article key={category.title} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: index * 0.1 }} className="paper-card p-6 lg:p-8">
              <category.icon className="w-7 h-7 text-primary mb-6" />
              <h3 className="font-display text-2xl border-b border-border pb-4 mb-6">{category.title}</h3>
              <div className="flex flex-wrap gap-3">{category.skills.map(skill => <span className="tech-chip" key={skill}>{skill}</span>)}</div>
            </motion.article>
          ))}
        </div>
        <div className="mt-12 border-t border-border pt-8">
          <h3 className="font-mono text-xs uppercase text-muted-foreground mb-6">Areas of Interest</h3>
          <div className="flex flex-wrap gap-3">{interests.map(interest => <span key={interest} className="research-badge">{interest}</span>)}</div>
        </div>
      </div>
    </section>
  );
}
