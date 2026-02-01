import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Users, Medal, Star } from "lucide-react";

const achievements = [
  {
    icon: Users,
    stat: "1000+",
    label: "Students Led",
    description: "As JGS of Science & Tech Council",
  },
  {
    icon: Trophy,
    stat: "Top 4",
    label: "Among IITs",
    description: "Inter-IIT Tech Meet Achievements",
  },
  {
    icon: Medal,
    stat: "National",
    label: "Robocon",
    description: "ABU Robocon Participant",
  },
  {
    icon: Star,
    stat: "Multiple",
    label: "ML Competitions",
    description: "National Level Rankings",
  },
];

const leadership = [
  {
    role: "Joint General Secretary",
    organization: "Science & Technology Council, IIT (BHU)",
    period: "2023 - 2024",
    description:
      "Leading the technical community of IIT(BHU), organizing hackathons, workshops, and inter-IIT tech events. Mentoring 1000+ students across various technical clubs.",
  },
  {
    role: "Inter-IIT Tech Lead",
    organization: "Various Problem Statements",
    period: "2023 - 2024",
    description:
      "Led teams at Inter-IIT Tech Meet for challenging problem statements from organizations like ISRO and DRDO, achieving top positions among participating IITs.",
  },
];

export function Leadership() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 neural-grid opacity-30" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-4 block">
            LEADERSHIP & ACHIEVEMENTS
          </span>
          <h2 className="section-title mb-6">
            Beyond <span className="gradient-text">Technical Skills</span>
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {achievements.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="glass-card rounded-2xl p-6 text-center hover-lift"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="stat-highlight text-3xl mb-1">{item.stat}</div>
              <div className="font-medium text-foreground mb-1">{item.label}</div>
              <div className="text-xs text-muted-foreground">{item.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Leadership Roles */}
        <div className="max-w-4xl mx-auto space-y-6">
          {leadership.map((item, index) => (
            <motion.div
              key={item.role}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.15 }}
              className="glass-card rounded-2xl p-8 hover-glow"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground">{item.role}</h3>
                  <p className="text-primary font-medium">{item.organization}</p>
                </div>
                <span className="px-4 py-2 rounded-full bg-muted text-muted-foreground text-sm whitespace-nowrap">
                  {item.period}
                </span>
              </div>
              <p className="text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
