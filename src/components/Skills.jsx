import React, { useState, useEffect } from 'react';
import { Code, Database, Wrench, Box, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import { API } from '../api';

const getIcon = (category) => {
    const key = category.toLowerCase();
    if (key.includes('lang'))   return Code;
    if (key.includes('datab'))  return Database;
    if (key.includes('tool'))   return Wrench;
    if (key.includes('web'))    return Box;
    return Code;
};

export default function Skills() {
    const [skills, setSkills] = useState([]);
    const [filter, setFilter] = useState('');

    useEffect(() => {
        fetch(`${API}/api/skills`)
            .then(res => res.json())
            .then(setSkills)
            .catch(err => console.error('Error fetching skills:', err));
    }, []);

    return (
        <section
            id="skills"
            className="snap-start min-h-screen bg-pastel-lavender flex flex-col items-center pt-16 px-4"
        >
            <h2 className="text-4xl font-bold text-purple-800 mb-6">Skills &amp; Tools</h2>

            {/* Search Bar */}
            <div className="w-full max-w-md mb-12 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-600" />
                <input
                    type="text"
                    placeholder="Search skills..."
                    value={filter}
                    onChange={e => setFilter(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 rounded-full bg-white bg-opacity-30 backdrop-blur text-purple-900 placeholder-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
            </div>

            {/* Category Cards */}
            <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
                {skills.map((group, idx) => {
                    const items = Array.isArray(group.items)
                        ? group.items.filter(item =>
                            item.toLowerCase().includes(filter.toLowerCase())
                        )
                        : [];
                    if (!items.length) return null;

                    const Icon = getIcon(group.category);
                    return (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className="bg-white bg-opacity-20 backdrop-blur-md rounded-2xl p-6 hover:shadow-lg transition-shadow"
                        >
                            <h3 className="text-2xl font-semibold text-purple-700 mb-4 flex items-center">
                                <Icon className="mr-2" /> {group.category}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {items.map((tech, i) => (
                                    <motion.span
                                        key={i}
                                        whileHover={{ scale: 1.05 }}
                                        className="px-4 py-2 bg-purple-600 text-white rounded-full text-sm cursor-pointer transition-colors duration-300 hover:bg-purple-700"
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
