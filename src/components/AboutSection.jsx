import { BookOpenText, Code2, Gamepad2 } from "lucide-react"
import { motion } from "framer-motion"
import { fadeIn } from "../framerMotion/variants"

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative bg-primary">
            <div className="container mx-auto max-w-5xl">
                <motion.h2 
                    variants={fadeIn('right', 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{once: false, amount: 0.4}}
                    className="size-3xl text-5xl md:text-8xl lg:text-9xl tracking-tighter font-bold mb-12 text-left text-primary-foreground">
                        about
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <motion.h3 
                            variants={fadeIn('left', 0.2)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{once: false, amount: 0.4}}
                            className="text-2xl font-semibold text-primary-foreground">
                                Aspiring Software & Web Developer
                        </motion.h3>

                        <motion.p 
                            variants={fadeIn('right', 0.2)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{once: false, amount: 0.4}}
                            className="text-primary-foreground">
                                A passionate BS in Information Technology graduate. 
                                Aim to use knowledge of software programming, web development, 
                                database management, and enterprise resource planning 
                                to provide efficient and reliable solutions to employers.
                        </motion.p>
                        <motion.div 
                            variants={fadeIn('up', 0.2)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{once: false, amount: 0.4}}
                            className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                                <a href="#contact" className="cosmic-button">
                                    {" "}
                                    Get In Touch
                                </a>
                                <a href=" " 
                                className="px-6 py-2 rounded-full border border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 transition-colors duration-300">
                                    Download CV
                                </a>
                        </motion.div>
                        
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <motion.div 
                            variants={fadeIn('left', 0.2)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{once: false, amount: 0.4}}
                            className="gradient-border p-6 card-hover">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-full bg-primary-foreground/10">
                                        <Code2 className="h-6 w-6 text-primary-foreground"/>
                                    </div>
                                    <div className="text-left text-primary-foreground">
                                        <h4 className="font-bold">Coding</h4>
                                        <p>
                                            Passionate about transforming ideas into digital solutions, 
                                            with a strong interest in solving problems through code and logical thinking.
                                        </p>
                                    </div>
                                </div>
                        </motion.div>
                        <motion.div 
                            variants={fadeIn('left', 0.2)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{once: false, amount: 0.4}}
                            className="gradient-border p-6 card-hover">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-full bg-primary-foreground/10">
                                        <BookOpenText className="h-6 w-6 text-primary-foreground"/>
                                    </div>
                                    <div className="text-left text-primary-foreground">
                                        <h4 className="font-bold">Reading</h4>
                                        <p>
                                            Avid reader with a curious mindset, constantly seeking new knowledge 
                                            and perspectives that enhance analytical and critical thinking skills.
                                        </p>
                                    </div>
                                </div>
                        </motion.div>
                        <motion.div 
                            variants={fadeIn('left', 0.2)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{once: false, amount: 0.4}}
                            className="gradient-border p-6 card-hover">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-full bg-primary-foreground/10">
                                        <Gamepad2 className="h-6 w-6 text-primary-foreground"/>
                                    </div>
                                    <div className="text-left text-primary-foreground">
                                        <h4 className="font-bold">Gaming</h4>
                                        <p>
                                            Influenced by cozy simulation games that emphasize planning, patience, 
                                            and continuous improvement, traits reflected in both personal and technical growth.
                                        </p>
                                    </div>
                                </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}