"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { CheckCircle2, ExternalLink, Github, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ImageWithFallback } from "../figma/ImageWithFallBack";
import type { Project } from "../Projects";

export const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            className="group flex h-full flex-col overflow-hidden rounded-xl border border-stone-200 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-stone-800 dark:bg-stone-900 dark:hover:border-stone-700"
        >
            <div className="relative aspect-16/10 overflow-hidden bg-stone-100 dark:bg-stone-950">
                <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    width={900}
                    height={560}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                {project.architectureBadge && (
                    <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-stone-950/85 px-3 py-1 text-xs font-medium text-teal-300 shadow-md backdrop-blur-md dark:border-stone-700/60 dark:bg-stone-900/90 dark:text-teal-400">
                        <Layers className="h-3 w-3" />
                        {project.architectureBadge}
                    </div>
                )}
            </div>

            <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-teal-700 dark:text-teal-400">
                    {project.category}
                </p>

                <h3 className="mt-1 text-2xl font-semibold text-stone-950 dark:text-stone-50">
                    {project.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-stone-600 dark:text-stone-300">
                    {project.description}
                </p>

                {project.highlights && project.highlights.length > 0 && (
                    <div className="mt-4 space-y-1.5 border-t border-stone-100 pt-3 dark:border-stone-800">
                        {project.highlights.map((item, i) => (
                            <div key={i} className="flex items-start gap-2 text-xs text-stone-600 dark:text-stone-400">
                                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-teal-700 dark:text-teal-400" />
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                )}

                <div className="mt-5 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="rounded-md border border-stone-200 bg-stone-50 px-2 py-0.5 text-[11px] font-medium text-stone-600 dark:border-stone-700/60 dark:bg-stone-800/80 dark:text-stone-300"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="mt-auto flex gap-3 pt-6">
                    <Button
                        asChild
                        className="h-10 flex-1 rounded-lg bg-stone-950 text-white hover:bg-stone-800 dark:bg-stone-100 dark:text-stone-950 dark:hover:bg-stone-200 cursor-pointer shadow-xs"
                    >
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Demo en vivo
                        </a>
                    </Button>

                    <Button
                        asChild
                        variant="outline"
                        className="h-10 flex-1 rounded-lg border-stone-300 bg-transparent text-stone-800 hover:bg-stone-50 dark:border-stone-700 dark:text-stone-200 dark:hover:bg-stone-800 cursor-pointer"
                    >
                        <Link
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Github className="mr-2 h-4 w-4" />
                            Código
                        </Link>
                    </Button>
                </div>
            </div>
        </motion.article>
    );
};
