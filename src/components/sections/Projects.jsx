import React from 'react';
import { motion } from 'framer-motion';
import { Layers, ArrowUpRight, Sparkles } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';

const Projects = () => {
    const { projects } = portfolioData;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
        },
    };

    return (
        <section id="projects" className="py-20 md:py-32 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/5 to-transparent pointer-events-none" />

            {/* Floating decorative elements */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/4 right-10 w-32 h-32 border border-white/5 rounded-full"
            />
            <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-1/4 left-10 w-48 h-48 border border-white/5 rounded-full"
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
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-500/20 text-violet-400 text-sm font-medium mb-4"
                        >
                            <Sparkles className="h-4 w-4" />
                            Featured Work
                        </motion.div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                            Featured <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">Projects</span>
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                            Impactful solutions I've built across different domains
                        </p>
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: 80 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="h-1 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto rounded-full mt-4"
                        />
                    </motion.div>

                    {/* Projects Grid */}
                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                variants={itemVariants}
                                whileHover={{ y: -10, scale: 1.02 }}
                                className="group relative"
                            >
                                {/* Glow effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-violet-500/20 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500 rounded-2xl" />

                                <div className="relative h-full p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-sm group-hover:border-primary/30 group-hover:shadow-2xl group-hover:shadow-primary/10 transition-all duration-500 overflow-hidden">
                                    {/* Background pattern */}
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_-20%,rgba(120,119,198,0.1),transparent_50%)]" />

                                    <div className="relative">
                                        {/* Icon with animation */}
                                        <motion.div
                                            whileHover={{ rotate: 10, scale: 1.1 }}
                                            className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-violet-500 mb-6 shadow-lg shadow-primary/25"
                                        >
                                            <Layers className="h-7 w-7 text-white" />
                                        </motion.div>

                                        {/* Title with hover arrow */}
                                        <div className="flex items-start justify-between gap-4 mb-4">
                                            <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                                                {project.title}
                                            </h3>
                                            <motion.div
                                                initial={{ opacity: 0, x: -10 }}
                                                whileHover={{ opacity: 1, x: 0 }}
                                                className="opacity-0 group-hover:opacity-100 transition-opacity"
                                            >
                                                <ArrowUpRight className="h-6 w-6 text-primary" />
                                            </motion.div>
                                        </div>

                                        {/* Description */}
                                        <p className="text-muted-foreground leading-relaxed mb-6">{project.description}</p>

                                        {/* Tech Stack with animations */}
                                        <div className="flex flex-wrap gap-2">
                                            {project.techStack.map((tech, i) => (
                                                <motion.span
                                                    key={i}
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: i * 0.05 }}
                                                    whileHover={{ scale: 1.1, y: -2 }}
                                                    className="px-3 py-1.5 text-xs font-medium rounded-full bg-gradient-to-r from-primary/10 to-violet-500/10 text-primary border border-primary/20 hover:border-primary/40 transition-all cursor-default"
                                                >
                                                    {tech}
                                                </motion.span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
