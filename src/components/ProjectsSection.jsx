import { motion } from "framer-motion"
import { fadeIn } from "../framerMotion/variants"

const projects = [
    {
        title: "Census Management System for Barangay Balite",
        year: "2023",
        desc: "A software application designed to efficiently and accurately facilitate the records of the inhabitants of barangay Balite, Malolos, Bulacan",
        align: "left",
        image: "/images/CensusSystem.jpg",
        link: "#",
    },
    {
        title: "Employee Payroll System",
        year: "2024",
        desc: "A simple project software application that allows the user to create payroll for their employees.",
        align: "right",
        image: "/images/PayrollSystem.jpg",
        link: "#",
    },
    {
        title: "Class Scheduling System for STI College Malolos",
        year: "2025",
        desc: "A web-based scheduling system for STI College Malolos designed to help them avoid schedule conflicts and reduce time spent on scheduling classes.",
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
                    className="text-center text-muted-foreground mb-20 max-w-2xl mx-auto">
                        Here are some of the projects I worked on during my time in college.
                </motion.p>
                <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12 ">
                    {projects.map((project, key) => (
                        <motion.div
                            variants={fadeIn(`${project.align}`, 0.2)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{once: false, amount: 0.4}}
                            key={key}
                            className={`flex flex-col items-center gap-8 
                                ${project.align === "right" ? "md:flex-row" : "md:flex-row-reverse"
                            } `}
                        >
                            <div className="max-h-[220px] max-w-[400px] rounded-xl overflow-hidden hover:scale-110 transform transition-all duration-500 relative border border-primary-foreground">
                                {/* <div className="w-full h-full "></div> */}
                                <img src={project.image} alt="Project Image" className="w-full h-full"/>
                            </div>
                            <div>
                                <h2 className={`md:text-3xl sm:text-2xl sm:text-center font-bold 
                                    ${project.align === 'left' ? 'md:text-right' : 'md:text-left'}`}>{project.title}</h2>
                                <h2 className={`md:text-xl font-thin sm:text-center mb-3
                                    ${project.align === 'left' ? 'md:text-right' : 'md:text-left'}`}>{project.year}</h2>
                                <h3 className={`md:text-xl sm:text-md font-thin sm:text-center md:text-justify`}>{project.desc}</h3>
                            </div>
                            
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}