/**
 * EducationSection.tsx — Education & languages section
 * Displays academic background and language proficiency.
 */

import { motion } from "framer-motion";
import { GraduationCap, Globe } from "lucide-react";

const education = [
  {
    degree: "Diplôme d'Ingénieur d'État en Informatique",
    school: "ENSA Agadir, Maroc",
    period: "2022 – 2025",
  },
  {
    degree: "Concours National Commun (CNC) — CPGE",
    school: "Safi, Maroc",
    period: "2020 – 2022",
  },
  {
    degree: "Baccalauréat Sciences Mathématiques B",
    school: "Lycée Mohamed El Khamis, Essaouira",
    period: "2019 – 2020",
  },
];

const languages = [
  { name: "Arabe", level: "Langue maternelle", percent: 100 },
  { name: "Français", level: "Professionnel B2", percent: 80 },
  { name: "Anglais", level: "Professionnel B2", percent: 80 },
];

export function EducationSection() {
  return (
    <section className="section-padding bg-card">
      <div className="container">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="h-5 w-5 text-primary" />
              <h2 className="font-display text-2xl font-bold">Formation</h2>
            </div>

            <div className="space-y-6">
              {education.map((edu, i) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="pl-6 border-l-2 border-border"
                >
                  <p className="text-xs font-mono text-primary mb-1">
                    {edu.period}
                  </p>
                  <h3 className="font-semibold text-sm mb-0.5">
                    {edu.degree}
                  </h3>
                  <p className="text-xs text-muted-foreground">{edu.school}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Globe className="h-5 w-5 text-primary" />
              <h2 className="font-display text-2xl font-bold">Langues</h2>
            </div>

            <div className="space-y-5">
              {languages.map((lang, i) => (
                <motion.div
                  key={lang.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">{lang.name}</span>
                    <span className="text-xs text-muted-foreground">
                      {lang.level}
                    </span>
                  </div>
                  <div className="h-2 rounded-full bg-secondary overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.percent}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
                      className="h-full rounded-full bg-primary"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
