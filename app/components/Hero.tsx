'use client';

import { motion } from "motion/react";
import { ArrowRight, Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";


export const Hero = () => {

    const texts = [
        "Fullstack Developer .NET & React",
        "Clean Architecture & SOLID",
        "Building Scalable Web Applications"
    ];
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(100);

    useEffect(() => {
        const currentText = texts[currentTextIndex];

        if (!isDeleting) {
            if (displayedText.length < currentText.length) {
                const timeout = setTimeout(() => {
                    setDisplayedText(currentText.slice(0, displayedText.length + 1));
                }, typingSpeed);
                return () => clearTimeout(timeout);
            } else {
                const timeout = setTimeout(() => {
                    setIsDeleting(true);
                    setTypingSpeed(50);
                }, 2000);
                return () => clearTimeout(timeout);
            }
        } else {

            if (displayedText.length > 0) {
                const timeout = setTimeout(() => {
                    setDisplayedText(currentText.slice(0, displayedText.length - 1));
                }, typingSpeed);
                return () => clearTimeout(timeout);
            } else {
                setIsDeleting(false);
                setTypingSpeed(100);
                setCurrentTextIndex((prev) => (prev + 1) % texts.length);
            }
        }
    }, [displayedText, isDeleting, currentTextIndex, texts, typingSpeed]);


    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0f172a]">
            {/* Geometric Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-cyan-500/10 rounded-full" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-blue-500/5 rounded-full" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <a
                            href="https://github.com/clopez9518"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-cyan-400 transition-colors"
                            aria-label="Visitar mi GitHub"
                        >
                            <Github className="w-5 h-5" />
                        </a>
                        {/* <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-cyan-400 transition-colors"
                            aria-label="Visitar mi LinkedIn"
                        >
                            <Linkedin className="w-5 h-5" />
                        </a> */}
                        <button
                            onClick={() => scrollToSection("contact")}
                            className="text-gray-400 hover:text-cyan-400 transition-colors"
                        >
                            <Mail className="w-5 h-5" />
                        </button>
                    </div>

                    <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent">
                        Carlos López
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-300 mb-4">
                        <span className="text-4xl text-white font-medium">
                            {displayedText}
                            <span className="animate-pulse">|</span>
                        </span>
                    </p>

                    <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
                        Desarrollando soluciones elegantes para problemas complejos con tecnologías web modernas.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button
                            onClick={() => scrollToSection("projects")}
                            className="cursor-pointer bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-6 rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all"
                        >
                            Ver proyectos
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                        <Button
                            onClick={() => scrollToSection("contact")}
                            variant="outline"
                            className="cursor-pointer border-2 border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500 px-8 py-6 rounded-xl transition-all"
                        >
                            Contactame
                        </Button>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <div className="w-6 h-10 border-2 border-cyan-500/30 rounded-full flex items-start justify-center p-2">
                    <motion.div
                        className="w-1.5 h-1.5 bg-cyan-400 rounded-full"
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                </div>
            </motion.div>
        </section>
    );
}