import { BookOpen } from "lucide-react";

export const researchPaper = {
  title: "MAML-Select: An Online Adaptive Client Selection Method for Federated Learning via Meta-Learning",
  journal: "IEEE Transactions in AI",
  status: "Under Review",
  authors: "Akash Sharma, Advait Pathak, Ricktho Sarkar, Dr. Navneet Garg, Dr. Prasenjit Chanak, Dr. M. K. Shukla, Dr. Om Jee Pandey",
};

export function Research() {
  return (
    <section id="research" className="py-24 lg:py-32 border-y border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="section-title mb-6">Research <span className="text-primary">Papers</span></h2>
        <div className="w-24 h-0.5 bg-primary mb-12" />
        <article className="max-w-4xl mx-auto border-l-4 border-primary pl-6 md:pl-10">
          <div className="flex flex-wrap gap-4 items-center mb-6">
            <BookOpen className="w-5 h-5 text-primary" />
            <span className="font-mono text-xs text-muted-foreground">{researchPaper.journal}</span>
            <span className="research-badge">{researchPaper.status}</span>
          </div>
          <h3 className="font-display text-2xl md:text-3xl leading-snug mb-6">{researchPaper.title}</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">{researchPaper.authors}</p>
        </article>
      </div>
    </section>
  );
}