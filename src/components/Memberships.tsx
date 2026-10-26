import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Users, Flag, Cog, Bot, Car, Globe, Handshake, Code, Calendar, Trophy, Wrench, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "./ui/button";

const highlightedRoles = [
  { icon: Users, role: "Joint General Secretary", organization: "Science & Technology Council, IIT (BHU)", period: "Jul 2025 – Jul 2026",
    description: "Selected through elections and interviews for the highest student-led position described in the resume. Represented 5,000+ students across technical disciplines and led 100+ events. Hosted Technex 2026, one of Asia’s oldest technical festivals, with a 500+ member team and 2,000+ attendees. Represented student needs and resource requests in Dean and Director meetings." },
  { icon: Flag, role: "Deputy Contingent Leader", organization: "Inter-IIT Tech Meet 14.0 · IIT (BHU)", period: "Sep 2025 – Mar 2026",
    description: "Led a contingent of 100+ students representing IIT (BHU), contributing to 4th place overall. Arranged travel, accommodation and resources from preparation through the end of the event." },
  { icon: Globe, role: "Under Secretary General", organization: "IIT (BHU) Model United Nations", period: "Jun 2023 – Jul 2024",
    description: "Helped organise the 12th edition for 500+ delegates with a 36-member team. Coordinated conference activities, delegate and speaker hospitality, food, accommodation, planning and event execution." },
  { icon: Handshake, role: "Student Liaison Officer", organization: "Y20-G20 Summit · Varanasi, India", period: "1 Aug 2023 – 30 Aug 2023",
    description: "Supported hospitality and coordination for international youth delegates. Assisted cross-cultural communication and delegate-facing arrangements, representing the institute and India and contributing to a welcoming, well-organised summit." },
];

const otherRoles = [
  { icon: Wrench, role: "Event Manager — Robowars", organization: "Technex 2025, IIT (BHU)", period: "Dec 2024 – Apr 2025",
    description: "Managed logistics and hospitality for 100+ participants. Oversaw a standardised 16 ft × 16 ft × 8 ft arena, infrastructure and finances, while maintaining team safety and food requirements." },
  { icon: Bot, role: "Founder and Team Leader", organization: "IIT (BHU) Robocon Team, 2024", period: "Jan 2024 – Apr 2024",
    description: "Founded and led the institute’s first 15-member multi-domain team at National DD Robocon 2024. Secured necessary resources and supported the team’s continuity for future years." },
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
            aria-expanded={showOtherRoles}
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
              className="grid sm:grid-cols-2 gap-4"
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
                      <h4 className="font-display text-sm text-foreground leading-tight">
                        {item.role}
                      </h4>
                    </div>
                  </div>
                  <p className="font-mono text-[10px] text-primary uppercase tracking-wider mb-2">
                    {item.organization}
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
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
