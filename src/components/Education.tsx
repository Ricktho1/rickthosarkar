import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, BookOpen } from "lucide-react";

const coursework = [
  "Linear Algebra and Derivatives (MA-102)", "AI for Programmers (CSO-432)",
  "Computer Programming (CSO-101)", "Probability and Statistics (MA-202)",
  "Information Security (CSE-530)", "Numerical Techniques (MA-201)",
  "Academic Writing for Science and Technology (LLG-309)",
  "8-week Machine Learning Course — AI Club, IIT Guwahati",
  "Summer Analytics 2023 — Consulting and Analytics Club, IIT Guwahati",
  "Quantum Computing with Qsim — IIT Roorkee and C-DAC Hyderabad",
  "Time Series Analysis — Consulting and Analytics Club, IIT Guwahati",
  "Introductory Options with Hands-on Programming — Finance and Economics Club, IIT Guwahati",
];

export function Education() {
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
          className="mb-16"
        >
          <h2 className="section-title mb-6">
            Academic <span className="text-primary">Foundation</span>
          </h2>
          <div className="w-24 h-0.5 bg-primary" />
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          <motion.article initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="paper-card p-8 md:p-10 border-l-4 border-l-primary">
            <div className="flex items-start gap-6">
              <GraduationCap className="w-7 h-7 text-primary shrink-0" />
              <div className="min-w-0">
                <h3 className="font-display text-2xl mb-2">MSc in Robotics and Artificial Intelligence</h3>
                <p className="font-mono text-sm text-primary mb-4">University College London (UCL)</p>
                <div className="flex flex-wrap gap-3 font-mono text-xs">
                  <span className="border border-border px-3 py-1 text-muted-foreground">Sep 2026 – Sep 2027</span>
                  <span className="border border-primary px-3 py-1 text-primary">Currently Ongoing</span>
                </div>
              </div>
            </div>
          </motion.article>
          {/* Main Education Card - IIT BHU */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="paper-card p-8 md:p-10"
          >
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              {/* Icon */}
              <div className="w-14 h-14 border-2 border-primary flex items-center justify-center shrink-0">
                <GraduationCap className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="font-display text-2xl text-foreground mb-1">
                      B.Tech in Electrical Engineering
                    </h3>
                    <p className="font-mono text-sm text-primary uppercase tracking-wider">
                      Indian Institute of Technology (BHU) Varanasi
                    </p>
                  </div>
                  <div className="text-left md:text-right">
                    <div className="font-mono text-4xl text-primary">8.21</div>
                    <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider">CGPA</div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="font-mono text-xs text-muted-foreground px-3 py-1 border border-border">
                    Nov 2022 - Jul 2026
                  </span>
                  <span className="font-mono text-xs text-primary px-3 py-1 border border-primary">
                    Graduated
                  </span>
                </div>

                {/* Relevant Coursework */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <BookOpen className="w-4 h-4 text-primary" />
                    <span className="font-mono text-xs uppercase tracking-widest text-foreground">Relevant Coursework</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {coursework.map((course) => (
                      <span key={course} className="tech-chip">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Secondary Education Cards */}
          <div className="grid md:grid-cols-2 gap-4">
            {/* Darjeeling Public School */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="paper-card p-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-accent flex items-center justify-center shrink-0">
                  <GraduationCap className="w-5 h-5 text-accent" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-display text-lg text-foreground">
                        CBSE Class XII
                      </h3>
                      <p className="font-mono text-xs text-primary uppercase tracking-wider">
                        Darjeeling Public School, Siliguri
                      </p>
                    </div>
                    <div className="font-mono text-2xl text-accent">88.4%</div>
                  </div>
                  <span className="font-mono text-[10px] text-muted-foreground">
                    April 2020 - June 2022
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Don Bosco School */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="paper-card p-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-accent flex items-center justify-center shrink-0">
                  <GraduationCap className="w-5 h-5 text-accent" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-display text-lg text-foreground">
                        ICSE Class X
                      </h3>
                      <p className="font-mono text-xs text-primary uppercase tracking-wider">
                        Don Bosco School, Siliguri
                      </p>
                    </div>
                    <div className="font-mono text-2xl text-accent">96%</div>
                  </div>
                  <span className="font-mono text-[10px] text-muted-foreground">
                    Apr 2010 - Apr 2020
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
