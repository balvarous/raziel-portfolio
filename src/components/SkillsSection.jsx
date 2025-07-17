import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava, FaPython, FaPhp, FaGithub } from "react-icons/fa"
import { RiTailwindCssFill } from "react-icons/ri"
import { SiCplusplus, SiMysql } from "react-icons/si"
import { VscVscode } from "react-icons/vsc"
import { motion } from "framer-motion"
import { fadeIn } from "../framerMotion/variants"

const skills = [
    {
        name: "HTML",
        icon: FaHtml5,
        category: "frontend"
    },
    {
        name: "CSS",
        icon: FaCss3Alt,
        category: "frontend"
    },
    {
        name: "JavaScript",
        icon: FaJs,
        category: "frontend"
    },
    {
        name: "React",
        icon: FaReact,
        category: "frontend"
    },
    {
        name: "Tailwind CSS",
        icon: RiTailwindCssFill,
        category: "frontend"
    },
    {
        name: "Java",
        icon: FaJava,
        category: "backend"
    },
    {
        name: "Python",
        icon: FaPython,
        category: "backend"
    },
    {
        name: "C++",
        icon: SiCplusplus,
        category: "backend"
    },
    {
        name: "PHP",
        icon: FaPhp,
        category: "backend"
    },
    {
        name: "GitHub",
        icon: FaGithub,
        category: "tools"
    },
    {
        name: "VS Code",
        icon: VscVscode,
        category: "tools"
    },
    {
        name: "MySQL",
        icon: SiMysql,
        category: "database"
    },
]

export const SkillsSection = () => {
    return (
        <section 
            id="skills" 
            className="py-24 px-4 relative bg-secondary/30"
        >
            <div className="container mx-auto max-w-5xl">
                <motion.h2 
                    variants={fadeIn('left', 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{once: false, amount: 0.4}}
                    className="text-5xl md:text-8xl lg:text-9xl tracking-tighter font-bold mb-12 text-right">
                        skills
                </motion.h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-primary-foreground">
                    {skills.map((skill, key) => (
                        <motion.div 
                            variants={fadeIn('right', 0.2)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{once: false, amount: 0.99}}
                            key={key} 
                            className="flex justify-between items-center gap-4 bg-card-back p-3 rounded-full shadow-xs card-hover"
                        >
                            <div>
                                <skill.icon className="h-9 w-9"/>
                            </div>
                            <div className="flex justify-center gap-4 w-full bg-card rounded-full m-0 p-3">
                                <h3 className="font-semibold"> {skill.name} </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}