import React from 'react';
import { Linkedin, Mail, Heart } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';

const Footer = () => {
    const { email, linkedin } = portfolioData.personalInfo;

    const socialLinks = [
        { icon: Mail, href: `mailto:${email}`, label: "Email" },
        { icon: Linkedin, href: linkedin, label: "LinkedIn" },
    ];

    return (
        <footer className="relative border-t border-white/10 bg-gradient-to-b from-transparent to-primary/5">
            <div className="container py-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Brand */}
                    <div className="text-center md:text-left">
                        <p className="text-lg font-bold mb-1">
                            Sanket<span className="text-primary">.dev</span>
                        </p>
                        <p className="text-sm text-muted-foreground">
                            Building scalable backend solutions
                        </p>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        {socialLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                target={link.label === "LinkedIn" ? "_blank" : undefined}
                                rel={link.label === "LinkedIn" ? "noopener noreferrer" : undefined}
                                aria-label={link.label}
                                className="p-2.5 rounded-full bg-white/5 border border-white/10 text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/10 transition-all duration-300"
                            >
                                <link.icon className="h-5 w-5" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
                    <p>
                        © {new Date().getFullYear()} Sanket Chavan. All rights reserved.
                    </p>
                    <p className="flex items-center gap-1">
                        Made with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> using React & Tailwind
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
