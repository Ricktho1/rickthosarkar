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
  },
  {
    icon: Flag,
    role: "Deputy Contingent Leader",
    organization: "Inter IIT Tech Meet 14.0",
    period: "Sep 2025 - Dec 2025",
    description: "Led and coordinated a 90+ member contingent spanning AI/ML, Robotics, VLSI, Systems, Web, and Core Engineering. Contributed to IIT (BHU) securing rank 4 — the highest in institute's history at Inter IIT Tech Meet.",
  },
  {
    icon: Bot,
    role: "Senior Advisor",
    organization: "Robotics Club, IIT (BHU) Varanasi",
    period: "Apr 2025 - Present",
    description: "Providing strategic guidance and mentorship to the robotics community.",
  },
  {
    icon: Cog,
    role: "Technical Lead - RoboREG",
    organization: "Robotics Club, IIT (BHU) Varanasi",
    period: "Jul 2024 - Apr 2025",
    description: "Led the Robotics Research Group promoting R&D culture in Robotics and Computer Vision. Managed club activities with 500+ participations and multiple learning programs and bootcamps.",
  },
  {
    icon: Bot,
    role: "Core Team Member & Team Lead Robocon 2024",
    organization: "Robotics Club, IIT (BHU) Varanasi",
    period: "Nov 2023 - Jul 2024",
    description: "Oversaw coordination between mechanical, electronics, and software divisions. Organized Robotics Summer Camp 2024, mentoring 40+ students on Controllers and Computer Vision.",
  },
  {
    icon: Car,
    role: "Technical Coordinator in Vehicle Autonomy",
    organization: "Team AVERERA, IIT BHU",
    period: "Sep 2023 - Jul 2024",
    description: "Worked with ROS1, CARLA simulator, HDL graph SLAM with 3D LiDAR for autonomous driving. Secured sponsorship through presentations and collaborated with Team Abhiyaan at IIT Madras.",
  },
  {
    icon: Trophy,
    role: "Contingent Member - ISRO Problem Statement",
    organization: "Inter IIT Tech Meet 13.0",
    period: "Oct 2024 - Dec 2024",
    description: "Official team member for ISRO High Prep Problem Statement. Represented IIT(BHU) and secured 4th rank overall among 23 IITs.",
  },
  {
    icon: Wrench,
    role: "Event Manager - Robowars",
    organization: "Technex 2025, IIT (BHU) Varanasi",
    period: "Jan 2025 - Apr 2025",
    description: "Designed and built a 16ft x 16ft arena with 8ft height for Robowars. Conducted the event at Technex'25 from 28th Feb to 2nd March.",
  },
  {
    icon: Code,
    role: "Software Development Group",
    organization: "Club of Programmers, IIT BHU",
    period: "May 2023 - Apr 2025",
    description: "Delivered orientation to 400+ students. Mentored students in app development with Flutter, providing domain induction and code debugging guidance.",
  },
  {
    icon: Globe,
    role: "Under Secretary General - Creative Affairs",
    organization: "IIT BHU Model United Nations",
    period: "Jun 2023 - Jul 2024",
    description: "Organized 12th edition of IITBHU MUN with 200+ attendees. Drafted reports, created posters, and sent invitations to dignitaries including the Prime Minister's Office.",
  },
  {
    icon: Calendar,
    role: "Conference Coordinator",
    organization: "IIT BHU Model United Nations",
    period: "Jan 2023 - Jun 2023",
    description: "Contributed to the 11th edition of IITBHU MUN by coordinating conference activities, managing logistics, and facilitating public outreach.",
  },
  {
    icon: Wrench,
    role: "Event Executive - Pixelate",
    organization: "Technex 2024, IIT (BHU) Varanasi",
    period: "Jan 2024 - Mar 2024",
    description: "Managed Pixelate event at Technex 2024. Assisted in arena setup, rules making, and demo bot coding.",
  },
  {
    icon: Handshake,
    role: "Student Liaison",
    organization: "Y20 India 2023 (G20 Summit)",
    period: "Aug 2023",
    description: "Facilitated introduction of college facilities to foreign nationals and Y20 G20 summit participants. Fostered cultural exchange with international guests.",
  },
];

export function Memberships() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="memberships" className="py-20 lg:py-32 relative overflow-hidden">
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

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {memberships.map((item, index) => (
            <motion.div
              key={item.role + item.organization}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
              className="glass-card rounded-2xl p-6 hover-glow hover-lift flex flex-col h-full"
            >
              <div className="flex items-start gap-4 mb-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-foreground text-sm leading-tight mb-1">{item.role}</h3>
                  <p className="text-primary font-medium text-xs">{item.organization}</p>
                </div>
              </div>
              <span className="inline-block px-2 py-1 rounded-full bg-muted text-muted-foreground text-xs mb-3 w-fit">
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
