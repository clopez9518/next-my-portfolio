"use client";

import { motion } from "motion/react";
import { ProjectCard } from "./custom/ProjectCard";

export type Project = {
    title: string;
    category: string;
    architectureBadge: string;
    description: string;
    highlights: string[];
    image: string;
    tags: string[];
    liveUrl: string;
    githubUrl: string;
};

const projects: Project[] = [
    {
        title: "AWS Quest",
        category: "Cloud Architecture & Learning",
        architectureBadge: "AWS Cloud + .NET Core API",
        description:
            "Plataforma interactiva para el aprendizaje y simulación de arquitectura cloud, guiando al usuario en la resolución de desafíos prácticos con servicios reales de AWS.",
        highlights: [
            "Diseño e integración de servicios AWS con backend en ASP.NET Core.",
            "Contenedorización en Docker y base de datos PostgreSQL.",
            "Frontend modular de alta respuesta en React y TypeScript.",
        ],
        image: "/assets/aws-quest.webp",
        tags: [
            "AWS",
            ".NET",
            "ASP.NET Core",
            "React",
            "TypeScript",
            "PostgreSQL",
            "Docker",
            "REST API",
        ],
        liveUrl: "https://aws-quest.vercel.app/",
        githubUrl: "https://github.com/clopez9518/aws-quest",
    },
    {
        title: "Movies Platform",
        category: "Streaming & High Performance",
        architectureBadge: "Clean Architecture + JWT",
        description:
            "Sistema de streaming con backend robusto en .NET aplicando Clean Architecture, autenticación JWT, perfiles, listas personalizadas y paginación optimizada.",
        highlights: [
            "Arquitectura en capas (Domain, Application, Infrastructure, API).",
            "Entity Framework Core con PostgreSQL y migraciones automatizadas.",
            "Frontend optimizado con TanStack Query y caché reactiva.",
        ],
        image: "/assets/movies-platform.webp",
        tags: [
            ".NET",
            "ASP.NET Core",
            "Clean Architecture",
            "PostgreSQL",
            "JWT Auth",
            "React",
            "TanStack Query",
            "Tailwind CSS",
        ],
        liveUrl: "https://react-frontend-movies.vercel.app/",
        githubUrl: "https://github.com/clopez9518/dotnet-backend-movies",
    },
    {
        title: "Teslo E-commerce",
        category: "Full-Stack Application",
        architectureBadge: "Next.js App Router + Prisma",
        description:
            "Tienda virtual completa con procesamiento internacional de pagos (PayPal), administración de catálogo, inventario en tiempo real y filtrado multicriterio.",
        highlights: [
            "Carrito persistente, checkout seguro y webhooks de pago.",
            "Modelado relacional eficiente con Prisma ORM y PostgreSQL.",
            "Server Components y Server Actions con Next.js.",
        ],
        image: "/assets/teslo-new-design.webp",
        tags: [
            "Next.js",
            "Prisma ORM",
            "PostgreSQL",
            "PayPal API",
            "Tailwind CSS",
            "TypeScript",
        ],
        liveUrl: "https://next-teslo-shop-bay-one.vercel.app/",
        githubUrl: "https://github.com/clopez9518/next-teslo-shop",
    },
];

export function Projects() {
    return (
        <section id="projects" className="border-b border-stone-200 bg-[#f7f6f1] px-6 py-24 transition-colors duration-300 dark:border-stone-800 dark:bg-stone-950">
            <div className="mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end"
                >
                    <div className="max-w-2xl">
                        <p className="mb-3 text-sm font-medium uppercase tracking-[0.22em] text-teal-700 dark:text-teal-400">Proyectos</p>
                        <h2 className="text-4xl font-semibold tracking-normal text-stone-950 dark:text-stone-50 md:text-5xl">
                            Selección de trabajos recientes.
                        </h2>
                    </div>
                    <p className="max-w-sm leading-7 text-stone-600 dark:text-stone-400">
                        Productos personales y técnicos donde combino frontend cuidado, backend robusto y decisiones de arquitectura claras.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.title}
                            project={project}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
