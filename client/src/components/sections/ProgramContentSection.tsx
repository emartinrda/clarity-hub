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
  Video
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
      color: "bg-forest/10 text-forest",
    },
    {
      number: "2",
      title: "Diagnóstico Express (48h)",
      description: "Inventario priorizado, paquete de quick wins",
      icon: Search,
      color: "bg-orange/10 text-orange",
    },
    {
      number: "3",
      title: "Diseño POC (30-60 días)",
      description: "Objetivos SMART, arquitectura mínima, roadmap",
      icon: Target,
      color: "bg-mint/50 text-forest",
    },
    {
      number: "4",
      title: "Implementación & Medición",
      description: "Despliegue piloto, feedback, dashboards",
      icon: Rocket,
      color: "bg-forest/10 text-forest",
    },
    {
      number: "5",
      title: "Escalado & Gobernanza",
      description: "Políticas de datos, gobernanza de modelos, plan 90 días",
      icon: Shield,
      color: "bg-orange/10 text-orange",
    },
    {
      number: "6",
      title: "Curso Práctico",
      description: "Guiones, ejemplos, ejercicios por etapa",
      icon: GraduationCap,
      color: "bg-mint/50 text-forest",
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
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-10 w-72 h-72 bg-mint/30 rounded-full blur-3xl" />
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
              className="bg-cream/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl ${phase.color} flex items-center justify-center flex-shrink-0`}>
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

        {/* Cheatsheets & Bonus */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {/* Cheatsheets */}
          <div className="bg-forest/5 rounded-2xl p-8 border border-forest/10">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
              <span className="w-10 h-10 bg-forest/10 rounded-xl flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-forest" />
              </span>
              Cheatsheets Incluidas
            </h3>
            <ul className="space-y-3">
              {cheatsheets.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-foreground/80">
                  <svg className="w-5 h-5 text-forest flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Bonus - Sesión Semanal */}
          <div className="bg-gradient-to-br from-orange/10 to-orange/5 rounded-2xl p-8 border border-orange/20">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-orange text-white text-xs font-bold px-3 py-1 rounded-full">
                BONUS
              </span>
            </div>
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
              <span className="w-10 h-10 bg-orange/20 rounded-xl flex items-center justify-center">
                <Video className="w-5 h-5 text-orange" />
              </span>
              Sesión Semanal Conmigo
            </h3>
            <p className="text-foreground/80 mb-6">
              Incluye una sesión semanal en vivo conmigo para resolver todas 
              las dudas que necesites durante tu implementación.
            </p>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2 text-forest">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>En vivo</span>
              </div>
              <div className="flex items-center gap-2 text-forest">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Q&A directo</span>
              </div>
              <div className="flex items-center gap-2 text-forest">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span>Comunidad</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
