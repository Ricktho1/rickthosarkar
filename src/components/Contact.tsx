import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Github, Linkedin, Send, MapPin, ArrowUpRight, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

// EmailJS Configuration
const EMAILJS_SERVICE_ID = "service_ihwubsv";
const EMAILJS_TEMPLATE_ID = "template_q81cos9";
const EMAILJS_PUBLIC_KEY = "kotV9Pg7BiqppZavl";

const socialLinks = [
  { name: "Phone", icon: Phone, href: "tel:+447846230466", label: "+44 78462 30466" },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:sarkar.ricktho@gmail.com",
    label: "sarkar.ricktho@gmail.com",
  },
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/Ricktho1",
    label: "github.com/Ricktho1",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/rickthosarkar",
    label: "linkedin.com/in/rickthosarkar",
  },
];

export function Contact() {
  const ref = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;
    setIsSubmitting(true);
    
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form,
        EMAILJS_PUBLIC_KEY
      );
      
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      
      formRef.current?.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden">
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
            Let's <span className="text-primary">Connect</span>
          </h2>
          <p className="section-subtitle">
            Open to research collaborations, internships, and impactful AI projects.
          </p>
          <div className="w-24 h-0.5 bg-primary mt-6" />
        </motion.div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-display text-2xl text-foreground mb-4">
                Get in Touch
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Whether you have a project idea, research opportunity, or just want
                to say hello, I'd love to hear from you. Let's build something
                amazing together.
              </p>
            </div>

            <div className="flex items-start gap-4 p-4 border border-border">
              <div className="w-10 h-10 border border-primary flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest text-foreground mb-1">Location</h4>
                <p className="text-muted-foreground">UCL, London, United Kingdom</p>
              </div>
            </div>

            <div className="space-y-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={/^(mailto|tel):/.test(link.href) ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 border border-border hover:border-primary transition-colors group"
                >
                  <div className="w-10 h-10 border border-border group-hover:border-primary flex items-center justify-center transition-colors">
                    <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-mono text-xs uppercase tracking-widest text-foreground">{link.name}</div>
                    <div className="text-sm text-muted-foreground break-words">{link.label}</div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="paper-card p-8">
              <h3 className="font-display text-xl text-foreground mb-6">
                Send a Message
              </h3>

              <div className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-mono text-xs uppercase tracking-widest text-foreground mb-2 block">
                      Name
                    </label>
                    <Input
                      name="from_name"
                      placeholder="Your name"
                      required
                      className="bg-background border-border focus:border-primary rounded-none font-mono text-sm"
                    />
                  </div>
                  <div>
                    <label className="font-mono text-xs uppercase tracking-widest text-foreground mb-2 block">
                      Email
                    </label>
                    <Input
                      name="from_email"
                      type="email"
                      placeholder="your@email.com"
                      required
                      className="bg-background border-border focus:border-primary rounded-none font-mono text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-mono text-xs uppercase tracking-widest text-foreground mb-2 block">
                    Subject
                  </label>
                  <Input
                    name="subject"
                    placeholder="What's this about?"
                    required
                    className="bg-background border-border focus:border-primary rounded-none font-mono text-sm"
                  />
                </div>

                <div>
                  <label className="font-mono text-xs uppercase tracking-widest text-foreground mb-2 block">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    placeholder="Tell me about your project or opportunity..."
                    rows={5}
                    required
                    className="bg-background border-border focus:border-primary rounded-none resize-none font-mono text-sm"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-none font-mono uppercase tracking-wider text-sm hover-brutal"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
