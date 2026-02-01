import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Flag, Cog, Bot, Car, Globe, Handshake } from "lucide-react";

const memberships = [
  {
    icon: Users,
    role: "Joint General Secretary",
    organization: "Science & Technology Council, IIT(BHU)",
    description: "Led 1000+ multi-domain students across technical clubs and initiatives",
  },
  {
    icon: Flag,
    role: "Deputy Contingent Leader",
    organization: "Inter-IIT Tech Meet 14.0",
    description: "Led 100+ members; IIT (BHU) ranked 4th overall among all IITs",
  },
  {
    icon: Cog,
    role: "Technical Lead",
    organization: "RoboReg, IIT(BHU)",
    description: "Promoting research culture and leading research projects in the college",
  },
  {
    icon: Bot,
    role: "Team Lead",
    organization: "Robocon 2024, IIT(BHU)",
    description: "Representing IIT(BHU) and coordinating different verticals of the team",
  },
  {
    icon: Car,
    role: "Technical Coordinator",
    organization: "Team Averera, IIT(BHU)",
    description: "Building SAE Level-5 autonomous vehicle",
  },
  {
    icon: Globe,
    role: "Under Secretary General",
    organization: "IIT(BHU) MUN, 12th Edition",
    description: "Organized a 400+ participant conference",
  },
  {
    icon: Handshake,
    role: "Student Liaison Officer",
    organization: "Y20-G20 Summit, Varanasi",
    description: "Aided in hospitality of foreign delegates",
  },
];

export function Memberships() {
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
          <span className="text-primary font-medium mb-4 block">MEMBERSHIPS</span>
          <h2 className="section-title mb-6">
            Positions of <span className="gradient-text">Responsibility</span>
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          {memberships.map((item, index) => (
            <motion.div
              key={item.role + item.organization}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="glass-card rounded-2xl p-6 hover-glow flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">{item.role}</h3>
                <p className="text-primary font-medium text-sm mb-2">{item.organization}</p>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
