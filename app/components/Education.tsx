"use client";

import { motion } from "motion/react";
import { GraduationCap, Trophy } from "lucide-react";

const education = [
    {
        degree: "Ingeniería en Informática",
        institution: "Duoc UC",
        period: "2020 - 2023",
        description: "Titulado con tres grados de distinción.",
        achievements: ["Premio al Mejor Alumno de la Generación - Duoc UC"],
    },
];

export function Education() {
    return (
        <section id="education" className="border-b border-stone-200 bg-[#f7f6f1] px-6 py-24 transition-colors duration-300 dark:border-stone-800 dark:bg-stone-950">
            <div className="mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-14 max-w-2xl"
                >
                    <p className="mb-3 text-sm font-medium uppercase tracking-[0.22em] text-teal-700 dark:text-teal-400">Educación</p>
                    <h2 className="text-4xl font-semibold tracking-normal text-stone-950 dark:text-stone-50 md:text-5xl">
                        Base técnica y aprendizaje continuo.
                    </h2>
                </motion.div>

                {education.map((edu, index) => (
                    <motion.article
                        key={edu.degree}
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.08 }}
                        className="rounded-lg border border-stone-200 bg-white p-7 shadow-sm transition-colors dark:border-stone-800 dark:bg-stone-900"
                    >
                        <div className="flex flex-col gap-6 md:flex-row md:items-start">
                            <GraduationCap className="h-7 w-7 shrink-0 text-teal-700 dark:text-teal-400" />
                            <div className="flex-1">
                                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-2">
                                    <h3 className="text-2xl font-semibold text-stone-950 dark:text-stone-50">
                                        {edu.degree}
                                    </h3>
                                    <span className="font-medium text-teal-700 dark:text-teal-400">{edu.institution}</span>
                                    <span className="text-stone-500 dark:text-stone-400">{edu.period}</span>
                                </div>
                                <p className="mt-4 leading-8 text-stone-600 dark:text-stone-300">
                                    {edu.description}
                                </p>
                                <div className="mt-5 flex flex-wrap gap-2">
                                    {edu.achievements.map((achievement) => (
                                        <span
                                            key={achievement}
                                            className="inline-flex items-center gap-2 rounded-md bg-stone-100 px-3 py-1.5 text-sm text-stone-700 transition-colors dark:bg-stone-800 dark:text-stone-200"
                                        >
                                            <Trophy className="h-4 w-4 text-teal-700 dark:text-teal-400" />
                                            {achievement}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.article>
                ))}
            </div>
        </section>
    );
}
