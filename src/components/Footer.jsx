import React from 'react';
import { Linkedin, Github, ArrowUp } from 'lucide-react';

export default function Footer() {
    const year = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-pastel-blue text-purple-800 py-4">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
                {/* Copyright */}
                <p className="text-sm">
                    © {year} Aasritha Sakhamuri. All rights reserved.
                </p>

                {/* Social Links */}
                <div className="flex space-x-4">
                    <a
                        href="https://linkedin.com/in/aasritha-sakhamuri"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-purple-900 transition"
                    >
                        <Linkedin size={20} />
                    </a>
                    <a
                        href="https://github.com/Sakhamuri-Aasritha"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-purple-900 transition"
                    >
                        <Github size={20} />
                    </a>
                </div>

                {/* Back to Top */}
                <button
                    onClick={scrollToTop}
                    className="flex items-center bg-pastel-lavender text-purple-800 px-3 py-1 rounded-full hover:bg-pastel-pink transition"
                >
                    <ArrowUp size={16} className="mr-1" />
                    Top
                </button>
            </div>
        </footer>
    );
}
