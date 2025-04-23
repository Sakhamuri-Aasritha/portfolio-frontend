import React, { useState, useEffect } from 'react';

export default function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('/api/projects')
            .then(res => {
                if (!res.ok) throw new Error(res.statusText);
                return res.json();
            })
            .then(data => {
                if (Array.isArray(data)) setProjects(data);
                else console.error('Expected an array for projects, got:', data);
            })
            .catch(err => console.error('Error fetching projects:', err));
    }, []);

    // Only render up to 4 projects
    const displayed = projects.slice(0, 4);

    return (
        <section
            id="projects"
            className="snap-start min-h-screen bg-pastel-yellow flex flex-col items-center pt-16 px-4"
        >
            <h2 className="text-4xl font-bold text-purple-800 mb-12">Projects</h2>
            <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
                {displayed.map((proj, idx) => (
                    <a
                        key={idx}
                        href={proj.githubUrl || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block bg-white bg-opacity-80 rounded-2xl overflow-hidden shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl"
                    >
                        {/* Image */}
                        <div className="h-56 bg-gray-100">
                            {proj.imageUrl ? (
                                <img
                                    src={proj.imageUrl}
                                    alt={proj.name}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-gray-400">
                                    No Image
                                </div>
                            )}
                        </div>

                        {/* Title & Description */}
                        <div className="p-6">
                            <h3 className="text-2xl font-semibold text-purple-800 mb-3">
                                {proj.name || 'Untitled Project'}
                            </h3>
                            <p className="text-gray-700 text-sm">
                                {proj.description || 'No description available.'}
                            </p>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}
