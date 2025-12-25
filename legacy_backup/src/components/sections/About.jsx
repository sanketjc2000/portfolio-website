import React from 'react';
import Section from '../ui/Section';

const About = () => {
    return (
        <Section id="about" className="bg-muted/50">
            <div className="container px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
                    About Me
                </h2>
                <div className="max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed space-y-6">
                    <p>
                        I specialize in backend development using Node.js (Express/Nest),
                        designing secure APIs, cloud-native architectures, and integrating
                        third-party and AI-driven solutions. I’ve worked across supply chain,
                        talent acquisition, and healthcare domains, delivering reliable and
                        scalable systems.
                    </p>
                    <p>
                        I enjoy solving complex problems, applying clean architecture, and
                        building systems that scale with business needs.
                    </p>
                </div>
            </div>
        </Section>
    );
};

export default About;
