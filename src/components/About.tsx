import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, Trophy, Users, ArrowUpRight } from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "UCL · IIT (BHU)",
    description: "MSc Robotics & AI · B.Tech Electrical Engineering",
    number: "01",
  },
  {
    icon: Briefcase,
    title: "Research Experience",
    description: "AI Labs & Industry Internships",
    number: "02",
  },
  {
    icon: Trophy,
    title: "National Achievements",
    description: "Inter-IIT, Robocon, ML Competitions",
    number: "03",
  },
  {
    icon: Users,
    title: "Leadership",
    description: "Former JGS, Science & Tech Council",
    number: "04",
  },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dot-grid opacity-50" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="section-title mb-6">
            Building <span className="text-primary">Intelligent</span> Systems
          </h2>
          <div className="w-24 h-0.5 bg-primary" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Bio Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm pursuing a master's in Robotics and Artificial Intelligence at{" "}
              <span className="text-foreground font-medium">University College London (UCL)</span>.
              I completed my B.Tech in Electrical Engineering at IIT (BHU) Varanasi in July 2026,
              with a focus on artificial intelligence, robotics, and computer vision.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              My research spans from developing{" "}
              <span className="text-primary font-medium">agentic AI systems</span> and 
              vision-language models to building{" "}
              <span className="text-primary font-medium">autonomous vehicles</span> and 
              analyzing space-science data.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              My interests include robotics, computer vision, natural language processing,
              leadership and management. As Joint General Secretary of the Science and
              Technology Council, I represented 5,000+ students and led over 100 events.
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-6 pt-6 border-t border-border">
              <div>
                <span className="text-3xl font-mono text-primary">3</span>
                <span className="text-sm text-muted-foreground ml-2 font-mono uppercase tracking-wider">Internships</span>
              </div>
              <div>
                <span className="text-3xl font-mono text-accent">5,000+</span>
                <span className="text-sm text-muted-foreground ml-2 font-mono uppercase tracking-wider">Students Represented</span>
              </div>
            </div>
          </motion.div>

          {/* Highlight Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
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
                className="paper-card p-6 group cursor-default"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 border border-primary flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">{item.number}</span>
                </div>
                <h3 className="font-display text-lg text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
