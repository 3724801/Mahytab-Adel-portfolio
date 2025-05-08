import React from 'react';
import { Code2, Palette, Globe2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
              <Code2 className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Web Development</h3>
            <p className="text-gray-600">
              Specialized in building modern web applications using React, Node.js, and TypeScript.
            </p>
          </div>
          <div className="text-center p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="inline-block p-4 bg-green-100 rounded-full mb-4">
              <Palette className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
            <p className="text-gray-600">
              Creating beautiful and intuitive user interfaces with a focus on user experience.
            </p>
          </div>
          <div className="text-center p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="inline-block p-4 bg-purple-100 rounded-full mb-4">
              <Globe2 className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Flutter</h3>
            <p className="text-gray-600">
Skilled in building cross-platform mobile applications using Flutter, delivering responsive and user-friendly interfaces from a single codebase.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}