import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, Linkedin } from 'lucide-react';
import { Button } from '../ui/Button';
import { portfolioData } from '../../data/portfolio';

const Hero = () => {
    const { name, role, summary, resumeLink, email, linkedin } = portfolioData.personalInfo;

    return (
        <section className="min-h-screen flex items-center justify-center pt-16">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center text-center space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-4 max-w-3xl"
                    >
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600 dark:from-blue-400 dark:to-primary">
                            {name}
                        </h1>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl text-muted-foreground font-medium">
                            {role}
                        </h2>
                        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl leading-relaxed">
                            {summary}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <Button size="lg" className="gap-2" onClick={() => window.location.href = `mailto:${email}`}>
                            <Mail className="h-4 w-4" />
                            Contact Me
                        </Button>
                        <Button variant="outline" size="lg" className="gap-2" asChild>
                            <a href={resumeLink} download>
                                <Download className="h-4 w-4" />
                                Download Resume
                            </a>
                        </Button>
                        <Button variant="ghost" size="icon" asChild>
                            <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <Linkedin className="h-5 w-5" />
                            </a>
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
