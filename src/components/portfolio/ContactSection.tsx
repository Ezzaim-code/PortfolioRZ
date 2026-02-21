/**
 * ContactSection.tsx — Contact form and info
 * Clean contact section with form and direct contact methods.
 */

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

export function ContactSection() {
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    // Simulate send
    setTimeout(() => {
      setSending(false);
      toast({
        title: "Message envoyé !",
        description: "Merci, je vous répondrai dans les plus brefs délais.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "ezzaimradiya@gmail.com", href: "mailto:ezzaimradiya@gmail.com" },
    { icon: Phone, label: "Téléphone", value: "+212 6 58 13 61 22", href: "tel:+212658136122" },
    { icon: MapPin, label: "Localisation", value: "Lqliaa, Agadir, Maroc", href: undefined },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono text-primary mb-3 uppercase tracking-widest">
            Contact
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Travaillons ensemble
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 space-y-6"
          >
            <p className="text-muted-foreground text-sm leading-relaxed">
              Actuellement disponible pour des opportunités en CDI, CDD ou freelance.
              N'hésitez pas à me contacter pour discuter de votre projet.
            </p>

            <div className="space-y-4">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <item.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-sm font-medium hover:text-primary transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-3 space-y-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input placeholder="Nom complet" name="name" required />
              <Input placeholder="Email" type="email" name="email" required />
            </div>
            <Input placeholder="Sujet" name="subject" required />
            <Textarea placeholder="Votre message..." name="message" rows={5} required />
            <Button type="submit" className="w-full gap-2" disabled={sending}>
              <Send className="h-4 w-4" />
              {sending ? "Envoi en cours..." : "Envoyer le message"}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
