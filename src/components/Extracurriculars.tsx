import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Music, Palette, PartyPopper } from "lucide-react";

const extracurriculars = [
  {
    icon: Music,
    title: "Vocal Classical & Rabindra Sangeet",
    description: "Completed 1st year training in classical vocal music and Rabindra Sangeet",
    color: "primary",
  },
  {
    icon: Palette,
    title: "Fine Arts",
    description: "Completed 1st year in Fine Arts, exploring visual creativity and artistic expression",
    color: "accent",
  },
  {
    icon: PartyPopper,
    title: "Aagman 2022",
    description: "Participated in college fresher's competition in Fine Art Series and Group Dance",
    color: "primary",
  },
];

export function Extracurriculars() {
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
          <span className="text-primary font-medium mb-4 block">BEYOND ACADEMICS</span>
          <h2 className="section-title mb-6">
            Extracurricular <span className="gradient-text">Interests</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Exploring creativity and culture beyond the technical realm.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
          {extracurriculars.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
              className="glass-card rounded-3xl p-8 text-center hover-lift hover-glow"
            >
              <div
                className={`w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center ${
                  item.color === "primary"
                    ? "bg-gradient-to-br from-primary to-primary/70"
                    : "bg-gradient-to-br from-accent to-accent/70"
                }`}
              >
                <item.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
