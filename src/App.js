import React, { useState, useEffect } from 'react';
import Summary from './components/Summary';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer  from './components/Footer';
import Header from './components/Header';

const sectionBg = {
    summary:    'bg-pastel-pink',
    education:  'bg-pastel-blue',
    experience: 'bg-pastel-green',
    skills:     'bg-pastel-lavender',
    projects:   'bg-pastel-yellow',
    contact:    'bg-pastel-pink',     // or pick another
    footer:     'bg-white'
};

export default function App() {
    const [current, setCurrent] = useState('summary');

    useEffect(() => {
        const sections = document.querySelectorAll('section[id], footer[id]');
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setCurrent(entry.target.id);
                    }
                });
            },
            { threshold: 0.6 }
        );
        sections.forEach(sec => observer.observe(sec));
        return () => observer.disconnect();
    }, []);

    return (
        <div
            className={`h-screen overflow-y-scroll snap-y snap-mandatory transition-colors duration-700 ${sectionBg[current]}`}
        >
            <Header />
            <Summary />
            <About />
            <Education />
            <Experience />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
}
