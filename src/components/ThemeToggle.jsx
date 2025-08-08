import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    /* Get the Saved Prefered Theme */
    useEffect(() => {
        const storedTheme = localStorage.getItem("theme")
        if (storedTheme === "dark") {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        } else {
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        }
    }, [])

    /* Toggle the Theme and Save in Local Storage */
    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    };

    /* Change the Theme Icon */
    return (
        <button 
            onClick={toggleTheme}
            className={cn(
                "flex items-center fixed max-sm:hidden z-50 p-2 rounded-full transition-colors duration-300", 
                "focus:outline-hidden")}
            > 
            {isDarkMode ? (
                <Sun className="flex items-center h-6 w-6 text-yellow-300" />
            ) : (
                <Moon className="flex items-center h-6 w-6 text-primary" />
            )} 
        </button>
    )
}