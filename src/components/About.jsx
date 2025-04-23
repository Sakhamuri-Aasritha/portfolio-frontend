import React, { useState, useEffect } from 'react';
export default function About() {
    const [data, setData] = useState({ heading: '', content: '' });

    useEffect(() => {
        fetch('/api/about')
            .then(res => res.json())
            .then(setData)
            .catch(console.error);
    }, []);

    return (
        <section
            id="about" className="snap-start h-screen bg-pastel-green flex items-center justify-center px-4"
        >
            <div className="bg-white rounded-3xl p-10 shadow-xl max-w-4xl w-full flex flex-col md:flex-row items-center">
                {/* Text */}
                <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0 md:mr-8">
                    <h2 className="text-4xl font-bold text-purple-800 mb-4">
                        {data.heading}
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        {data.content}
                    </p>
                </div>

                {/* Profile Image */}
                <div className="md:w-1/2 flex justify-center">
                    <img
                        src="/about-me.png"
                        alt="Aasritha Sakhamuri"
                        className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-purple-700"
                    />
                </div>
            </div>
        </section>
    );
}
