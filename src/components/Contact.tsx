import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Github, Linkedin, Send, MapPin } from "lucide-react";
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
  {
    name: "Email",
    icon: Mail,
    href: "mailto:ricktho.sarkar@iitbhu.ac.in",
    label: "ricktho.sarkar@iitbhu.ac.in",
  },
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com",
    label: "github.com/ricktho",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com",
    label: "linkedin.com/in/ricktho",
  },
];

export function Contact() {
  const ref = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current!,
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
    <section id="contact" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 neural-grid opacity-30" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-4 block">CONTACT</span>
          <h2 className="section-title mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Open to research collaborations, internships, and impactful AI projects.
          </p>
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
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Get in Touch
              </h3>
              <p className="text-muted-foreground mb-6">
                Whether you have a project idea, research opportunity, or just want
                to say hello, I'd love to hear from you. Let's build something
                amazing together.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-medium text-foreground">Location</h4>
                <p className="text-muted-foreground">IIT (BHU) Varanasi, India</p>
              </div>
            </div>

            <div className="space-y-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-primary/10 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <link.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">{link.name}</div>
                    <div className="text-sm text-muted-foreground">{link.label}</div>
                  </div>
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
            <form ref={formRef} onSubmit={handleSubmit} className="glass-card rounded-3xl p-8">
              <h3 className="text-xl font-bold text-foreground mb-6">
                Send a Message
              </h3>

              <div className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Name
                    </label>
                    <Input
                      name="name"
                      placeholder="Your name"
                      required
                      className="bg-muted/50 border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Email
                    </label>
                    <Input
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      required
                      className="bg-muted/50 border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Subject
                  </label>
                  <Input
                    name="subject"
                    placeholder="What's this about?"
                    required
                    className="bg-muted/50 border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    placeholder="Tell me about your project or opportunity..."
                    rows={5}
                    required
                    className="bg-muted/50 border-border focus:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl"
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
