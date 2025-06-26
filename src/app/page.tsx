'use client';

import TypingEffect from '@/components/TypingEffect';
import Image from 'next/image';

export default function Home() {
    return (
        <>
            <section id="hero" data-aos="fade-up">
                <div className="hero-content">
                    <h1>Welcome to My Portfolio</h1>
                    <p>
                        "The only limit to our realization of tomorrow is our doubts of today." –
                        Franklin D. Roosevelt
                    </p>
                    <div>
                        I'm <TypingEffect texts={["I'm a software developer", "I'm a ML engineer"]} />
                    </div>
                    <Image
                        src="/new-avatar.JPG"
                        alt="Portfolio Image"
                        width={400}
                        height={400}
                        style={{ maxWidth: '100%', height: 'auto' }}
                    />
                </div>
            </section>

            <section id="about" data-aos="fade-up">
                <h2>About Me</h2>
                <p>
                    Fueled by curiosity and creativity, I thrive on exploring the limitless
                    possibilities of Artificial Intelligence, Cloud Computing, and App
                    Development. My mission is to harness technology for sustainable growth and
                    redefine digital innovation.
                </p>
            </section>
        </>
    );
} 