import React, { useState } from 'react';
import { AtSign, Linkedin, Github } from 'lucide-react';

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        const mailto = `mailto:aasrithas068@gmail.com?subject=Message from ${encodeURIComponent(
            form.name
        )}&body=${encodeURIComponent(
            form.message + '\n\n— ' + form.name + ' (' + form.email + ')'
        )}`;
        window.location.href = mailto;
    };

    return (
        <section
            id="contact"
            className="snap-start min-h-screen bg-pastel-pink flex flex-col items-center justify-center px-4 py-16"
        >
            <h2 className="text-4xl font-bold text-purple-800 mb-8">Get in Touch</h2>

            {/* Contact Form */}
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-lg bg-white bg-opacity-30 backdrop-blur rounded-2xl p-8 mb-8 space-y-4"
            >
                <div>
                    <label className="block text-purple-700 mb-1">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 rounded-lg border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                    />
                </div>
                <div>
                    <label className="block text-purple-700 mb-1">Email</label>
                    <div className="relative">
                        <AtSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-500" />
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            className="w-full pl-10 px-4 py-2 rounded-lg border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-purple-700 mb-1">Message</label>
                    <textarea
                        name="message"
                        rows="5"
                        value={form.message}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 rounded-lg border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                    />
                </div>
                <button
                    type="submit"
                    className="mt-4 w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
                >
                    Send Message
                </button>
            </form>

            {/* Social Links */}
            <div className="flex space-x-6 mt-4">
                <a
                    href="https://linkedin.com/in/aasritha-sakhamuri"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-800 hover:text-purple-900 transition"
                >
                    <Linkedin size={32} />
                </a>
                <a
                    href="https://github.com/Sakhamuri-Aasritha"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-800 hover:text-purple-900 transition"
                >
                    <Github size={32} />
                </a>
            </div>
        </section>
    );
}
