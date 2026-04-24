'use client';

import { motion } from "motion/react";
import { Code, Database, Cloud, Wrench, Server, ToolCase, BookOpenText, Layers3 } from "lucide-react";

const techCategories = [
    {
        title: "Backend",
        icon: Server,
        technologies: [
            ".NET",
            "ASP.NET Core",
            "C#",
            "Node.js",
            "Express",
            "REST APIs",
            "JWT",
            "WebSockets"
        ],
    },
    {
        title: "Frontend",
        icon: Code,
        technologies: [
            "React",
            "Next.js",
            "AngularJS",
            "TypeScript",
            "Tailwind CSS",
            "TanStack Query",
            "Redux",
            "Zustand",
            "React Native"
        ],
    },
    {
        title: "Bases de Datos",
        icon: Database,
        technologies: [
            "PostgreSQL",
            "MySQL",
            "MongoDB"
        ],
    },
    {
        title: "ORMs y Acceso a Datos",
        icon: Layers3,
        technologies: [
            "Entity Framework",
            "Prisma"
        ],
    },
    {
        title: "Cloud y DevOps",
        icon: Cloud,
        technologies: [
            "Docker",
            "Vercel",
            "Render"
        ],
    },
    {
        title: "Testing",
        icon: Wrench,
        technologies: [
            "xUnit",
            "Moq",
            "Jest",
        ],
    },
    {
        title: "Herramientas",
        icon: ToolCase,
        technologies: [
            "Git",
            "GitHub",
            "Postman"
        ],
    },
    {
        title: "Arquitectura y Metodologías",
        icon: BookOpenText,
        technologies: [
            "Clean Architecture",
            "SOLID",
            "Scrum"
        ],
    },
];

export function TechStack() {
    return (
        <section id="tech-stack" className="py-24 px-6 bg-gradient-to-b from-[#0f172a] to-slate-900">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        Stack Tecnológico
                    </h2>
                    <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
                        Tecnologías y herramientas que utilizo para transformar ideas en soluciones funcionales.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {techCategories.map((category, categoryIndex) => {
                        const Icon = category.icon;
                        return (
                            <motion.div
                                key={categoryIndex}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                                className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm border border-cyan-500/10 rounded-2xl p-6 hover:border-cyan-500/20 transition-all shadow-lg"
                            >
                                {/* Category Header */}
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center">
                                        <Icon className="w-5 h-5 text-cyan-400" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-white">
                                        {category.title}
                                    </h3>
                                </div>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-3">
                                    {category.technologies.map((tech, techIndex) => (
                                        <motion.div
                                            key={techIndex}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{
                                                duration: 0.3,
                                                delay: categoryIndex * 0.1 + techIndex * 0.05,
                                            }}
                                            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                                            className="px-4 py-2 bg-slate-900/60 border border-cyan-500/20 rounded-lg text-sm text-gray-200 hover:text-cyan-300 hover:border-cyan-500/40 hover:bg-slate-900/80 transition-all shadow-sm hover:shadow-cyan-500/20 cursor-default"
                                        >
                                            {tech}
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
