import { Facebook, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react"
import {cn} from "@/lib/utils"
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { useState } from "react"
import { motion } from "framer-motion"
import { fadeIn } from "../framerMotion/variants"

export const ContactSection = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [success, setSuccess] = useState('')

    const handleName = (e)=>{
        setName(e.target.value)
    }
    const handleEmail = (e)=>{
        setEmail(e.target.value)
    }
    const handleMessage = (e)=>{
        setMessage(e.target.value)
    }

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_42dmt4i', 'template_dzf46sf', form.current, {
                publicKey: 'Id_1Lp6n7pfhyAMqA',
            })
            .then(
                () => {
                    setName('')
                    setEmail('')
                    setMessage('')
                    setSuccess('Message Sent!')
                },
                (error) => {
                console.log('FAILED...', error.text)
                },
            )
    }

    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <motion.h2 
                    variants={fadeIn('right', 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{once: false, amount: 0.4}}
                    className="text-5xl md:text-8xl lg:text-9xl tracking-tighter font-bold mb-12 text-left">
                    get in touch
                </motion.h2>
                <motion.p 
                    variants={fadeIn('up', 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{once: false, amount: 0.4}}
                    className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                        I'm open to opportunities and collaborations. If you’d like to work 
                        together or simply say hello, feel free to reach out via email or 
                        the form below.
                </motion.p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12"> {/* make column 2 for md */}
                    <motion.div 
                        variants={fadeIn('right', 0.2)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{once: false, amount: 0.4}}
                        className="space-y-8">
                            <h3 className="text-2xl font-semibold mb-6"> 
                                {" "}
                                Contact Information
                            </h3>
                            
                            <div className="space-y-6 justify-center">
                                <div className="flex items-center space-x-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                        <Mail className="h-6 w-6 text-primary"/>{" "}
                                    </div>
                                    <div>
                                        {/* <h4 className="font-medium">Email</h4> */}
                                        <a 
                                            href="mailto:raziel23jamito@gmail.com" 
                                            className="text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            raziel23jamito@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                        <Phone className="h-6 w-6 text-primary"/>{" "}
                                    </div>
                                    <div>
                                        {/* <h4 className="font-medium">Phone</h4> */}
                                        <a 
                                            href="tel:+639164102306" 
                                            className="text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            +63 916 410 2306
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                        <MapPin className="h-6 w-6 text-primary"/>{" "}
                                    </div>
                                    <div>
                                        {/* <h4 className="font-medium">Address</h4> */}
                                        <a  
                                            className="text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            Malolos City, Bulacan, Philippines
                                        </a>
                                    </div>
                                </div>
                            </div>

                        {/* <div className="pt-8">
                            <h4 className="font-medium mb-4">Connect With Me</h4>
                            <div className="flex space-x-4 justif-center">
                                <a>
                                    <Linkedin/>
                                </a>
                                <a>
                                    <Facebook/>
                                </a>
                            </div>
                        </div> */}

                    </motion.div>

                    <motion.div 
                        variants={fadeIn('left', 0.2)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{once: false, amount: 0.4}}
                        className="bg-primary p-8 rounded-lg shadow-xs text-primary-foreground">
                            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                            <form className="space-y-6" ref={form} onSubmit={sendEmail}>
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                                    <input 
                                        type="text" 
                                        id="name" 
                                        name="from_name"
                                        required 
                                        className="text-white w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" 
                                        placeholder="Juan Dela Cruz"
                                        value={name}
                                        onChange={handleName}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        name="from_email"
                                        required 
                                        className="text-white w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" 
                                        placeholder="juan@gmail.com"
                                        value={email}
                                        onChange={handleEmail}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                                    <textarea 
                                        id="message" 
                                        name="message"
                                        required 
                                        className="text-white h-30 w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none" 
                                        placeholder="Hi Raziel, I would like to..."
                                        value={message}
                                        onChange={handleMessage}
                                    />
                                </div>

                                <p className="">{success}</p>

                                <button 
                                    type="submit" 
                                    className={cn(
                                        "cosmic-button w-full flex items-center justify-center gap-2",
                                    )}
                                >
                                    Send
                                    <Send size={16}/>
                                </button>
                            </form>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}