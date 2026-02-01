import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, BookOpen } from "lucide-react";

const coursework = [
  "Deep Learning & Neural Networks",
  "Computer Vision",
  "Machine Learning",
  "Probability & Statistics",
  "Digital Signal Processing",
  "Control Systems",
  "Linear Algebra",
  "Data Structures & Algorithms",
];

export function Education() {
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
          <span className="text-primary font-medium mb-4 block">EDUCATION</span>
          <h2 className="section-title">
            Academic <span className="gradient-text">Foundation</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Main Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card rounded-3xl p-8 md:p-12 hover-glow"
          >
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shrink-0">
                <GraduationCap className="w-8 h-8 text-primary-foreground" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">
                      B.Tech in Electrical Engineering
                    </h3>
                    <p className="text-lg text-primary font-medium">
                      Indian Institute of Technology (BHU) Varanasi
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold gradient-text">8.19</div>
                    <div className="text-sm text-muted-foreground">CGPA</div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm">
                    2022 - 2026
                  </span>
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                    Expected Graduation
                  </span>
                </div>

                {/* Relevant Coursework */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <BookOpen className="w-5 h-5 text-primary" />
                    <span className="font-medium text-foreground">Relevant Coursework</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {coursework.map((course) => (
                      <span
                        key={course}
                        className="tech-chip text-xs"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
