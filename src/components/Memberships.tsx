import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Flag, Cog, Bot, Car, Globe, Handshake, Code, Calendar, Trophy, Wrench } from "lucide-react";

const memberships = [
  {
    icon: Users,
    role: "Joint General Secretary",
    organization: "Science & Technology Council, IIT BHU Varanasi",
    period: "Apr 2025 - Present",
    description: "Full-time leadership role overseeing technical activities and initiatives across the institute.",
    number: "01",
  },
  {
    icon: Flag,
    role: "Deputy Contingent Leader",
    organization: "Inter IIT Tech Meet 14.0",
    period: "Sep 2025 - Dec 2025",
    description: "Led and coordinated a 90+ member contingent spanning AI/ML, Robotics, VLSI, Systems, Web, and Core Engineering.",
    number: "02",
  },
  {
    icon: Bot,
    role: "Senior Advisor",
    organization: "Robotics Club, IIT (BHU) Varanasi",
    period: "Apr 2025 - Present",
    description: "Providing strategic guidance and mentorship to the robotics community.",
    number: "03",
  },
  {
    icon: Cog,
    role: "Technical Lead - RoboREG",
    organization: "Robotics Club, IIT (BHU) Varanasi",
    period: "Jul 2024 - Apr 2025",
    description: "Led the Robotics Research Group promoting R&D culture in Robotics and Computer Vision.",
    number: "04",
  },
  {
    icon: Bot,
    role: "Core Team Member & Team Lead",
    organization: "Robocon 2024, IIT (BHU)",
    period: "Nov 2023 - Jul 2024",
    description: "Oversaw coordination between mechanical, electronics, and software divisions.",
    number: "05",
  },
  {
    icon: Car,
    role: "Technical Coordinator - Autonomy",
    organization: "Team AVERERA, IIT BHU",
    period: "Sep 2023 - Jul 2024",
    description: "Worked with ROS1, CARLA simulator, HDL graph SLAM with 3D LiDAR for autonomous driving.",
    number: "06",
  },
  {
    icon: Trophy,
    role: "Contingent Member - ISRO",
    organization: "Inter IIT Tech Meet 13.0",
    period: "Oct 2024 - Dec 2024",
    description: "Official team member for ISRO High Prep Problem Statement. Secured 4th rank among 23 IITs.",
    number: "07",
  },
  {
    icon: Wrench,
    role: "Event Manager - Robowars",
    organization: "Technex 2025, IIT (BHU)",
    period: "Jan 2025 - Apr 2025",
    description: "Designed and built a 16ft x 16ft arena with 8ft height for Robowars.",
    number: "08",
  },
  {
    icon: Code,
    role: "Software Development Group",
    organization: "Club of Programmers, IIT BHU",
    period: "May 2023 - Apr 2025",
    description: "Delivered orientation to 400+ students. Mentored in app development with Flutter.",
    number: "09",
  },
  {
    icon: Globe,
    role: "Under Secretary General",
    organization: "IIT BHU Model United Nations",
    period: "Jun 2023 - Jul 2024",
    description: "Organized 12th edition of IITBHU MUN with 200+ attendees.",
    number: "10",
  },
  {
    icon: Calendar,
    role: "Conference Coordinator",
    organization: "IIT BHU Model United Nations",
    period: "Jan 2023 - Jun 2023",
    description: "Contributed to the 11th edition of IITBHU MUN by coordinating conference activities.",
    number: "11",
  },
  {
    icon: Handshake,
    role: "Student Liaison",
    organization: "Y20 India 2023 (G20 Summit)",
    period: "Aug 2023",
    description: "Facilitated introduction of college facilities to foreign nationals and Y20 G20 summit participants.",
    number: "12",
  },
];

export function Memberships() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="memberships" className="py-24 lg:py-32 relative overflow-hidden">
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
          <span className="section-number">05 — Leadership</span>
          <h2 className="section-title mt-4 mb-6">
            Positions of <span className="text-primary">Responsibility</span>
          </h2>
          <div className="w-24 h-0.5 bg-primary" />
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {memberships.map((item, index) => (
            <motion.div
              key={item.role + item.organization}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.03 }}
              className="paper-card p-5 flex flex-col h-full hover-brutal"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="w-9 h-9 border border-border flex items-center justify-center shrink-0">
                  <item.icon className="w-4 h-4 text-primary" />
                </div>
                <span className="font-mono text-[10px] text-muted-foreground">{item.number}</span>
              </div>
              
              <h3 className="font-display text-sm text-foreground leading-tight mb-1">{item.role}</h3>
              <p className="font-mono text-[10px] text-primary uppercase tracking-wider mb-2">{item.organization}</p>
              
              <span className="font-mono text-[10px] text-muted-foreground mb-3">
                {item.period}
              </span>
              
              <p className="text-xs text-muted-foreground flex-grow">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
