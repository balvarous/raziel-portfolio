import { motion } from "framer-motion"
import { fadeIn } from "../framerMotion/variants"


export const ExperienceSection = () => {
    return (
        <section id="experience" className="py-24 px-4 relative rounded-tr-4xl rounded-bl-4xl bg-primary">
            <div className="container mx-auto max-w-5xl">
                <motion.h2 
                    variants={fadeIn('right', 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{once: false, amount: 0.4}}
                    className="size-3xl text-5xl md:text-8xl lg:text-9xl tracking-tighter font-bold mb-12 text-left text-primary-foreground">
                        experience
                </motion.h2>
                <div className="flex justify-center items-center">
                    <motion.div 
                        variants={fadeIn('left', 0.2)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{once: false, amount: 0.4}}
                        className="gradient-border lg:max-w-3xl p-0 rounded-xl overflow-hidden card-hover gap-6">
                            <div className="flex flex-col items-center sm:flex-row">
                                    <img 
                                        src="/images/CDSI.png" alt="" 
                                        className="object-cover w-full h-54 sm:w-full sm:max-h-auto"
                                    />
                                <div className="text-left text-primary-foreground p-4">
                                    <h4 className="font-bold">
                                        Creative Dynamix Solutions, Inc.
                                    </h4>
                                    <h4 className="font-semibold mb-4">
                                        2025
                                    </h4>
                                    <p>
                                        Completed a Software Developer internship at Creative Dynamix Solutions Inc., 
                                        assisting in the customization of Microsoft Dynamics 365 Finance and Operations 
                                        based on client requirements.
                                    </p>
                                </div>
                            </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}