"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ImageWithFallback } from "../figma/ImageWithFallBack";

type Project = {
    title: string;
    description: string;
    image: string;
    tags: string[];
    liveUrl: string;
    githubUrl: string;
};

export const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            className="group flex h-full flex-col overflow-hidden rounded-lg border border-stone-200 bg-white shadow-sm transition-colors hover:border-stone-300"
        >
            <div className="relative aspect-16/10 overflow-hidden bg-stone-100">
                <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    width={900}
                    height={560}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
            </div>

            <div className="flex flex-1 flex-col p-6">
                <h3 className="text-2xl font-semibold text-stone-950">
                    {project.title}
                </h3>

                <p className="mt-4 leading-7 text-stone-600">
                    {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="rounded-md border border-stone-200 bg-stone-50 px-2.5 py-1 text-xs font-medium text-stone-600"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="mt-auto flex gap-3 pt-8">
                    <Button
                        asChild
                        className="h-10 flex-1 rounded-lg bg-stone-950 text-white hover:bg-stone-800"
                    >
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Demo
                        </a>
                    </Button>

                    <Button
                        asChild
                        variant="outline"
                        className="h-10 flex-1 rounded-lg border-stone-300 bg-transparent text-stone-800 hover:bg-stone-50"
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
