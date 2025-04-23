import React, { useState, useEffect } from 'react';

export default function Education() {
    const [edus, setEdus] = useState([]);

    useEffect(() => {
        fetch('/api/education')
            .then(res => {
                if (!res.ok) throw new Error(res.statusText);
                return res.json();
            })
            .then(setEdus)
            .catch(err => console.error('Error fetching education:', err));
    }, []);

    return (
        <section
            id="education"
            className="snap-start h-screen bg-pastel-blue flex items-center justify-center px-4"
        >
            <div className="max-w-6xl w-full">
                <h2 className="text-4xl font-semibold text-purple-800 mb-8 text-center">
                    Education
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {edus.map((e, i) => (
                        <div
                            key={i}
                            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow"
                        >
                            <h3 className="text-2xl font-bold text-purple-700 mb-2">
                                {e.degree}
                            </h3>
                            <p className="italic text-gray-600 mb-1">{e.institution}</p>
                            <p className="text-sm text-gray-500 mb-4">{e.period}</p>

                            {/* CGPA */}
                            <p className="text-gray-800 font-medium mb-4">
                                CGPA: {e.cgpa}
                            </p>

                            {/* Courses as buttons */}
                            <div className="flex flex-wrap gap-2">
                                {e.courses.map((course, idx) => (
                                    <button
                                        key={idx}
                                        className="px-3 py-1 bg-purple-200 text-purple-800 rounded-full text-sm hover:bg-purple-300 transition"
                                    >
                                        {course}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
