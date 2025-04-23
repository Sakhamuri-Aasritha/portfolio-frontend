import React, { useState, useEffect } from 'react';
import { Plus, Minus, ExternalLink } from 'lucide-react';

export default function Experience() {
    const [items, setItems] = useState([]);
    const [openIndex, setOpenIndex] = useState(-1);

    useEffect(() => {
        fetch('/api/experience')
            .then(res => {
                if (!res.ok) throw new Error(res.statusText);
                return res.json();
            })
            .then(data => {
                if (Array.isArray(data)) setItems(data);
                else console.error('Expected an array for experience, got:', data);
            })
            .catch(err => console.error('Error fetching experience:', err));
    }, []);

    const toggle = idx => setOpenIndex(openIndex === idx ? -1 : idx);

    if (!Array.isArray(items)) return null;

    return (
        <section
            id="experience"
            className="snap-start min-h-screen bg-pastel-green flex flex-col items-center py-16 px-4"
        >
            <h2 className="text-5xl font-bold mb-12 text-purple-800">
                Professional Experience
            </h2>
            <div className="w-full max-w-4xl space-y-4">
                {items.map((exp, idx) => {
                    const techs = Array.isArray(exp.tech) ? exp.tech : [];
                    const descriptionPoints = exp.description
                        ? exp.description
                            .split('\n')
                            .map(s => s.trim())
                            .filter(Boolean)
                        : [];

                    return (
                        <div key={idx}>
                            {/* Collapsed header */}
                            <button
                                onClick={() => toggle(idx)}
                                className="w-full flex justify-between items-center bg-pastel-lavender hover:bg-pastel-pink transition-colors px-6 py-4 rounded-lg focus:outline-none font-medium"
                            >
                <span>
                  {exp.role} @ {exp.company}
                </span>
                                <div className="flex items-center space-x-4">
                                    <span className="text-sm">{exp.period}</span>
                                    {openIndex === idx ? <Minus size={20} /> : <Plus size={20} />}
                                </div>
                            </button>

                            {/* Expanded panel */}
                            {openIndex === idx && (
                                <div className="mt-2 bg-pastel-pink p-6 rounded-lg shadow-inner flex flex-col md:flex-row">
                                    {/* Left: details */}
                                    <div className="flex-1 space-y-4">
                                        <p className="flex items-center space-x-2 text-purple-700">
                                            <span>📍</span>
                                            <span>{exp.location}</span>
                                            {exp.url && (
                                                <a
                                                    href={exp.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center text-purple-800 hover:text-purple-900 transition ml-2"
                                                >
                                                    <ExternalLink size={16} className="mr-1" />
                                                    {exp.url
                                                        .replace(/^https?:\/\//, '')
                                                        .replace(/\/.*$/, '')}
                                                </a>
                                            )}
                                        </p>

                                        {/* Bullet list description */}
                                        {descriptionPoints.length > 0 && (
                                            <ul className="list-disc list-inside text-purple-900 space-y-2">
                                                {descriptionPoints.map((pt, i) => (
                                                    <li key={i}>{pt.replace(/^•\s*/, '')}</li>
                                                ))}
                                            </ul>
                                        )}

                                        {/* Tech pills */}
                                        <div className="flex flex-wrap gap-2">
                                            {techs.map((t, i) => (
                                                <span
                                                    key={i}
                                                    className="px-3 py-1 bg-pastel-yellow text-purple-900 rounded-full text-sm"
                                                >
                          {t}
                        </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Right: company logo (optional) */}
                                    {exp.logoUrl && (
                                        <div className="mt-6 md:mt-0 md:ml-8 flex-shrink-0">
                                            <img
                                                src={exp.logoUrl}
                                                alt={`${exp.company} logo`}
                                                className="h-20 object-contain rounded"
                                            />
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
