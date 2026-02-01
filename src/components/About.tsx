import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, Trophy, Users } from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "IIT (BHU) Varanasi",
    description: "B.Tech Electrical Engineering",
  },
  {
    icon: Briefcase,
    title: "Research Experience",
    description: "AI Labs & Industry Internships",
  },
  {
    icon: Trophy,
    title: "National Achievements",
    description: "Inter-IIT, Robocon, ML Competitions",
  },
  {
    icon: Users,
    title: "Leadership",
    description: "JGS, Science & Tech Council",
  },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-4 block">ABOUT ME</span>
          <h2 className="section-title mb-6">
            Passionate About Building{" "}
            <span className="gradient-text">Intelligent Systems</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm an undergraduate student at <span className="text-foreground font-medium">IIT (BHU) Varanasi</span>, 
              pursuing Electrical Engineering with a deep focus on artificial intelligence, robotics, and computer vision.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey spans from developing <span className="text-primary">agentic AI systems</span> and 
              vision-language models to building <span className="text-primary">autonomous vehicles</span> and 
              analyzing space-science data. I combine rigorous research methodology with practical, 
              scalable deployment strategies.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently, I'm exploring the intersection of deep learning and robotic control systems, 
              aiming to create intelligent machines that can perceive, understand, and act in complex 
              real-world environments.
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="px-4 py-2 rounded-lg bg-primary/10 border border-primary/20">
                <span className="text-2xl font-bold text-primary">3+</span>
                <span className="text-sm text-muted-foreground ml-2">Research Internships</span>
              </div>
              <div className="px-4 py-2 rounded-lg bg-accent/10 border border-accent/20">
                <span className="text-2xl font-bold text-accent">1000+</span>
                <span className="text-sm text-muted-foreground ml-2">Students Led</span>
              </div>
            </div>
          </motion.div>

          {/* Highlight Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="glass-card p-6 rounded-2xl hover-lift hover-glow cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
