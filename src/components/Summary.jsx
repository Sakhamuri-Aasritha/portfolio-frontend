import React, { useState, useEffect } from 'react';
import { API } from '../api';

import { Linkedin, Github } from 'lucide-react';

export default function Summary() {
    const [data, setData] = useState({
        greeting: '',
        name: '',
        role: '',
        resumeLink: '',
        contactEmail: '',
        linkedinUrl: '',
        githubUrl: ''
    });

    // List of roles to cycle through
    const roles = [
        'Software Developer',
        'Java Developer',
        'Backend Developer',
        'Full‑Stack Developer'
    ];
    const [roleIndex, setRoleIndex] = useState(0);

    useEffect(() => {
        // Fetch your static fields once
        fetch(`${API}/api/summary`)
            .then(res => res.json())
            .then(setData)
            .catch(console.error);
    }, [roles.length]);

    useEffect(() => {
        // Cycle roles every 2 seconds
        const id = setInterval(() => {
            setRoleIndex(prev => (prev + 1) % roles.length);
        }, 2000);
        return () => clearInterval(id);
    }, [roles.length]);

    return (
            <section
      id="summary"
      className="snap-start h-screen bg-pastel-pink flex items-center justify-center px-4"
            >
            <div className="bg-white rounded-3xl p-16 shadow-2xl max-w-4xl w-full">
                <div className="flex flex-col md:flex-row items-center">

                    {/* Profile Image */}
                    <img
                        src="/profile.jpeg"
                        alt={data.name}
                        className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-purple-700 mb-8 md:mb-0 md:mr-12"
                    />

                    {/* Text Content */}
                    <div className="text-center md:text-left">
                        <p className="text-xl text-purple-600 mb-2">{data.greeting}</p>
                        <h1 className="text-6xl font-extrabold text-purple-800 leading-tight mb-2">
                            {data.name}
                        </h1>
                        {/* Rotating role */}
                        <h2 className="text-3xl text-purple-700 mb-6 h-10">
                            {roles[roleIndex]}
                        </h2>

                        <div className="flex justify-center md:justify-start space-x-4 mb-6">
                            <a
                                href={data.resumeLink}
                                download
                                className="px-6 py-3 bg-purple-700 text-white rounded-lg hover:bg-purple-800 transition"
                            >
                                Download Resume
                            </a>
                            <a
                                href="#contact"
                                className="px-6 py-3 border border-purple-700 text-purple-700 rounded-lg hover:bg-purple-700 hover:text-white transition"
                            >
                                Contact Info
                            </a>
                        </div>

                        <div className="flex justify-center md:justify-start space-x-4">
                            <a
                                href={data.linkedinUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-purple-700 hover:text-purple-900 transition"
                            >
                                <Linkedin size={32} />
                            </a>
                            <a
                                href={data.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-purple-700 hover:text-purple-900 transition"
                            >
                                <Github size={32} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </section>

    );
}
