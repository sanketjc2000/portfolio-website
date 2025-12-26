import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, ArrowDown, Sparkles } from 'lucide-react';
import { Button } from '../ui/Button';
import { portfolioData } from '../../data/portfolio';

const Hero = () => {
    const { name, role, summary, email, linkedin } = portfolioData.personalInfo;

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
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
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:60px_60px]" />

                {/* Animated gradient orbs */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px]"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-violet-500/20 rounded-full blur-[100px]"
                />
                <motion.div
                    animate={{
                        x: [0, 50, 0],
                        y: [0, -30, 0],
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-[80px]"
                />
            </div>

            <div className="container relative z-10 py-20 md:py-32">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16 max-w-6xl mx-auto"
                >
                    {/* Left Content */}
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 flex-1">
                        {/* Badge */}
                        <motion.div
                            variants={itemVariants}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-violet-500/10 border border-primary/20 text-primary text-sm font-medium backdrop-blur-sm"
                        >
                            <motion.span
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="relative flex h-2 w-2"
                            >
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </motion.span>
                            <Sparkles className="h-3.5 w-3.5" />
                            Available for opportunities
                        </motion.div>

                        {/* Name and Role */}
                        <motion.div variants={itemVariants} className="space-y-4">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                                <span className="block text-foreground mb-2">Hi, I'm {name}</span>
                                <motion.span
                                    className="block bg-gradient-to-r from-blue-500 via-violet-500 to-purple-500 bg-clip-text text-transparent bg-[length:200%_auto]"
                                    animate={{ backgroundPosition: ["0% center", "200% center"] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                >
                                    {role}
                                </motion.span>
                            </h1>
                        </motion.div>

                        {/* Summary */}
                        <motion.p
                            variants={itemVariants}
                            className="max-w-xl text-lg md:text-xl text-muted-foreground leading-relaxed"
                        >
                            {summary}
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div variants={itemVariants} className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                                <Button
                                    size="lg"
                                    className="rounded-full px-8 h-14 text-base font-medium bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 shadow-lg shadow-primary/30 hover:shadow-primary/50 border-0"
                                    onClick={() => window.location.href = `mailto:${email}`}
                                >
                                    <Mail className="mr-2 h-5 w-5" />
                                    Get in Touch
                                </Button>
                            </motion.div>

                            <motion.div whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.95 }}>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="rounded-full h-14 w-14 border border-white/20 hover:bg-white/10 hover:border-primary/50"
                                    asChild
                                >
                                    <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                                        <Linkedin className="h-6 w-6" />
                                    </a>
                                </Button>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Right - Profile Image */}
                    <motion.div
                        variants={itemVariants}
                        className="relative group flex-shrink-0"
                    >
                        {/* Animated gradient ring */}
                        <motion.div
                            className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-violet-500 to-purple-500 rounded-full blur-md opacity-75 group-hover:opacity-100 transition duration-500"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        />
                        {/* Glow effect */}
                        <motion.div
                            className="absolute -inset-8 bg-gradient-to-r from-blue-500/30 to-violet-500/30 rounded-full blur-2xl"
                            animate={{
                                scale: [1, 1.1, 1],
                                opacity: [0.5, 0.8, 0.5],
                            }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        />
                        {/* Profile image container - BIGGER SIZE */}
                        <motion.div
                            className="relative w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-full overflow-hidden border-4 border-background shadow-2xl"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <img
                                src={`${process.env.PUBLIC_URL}/profile.png`}
                                alt={name}
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="flex flex-col items-center gap-2 text-muted-foreground cursor-pointer hover:text-primary transition-colors"
                        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        <span className="text-xs uppercase tracking-[0.2em] font-medium">Scroll</span>
                        <motion.div
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <ArrowDown className="h-4 w-4" />
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
