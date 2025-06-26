export default function Achievements() {
    return (
        <main className="min-h-screen py-8">
            <div className="max-w-6xl mx-auto px-4">
                <section id="achievements" className="text-center mb-12">
                    <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-yellow-400 to-orange-600 bg-clip-text text-transparent">
                        My Achievements
                    </h1>
                    <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
                        Recognition and accomplishments that reflect my dedication to excellence and
                        continuous growth in the field of technology.
                    </p>
                </section>

                <div className="grid gap-6">
                    <div className="achievements-list">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold mb-4 text-white">Awards & Recognition</h2>
                        </div>

                        <div className="grid gap-4">
                            <div className="achievements-list-item">
                                <h3 className="text-xl font-semibold mb-2 text-yellow-400">Developer of the Year 2023</h3>
                                <p className="text-gray-300">Awarded by XYZ Organization for outstanding contributions to software development and innovation.</p>
                            </div>

                            <div className="achievements-list-item">
                                <h3 className="text-xl font-semibold mb-2 text-yellow-400">Excellence in Web Design</h3>
                                <p className="text-gray-300">Recognized for exceptional creativity and technical expertise in modern web development.</p>
                            </div>

                            <div className="achievements-list-item">
                                <h3 className="text-xl font-semibold mb-2 text-yellow-400">Innovation Award</h3>
                                <p className="text-gray-300">Honored for pioneering new approaches in machine learning and AI applications.</p>
                            </div>
                        </div>
                    </div>

                    <div className="achievements-list">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold mb-4 text-white">Inspirational Quotes</h2>
                        </div>

                        <div className="grid gap-4">
                            <div className="achievements-list-item">
                                <blockquote className="text-lg italic text-gray-300">
                                    "Success is not the key to happiness. Happiness is the key to success."
                                    <footer className="text-sm text-yellow-400 mt-2">— Albert Schweitzer</footer>
                                </blockquote>
                            </div>

                            <div className="achievements-list-item">
                                <blockquote className="text-lg italic text-gray-300">
                                    "The only place where success comes before work is in the dictionary."
                                    <footer className="text-sm text-yellow-400 mt-2">— Vidal Sassoon</footer>
                                </blockquote>
                            </div>

                            <div className="achievements-list-item">
                                <blockquote className="text-lg italic text-gray-300">
                                    "The future belongs to those who believe in the beauty of their dreams."
                                    <footer className="text-sm text-yellow-400 mt-2">— Eleanor Roosevelt</footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>

                    <div className="achievements-list">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold mb-4 text-white">Professional Milestones</h2>
                        </div>

                        <div className="grid gap-4">
                            <div className="achievements-list-item">
                                <h3 className="text-xl font-semibold mb-2 text-yellow-400">5+ Years of Experience</h3>
                                <p className="text-gray-300">Successfully delivered over 50 projects across various technologies and domains.</p>
                            </div>

                            <div className="achievements-list-item">
                                <h3 className="text-xl font-semibold mb-2 text-yellow-400">Technical Leadership</h3>
                                <p className="text-gray-300">Led development teams and mentored junior developers in best practices and emerging technologies.</p>
                            </div>

                            <div className="achievements-list-item">
                                <h3 className="text-xl font-semibold mb-2 text-yellow-400">Open Source Contributions</h3>
                                <p className="text-gray-300">Active contributor to various open-source projects with 100+ commits and community recognition.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
} 