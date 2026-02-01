import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Award, Medal, Star, Rocket, Brain, TrendingUp, Target } from "lucide-react";

const achievements = [
  {
    icon: Rocket,
    title: "National Finalist - Robocon 2025",
    description: "After qualifying Stage 1 and 2, out of 100+ colleges across India",
    category: "Robotics",
  },
  {
    icon: Trophy,
    title: "4th Rank - Inter-IIT Tech Meet 13.0",
    description: "Among all 23 IITs for ISRO High-Prep Problem Statement",
    category: "Competition",
  },
  {
    icon: Medal,
    title: "3rd Place - Cosmic Classifier",
    description: "ML event at Cognizance'25, IIT Roorkee, out of 200+ participations",
    category: "ML Competition",
  },
  {
    icon: Brain,
    title: "Amazon ML Summer School 2024",
    description: "Selected as Mentee, among top performers in initial evaluation",
    category: "ML Program",
  },
  {
    icon: Award,
    title: "Honorable Mention - Flipkart Grid 5.0",
    description: "Top 30 among 100+ participating teams",
    category: "Competition",
  },
  {
    icon: Star,
    title: "Gold Level - WorldQuant Brain",
    description: "Accomplished by submitting successful alphas",
    category: "Quantitative Finance",
  },
  {
    icon: Target,
    title: "Robocon 2024 Qualifier",
    description: "Represented IIT(BHU) in Stage 2 and exhibited bot in Stage 3",
    category: "Robotics",
  },
  {
    icon: TrendingUp,
    title: "Top 25% - Summer Analytics 2023",
    description: "Data Science and Analytics course by IIT Guwahati",
    category: "Data Science",
  },
];

export function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-4 block">ACHIEVEMENTS</span>
          <h2 className="section-title mb-6">
            Recognition & <span className="gradient-text">Accomplishments</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="glass-card rounded-2xl p-6 hover-lift hover-glow"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <span className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent font-medium mb-3 inline-block">
                {item.category}
              </span>
              <h3 className="font-bold text-foreground mb-2 text-sm leading-tight">
                {item.title}
              </h3>
              <p className="text-xs text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
