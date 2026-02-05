import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Music, Palette, PartyPopper } from "lucide-react";

const extracurriculars = [
  {
    icon: Music,
    title: "Vocal Classical & Rabindra Sangeet",
    description: "Completed 1st year training in classical vocal music and Rabindra Sangeet",
    number: "01",
  },
  {
    icon: Palette,
    title: "Fine Arts",
    description: "Completed 1st year in Fine Arts, exploring visual creativity and artistic expression",
    number: "02",
  },
  {
    icon: PartyPopper,
    title: "Aagman 2022",
    description: "Participated in college fresher's competition in Fine Art Series and Group Dance",
    number: "03",
  },
];

export function Extracurriculars() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-paper opacity-30" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-6">
            Extracurricular <span className="text-primary">Interests</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Exploring creativity and culture beyond the technical realm.
          </p>
          <div className="w-24 h-0.5 bg-primary mt-6 mx-auto" />
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
          {extracurriculars.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
              className="paper-card p-6 text-center hover-brutal"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 border border-primary flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="font-mono text-xs text-muted-foreground">{item.number}</span>
              </div>
              <h3 className="font-display text-lg text-foreground mb-3 text-left">{item.title}</h3>
              <p className="text-sm text-muted-foreground text-left">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
