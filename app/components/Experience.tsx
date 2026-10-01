"use client";

import { motion } from "motion/react";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
    {
        title: "Desarrollador Fullstack",
        company: "KIS Chile",
        period: "03/2024 - 07/2025",
        description:[
            "Participé en la migración de aplicaciones financieras legacy desarrolladas en Visual Basic hacia AngularJS para la Bolsa de Comercio de Santiago.",
            "Automatización de procesos con Python, transferencia de archivos mediante SFTP e integración de datos con Power Automate.",
            "Tecnologías: AngularJS, JavaScript, TypeScript, Python, SQL Server, Power Automate, REST APIs, Git."
        ]
            // "Participé en la migración de aplicaciones legacy desarrolladas en Visual Basic hacia AngularJS para la Bolsa de Comercio de Santiago.",
    },
    {
        title: "Práctica Profesional",
        company: "KIS Chile",
        period: "12/2023 - 02/2024",
        description: ["Inicié mi carrera profesional como desarrollador frontend, participando en el desarrollo y mantenimiento de aplicaciones web."],
            
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
                            className="grid gap-6 py-8 md:grid-cols-[0.7fr_1.3fr]"
                        >
                            <div className="space-y-3 text-sm text-stone-500 dark:text-stone-400">
                                <div className="flex items-center gap-2">
                                    <Calendar className="h-4 w-4 text-teal-700 dark:text-teal-400" />
                                    <span>{exp.period}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Briefcase className="h-4 w-4 text-teal-700 dark:text-teal-400" />
                                    <span>{exp.company}</span>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold text-stone-950 dark:text-stone-100">
                                    {exp.title}
                                </h3>
                                <div className="mt-4 leading-8 text-stone-600 dark:text-stone-300">
                                    {exp.description.map((line, i) => (
                                        <p key={i} className="mt-2">
                                            {line}
                                        </p>
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
