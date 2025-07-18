import { motion } from "framer-motion"
import { fadeIn } from "../framerMotion/variants"

const projects = [
    {
        title: "Census Management System for Barangay Balite",
        year: "2023",
        desc: "A comprehensive software application designed to efficiently and accurately facilitate the records of the inhabitants of barangay Balite, Malolos, Bulacan",
        align: "right",
        image: "/images/CensusSystem.jpg",
        link: "#",
    },{
        title: "Employee Payroll System",
        year: "2024",
        desc: "A simple project software application that allows the user to create payroll for their employees.",
        align: "left",
        image: "/images/PayrollSystem.jpg",
        link: "#",
    },
    {
        title: "Class Scheduling System for STI College Malolos",
        year: "right",
        desc: "A web-based scheduling system for STI College Malolos designed to help them avoid schedule conflicts and reduce time spent on scheduling classes",
        align: "left",
        image: "/images/SchedulingSystem.png",
        link: "#",
    },
]

export const ProjectsSection = () => {
    return (
        <section 
            id="projects"
            className="py-24 px-4 relative bg-secondary/30"
        >
            <div className="container mx-auto max-w-5xl">
                <motion.h2 
                    variants={fadeIn('left', 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{once: false, amount: 0.4}}
                    className="text-5xl md:text-8xl lg:text-9xl tracking-tighter font-bold mb-12 text-right">
                        projects
                </motion.h2>
                <motion.p 
                    variants={fadeIn('down', 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{once: false, amount: 0.4}}
                    className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                        Here are some of the projects I worked on during my time in college.
                </motion.p>
            </div>
        </section>
    )
}