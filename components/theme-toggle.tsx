"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <Button
                variant="outline"
                size="icon"
                className="h-9 w-9 rounded-lg border-stone-300 bg-white/80 dark:border-stone-700 dark:bg-stone-900"
                aria-label="Toggle theme"
            >
                <span className="h-4 w-4" />
            </Button>
        );
    }

    const isDark = resolvedTheme === "dark";

    return (
        <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="h-9 w-9 cursor-pointer rounded-lg border-stone-300 bg-white/80 text-stone-700 transition-colors hover:bg-stone-100 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-300 dark:hover:bg-stone-800"
            aria-label="Cambiar tema"
            title={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
        >
            {isDark ? (
                <Sun className="h-4 w-4 text-amber-400 transition-transform duration-300 rotate-0 hover:rotate-45" />
            ) : (
                <Moon className="h-4 w-4 text-stone-700 transition-transform duration-300 rotate-0 hover:-rotate-12" />
            )}
        </Button>
    );
}
