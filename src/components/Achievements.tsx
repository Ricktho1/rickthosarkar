import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Award, Medal, Star, Rocket, Brain, Target, Package } from "lucide-react";

const achievements = [
  { icon: Trophy, title: "Google DeepMind Award — AgentVerse 2026", description: "Won the Gemini prize and 2nd place in the Robotics Track at the UCL AI Society hackathon (400+ participants) for an AI assistance robot dog.", category: "Hackathon", number: "01" },
  { icon: Award, title: "IIT Color Award", description: "One of the highest awards at IIT (BHU), for significant contribution to the institute.", category: "Institute", number: "02" },
  { icon: Rocket, title: "4th Rank — Inter-IIT Tech Meet 13.0", description: "Among all 23 IITs for the ISRO High-Prep Problem Statement.", category: "Competition", number: "03" },
  { icon: Medal, title: "3rd Place — Cosmic Classifier", description: "ML event at Cognizance 2025, IIT Roorkee, among 200+ participants.", category: "ML", number: "04" },
  { icon: Brain, title: "Amazon ML Summer School 2024", description: "Selected as a mentee among the top performers in the initial open evaluation.", category: "Program", number: "05" },
  { icon: Package, title: "Honourable Mention — Flipkart Grid 5.0", description: "Top 30 of 100+ teams in the robotics challenge.", category: "Robotics", number: "06" },
  { icon: Target, title: "Robocon 2024 Qualifier", description: "Qualified Stage 1, represented IIT (BHU) in Stage 2 and exhibited the bot in Stage 3.", category: "Robotics", number: "07" },
  { icon: Star, title: "Gold Level — WorldQuant Brain", description: "Achieved Gold Level by submitting alphas.", category: "Quant", number: "08" },
];

export function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dot-grid opacity-30" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="section-title mb-6">
            Achievements <span className="text-primary">&</span> Awards
          </h2>
          <div className="w-24 h-0.5 bg-primary" />
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {achievements.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
              className="paper-card p-5 group hover-brutal"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 border border-border group-hover:border-primary flex items-center justify-center transition-colors">
                  <item.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <span className="font-mono text-xs text-muted-foreground">{item.number}</span>
              </div>
              
              <span className="font-mono text-[10px] uppercase tracking-widest text-primary mb-2 block">
                {item.category}
              </span>
              
              <h3 className="font-display text-base text-foreground mb-2 leading-tight">
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
