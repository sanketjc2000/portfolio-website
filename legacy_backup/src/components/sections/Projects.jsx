import React from 'react';
import Section from '../ui/Section';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/Card';
import { portfolioData } from '../../data/portfolio';

const Projects = () => {
    const { projects } = portfolioData;

    return (
        <Section id="projects">
            <div className="container px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
                    Featured Projects
                </h2>
                <div className="grid gap-6 md:grid-cols-2">
                    {projects.map((project) => (
                        <Card key={project.id} className="flex flex-col h-full hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <CardTitle>{project.title}</CardTitle>
                                <CardDescription className="mt-2 text-justify">
                                    {project.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {project.techStack.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary hover:bg-primary/20"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </CardContent>
                            {/* <CardFooter className="flex justify-end gap-2">
                <Button variant="outline" size="sm" className="gap-2">
                  <Github className="h-4 w-4" />
                  Code
                </Button>
                <Button size="sm" className="gap-2">
                  <ExternalLink className="h-4 w-4" />
                  Demo
                </Button>
              </CardFooter> */}
                        </Card>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Projects;
