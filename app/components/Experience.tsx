"use client";

import { motion } from "motion/react";
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";

interface ExperienceItem {
    title: string;
    company: string;
    period: string;
    client?: string;
    highlights: string[];
    technologies: string[];
}

const experiences: ExperienceItem[] = [
    {
        title: "Desarrollador Fullstack",
        company: "KIS Chile",
        client: "Cliente: Bolsa de Comercio de Santiago (BCS)",
        period: "03/2024 - 07/2025",
        highlights: [
            "Modernización de Sistemas Críticos: Participé en la migración de aplicaciones financieras transaccionales legacy en Visual Basic hacia una arquitectura web modular con AngularJS y TypeScript para la Bolsa de Comercio de Santiago.",
            "Automatización y ETL: Desarrollé scripts en Python y flujos con Power Automate para la transferencia segura de archivos vía SFTP y consolidación de datos financieros, reduciendo tiempos de procesamiento y errores operativos manuales.",
            "Integración y Rendimiento: Implementé y consumí endpoints REST APIs integrados con bases de datos SQL Server, asegurando consultas optimizadas para datos de alto volumen.",
        ],
        technologies: [
            "AngularJS",
            "TypeScript",
            "JavaScript",
            "Python",
            "SQL Server",
            "SFTP",
            "Power Automate",
            "REST APIs",
            "Git",
        ],
    },
    {
        title: "Práctica Profesional - Desarrollador Frontend",
        company: "KIS Chile",
        period: "12/2023 - 02/2024",
        highlights: [
            "Desarrollo de Interfaces: Implementación y maquetación de nuevos módulos de interfaz de usuario responsivos para aplicaciones web corporativas.",
            "Flujo de Trabajo Ágil: Colaboración en equipo bajo metodología Scrum, participando en revisiones de código (Code Reviews), resolución de bugs y control de versiones con Git.",
        ],
        technologies: ["JavaScript", "HTML5", "CSS3", "AngularJS", "Git", "Scrum"],
    },
];

export const Experience = () => {
    return (
        <section id="experience" className="border-b border-stone-200 bg-white px-6 py-24 transition-colors duration-300 dark:border-stone-800 dark:bg-stone-900">
            <div className="mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-14 max-w-2xl"
                >
                    <p className="mb-3 text-sm font-medium uppercase tracking-[0.22em] text-teal-700 dark:text-teal-400">Experiencia</p>
                    <h2 className="text-4xl font-semibold tracking-normal text-stone-950 dark:text-stone-50 md:text-5xl">
                        Trayectoria construyendo software en contexto real.
                    </h2>
                </motion.div>

                <div className="divide-y divide-stone-200 border-y border-stone-200 dark:divide-stone-800 dark:border-stone-800">
                    {experiences.map((exp, index) => (
                        <motion.article
                            key={`${exp.company}-${exp.period}`}
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.08 }}
                            className="grid gap-6 py-10 md:grid-cols-[0.7fr_1.3fr]"
                        >
                            <div className="space-y-3 text-sm text-stone-500 dark:text-stone-400">
                                <div className="flex items-center gap-2">
                                    <Calendar className="h-4 w-4 text-teal-700 dark:text-teal-400" />
                                    <span className="font-medium text-stone-700 dark:text-stone-300">{exp.period}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Briefcase className="h-4 w-4 text-teal-700 dark:text-teal-400" />
                                    <span>{exp.company}</span>
                                </div>
                                {exp.client && (
                                    <p className="inline-block rounded-md border border-stone-200 bg-stone-50 px-2.5 py-1 text-xs text-stone-600 dark:border-stone-700/60 dark:bg-stone-800/80 dark:text-stone-300">
                                        {exp.client}
                                    </p>
                                )}
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold text-stone-950 dark:text-stone-50">
                                    {exp.title}
                                </h3>
                                <ul className="mt-4 space-y-3 leading-relaxed text-stone-600 dark:text-stone-300">
                                    {exp.highlights.map((highlight, i) => (
                                        <li key={i} className="flex items-start gap-2.5 text-base">
                                            <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-teal-700 dark:text-teal-400" />
                                            <span>{highlight}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-6 flex flex-wrap gap-2 pt-2">
                                    {exp.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="rounded-md border border-stone-200 bg-stone-50 px-2.5 py-1 text-xs font-medium text-stone-600 transition-colors dark:border-stone-700/60 dark:bg-stone-800/80 dark:text-stone-300"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};

