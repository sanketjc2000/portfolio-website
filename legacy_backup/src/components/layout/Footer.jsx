import React from 'react';
import { portfolioData } from '../../data/portfolio';

const Footer = () => {
    return (
        <footer className="border-t bg-muted/50 py-6 md:py-0">
            <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row px-4 md:px-6">
                <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                    &copy; {new Date().getFullYear()} {portfolioData.personalInfo.name}. All rights reserved.
                </p>
                <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                    Built with React, Tailwind CSS, and Framer Motion.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
