/**
 * ProjectsSection.tsx — Showcase of key projects
 * Displays projects as visual cards with tech stack and descriptions.
 */

import { motion } from "framer-motion";
import { ExternalLink, Github, Bot, Building, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  technologies: string[];
  highlights: string[];
  github?: string;
}

const projects: Project[] = [
  {
    title: "Système IA de Rendez-vous",
    subtitle: "Automatisation intelligente — Offshore Valley",
    description:
      "Plateforme d'automatisation de prise de rendez-vous utilisant des agents IA conversationnels et des workflows orchestrés pour remplacer les processus manuels.",
    icon: Bot,
    technologies: ["Python", "LangChain", "n8n", "RAG", "Qdrant", "REST API"],
    highlights: [
      "80% des demandes automatisées",
      "30 sec au lieu de 15 min par demande",
      "Intégration CRM + Calendrier + Notifications",
    ],
  },
  {
    title: "Gestion de Relevés Bancaires",
    subtitle: "Application Full-Stack — SOREMED",
    description:
      "Application web complète pour l'import, la vérification automatique et le calcul des relevés bancaires multi-formats avec architecture sécurisée.",
    icon: Building,
    technologies: [
      "Java",
      "Spring Boot",
      "React.js",
      "MySQL",
      "JUnit",
      "Selenium",
    ],
    highlights: [
      "Import multi-formats (PDF, CSV, XLS, XLSX)",
      "Calcul automatique des soldes et agios",
      "APIs RESTful sécurisées pour données financières",
    ],
  },
  {
    title: "Projets Techniques Académiques",
    subtitle: "Ingénierie Logicielle — ENSA Agadir",
    description:
      "Projets académiques variés couvrant les architectures distribuées, les patterns de conception, et les méthodologies agiles appliquées au développement logiciel.",
    icon: Cpu,
    technologies: [
      "Docker",
      "Design Patterns",
      "Agile/Scrum",
      "UML",
      "Git",
    ],
    highlights: [
      "Clean Architecture & SOLID",
      "Tests unitaires et fonctionnels",
      "Documentation technique complète",
    ],
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono text-primary mb-3 uppercase tracking-widest">
            Réalisations
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Projets Clés
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-6 rounded-xl border bg-card card-hover flex flex-col"
            >
              {/* Icon */}
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                <project.icon className="h-6 w-6 text-primary" />
              </div>

              <h3 className="font-display font-semibold text-lg mb-1">
                {project.title}
              </h3>
              <p className="text-xs font-mono text-primary mb-3">
                {project.subtitle}
              </p>
              <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                {project.description}
              </p>

              {/* Highlights */}
              <ul className="space-y-1.5 mb-5 flex-1">
                {project.highlights.map((h, j) => (
                  <li
                    key={j}
                    className="text-xs text-muted-foreground flex items-start gap-2"
                  >
                    <span className="mt-1 h-1 w-1 rounded-full bg-primary shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 text-[10px] rounded bg-secondary text-secondary-foreground font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* GitHub link */}
              {project.github && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="mt-4 gap-2 w-full"
                  asChild
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4" />
                    Voir le code
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </Button>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
