import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Lightbulb, 
  Search, 
  Target, 
  Rocket, 
  Shield, 
  GraduationCap,
  CheckCircle,
  Video,
  Users
} from "lucide-react";

export default function ProgramContentSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const phases = [
    {
      number: "1",
      title: "Introducción",
      description: "Visión general, expectativas, plan de trabajo",
      icon: Lightbulb,
      iconColor: "bg-forest/10 text-forest",
    },
    {
      number: "2",
      title: "Diagnóstico Express (48h)",
      description: "Inventario priorizado, paquete de quick wins",
      icon: Search,
      iconColor: "bg-orange/10 text-orange",
    },
    {
      number: "3",
      title: "Diseño POC (30-60 días)",
      description: "Objetivos SMART, arquitectura mínima, roadmap",
      icon: Target,
      iconColor: "bg-forest/10 text-forest",
    },
    {
      number: "4",
      title: "Implementación & Medición",
      description: "Despliegue piloto, feedback, dashboards",
      icon: Rocket,
      iconColor: "bg-orange/10 text-orange",
    },
    {
      number: "5",
      title: "Escalado & Gobernanza",
      description: "Políticas de datos, gobernanza de modelos, plan 90 días",
      icon: Shield,
      iconColor: "bg-forest/10 text-forest",
    },
    {
      number: "6",
      title: "Curso Práctico",
      description: "Guiones, ejemplos, ejercicios por etapa",
      icon: GraduationCap,
      iconColor: "bg-orange/10 text-orange",
    },
  ];

  const cheatsheets = [
    "Checklist de señales de alto ROI",
    "Plantilla FRAME IA (scoring)",
    "Guía de preparación de datos",
    "Paquete de prompts para chatbots",
    "Plantilla POC con métricas",
    "RACI y plan de comunicación",
    "Dashboard template",
  ];

  return (
    <section id="programa" className="py-20 md:py-28 bg-white relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-10 w-72 h-72 bg-forest/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-orange/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-orange font-medium text-sm uppercase tracking-wider mb-4">
            El Programa Completo
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Qué Incluye El Programa{" "}
            <span className="gradient-text">De Caos a Claridad</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Un sistema paso a paso para implementar automatización e IA 
            de forma correcta, sin perder tiempo ni dinero.
          </p>
        </motion.div>

        {/* Phases Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl p-6 border border-border/50 hover:shadow-lg hover:border-forest/20 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl ${phase.iconColor} flex items-center justify-center flex-shrink-0`}>
                  <phase.icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold text-orange bg-orange/10 px-2 py-1 rounded-full">
                      FASE {phase.number}
                    </span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{phase.title}</h3>
                  <p className="text-sm text-muted-foreground">{phase.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cheatsheets, Bonus & Community - 3 columns */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {/* Cheatsheets */}
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-forest/10 shadow-sm">
            <h3 className="text-lg font-semibold mb-5 flex items-center gap-3">
              <span className="w-10 h-10 bg-forest/10 rounded-xl flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-forest" />
              </span>
              Cheatsheets
            </h3>
            <ul className="space-y-2.5">
              {cheatsheets.map((item, index) => (
                <li key={index} className="flex items-center gap-2 text-foreground/80 text-sm">
                  <svg className="w-4 h-4 text-forest flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Bonus - Sesión Semanal */}
          <div className="bg-gradient-to-br from-orange/10 to-orange/5 rounded-2xl p-6 md:p-8 border border-orange/20 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-orange text-white text-xs font-bold px-3 py-1 rounded-full">
                BONUS
              </span>
            </div>
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-3">
              <span className="w-10 h-10 bg-orange/20 rounded-xl flex items-center justify-center">
                <Video className="w-5 h-5 text-orange" />
              </span>
              Sesión Semanal
            </h3>
            <p className="text-foreground/80 text-sm mb-5">
              Sesión en vivo conmigo cada semana para resolver todas 
              las dudas durante tu implementación.
            </p>
            <div className="flex flex-wrap items-center gap-3 text-xs">
              <div className="flex items-center gap-1.5 text-forest bg-forest/10 px-2.5 py-1.5 rounded-full">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>En vivo</span>
              </div>
              <div className="flex items-center gap-1.5 text-forest bg-forest/10 px-2.5 py-1.5 rounded-full">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Q&A directo</span>
              </div>
            </div>
          </div>

          {/* Comunidad - NUEVO */}
          <div className="bg-gradient-to-br from-forest/10 to-forest/5 rounded-2xl p-6 md:p-8 border border-forest/20 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-forest text-white text-xs font-bold px-3 py-1 rounded-full">
                INCLUIDO
              </span>
            </div>
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-3">
              <span className="w-10 h-10 bg-forest/20 rounded-xl flex items-center justify-center">
                <Users className="w-5 h-5 text-forest" />
              </span>
              Comunidad Exclusiva
            </h3>
            <p className="text-foreground/80 text-sm mb-5">
              Conecta con otros directores, CTOs y líderes de operaciones 
              que están implementando IA en sus empresas.
            </p>
            <div className="space-y-2.5 text-sm">
              <div className="flex items-center gap-2 text-foreground/80">
                <svg className="w-4 h-4 text-forest flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Networking con profesionales
              </div>
              <div className="flex items-center gap-2 text-foreground/80">
                <svg className="w-4 h-4 text-forest flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Comparte experiencias reales
              </div>
              <div className="flex items-center gap-2 text-foreground/80">
                <svg className="w-4 h-4 text-forest flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Acceso de por vida
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
