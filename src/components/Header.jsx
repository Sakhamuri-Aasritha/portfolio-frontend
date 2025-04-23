import React from 'react';

export default function Header() {
    return (
        <header className="sticky top-0 bg-white/90 backdrop-blur-md shadow-md z-50">
            <nav className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
                <a
                    href="#summary"
                    className="text-2xl font-extrabold text-purple-700 hover:text-white hover:bg-purple-700 px-3 py-1 rounded-lg transition-colors"
                >
                    Aasritha Sakhamuri
                </a>
                <ul className="flex space-x-4">
                    {[
                        ['#summary',       'Welcome'],
                        ['#about',         'About'],
                        ['#education',     'Education'],
                        ['#experience',    'Experience'],
                        ['#skills',        'Skills'],
                        ['#projects',      'Projects'],
                        ['#contact',       'Contact'],
                    ].map(([href, label]) => (
                        <li key={label}>
                            <a
                                href={href}
                                className="text-purple-600 border border-purple-600 px-3 py-1 rounded-lg transition-colors hover:bg-purple-600 hover:text-white"
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
