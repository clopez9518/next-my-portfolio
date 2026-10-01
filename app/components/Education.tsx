"use client";

import { motion } from "motion/react";
import { Award, CheckCircle2, GraduationCap, Medal, Sparkles, Trophy } from "lucide-react";

const education = [
    {
        degree: "Ingeniería en Informática",
        institution: "Duoc UC",
        period: "2020 - 2023",
        status: "Titulado con 3 Grados de Distinción Máxima",
        description:
            "Formación integral con sólido enfoque en ingeniería de software, estructuras de datos, diseño de arquitecturas escalables, bases de datos y metodologías ágiles de desarrollo.",
        awards: [
            {
                title: "Premio al Mejor Alumno de la Generación",
                subtitle: "Duoc UC — Reconocimiento oficial al promedio más alto y rendimiento de excelencia de la carrera.",
                featured: true,
            },
            {
                title: "Graduación con 3 Grados de Distinción",
                subtitle: "Distinción académica otorgada por excelencia en defensa de título y trayectoria.",
                featured: false,
            },
        ],
        competencies: [
            "Arquitectura de Software",
            "Algoritmos y Estructuras de Datos",
            "Bases de Datos Relacionales y NoSQL",
            "Desarrollo Web & Cloud",
            "Metodologías Ágiles (Scrum)",
        ],
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
                    <p className="mb-3 text-sm font-medium uppercase tracking-[0.22em] text-teal-700 dark:text-teal-400">Educación & Distinciones</p>
                    <h2 className="text-4xl font-semibold tracking-normal text-stone-950 dark:text-stone-50 md:text-5xl">
                        Base técnica sólida y excelencia académica.
                    </h2>
                </motion.div>

                {education.map((edu, index) => (
                    <motion.article
                        key={edu.degree}
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.08 }}
                        className="overflow-hidden rounded-xl border border-stone-200 bg-white p-7 shadow-sm transition-all duration-300 hover:shadow-md dark:border-stone-800 dark:bg-stone-900 md:p-8"
                    >
                        <div className="flex flex-col gap-6 md:flex-row md:items-start">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-700 dark:bg-teal-950/60 dark:text-teal-400">
                                <GraduationCap className="h-6 w-6" />
                            </div>

                            <div className="flex-1">
                                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
                                    <div>
                                        <h3 className="text-2xl font-semibold text-stone-950 dark:text-stone-50">
                                            {edu.degree}
                                        </h3>
                                        <div className="mt-1 flex flex-wrap items-center gap-2 text-sm">
                                            <span className="font-semibold text-teal-700 dark:text-teal-400">{edu.institution}</span>
                                            <span className="text-stone-400">•</span>
                                            <span className="text-stone-500 dark:text-stone-400">{edu.period}</span>
                                            <span className="text-stone-400">•</span>
                                            <span className="inline-flex items-center gap-1 rounded-full bg-teal-50 px-2.5 py-0.5 text-xs font-medium text-teal-800 dark:bg-teal-950/70 dark:text-teal-300">
                                                <Medal className="h-3 w-3" />
                                                {edu.status}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <p className="mt-4 leading-relaxed text-stone-600 dark:text-stone-300">
                                    {edu.description}
                                </p>

                                {/* Tarjeta Destacada de Reconocimiento */}
                                <div className="mt-6 space-y-3">
                                    {edu.awards.map((award) => (
                                        <div
                                            key={award.title}
                                            className={`relative overflow-hidden rounded-lg border p-4 transition-colors ${
                                                award.featured
                                                    ? "border-amber-300/80 bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent dark:border-amber-500/40 dark:bg-amber-950/20"
                                                    : "border-stone-200 bg-stone-50/80 dark:border-stone-800 dark:bg-stone-800/50"
                                            }`}
                                        >
                                            <div className="flex items-start gap-3">
                                                {award.featured ? (
                                                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-500/20 text-amber-600 dark:text-amber-400">
                                                        <Trophy className="h-5 w-5" />
                                                    </div>
                                                ) : (
                                                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-stone-200 text-stone-700 dark:bg-stone-800 dark:text-stone-300">
                                                        <Award className="h-5 w-5" />
                                                    </div>
                                                )}
                                                <div>
                                                    <div className="flex items-center gap-2">
                                                        <h4 className="font-semibold text-stone-950 dark:text-stone-100">
                                                            {award.title}
                                                        </h4>
                                                        {award.featured && (
                                                            <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/20 px-2 py-0.5 text-[10px] font-semibold text-amber-800 dark:text-amber-300">
                                                                <Sparkles className="h-2.5 w-2.5" />
                                                                Destacado
                                                            </span>
                                                        )}
                                                    </div>
                                                    <p className="mt-1 text-sm text-stone-600 dark:text-stone-400">
                                                        {award.subtitle}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Chips de Competencias Académicas */}
                                <div className="mt-6 flex flex-wrap gap-2 pt-2">
                                    {edu.competencies.map((comp) => (
                                        <span
                                            key={comp}
                                            className="inline-flex items-center gap-1.5 rounded-md border border-stone-200 bg-stone-50 px-2.5 py-1 text-xs font-medium text-stone-600 transition-colors dark:border-stone-700/60 dark:bg-stone-800/80 dark:text-stone-300"
                                        >
                                            <CheckCircle2 className="h-3 w-3 text-teal-700 dark:text-teal-400" />
                                            {comp}
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

