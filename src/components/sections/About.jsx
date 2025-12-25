import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cloud, Database, Sparkles, Zap, Shield } from 'lucide-react';

const About = () => {
    const highlights = [
        { icon: Code, label: "3.6+ Years", desc: "Backend Development", color: "from-blue-500 to-cyan-500" },
        { icon: Cloud, label: "AWS & Azure", desc: "Cloud Expertise", color: "from-violet-500 to-purple-500" },
        { icon: Database, label: "Scalable", desc: "System Design", color: "from-emerald-500 to-teal-500" },
        { icon: Sparkles, label: "AI Integration", desc: "Modern Solutions", color: "from-orange-500 to-pink-500" },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <section id="about" className="py-20 md:py-32 relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent pointer-events-none" />

            <div className="container relative">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="max-w-5xl mx-auto"
                >
                    {/* Section Header */}
                    <motion.div variants={itemVariants} className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                            About <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">Me</span>
                        </h2>
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: 80 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="h-1 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto rounded-full"
                        />
                    </motion.div>

                    {/* Content */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Text */}
                        <motion.div variants={itemVariants} className="space-y-6 text-center lg:text-left">
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                I specialize in backend development using <span className="text-foreground font-semibold">Node.js (Express/Nest)</span>,
                                designing secure APIs, cloud-native architectures, and integrating
                                third-party and AI-driven solutions.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                I've worked across <span className="text-foreground font-semibold">supply chain, talent acquisition, and healthcare</span> domains,
                                delivering reliable and scalable systems.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                I enjoy solving complex problems, applying clean architecture, and
                                building systems that <span className="text-foreground font-semibold">scale with business needs</span>.
                            </p>

                            {/* Quick stats */}
                            <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-4">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="flex items-center gap-2"
                                >
                                    <Zap className="h-5 w-5 text-yellow-500" />
                                    <span className="text-sm text-muted-foreground">Fast Learner</span>
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="flex items-center gap-2"
                                >
                                    <Shield className="h-5 w-5 text-green-500" />
                                    <span className="text-sm text-muted-foreground">Security Focused</span>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {highlights.map((item, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.03, y: -5 }}
                                    className="group p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-300 cursor-default"
                                >
                                    <motion.div
                                        whileHover={{ rotate: 10 }}
                                        className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} mb-4`}
                                    >
                                        <item.icon className="h-6 w-6 text-white" />
                                    </motion.div>
                                    <h3 className="font-bold text-foreground text-lg">{item.label}</h3>
                                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
