'use client';

import { motion } from "motion/react";
import { Code, Lightbulb, Rocket, Users } from "lucide-react";

const strengths = [
    {
        icon: Code,
        title: "Código limpio",
        description: "Desarrollo de código mantenible, escalable y bien estructurado.",
    },
    {
        icon: Rocket,
        title: "Entrega eficiente",
        description: "Implementación de soluciones funcionales en tiempos óptimos, sin comprometer calidad ni rendimiento.",
    },
    {
        icon: Lightbulb,
        title: "Resolución de problemas",
        description: "Análisis y solución de desafíos técnicos complejos mediante enfoques claros y bien fundamentados.",
    },
    {
        icon: Users,
        title: "Trabajo colaborativo",
        description: "Comunicación efectiva y colaboración con equipos multidisciplinarios en entornos ágiles.",
    },
];

export const About = () => {
    return (
        <section id="about" className="py-24 px-6 bg-[#0f172a]">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        Sobre mí
                    </h2>
                    <p className="text-gray-400 text-center mb-16 max-w-3xl mx-auto text-lg leading-relaxed">
                        Ingeniero Informático enfocado en el desarrollo web fullstack y
                        en la construcción de soluciones eficientes, escalables y bien estructuradas.
                        Trabajo con tecnologías modernas del ecosistema JavaScript y .NET,
                        aplicando buenas prácticas de arquitectura y diseño limpio.
                        Me motiva resolver problemas complejos de forma clara y construir software
                        pensado para el largo plazo.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {strengths.map((strength, index) => {
                        const Icon = strength.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/10 rounded-2xl p-6 hover:border-cyan-500/30 transition-all shadow-lg hover:shadow-cyan-500/10"
                            >
                                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                                    <Icon className="w-6 h-6 text-cyan-400" />
                                </div>
                                <h3 className="text-lg font-semibold mb-3 text-white">
                                    {strength.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {strength.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
