import React from 'react';
import { Mail, Linkedin, MapPin, Calendar } from 'lucide-react';
import Section from '../ui/Section';
import { Card, CardContent } from '../ui/Card';
import { portfolioData } from '../../data/portfolio';

const Contact = () => {
    const { email, linkedin, location, availability } = portfolioData.personalInfo;

    return (
        <Section id="contact" className="bg-muted/50">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center space-y-4 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Get in Touch
                    </h2>
                    <p className="mx-auto max-w-[600px] text-muted-foreground md:text-lg">
                        Im currently looking for new opportunities. Whether you have a question or just want to say hi, Ill try my best to get back to you!
                    </p>
                </div>
                <div className="mx-auto grid max-w-4xl gap-6 mt-12 md:grid-cols-2">
                    <Card>
                        <CardContent className="flex flex-col items-center justify-center p-6 space-y-4 text-center">
                            <Mail className="h-10 w-10 text-primary" />
                            <div className="space-y-2">
                                <h3 className="font-bold">Email</h3>
                                <p className="text-sm text-muted-foreground">
                                    Send me an email for job opportunities or collaborations.
                                </p>
                                <a
                                    href={`mailto:${email}`}
                                    className="text-primary hover:underline font-medium"
                                >
                                    {email}
                                </a>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="flex flex-col items-center justify-center p-6 space-y-4 text-center">
                            <Linkedin className="h-10 w-10 text-primary" />
                            <div className="space-y-2">
                                <h3 className="font-bold">LinkedIn</h3>
                                <p className="text-sm text-muted-foreground">
                                    Connect with me professionally.
                                </p>
                                <a
                                    href={linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary hover:underline font-medium"
                                >
                                    View Profile
                                </a>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <div className="mt-12 flex flex-col md:flex-row justify-center gap-8 text-center text-muted-foreground">
                    <div className="flex items-center justify-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{location}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{availability}</span>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Contact;
