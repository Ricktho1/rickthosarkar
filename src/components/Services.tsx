import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Eye, Brain, Bot, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Eye,
    title: "Computer Vision & Deep Learning",
    description:
      "Custom CV solutions including object detection, segmentation, image classification, and video analytics using state-of-the-art deep learning models.",
    capabilities: [
      "Object Detection & Tracking",
      "Semantic Segmentation",
      "Vision-Language Models",
      "Transfer Learning",
    ],
    number: "01",
  },
  {
    icon: Brain,
    title: "AI/ML Research & Prototyping",
    description:
      "End-to-end machine learning solutions from research and experimentation to production-ready systems with a focus on practical deployment.",
    capabilities: [
      "Model Development",
      "Vision-Language Models",
      "Agentic AI Systems",
      "Research to Production",
    ],
    number: "02",
  },
  {
    icon: Bot,
    title: "Robotics & Autonomous Systems",
    description:
      "Full-stack robotics development including perception, planning, and control systems for autonomous navigation and manipulation tasks.",
    capabilities: [
      "ROS / ROS2 Development",
      "SLAM & Localization",
      "Motion Planning",
      "Sensor Fusion",
    ],
    number: "03",
  },
];

export function Services() {
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
            What I <span className="text-primary">Offer</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Research-driven expertise combined with practical deployment experience for real-world impact.
          </p>
          <div className="w-24 h-0.5 bg-primary mt-6 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="paper-card p-8 h-full flex flex-col hover-brutal"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 border-2 border-primary flex items-center justify-center">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <span className="font-mono text-xs text-muted-foreground">{service.number}</span>
              </div>

              {/* Content */}
              <h3 className="font-display text-xl text-foreground mb-4">
                {service.title}
              </h3>

              <p className="text-muted-foreground text-sm mb-6 flex-grow">
                {service.description}
              </p>

              {/* Capabilities */}
              <ul className="space-y-3 border-t border-border pt-6">
                {service.capabilities.map((capability) => (
                  <li
                    key={capability}
                    className="flex items-center gap-3 font-mono text-xs text-muted-foreground"
                  >
                    <ArrowRight className="w-3 h-3 text-primary shrink-0" />
                    {capability}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
