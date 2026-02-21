/**
 * AboutSection.tsx — Professional profile summary
 * Displays a brief about section with key highlights.
 */

import { motion } from "framer-motion";
import { MapPin, GraduationCap, Briefcase } from "lucide-react";

export function AboutSection() {
  const highlights = [
    {
      icon: GraduationCap,
      label: "Formation",
      value: "Ingénieure d'État — ENSA Agadir",
    },
    {
      icon: Briefcase,
      label: "Spécialisation",
      value: "Full-Stack & IA Générative",
    },
    {
      icon: MapPin,
      label: "Localisation",
      value: "Agadir, Maroc",
    },
  ];

  return (
    <section id="about" className="section-padding bg-card">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-sm font-mono text-primary mb-3 uppercase tracking-widest">
            À propos
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">
            Profil Professionnel
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12">
            Ingénieure d'État en Informatique spécialisée en développement
            full-stack et automatisation par IA générative. Passionnée par les
            architectures logicielles robustes et l'innovation technologique.
            J'allie rigueur technique et créativité pour concevoir des solutions
            performantes et maintenables.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-6 rounded-xl border bg-background card-hover"
              >
                <item.icon className="h-6 w-6 text-primary mb-3 mx-auto" />
                <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1">
                  {item.label}
                </p>
                <p className="font-medium text-sm">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
