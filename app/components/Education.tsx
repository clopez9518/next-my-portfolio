'use client';

import { motion } from "motion/react";
import { GraduationCap, Award, Trophy } from "lucide-react";

const education = [
    {
        degree: "Ingeniería en Informática",
        institution: "Duoc UC",
        period: "2020 - 2023",
        description:
            "Titulado con tres grados de distinción.",
        achievements: [
            "Premio al Mejor Alumno de la Generación - Duoc UC",
        ],
    },
];

const certifications = [
    "AWS Certified Solutions Architect",
    "Google Cloud Professional",
    "MongoDB Certified Developer",
    "React Advanced Certification",
];

export function Education() {
    return (
        <section id="education" className="py-24 px-6 bg-[#0f172a]">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        Educación
                    </h2>
                    <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
                        Base académica sólida y compromiso con el aprendizaje continuo.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Education Cards */}
                    <div className="lg:col-span-3 space-y-6">
                        {education.map((edu, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/10 rounded-2xl p-6 hover:border-cyan-500/30 transition-all shadow-lg hover:shadow-cyan-500/10"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <GraduationCap className="w-6 h-6 text-cyan-400" />
                                    </div>
                                    <div className="flex-1">

                                        <div className="flex flex-wrap items-center gap-3 mb-3">
                                            <h3 className="text-2xl font-semibold text-white mb-2">
                                                {edu.degree}
                                            </h3>
                                            <span className="text-cyan-400 font-medium">
                                                {edu.institution}
                                            </span>
                                            <span className="text-gray-500">•</span>
                                            <span className="text-gray-400">{edu.period}</span>
                                        </div>
                                        <p className="text-gray-400 leading-relaxed mb-4">
                                            {edu.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {edu.achievements.map((achievement, i) => (
                                                <span
                                                    key={i}
                                                    className="flex items-center gap-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-lg text-sm text-cyan-300"
                                                >
                                                    <Trophy size={14} />
                                                    {achievement}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Certifications Card */}
                    {/* <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/10 rounded-2xl p-6 hover:border-cyan-500/30 transition-all shadow-lg hover:shadow-cyan-500/10 h-fit"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center">
                                <Award className="w-5 h-5 text-cyan-400" />
                            </div>
                            <h3 className="text-xl font-semibold text-white">
                                Certifications
                            </h3>
                        </div>

                        <div className="space-y-3">
                            {certifications.map((cert, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                                    className="flex items-start gap-3 p-3 bg-slate-900/40 rounded-xl hover:bg-slate-900/60 transition-all group"
                                >
                                    <BookOpen className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                                    <span className="text-gray-300 text-sm leading-relaxed">
                                        {cert}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div> */}
                </div>
            </div>
        </section>
    );
}
