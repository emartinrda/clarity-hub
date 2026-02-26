import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Briefcase, 
  ClipboardList, 
  Monitor, 
  Settings, 
  Building2, 
  Sparkles, 
  Server, 
  Users, 
  Lightbulb, 
  GraduationCap 
} from "lucide-react";

export default function TargetAudienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const profiles = [
    { icon: Settings, label: "Directores de Operaciones" },
    { icon: ClipboardList, label: "Project Managers" },
    { icon: Monitor, label: "CTOs y CIOs" },
    { icon: Briefcase, label: "Gerentes de Procesos" },
    { icon: Building2, label: "Dueños de Negocio" },
    { icon: Sparkles, label: "Líderes de Transformación Digital" },
    { icon: Server, label: "Gerentes de TI" },
    { icon: Users, label: "Gerencias y Jefaturas" },
    { icon: Lightbulb, label: "Consultores Independientes" },
    { icon: GraduationCap, label: "Profesionales que quieren liderar proyectos de IA" },
  ];

  return (
    <section className="py-16 md:py-24 bg-cream" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block text-orange font-medium text-sm uppercase tracking-wider mb-4">
            ¿Es para ti?
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            ¿Para Quién Es Esta Formación?
          </h2>
          <p className="text-lg text-muted-foreground">
            Si lideras equipos, procesos o proyectos y quieres dominar automatización e IA sin ser técnico, esto es para ti.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
          {profiles.map((profile, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.05 * index, duration: 0.4 }}
              className="group bg-white rounded-xl p-4 border border-border hover:border-forest/30 hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="w-10 h-10 bg-forest/10 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-forest group-hover:scale-110 transition-all duration-300">
                <profile.icon className="w-5 h-5 text-forest group-hover:text-white transition-colors" />
              </div>
              <p className="text-sm font-medium text-foreground leading-tight">
                {profile.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
