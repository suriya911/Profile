export default function EducationCertifications() {
    return (
        <main className="min-h-screen py-8">
            <div className="max-w-6xl mx-auto px-4">
                <section id="education-certifications" className="text-center mb-12">
                    <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                        Education & Certifications
                    </h1>
                    <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
                        My academic journey and professional certifications that demonstrate my commitment
                        to continuous learning and skill development.
                    </p>
                </section>

                <div className="grid gap-8">
                    <div className="education">
                        <h2 className="text-3xl font-bold mb-6 text-white text-center">Academic Background</h2>

                        <div className="grid gap-6">
                            <div className="education-item">
                                <h3 className="text-2xl font-semibold mb-3 text-purple-400">Bachelor of Science in Computer Science</h3>
                                <p className="text-lg text-gray-300 mb-2">University Name</p>
                                <p className="text-gray-400 mb-4">Graduated: 2020</p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Data Structures</span>
                                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Algorithms</span>
                                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Software Engineering</span>
                                </div>
                            </div>

                            <div className="education-item">
                                <h3 className="text-2xl font-semibold mb-3 text-purple-400">Master's in Artificial Intelligence</h3>
                                <p className="text-lg text-gray-300 mb-2">Tech University</p>
                                <p className="text-gray-400 mb-4">Graduated: 2022</p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Machine Learning</span>
                                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Deep Learning</span>
                                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Computer Vision</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="certifications">
                        <h2 className="text-3xl font-bold mb-6 text-white text-center">Professional Certifications</h2>

                        <div className="grid gap-6">
                            <div className="certification-item">
                                <h3 className="text-2xl font-semibold mb-3 text-pink-400">Certified Python Developer</h3>
                                <p className="text-gray-300 mb-2">Python Institute</p>
                                <p className="text-gray-400 mb-4">Obtained: 2021</p>
                                <p className="text-gray-300">Comprehensive certification covering Python programming fundamentals, advanced concepts, and best practices.</p>
                            </div>

                            <div className="certification-item">
                                <h3 className="text-2xl font-semibold mb-3 text-pink-400">Web Development Bootcamp</h3>
                                <p className="text-gray-300 mb-2">Udemy</p>
                                <p className="text-gray-400 mb-4">Obtained: 2022</p>
                                <p className="text-gray-300">Full-stack web development certification covering HTML, CSS, JavaScript, React, and Node.js.</p>
                            </div>

                            <div className="certification-item">
                                <h3 className="text-2xl font-semibold mb-3 text-pink-400">AWS Certified Solutions Architect</h3>
                                <p className="text-gray-300 mb-2">Amazon Web Services</p>
                                <p className="text-gray-400 mb-4">Obtained: 2023</p>
                                <p className="text-gray-300">Professional certification demonstrating expertise in designing distributed systems on AWS.</p>
                            </div>

                            <div className="certification-item">
                                <h3 className="text-2xl font-semibold mb-3 text-pink-400">Google Cloud Professional Data Engineer</h3>
                                <p className="text-gray-300 mb-2">Google Cloud</p>
                                <p className="text-gray-400 mb-4">Obtained: 2023</p>
                                <p className="text-gray-300">Certification for building and maintaining data processing systems on Google Cloud Platform.</p>
                            </div>
                        </div>
                    </div>

                    <div className="skills-section">
                        <h2 className="text-3xl font-bold mb-6 text-white text-center">Technical Skills</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="skill-category">
                                <h3 className="text-xl font-semibold mb-4 text-purple-400">Programming Languages</h3>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Python</span>
                                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">JavaScript</span>
                                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">TypeScript</span>
                                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Java</span>
                                </div>
                            </div>

                            <div className="skill-category">
                                <h3 className="text-xl font-semibold mb-4 text-purple-400">Frameworks & Libraries</h3>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">React</span>
                                    <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Next.js</span>
                                    <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Node.js</span>
                                    <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">TensorFlow</span>
                                </div>
                            </div>

                            <div className="skill-category">
                                <h3 className="text-xl font-semibold mb-4 text-purple-400">Cloud & DevOps</h3>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm">AWS</span>
                                    <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm">Google Cloud</span>
                                    <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm">Docker</span>
                                    <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm">Kubernetes</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
} 