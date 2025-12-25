import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, MapPin, Clock, Send, MessageCircle, Zap } from 'lucide-react';
import { Button } from '../ui/Button';
import { portfolioData } from '../../data/portfolio';

const Contact = () => {
    const { email, linkedin, location, availability } = portfolioData.personalInfo;

    const contactMethods = [
        {
            icon: Mail,
            title: "Email",
            value: email,
            link: `mailto:${email}`,
            description: "Drop me a message anytime",
            color: "from-blue-500 to-cyan-500"
        },
        {
            icon: Linkedin,
            title: "LinkedIn",
            value: "Connect with me",
            link: linkedin,
            description: "Let's network professionally",
            color: "from-violet-500 to-purple-500"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
        },
    };

    return (
        <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-violet-500/5 pointer-events-none" />

            {/* Animated background elements */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[100px]"
            />
            <motion.div
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.1, 0.15, 0.1],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-violet-500/20 rounded-full blur-[100px]"
            />

            <div className="container relative">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {/* Section Header */}
                    <motion.div variants={itemVariants} className="text-center mb-16">
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 200 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-4"
                        >
                            <MessageCircle className="h-4 w-4" />
                            Let's Connect
                        </motion.div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                            Get in <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">Touch</span>
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: 80 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="h-1 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto rounded-full mt-4"
                        />
                    </motion.div>

                    {/* Contact Cards */}
                    <div className="max-w-3xl mx-auto">
                        <div className="grid sm:grid-cols-2 gap-6 mb-12">
                            {contactMethods.map((method, index) => (
                                <motion.a
                                    key={index}
                                    href={method.link}
                                    target={method.title === "LinkedIn" ? "_blank" : undefined}
                                    rel={method.title === "LinkedIn" ? "noopener noreferrer" : undefined}
                                    variants={itemVariants}
                                    whileHover={{ y: -8, scale: 1.02 }}
                                    className="group relative p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-sm hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
                                >
                                    {/* Glow effect */}
                                    <div className={`absolute inset-0 bg-gradient-to-r ${method.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 rounded-2xl`} />

                                    <div className="relative flex items-start gap-4">
                                        <motion.div
                                            whileHover={{ rotate: 10, scale: 1.1 }}
                                            className={`p-3 rounded-xl bg-gradient-to-r ${method.color} shadow-lg`}
                                        >
                                            <method.icon className="h-6 w-6 text-white" />
                                        </motion.div>
                                        <div>
                                            <h3 className="font-bold text-foreground text-lg mb-1">{method.title}</h3>
                                            <p className="text-muted-foreground text-sm mb-2">{method.description}</p>
                                            <span className="text-primary font-medium group-hover:underline">{method.value}</span>
                                        </div>
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                        {/* Info Bar */}
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-wrap justify-center gap-8 p-6 rounded-2xl bg-gradient-to-r from-primary/5 via-violet-500/5 to-primary/5 border border-white/5 backdrop-blur-sm"
                        >
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="flex items-center gap-3 text-muted-foreground"
                            >
                                <div className="p-2 rounded-lg bg-primary/10">
                                    <MapPin className="h-5 w-5 text-primary" />
                                </div>
                                <span>{location}</span>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="flex items-center gap-3 text-muted-foreground"
                            >
                                <div className="p-2 rounded-lg bg-emerald-500/10">
                                    <Zap className="h-5 w-5 text-emerald-500" />
                                </div>
                                <span>{availability}</span>
                            </motion.div>
                        </motion.div>

                        {/* CTA Button */}
                        <motion.div variants={itemVariants} className="text-center mt-12">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                                <Button
                                    size="lg"
                                    className="rounded-full px-10 h-14 text-base font-medium bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 shadow-lg shadow-primary/30 hover:shadow-primary/50 border-0"
                                    onClick={() => window.location.href = `mailto:${email}`}
                                >
                                    <Send className="mr-2 h-5 w-5" />
                                    Say Hello
                                </Button>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
