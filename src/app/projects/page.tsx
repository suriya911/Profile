export default function Projects() {
    return (
        <main className="min-h-screen py-8">
            <div className="max-w-6xl mx-auto px-4">
                <section id="projects" className="text-center mb-12">
                    <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent">
                        My Projects
                    </h1>
                    <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
                        Explore my latest projects and innovative solutions that showcase my skills in software development,
                        machine learning, and web technologies.
                    </p>
                </section>

                <div className="grid gap-8">
                    <div className="project">
                        <h2 className="text-3xl font-bold mb-4">Project One</h2>
                        <p className="text-lg mb-4">
                            A state-of-the-art application that solves real-world problems through
                            innovative design and cutting-edge technology. Built with modern frameworks
                            and best practices for optimal performance and user experience.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">React</span>
                            <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Node.js</span>
                            <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">MongoDB</span>
                        </div>
                        <a
                            href="https://github.com/yourusername/project-one"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-lg hover:from-orange-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105"
                        >
                            View on GitHub
                        </a>
                    </div>

                    <div className="project">
                        <h2 className="text-3xl font-bold mb-4">Project Two</h2>
                        <p className="text-lg mb-4">
                            An innovative platform designed to enhance user experience by merging
                            creativity with functionality. Features advanced AI integration and
                            responsive design for seamless cross-platform compatibility.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Next.js</span>
                            <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm">TypeScript</span>
                            <span className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm">Tailwind CSS</span>
                        </div>
                        <a
                            href="https://github.com/yourusername/project-two"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-lg hover:from-orange-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105"
                        >
                            View on GitHub
                        </a>
                    </div>

                    <div className="project">
                        <h2 className="text-3xl font-bold mb-4">Machine Learning Project</h2>
                        <p className="text-lg mb-4">
                            A comprehensive machine learning solution that leverages advanced algorithms
                            to provide predictive analytics and intelligent insights for business decision-making.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm">Python</span>
                            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">TensorFlow</span>
                            <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Scikit-learn</span>
                        </div>
                        <a
                            href="https://github.com/yourusername/ml-project"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-lg hover:from-orange-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105"
                        >
                            View on GitHub
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
} 