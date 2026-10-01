"use client";

import { motion } from "motion/react";
import { ProjectCard } from "./custom/ProjectCard";

const projects = [
    {
        title: "AWS Quest",
        description:
            "AWS Quest es una plataforma interactiva para aprender arquitectura cloud resolviendo desafíos prácticos con servicios de AWS y desarrollando habilidades de diseño.",
        image: "/assets/aws-quest.webp",
        tags: [
            "AWS",
            "AWS Architecture",
            "React",
            "TypeScript",
            ".NET",
            "ASP.NET Core",
            "PostgreSQL",
            "Docker",
            "REST API",
            "Cloud Computing",
        ],
        liveUrl: "https://aws-quest.vercel.app/",
        githubUrl: "https://github.com/clopez9518/aws-quest",
    },
    {
        title: "Movies Platform",
        description:
            "Backend escalable en .NET con Clean Architecture, JWT, perfiles de usuario, catálogo de películas, listas personalizadas y paginación eficiente para un frontend de streaming en React.",
        image: "/assets/movies-platform.webp",
        tags: [
            ".NET",
            "ASP.NET Core",
            "Entity Framework Core",
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
        title: "E-commerce",
        description:
            "Tienda en línea con pagos, gestión de inventario y filtrado avanzado de productos. Una experiencia de compra construida con Next.js y foco en flujo completo.",
        image: "/assets/teslo-new-design.webp",
        tags: ["Next.js", "PayPal API", "Prisma", "Postgres", "Tailwind CSS"],
        liveUrl: "https://next-teslo-shop-bay-one.vercel.app/",
        githubUrl: "https://github.com/clopez9518/next-teslo-shop",
    },
    // {
    //     title: "Dota Random",
    //     description:
    //         "Aplicación web para generar héroes aleatorios de Dota 2 por posición. Permite personalizar el grupo de héroes por rol con una interfaz moderna y responsive.",
    //     image: "/assets/dota-random.webp",
    //     tags: ["React", "Shadcn", "Tailwind CSS", "Motion"],
    //     liveUrl: "https://react-dota-random.vercel.app/",
    //     githubUrl: "https://github.com/clopez9518/react-dota-random",
    // },
];

export function Projects() {
    return (
        <section id="projects" className="border-b border-stone-200 bg-[#f7f6f1] px-6 py-24">
            <div className="mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end"
                >
                    <div className="max-w-2xl">
                        <p className="mb-3 text-sm font-medium uppercase tracking-[0.22em] text-teal-700">Proyectos</p>
                        <h2 className="text-4xl font-semibold tracking-normal text-stone-950 md:text-5xl">
                            Selección de trabajos recientes.
                        </h2>
                    </div>
                    <p className="max-w-sm leading-7 text-stone-600">
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
