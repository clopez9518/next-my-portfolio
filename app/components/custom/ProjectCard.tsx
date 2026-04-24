'use client';

import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ImageWithFallback } from "../figma/ImageWithFallBack";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

type Project = {
    title: string;
    description: string;
    image: string;
    tags: string[];
    liveUrl: string;
    githubUrl: string;
};

export const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
    const [expanded, setExpanded] = useState(false);
    const [showButton, setShowButton] = useState(false);
    const textRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        const checkTruncation = () => {
            if (textRef.current && !expanded) {
                setShowButton(textRef.current.scrollHeight > textRef.current.clientHeight);
            }
        };

        checkTruncation();
        window.addEventListener('resize', checkTruncation);
        return () => window.removeEventListener('resize', checkTruncation);
    }, [expanded, project.description]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group"
        >
            <motion.div
                className="flex flex-col min-h-[650px] bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/10 rounded-2xl overflow-hidden hover:border-cyan-500/30 transition-all shadow-xl hover:shadow-cyan-500/10"
            >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-60" />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-2xl font-semibold mb-3 text-white">
                        {project.title}
                    </h3>

                    {/* Description */}
                    <motion.div className="mb-2">
                        <p
                            ref={textRef}
                            className={`text-gray-400 leading-relaxed ${expanded ? "" : "line-clamp-4"
                                }`}
                        >
                            {project.description}
                        </p>
                    </motion.div>

                    {/* Ver más / menos */}
                    {showButton && (
                        <button
                            onClick={() => setExpanded(!expanded)}
                            className="text-cyan-400 text-sm mb-4 hover:underline self-start"
                        >
                            {expanded ? "Ver menos" : "Ver más"}
                        </button>
                    )}

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag, i) => (
                            <span
                                key={i}
                                className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-sm text-cyan-300"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-3 mt-auto">
                        <Button
                            asChild
                            className="flex-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/30 hover:to-blue-500/30 text-cyan-300 border border-cyan-500/30 hover:border-cyan-500/50 rounded-xl transition-all"
                        >
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <ExternalLink className="w-4 h-4 mr-2" />
                                Live Demo
                            </a>
                        </Button>

                        <Button
                            asChild
                            variant="outline"
                            className="flex-1 border-gray-600 hover:border-cyan-500/50 hover:text-cyan-300 rounded-xl transition-all"
                        >
                            <Link
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Github className="w-4 h-4 mr-2" />
                                GitHub
                            </Link>
                        </Button>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}