"use client";

import { motion } from "motion/react";
import { Code, Lightbulb, Rocket, Users } from "lucide-react";

const strengths = [
    {
        icon: Code,
        title: "Código limpio",
        description: "Estructuras mantenibles, nombres claros y decisiones técnicas fáciles de seguir.",
    },
    {
        icon: Rocket,
        title: "Entrega eficiente",
        description: "Iteración rápida con foco en calidad, rendimiento y comportamiento real del producto.",
    },
    {
        icon: Lightbulb,
        title: "Resolución de problemas",
        description: "Análisis pragmático de desafíos complejos hasta convertirlos en soluciones simples.",
    },
    {
        icon: Users,
        title: "Trabajo colaborativo",
        description: "Comunicación clara con equipos técnicos y de negocio en entornos ágiles.",
    },
];

export const About = () => {
    return (
        <section id="about" className="border-b border-stone-200 bg-[#f7f6f1] px-6 py-24 transition-colors duration-300 dark:border-stone-800 dark:bg-stone-950">
            <div className="mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid gap-10 md:grid-cols-[0.8fr_1.2fr]"
                >
                    <div>
                        <p className="mb-3 text-sm font-medium uppercase tracking-[0.22em] text-teal-700 dark:text-teal-400">Sobre mí</p>
                        <h2 className="text-4xl font-semibold tracking-normal text-stone-950 dark:text-stone-50 md:text-5xl">
                            Desarrollo con criterio, no solo con código.
                        </h2>
                    </div>
                    <p className="text-lg leading-8 text-stone-600 dark:text-stone-400">
                        Ingeniero Informático enfocado en desarrollo web fullstack y construcción de soluciones eficientes, escalables y bien estructuradas. Trabajo con tecnologías modernas del ecosistema JavaScript y .NET, aplicando buenas prácticas de arquitectura, diseño limpio y una mirada orientada al largo plazo.
                    </p>
                </motion.div>

                <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {strengths.map((strength, index) => {
                        const Icon = strength.icon;
                        return (
                            <motion.div
                                key={strength.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.08 }}
                                className="rounded-lg border border-stone-200 bg-white/65 p-6 shadow-sm transition-colors dark:border-stone-800 dark:bg-stone-900/80"
                            >
                                <Icon className="mb-5 h-5 w-5 text-teal-700 dark:text-teal-400" />
                                <h3 className="mb-3 text-lg font-semibold text-stone-950 dark:text-stone-100">
                                    {strength.title}
                                </h3>
                                <p className="leading-7 text-stone-600 dark:text-stone-400">
                                    {strength.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
