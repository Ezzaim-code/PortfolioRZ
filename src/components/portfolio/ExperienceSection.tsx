/**
 * ExperienceSection.tsx — Professional experience timeline
 * Displays work experience in a clean timeline layout.
 */

import { motion } from "framer-motion";
import { Calendar, Building2 } from "lucide-react";

interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

const experiences: Experience[] = [
  {
    company: "Offshore Valley",
    role: "Ingénieure Développement & Automatisation IA",
    period: "Février – Juin 2025",
    location: "Agadir",
    description:
      "Projet de Fin d'Études — Système intelligent d'automatisation de prise de rendez-vous",
    achievements: [
      "Automatisé 80% des demandes de rendez-vous avec des agents IA conversationnels",
      "Réduit le temps de traitement de 15 min à 30 sec par demande",
      "Orchestré des workflows automatisés avec n8n (CRM, calendrier, notifications)",
    ],
    technologies: [
      "Python",
      "LLMs",
      "LangChain",
      "n8n",
      "RAG",
      "Qdrant",
      "REST API",
    ],
  },
  {
    company: "SOREMED",
    role: "Développeuse Full-Stack",
    period: "Février – Mai 2024",
    location: "Agadir",
    description:
      "Projet de Fin d'Année — Application web de gestion des relevés bancaires",
    achievements: [
      "Développé une application complète d'import et vérification automatique de relevés bancaires multi-formats (PDF, CSV, XLS, XLSX)",
      "Conçu une architecture backend robuste avec Spring Boot et APIs RESTful sécurisées",
      "Implémenté le calcul automatique des soldes opérationnels et agios",
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "React.js",
      "MySQL",
      "JUnit",
      "Selenium",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="section-padding bg-card">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono text-primary mb-3 uppercase tracking-widest">
            Parcours
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Expérience Professionnelle
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative pl-8 border-l-2 border-primary/30"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-0 -translate-x-[9px] h-4 w-4 rounded-full border-2 border-primary bg-card" />

              <div className="p-6 rounded-xl border bg-background card-hover">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="flex items-center gap-1.5 text-xs font-mono text-primary">
                    <Calendar className="h-3.5 w-3.5" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Building2 className="h-3.5 w-3.5" />
                    {exp.company}, {exp.location}
                  </span>
                </div>

                <h3 className="font-display font-semibold text-lg mb-1">
                  {exp.role}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {exp.description}
                </p>

                <ul className="space-y-2 mb-4">
                  {exp.achievements.map((ach, j) => (
                    <li
                      key={j}
                      className="text-sm text-muted-foreground flex items-start gap-2"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      {ach}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs rounded-md bg-primary/10 text-primary font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
