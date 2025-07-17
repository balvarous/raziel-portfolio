import { ArrowDown } from "lucide-react"
import { motion } from "framer-motion"
import { fadeIn } from "../framerMotion/variants"

export const HeroSection = () => {
    return (
        <section 
            id="hero" 
            className="relative min-h-screen flex flex-col items-center justify-center px-4"
        >
            <div className="container max-w-9xl mx-auto text-center z-10 space-y-6 pt-8">
                <motion.div 
                    variants={fadeIn('down', 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{once: false, amount: 0}}>
                        <img src="src/images/TitleCard.png" alt="Title" className="w-full h-auto rounded-4xl"/>
                </motion.div>
                <motion.div
                    variants={fadeIn('up', 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{once: false, amount: 0}}>
                        <a href="projects" className="cosmic-button">
                            View My Work
                        </a>
                </motion.div>
            </div>

            {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
                <ArrowDown className="h-5 w-5 text-primary" />
            </div> */}
        </section>
    )
}