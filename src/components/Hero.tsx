import React from 'react';
import { Github, Linkedin, Mail, ChevronDown, Terminal } from 'lucide-react';
import { TypeAnimation } from './TypeAnimation';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-gray-900 via-purple-900 to-violet-600">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-grid" />
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <div className="mb-6 inline-flex items-center justify-center">
          <Terminal className="text-emerald-400 w-12 h-12 animate-pulse" />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400">
            Mahytab Adel
          </span>
        </h1>
        <div className="h-8 mb-8">
          <TypeAnimation phrases={[
            'Flutter Developer',
            'Mobile App Developer',
            'UI/UX Designer'
          ]} />
        </div>
        <div className="flex justify-center gap-6 mb-12">
          <a href="https://github.com" className="group">
            <div className="bg-white/10 p-3 rounded-full backdrop-blur-sm group-hover:bg-white/20 transition-all">
              <Github className="w-6 h-6 text-white" />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/mahytab-adel-62b886229/" className="group">
            <div className="bg-white/10 p-3 rounded-full backdrop-blur-sm group-hover:bg-white/20 transition-all">
              <Linkedin className="w-6 h-6 text-white" />
            </div>
          </a>
          <a href="mailto:mahyadel177@gmail.com" className="group">
            <div className="bg-white/10 p-3 rounded-full backdrop-blur-sm group-hover:bg-white/20 transition-all">
              <Mail className="w-6 h-6 text-white" />
            </div>
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 animate-bounce">
        <ChevronDown className="text-white/50" size={32} />
      </div>
    </section>
  );
}