'use client';

import { motion } from "motion/react";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
    {
        title: "Desarrollador Fullstack",
        company: "KIS Chile",
        period: "03/2024 - 07/2025",
        description:
            "Participé en la migración de aplicaciones legacy desarrolladas en Visual Basic hacia AngularJS, para la Bolsa de Comercio de Santiago. ",
    },
    {
        title: "Práctica Profesional",
        company: "KIS Chile",
        period: "12/2023 - 02/2024",
        description:
            "Inicié mi carrera profesional realizando mi práctica como desarrollador frontend, participando en el desarrollo y mantenimiento de aplicaciones web.",
    },
];

export const Experience = () => {
    return (
        <section id="experience" className="py-24 px-6 bg-gradient-to-b from-slate-900 to-[#0f172a]">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        Experiencia
                    </h2>
                    <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
                        Mi trayectoria profesional en el desarrollo de software
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-blue-500/50 to-transparent" />

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="relative pl-20"
                            >
                                {/* Timeline dot */}
                                <div className="absolute left-5 top-2 w-7 h-7 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full border-4 border-[#0f172a] shadow-lg shadow-cyan-500/50" />

                                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/10 rounded-2xl p-6 hover:border-cyan-500/30 transition-all shadow-lg hover:shadow-cyan-500/10">
                                    <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                                        <div>
                                            <h3 className="text-xl font-semibold text-white mb-1">
                                                {exp.title}
                                            </h3>
                                            <div className="flex items-center gap-2 text-cyan-400">
                                                <Briefcase className="w-4 h-4" />
                                                <span>{exp.company}</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-400 bg-slate-800/50 px-4 py-2 rounded-lg">
                                            <Calendar className="w-4 h-4" />
                                            <span>{exp.period}</span>
                                        </div>
                                    </div>
                                    <p className="text-gray-400 leading-relaxed">
                                        {exp.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
