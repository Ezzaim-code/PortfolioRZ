/**
 * SkillsSection.tsx — Technical skills display
 * Categorized skill badges with progress indicators.
 */

import { motion } from "framer-motion";

interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Développement Full-Stack",
    skills: [
      "Java / Spring Boot",
      "Python",
      "TypeScript / React.js",
      "REST API",
      "HTML5 / CSS3",
      "Bootstrap",
      "MySQL",
      "PostgreSQL",
    ],
  },
  {
    title: "IA & Automatisation",
    skills: [
      "LLMs (Fine-tuning)",
      "RAG",
      "Agents IA",
      "LangChain",
      "n8n",
      "Prompt Engineering",
      "MCP",
      "Base vectorielle (Qdrant)",
    ],
  },
  {
    title: "Qualité & Tests",
    skills: [
      "Design Patterns",
      "JUnit",
      "Selenium",
      "JMeter",
      "Clean Code",
      "SOLID",
    ],
  },
  {
    title: "Outils & Méthodes",
    skills: [
      "Git / GitHub",
      "Docker",
      "Linux",
      "Agile / Scrum",
      "UML",
    ],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono text-primary mb-3 uppercase tracking-widest">
            Compétences
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Stack Technique
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-xl border bg-card card-hover"
            >
              <h3 className="font-display font-semibold text-lg mb-4 text-primary">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full text-xs font-medium border bg-background text-foreground hover:border-primary hover:text-primary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
