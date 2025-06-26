'use client';

import TypingEffect from '@/components/TypingEffect';
import HoverCards from '@/components/HoverCards';
import Image from 'next/image';

export default function Home() {
    return (
        <main className="min-h-screen">
            <section id="hero" className="py-20 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                        Welcome to My Portfolio
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-gray-300 italic">
                        "The only limit to our realization of tomorrow is our doubts of today." –
                        Franklin D. Roosevelt
                    </p>
                    <div className="text-2xl md:text-3xl mb-8">
                        I'm <TypingEffect texts={["I'm a software developer", "I'm a ML engineer", "I'm a problem solver", "I'm a tech enthusiast"]} />
                    </div>
                    <div className="flex justify-center mb-12">
                        <Image
                            src="/new-avatar.JPG"
                            alt="Portfolio Image"
                            width={300}
                            height={300}
                            className="rounded-full border-4 border-purple-500 shadow-2xl"
                            style={{ maxWidth: '100%', height: 'auto' }}
                        />
                    </div>
                </div>
            </section>

            <section id="about" className="py-16 px-4 bg-white/5 backdrop-blur-sm">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-8 text-white">About Me</h2>
                    <p className="text-lg leading-relaxed text-gray-300 max-w-3xl mx-auto">
                        Fueled by curiosity and creativity, I thrive on exploring the limitless
                        possibilities of Artificial Intelligence, Cloud Computing, and App
                        Development. My mission is to harness technology for sustainable growth and
                        redefine digital innovation.
                    </p>
                </div>
            </section>

            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-12 text-white">Explore My Portfolio</h2>
                    <HoverCards />
                </div>
            </section>
        </main>
    );
} 