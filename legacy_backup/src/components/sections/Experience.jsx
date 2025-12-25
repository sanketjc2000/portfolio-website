import React from 'react';
import Section from '../ui/Section';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/Card';
import { portfolioData } from '../../data/portfolio';

const Experience = () => {
    const { experience } = portfolioData;

    return (
        <Section id="experience" className="bg-muted/50">
            <div className="container px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
                    Work Experience
                </h2>
                <div className="space-y-8 max-w-4xl mx-auto">
                    {experience.map((job) => (
                        <Card key={job.id} className="relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
                            <CardHeader>
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                                    <div>
                                        <CardTitle className="text-xl md:text-2xl">{job.role}</CardTitle>
                                        <CardDescription className="text-lg font-medium text-primary mt-1">
                                            {job.company}
                                        </CardDescription>
                                    </div>
                                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                                        {job.duration}
                                    </span>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="mb-4 text-muted-foreground">{job.description}</p>
                                <ul className="list-disc list-inside space-y-2 text-sm text-foreground/80">
                                    {job.achievements.map((achievement, i) => (
                                        <li key={i}>{achievement}</li>
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

export default Experience;
