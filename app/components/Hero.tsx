"use client";

import { motion } from "motion/react";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Hero = () => {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="relative overflow-hidden border-b border-stone-200 bg-[#f7f6f1]">
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 text-sm text-stone-600">
                {/* <Link href="/" className="font-medium tracking-wide text-stone-950">
                    Carlos López
                </Link> */}
                <div className="hidden items-center gap-6 md:flex">
                    <button onClick={() => scrollToSection("experience")} className="cursor-pointer transition-colors hover:text-stone-950">Experiencia</button>
                    <button onClick={() => scrollToSection("projects")} className="cursor-pointer transition-colors hover:text-stone-950">Proyectos</button>
                    <button onClick={() => scrollToSection("contact")} className="cursor-pointer transition-colors hover:text-stone-950">Contacto</button>
                </div>
                <div className="h-9 w-29" aria-hidden="true" />
            </nav>

            <div className="mx-auto flex max-w-6xl justify-center px-6 pt-12 md:pt-16">
                <div className="flex items-center gap-6 text-stone-500">
                    <a
                        href="https://github.com/clopez9518"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-teal-700"
                        aria-label="GitHub"
                    >
                        <Github className="h-5 w-5" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/carlos-lópez-rodríguez-8b249424a"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-teal-700"
                        aria-label="LinkedIn"
                    >
                        <Linkedin className="h-5 w-5" />
                    </a>
                    <button
                        onClick={() => scrollToSection("contact")}
                        className="cursor-pointer transition-colors hover:text-teal-700"
                        aria-label="Ir a contacto"
                    >
                        <Mail className="h-5 w-5" />
                    </button>
                </div>
            </div>

            <div className="mx-auto grid min-h-[calc(100vh-300px)] max-w-6xl grid-cols-1 gap-14 px-6 pb-16 md:grid-cols-2 md:items-center md:pb-32 mb-30">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-xl"
                >
                    <p className="mb-5 text-sm font-medium tracking-wide text-teal-700">
                        Hola, soy
                    </p>
                    <h1 className="text-5xl font-semibold leading-[0.98] tracking-normal text-stone-950 md:text-7xl">
                        Carlos <span className="text-teal-700">López</span>
                    </h1>

                    <p className="mt-6 text-2xl font-light text-stone-700 md:text-3xl">
                        Full-Stack Developer
                    </p>

                    <p className="mt-7 max-w-lg text-lg leading-8 text-stone-600">
                        Construyo soluciones web elegantes para problemas complejos con .NET, React y Clean Architecture.
                    </p>

                    <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                        <Button
                            onClick={() => scrollToSection("contact")}
                            className="h-12 cursor-pointer rounded-lg bg-stone-950 px-6 text-white hover:bg-stone-800"
                        >
                            <Mail className="mr-2 h-4 w-4" />
                            Contáctame
                        </Button>
                        <Button
                            onClick={() => scrollToSection("projects")}
                            variant="outline"
                            className="h-12 cursor-pointer rounded-lg border-stone-300 bg-transparent px-6 text-stone-800 hover:bg-white"
                        >
                            Ver proyectos
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30, rotate: -1 }}
                    animate={{ opacity: 1, y: 0, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 0.12 }}
                    className="relative mx-auto w-full max-w-sm aspect-square md:max-w-md"
                >
                    {/* Efectos decorativos de fondo con el estilo original */}
                    <div className="absolute -inset-4 rotate-3 rounded-2xl bg-teal-700/10" />
                    <div className="absolute -inset-7 -z-10 rounded-full bg-teal-700/10 blur-3xl" />
                    <div className="absolute inset-0 -rotate-2 rounded-2xl border border-stone-300 bg-stone-100/50" />

                    {/* Contenedor principal de la foto en formato tarjeta */}
                    <div className="group relative h-full w-full overflow-hidden rounded-2xl border border-stone-300 bg-white p-3 shadow-2xl shadow-stone-300/60 transition-all duration-500 ease-out hover:-translate-y-2 hover:rotate-1 hover:shadow-stone-400/60">
                        <div className="relative h-full w-full overflow-hidden rounded-xl bg-stone-50">
                            <Image
                                src="/assets/profile-photo.webp"
                                alt="Carlos López"
                                fill
                                priority
                                sizes="(max-w-768px) 100vw, 50vw"
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>

                        {/* Badges/Etiquetas flotantes con animaciones sutiles */}
                        <motion.div
                            className="absolute -right-4 bottom-10 rounded-lg border border-stone-200 bg-white/95 px-4 py-2 shadow-lg backdrop-blur-sm select-none"
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                            <span className="text-xs font-semibold text-teal-700">🚀 Full-Stack Developer</span>
                        </motion.div>

                        <motion.div
                            className="absolute -left-4 top-10 rounded-lg border border-stone-200 bg-white/95 px-4 py-2 shadow-lg backdrop-blur-sm select-none"
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <span className="text-xs font-semibold text-stone-700">💻 .NET & React</span>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <div className="mb-15 flex h-10 w-6 items-start justify-center rounded-full border-2 border-teal-700 p-2">
                    <motion.div
                        className="h-1.5 w-1.5 rounded-full bg-teal-700"
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                </div>
            </motion.div>
        </section>
    );
};
