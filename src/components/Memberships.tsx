import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Users, Flag, Cog, Bot, Car, Globe, Handshake, Code, Calendar, Trophy, Wrench, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "./ui/button";

const highlightedRoles = [
  {
    icon: Users,
    role: "Joint General Secretary",
    organization: "Science & Technology Council, IIT BHU Varanasi",
    period: "Apr 2025 - Present",
    description: "Full-time leadership role overseeing technical activities and initiatives across the institute.",
  },
  {
    icon: Flag,
    role: "Deputy Contingent Leader",
    organization: "Inter IIT Tech Meet 14.0",
    period: "Sep 2025 - Dec 2025",
    description: "Led and coordinated a 90+ member contingent spanning AI/ML, Robotics, VLSI, Systems, Web, and Core Engineering.",
  },
  {
    icon: Globe,
    role: "Under Secretary General",
    organization: "IIT BHU Model United Nations",
    period: "Jun 2023 - Jul 2024",
    description: "Organized 12th edition of IITBHU MUN with 200+ attendees.",
  },
  {
    icon: Handshake,
    role: "Student Liaison",
    organization: "Y20 India 2023 (G20 Summit)",
    period: "Aug 2023",
    description: "Facilitated introduction of college facilities to foreign nationals and Y20 G20 summit participants.",
  },
];

const otherRoles = [
  {
    icon: Bot,
    role: "Senior Advisor",
    organization: "Robotics Club, IIT (BHU) Varanasi",
    period: "Apr 2025 - Present",
  },
  {
    icon: Cog,
    role: "Technical Lead - RoboREG",
    organization: "Robotics Club, IIT (BHU) Varanasi",
    period: "Jul 2024 - Apr 2025",
  },
  {
    icon: Bot,
    role: "Core Team Member & Team Lead",
    organization: "Robocon 2024, IIT (BHU)",
    period: "Nov 2023 - Jul 2024",
  },
  {
    icon: Car,
    role: "Technical Coordinator - Autonomy",
    organization: "Team AVERERA, IIT BHU",
    period: "Sep 2023 - Jul 2024",
  },
  {
    icon: Trophy,
    role: "Contingent Member - ISRO",
    organization: "Inter IIT Tech Meet 13.0",
    period: "Oct 2024 - Dec 2024",
  },
  {
    icon: Wrench,
    role: "Event Manager - Robowars",
    organization: "Technex 2025, IIT (BHU)",
    period: "Jan 2025 - Apr 2025",
  },
  {
    icon: Code,
    role: "Software Development Group",
    organization: "Club of Programmers, IIT BHU",
    period: "May 2023 - Apr 2025",
  },
  {
    icon: Calendar,
    role: "Conference Coordinator",
    organization: "IIT BHU Model United Nations",
    period: "Jan 2023 - Jun 2023",
  },
];

export function Memberships() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showOtherRoles, setShowOtherRoles] = useState(false);

  return (
    <section id="leadership" className="py-24 lg:py-32 relative overflow-hidden">
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
            Leadership <span className="text-primary">Roles</span>
          </h2>
          <div className="w-24 h-0.5 bg-primary" />
        </motion.div>

        {/* Highlighted Roles */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 mb-12">
          {highlightedRoles.map((item, index) => (
            <motion.div
              key={item.role + item.organization}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="paper-card p-6 md:p-8 hover-brutal border-l-4 border-l-primary"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 border-2 border-primary flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-lg text-foreground leading-tight mb-1">
                    {item.role}
                  </h3>
                  <p className="font-mono text-xs text-primary uppercase tracking-wider">
                    {item.organization}
                  </p>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground mb-4">
                {item.description}
              </p>
              
              <span className="font-mono text-xs text-muted-foreground border border-border px-3 py-1 inline-block">
                {item.period}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Other Roles Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <Button
            variant="ghost"
            onClick={() => setShowOtherRoles(!showOtherRoles)}
            className="w-full flex items-center justify-between p-4 border border-border hover:border-primary transition-colors mb-4"
          >
            <span className="font-mono text-xs uppercase tracking-widest text-foreground">
              Other Roles & Memberships ({otherRoles.length})
            </span>
            {showOtherRoles ? (
              <ChevronUp className="w-4 h-4 text-primary" />
            ) : (
              <ChevronDown className="w-4 h-4 text-primary" />
            )}
          </Button>

          {showOtherRoles && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
            >
              {otherRoles.map((item, index) => (
                <motion.div
                  key={item.role + item.organization}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="paper-card p-4 hover-brutal"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-8 h-8 border border-border flex items-center justify-center shrink-0">
                      <item.icon className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-display text-sm text-foreground leading-tight truncate">
                        {item.role}
                      </h4>
                    </div>
                  </div>
                  <p className="font-mono text-[10px] text-primary uppercase tracking-wider mb-2 line-clamp-2">
                    {item.organization}
                  </p>
                  <span className="font-mono text-[10px] text-muted-foreground">
                    {item.period}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
