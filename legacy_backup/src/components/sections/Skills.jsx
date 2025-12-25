import React from 'react';
import Section from '../ui/Section';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { portfolioData } from '../../data/portfolio';

const Skills = () => {
    const { skills } = portfolioData;
    const categories = [
        { title: "Backend Development", skills: skills.backend },
        { title: "Cloud Services", skills: skills.cloud },
        { title: "Databases", skills: skills.database },
        { title: "AI & Tools", skills: [...skills.ai, ...skills.tools] },
    ];

    return (
        <Section id="skills">
            <div className="container px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
                    Technical Skills
                </h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {categories.map((category, index) => (
                        <Card key={index} className="h-full">
                            <CardHeader>
                                <CardTitle className="text-xl">{category.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                                    {category.skills.map((skill, i) => (
                                        <li key={i} className="text-sm">
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Skills;
