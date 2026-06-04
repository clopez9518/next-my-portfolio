"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { Loader2, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export const Contact = () => {
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            toast.error("Todos los campos son obligatorios");
            return;
        }

        setLoading(true);
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            await res.json();

            if (!res.ok) {
                if (res.status === 429) {
                    toast.error("Demasiados intentos. Intenta luego.", {
                        richColors: true,
                        closeButton: true,
                        position: "top-center",
                    });
                    return;
                }
                throw new Error();
            }

            toast.success("Mensaje enviado", {
                description: "Te contactaré pronto.",
                richColors: true,
                closeButton: true,
                position: "top-center",
            });
            setFormData({ name: "", email: "", message: "" });
        } catch {
            toast.error("Error al enviar", {
                description: "Intenta nuevamente.",
                richColors: true,
                closeButton: true,
                position: "top-center",
            });
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <section id="contact" className="bg-stone-950 px-6 py-24 text-white">
            <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.8fr_1.2fr] md:items-start">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <Mail className="mb-6 h-7 w-7 text-teal-300" />
                    <p className="mb-3 text-sm font-medium uppercase tracking-[0.22em] text-teal-300">Contacto</p>
                    <h2 className="text-4xl font-semibold tracking-normal md:text-5xl">
                        Hablemos de tu próximo proyecto.
                    </h2>
                    <p className="mt-6 max-w-md leading-8 text-stone-300">
                        Estoy abierto a nuevas oportunidades, colaboraciones y conversaciones técnicas con intención real de construir algo bien hecho.
                    </p>
                </motion.div>

                <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.12 }}
                    className="rounded-lg border border-white/10 bg-white/[0.04] p-6"
                >
                    <div className="space-y-5">
                        <div>
                            <label
                                htmlFor="name"
                                className="mb-2 block text-sm font-medium text-stone-200"
                            >
                                Nombre
                            </label>
                            <Input
                                id="name"
                                name="name"
                                type="text"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Tu nombre"
                                className="h-12 rounded-lg border-white/10 bg-white/[0.06] text-white placeholder:text-stone-500 focus-visible:ring-teal-300"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="email"
                                className="mb-2 block text-sm font-medium text-stone-200"
                            >
                                Email
                            </label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="example@gmail.com"
                                className="h-12 rounded-lg border-white/10 bg-white/[0.06] text-white placeholder:text-stone-500 focus-visible:ring-teal-300"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="message"
                                className="mb-2 block text-sm font-medium text-stone-200"
                            >
                                Mensaje
                            </label>
                            <Textarea
                                id="message"
                                name="message"
                                required
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Cuéntame sobre tu proyecto..."
                                rows={6}
                                className="resize-none rounded-lg border-white/10 bg-white/[0.06] text-white placeholder:text-stone-500 focus-visible:ring-teal-300"
                            />
                        </div>

                        <Button
                            type="submit"
                            className="h-12 w-full cursor-pointer rounded-lg bg-white text-stone-950 hover:bg-stone-200"
                            disabled={loading}
                        >
                            {loading ? (
                                <>
                                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                    Enviando...
                                </>
                            ) : (
                                <>
                                    <Send className="mr-2 h-5 w-5" />
                                    Enviar mensaje
                                </>
                            )}
                        </Button>
                    </div>
                </motion.form>
            </div>
        </section>
    );
};
