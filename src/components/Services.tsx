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
      "Image Generation & Editing",
    ],
  },
  {
    icon: Brain,
    title: "AI/ML Research & Prototyping",
    description:
      "End-to-end machine learning solutions from research and experimentation to production-ready systems with a focus on practical deployment.",
    capabilities: [
      "Model Development",
      "RAG & LLM Applications",
      "Agentic AI Systems",
      "Research to Production",
    ],
  },
  {
    icon: Bot,
    title: "Robotics & Autonomous Systems",
    description:
      "Full-stack robotics development including perception, planning, and control systems for autonomous navigation and manipulation tasks.",
    capabilities: [
      "ROS Development",
      "SLAM & Localization",
      "Motion Planning",
      "Sensor Fusion",
    ],
  },
];

export function Services() {
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
          <span className="text-primary font-medium mb-4 block">SERVICES</span>
          <h2 className="section-title mb-6">
            What I <span className="gradient-text">Offer</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Research-driven expertise combined with practical deployment experience for real-world impact.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="relative group"
            >
              <div className="glass-card rounded-3xl p-8 h-full hover-lift hover-glow flex flex-col">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {service.title}
                </h3>

                <p className="text-muted-foreground mb-6 flex-grow">
                  {service.description}
                </p>

                {/* Capabilities */}
                <ul className="space-y-3">
                  {service.capabilities.map((capability) => (
                    <li
                      key={capability}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <ArrowRight className="w-4 h-4 text-primary shrink-0" />
                      {capability}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
