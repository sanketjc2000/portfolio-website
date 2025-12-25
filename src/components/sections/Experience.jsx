import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, ChevronRight } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';

const Experience = () => {
    const { experience } = portfolioData;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
        },
    };

    return (
        <section id="experience" className="py-20 md:py-32 relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-violet-500/5 via-transparent to-blue-500/5 pointer-events-none" />

            <div className="container relative">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {/* Section Header */}
                    <motion.div variants={itemVariants} className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                            Work <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">Experience</span>
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                            My professional journey building scalable backend systems
                        </p>
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: 80 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="h-1 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto rounded-full mt-4"
                        />
                    </motion.div>

                    {/* Timeline */}
                    <div className="max-w-4xl mx-auto">
                        {experience.map((job, index) => (
                            <motion.div
                                key={job.id}
                                variants={itemVariants}
                                className="relative pl-8 md:pl-12 pb-12 last:pb-0 group"
                            >
                                {/* Timeline line with gradient */}
                                <div className="absolute left-0 md:left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-primary/20" />

                                {/* Animated timeline dot */}
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                                    className="absolute left-0 md:left-4 top-2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary ring-4 ring-background shadow-lg shadow-primary/50"
                                />

                                {/* Card */}
                                <motion.div
                                    whileHover={{ x: 10, scale: 1.01 }}
                                    transition={{ duration: 0.3 }}
                                    className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-sm hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
                                >
                                    {/* Header */}
                                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                                        <div>
                                            <motion.h3
                                                className="text-xl md:text-2xl font-bold text-foreground"
                                                whileHover={{ color: "hsl(var(--primary))" }}
                                            >
                                                {job.role}
                                            </motion.h3>
                                            <div className="flex items-center gap-2 mt-2">
                                                <Briefcase className="h-4 w-4 text-primary" />
                                                <span className="text-primary font-medium">{job.company}</span>
                                            </div>
                                        </div>
                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-violet-500/10 text-primary text-sm font-medium border border-primary/20"
                                        >
                                            <Calendar className="h-4 w-4" />
                                            <span>{job.duration}</span>
                                        </motion.div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-muted-foreground mb-6">{job.description}</p>

                                    {/* Achievements */}
                                    <ul className="space-y-3">
                                        {job.achievements.map((achievement, i) => (
                                            <motion.li
                                                key={i}
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: i * 0.1 }}
                                                className="flex items-start gap-3 text-sm text-foreground/80 group/item"
                                            >
                                                <motion.span
                                                    whileHover={{ scale: 1.2, rotate: 90 }}
                                                    className="mt-1 flex-shrink-0"
                                                >
                                                    <ChevronRight className="h-4 w-4 text-primary" />
                                                </motion.span>
                                                <span className="group-hover/item:text-foreground transition-colors">{achievement}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
