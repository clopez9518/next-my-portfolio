"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Briefcase, Code2, Github, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallBack";

const experienceHighlights = [
    {
        icon: Briefcase,
        value: "+1 año",
        label: "experiencia fullstack",
    },
    {
        icon: Code2,
        value: "Legacy",
        label: "migración a web moderna",
    },
    {
        icon: Sparkles,
        value: "3",
        label: "proyectos destacados",
    },
];

export const Hero = () => {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="relative overflow-hidden border-b border-stone-200 bg-[#f7f6f1]">
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 text-sm text-stone-600">
                <Link href="/" className="font-medium tracking-wide text-stone-950">
                    Carlos López
                </Link>
                <div className="hidden items-center gap-6 md:flex">
                    <button onClick={() => scrollToSection("experience")} className="cursor-pointer transition-colors hover:text-stone-950">Experiencia</button>
                    <button onClick={() => scrollToSection("projects")} className="cursor-pointer transition-colors hover:text-stone-950">Proyectos</button>
                    <button onClick={() => scrollToSection("contact")} className="cursor-pointer transition-colors hover:text-stone-950">Contacto</button>
                </div>
                <a
                    href="https://github.com/clopez9518"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-stone-300 text-stone-700 transition-colors hover:border-stone-950 hover:text-stone-950"
                    aria-label="Visitar GitHub"
                >
                    <Github className="h-4 w-4" />
                </a>
            </nav>

            <div className="mx-auto grid min-h-[calc(100vh-88px)] max-w-6xl grid-cols-1 gap-12 px-6 pb-14 pt-10 md:grid-cols-[0.95fr_1.05fr] md:items-center md:pb-20 md:pt-14">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-2xl"
                >
                    <p className="mb-6 text-sm font-medium uppercase tracking-[0.24em] text-teal-700">
                        Fullstack Developer
                    </p>
                    <h1 className="text-5xl font-semibold leading-[1.03] tracking-normal text-stone-950 md:text-6xl">
                        .NET & React para productos escalables.
                    </h1>

                    <p className="mt-7 max-w-xl text-lg leading-8 text-stone-600">
                        Soy Carlos López. Diseño y desarrollo aplicaciones web con arquitectura limpia, interfaces sobrias y bases técnicas preparadas para crecer.
                    </p>

                    <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                        <Button
                            onClick={() => scrollToSection("projects")}
                            className="h-12 cursor-pointer rounded-lg bg-stone-950 px-6 text-white hover:bg-stone-800"
                        >
                            Ver proyectos
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        <Button
                            onClick={() => scrollToSection("contact")}
                            variant="outline"
                            className="h-12 cursor-pointer rounded-lg border-stone-300 bg-transparent px-6 text-stone-800 hover:bg-white"
                        >
                            <Mail className="mr-2 h-4 w-4" />
                            Contáctame
                        </Button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.15 }}
                    className="relative"
                >
                    <div className="overflow-hidden rounded-lg border border-stone-200 bg-white shadow-sm">
                        <div className="flex items-center justify-between border-b border-stone-200 px-4 py-3">
                            <div>
                                <p className="text-sm font-medium text-stone-950">Project preview</p>
                                <p className="text-xs text-stone-500">Next.js / Prisma / PayPal</p>
                            </div>
                            <span className="rounded-md bg-teal-50 px-2.5 py-1 text-xs font-medium text-teal-800">
                                Live
                            </span>
                        </div>

                        <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                            <ImageWithFallback
                                src="/assets/teslo-new-design.webp"
                                alt="Preview del proyecto E-commerce"
                                width={1000}
                                height={625}
                                priority
                                className="h-full w-full object-cover"
                            />
                        </div>

                        <div className="grid grid-cols-1 divide-y divide-stone-200 md:grid-cols-3 md:divide-x md:divide-y-0">
                            {experienceHighlights.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <div key={item.label} className="p-4">
                                        <Icon className="mb-3 h-4 w-4 text-teal-700" />
                                        <p className="text-xl font-semibold text-stone-950">{item.value}</p>
                                        <p className="mt-1 text-sm leading-5 text-stone-500">{item.label}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="absolute -bottom-5 right-5 hidden rounded-lg border border-stone-200 bg-[#f7f6f1] px-4 py-3 shadow-sm md:block">
                        <p className="text-xs uppercase tracking-[0.18em] text-stone-500">Especialidad</p>
                        <p className="mt-1 font-medium text-stone-950">Clean Architecture + UI funcional</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
