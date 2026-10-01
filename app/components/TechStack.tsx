"use client";

import { motion } from "motion/react";
import { BookOpenText, Cloud, Code, Database, Layers3, Server, ToolCase, Wrench } from "lucide-react";

const techCategories = [
    {
        title: "Backend",
        icon: Server,
        technologies: [".NET", "ASP.NET Core", "C#", "Node.js", "Express", "REST APIs", "JWT", "WebSockets"],
    },
    {
        title: "Frontend",
        icon: Code,
        technologies: ["React", "Next.js", "AngularJS", "TypeScript", "Tailwind CSS", "TanStack Query", "Redux", "Zustand", "React Native"],
    },
    {
        title: "Bases de Datos",
        icon: Database,
        technologies: ["PostgreSQL", "MySQL", "MongoDB"],
    },
    {
        title: "ORMs y Acceso a Datos",
        icon: Layers3,
        technologies: ["Entity Framework", "Prisma"],
    },
    {
        title: "Cloud y DevOps",
        icon: Cloud,
        technologies: ["Docker", "Vercel", "Render"],
    },
    {
        title: "Testing",
        icon: Wrench,
        technologies: ["xUnit", "Moq", "Jest"],
    },
    {
        title: "Herramientas",
        icon: ToolCase,
        technologies: ["Git", "GitHub", "Postman"],
    },
    {
        title: "Arquitectura y Metodologías",
        icon: BookOpenText,
        technologies: ["Clean Architecture", "SOLID", "Scrum"],
    },
];

export function TechStack() {
    return (
        <section id="tech-stack" className="border-b border-stone-200 bg-white px-6 py-24 transition-colors duration-300 dark:border-stone-800 dark:bg-stone-900">
            <div className="mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-14 max-w-2xl"
                >
                    <p className="mb-3 text-sm font-medium uppercase tracking-[0.22em] text-teal-700 dark:text-teal-400">Stack</p>
                    <h2 className="text-4xl font-semibold tracking-normal text-stone-950 dark:text-stone-50 md:text-5xl">
                        Herramientas para convertir ideas en software.
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-stone-200 bg-stone-200 dark:border-stone-800 dark:bg-stone-800 md:grid-cols-2">
                    {techCategories.map((category, categoryIndex) => {
                        const Icon = category.icon;
                        return (
                            <motion.div
                                key={category.title}
                                initial={{ opacity: 0, y: 18 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: categoryIndex * 0.04 }}
                                className="bg-white p-6 transition-colors dark:bg-stone-900"
                            >
                                <div className="mb-5 flex items-center gap-3">
                                    <Icon className="h-5 w-5 text-teal-700 dark:text-teal-400" />
                                    <h3 className="text-lg font-semibold text-stone-950 dark:text-stone-100">
                                        {category.title}
                                    </h3>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {category.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="rounded-md bg-stone-100 px-3 py-1.5 text-sm text-stone-700 transition-colors dark:bg-stone-800 dark:text-stone-300"
                                        >
                                            {tech}
                                        </span>
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
