"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

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
                <div className="flex items-center gap-2">
                    <a
                        href="https://github.com/clopez9518"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-stone-300 text-stone-700 transition-colors hover:border-stone-950 hover:text-stone-950"
                        aria-label="Visitar GitHub"
                    >
                        <Github className="h-4 w-4" />
                    </a>
                    <a
                        href="https://linkedin.com/in/carloslopez9518"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-stone-300 text-stone-700 transition-colors hover:border-stone-950 hover:text-stone-950"
                        aria-label="Visitar LinkedIn"
                    >
                        <Linkedin className="h-4 w-4" />
                    </a>
                </div>
            </nav>

            <div className="mx-auto grid min-h-[calc(100vh-100px)] max-w-6xl grid-cols-1 gap-14 px-6 pb-16  md:grid-cols-[0.92fr_1.08fr] md:items-center md:pb-24">
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

                    <div className="mt-8 flex items-center gap-5 text-stone-500">
                        <a
                            href="https://github.com/clopez9518"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-colors hover:text-stone-950"
                            aria-label="GitHub"
                        >
                            <Github className="h-5 w-5" />
                        </a>
                        <a
                            href="https://linkedin.com/in/carloslopez9518"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-colors hover:text-stone-950"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="h-5 w-5" />
                        </a>
                        <button
                            onClick={() => scrollToSection("contact")}
                            className="cursor-pointer transition-colors hover:text-stone-950"
                            aria-label="Ir a contacto"
                        >
                            <Mail className="h-5 w-5" />
                        </button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 26, rotate: -1 }}
                    animate={{ opacity: 1, y: 0, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 0.12 }}
                    className="relative mx-auto w-full max-w-xl"
                >
                    <div className="absolute -inset-4 rotate-3 rounded-xl bg-teal-700/10" />
                    <div className="absolute -inset-7 -z-10 rounded-full bg-teal-700/10 blur-3xl" />

                    <div className="group relative overflow-hidden rounded-xl border border-stone-300 bg-stone-950 shadow-2xl shadow-stone-300/60 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-stone-400/60">
                        <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
                            <div className="flex items-center gap-2">
                                <span className="h-3 w-3 rounded-full bg-red-400" />
                                <span className="h-3 w-3 rounded-full bg-amber-400" />
                                <span className="h-3 w-3 rounded-full bg-teal-400" />
                            </div>
                            <span className="font-mono text-xs text-stone-400">developer.ts</span>
                        </div>

                        <pre className="overflow-hidden px-6 py-7 font-mono text-sm leading-7 text-stone-300 md:text-base md:leading-8">
                            <code>
                                <span className="text-stone-500">{"// Full-Stack Developer"}</span>{"\n"}
                                <span className="text-teal-300">const</span>{" "}
                                <span className="text-sky-300">developer</span>{" "}
                                <span className="text-stone-400">=</span>{" "}
                                <span className="text-amber-300">{"{"}</span>{"\n"}
                                {"  "}
                                <span className="text-purple-300">name</span>
                                <span className="text-stone-400">:</span>{" "}
                                <span className="text-emerald-300">{"'Carlos López'"}</span>
                                <span className="text-stone-400">,</span>{"\n"}
                                {"  "}
                                <span className="text-purple-300">stack</span>
                                <span className="text-stone-400">:</span>{" "}
                                <span className="text-stone-400">[</span>
                                <span className="text-emerald-300">{"'.NET'"}</span>
                                <span className="text-stone-400">, </span>
                                <span className="text-emerald-300">{"'React'"}</span>
                                <span className="text-stone-400">, </span>
                                <span className="text-emerald-300">{"'Next.js'"}</span>
                                <span className="text-stone-400">],</span>{"\n"}
                                {"  "}
                                <span className="text-purple-300">focus</span>
                                <span className="text-stone-400">:</span>{" "}
                                <span className="text-stone-400">[</span>
                                <span className="text-emerald-300">{"'Clean Architecture'"}</span>
                                <span className="text-stone-400">, </span>
                                <span className="text-emerald-300">{"'UI funcional'"}</span>
                                <span className="text-stone-400">],</span>{"\n"}
                                {"  "}
                                <span className="text-purple-300">building</span>
                                <span className="text-stone-400">:</span>{" "}
                                <span className="text-emerald-300">{"'Productos escalables'"}</span>
                                <span className="text-stone-400">,</span>{"\n"}
                                <span className="text-amber-300">{"}"}</span>
                                <span className="text-stone-400">;</span>
                            </code>
                        </pre>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
