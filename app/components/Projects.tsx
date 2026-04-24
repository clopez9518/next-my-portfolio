'use client';

import { motion } from "motion/react";
import { ProjectCard } from "./custom/ProjectCard";


const projects = [
    {
        title: "E-commerce",
        description:
            "Tienda en línea con funcionalidades completas, integración de pagos, gestión de inventario y sistema avanzado de filtrado de productos.",
        image: "/assets/ecommerce2.png",
        tags: ["Next.js", "PayPal API", "Prisma", "Postgres", "Tailwind CSS"],
        liveUrl: "https://next-teslo-shop-bay-one.vercel.app/",
        githubUrl: "https://github.com/clopez9518/next-teslo-shop",
    },

    {
        title: "Movies Platform",
        description:
            "API RESTful construida en .NET bajo Clean Architecture, separando responsabilidades en capas de dominio, aplicación, infraestructura y presentación. Aplica principios SOLID, Dependency Injection y patrones orientados a bajo acoplamiento y alta cohesión. Incluye autenticación basada en JWT, manejo de perfiles de usuario, gestión de catálogo de películas, listas personalizadas y paginación eficiente. Diseñada como backend escalable para un frontend de streaming desarrollado en React.",
        image: "/assets/movies-platform.png",
        tags: [
            ".NET",
            "ASP.NET Core",
            "Entity Framework Core",
            "PostgreSQL",
            "JWT Auth",
            "React",
            "TanStack Query",
            "Tailwind CSS"
        ],
        liveUrl: "https://react-frontend-movies.vercel.app/",
        githubUrl: "https://github.com/clopez9518/dotnet-backend-movies",
    }
];

export function Projects() {
    return (
        <section id="projects" className="py-24 px-6 bg-slate-900">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        Proyectos Destacados
                    </h2>

                    <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
                        Una selección de mis trabajos recientes y proyectos personales.
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
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