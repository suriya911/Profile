export default function Contact() {
    return (
        <main className="min-h-screen py-8">
            <div className="max-w-6xl mx-auto px-4">
                <section id="contact" className="text-center mb-12">
                    <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-indigo-400 to-blue-600 bg-clip-text text-transparent">
                        Get In Touch
                    </h1>
                    <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
                        If you have any questions, opportunities, or just want to say hello, feel
                        free to reach out! I'm always open to discussing new projects and collaborations.
                    </p>
                </section>

                <div className="grid gap-8">
                    <div className="contact-info">
                        <h2 className="text-3xl font-bold mb-6 text-white text-center">Contact Information</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="contact-item">
                                <div className="text-center p-6 bg-gradient-to-br from-indigo-500/20 to-blue-500/20 rounded-xl border border-indigo-500/30">
                                    <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2 text-indigo-400">Email</h3>
                                    <a
                                        href="mailto:your.email@example.com"
                                        className="text-gray-300 hover:text-indigo-400 transition-colors duration-300"
                                    >
                                        your.email@example.com
                                    </a>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="text-center p-6 bg-gradient-to-br from-green-500/20 to-teal-500/20 rounded-xl border border-green-500/30">
                                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2 text-green-400">Phone</h3>
                                    <p className="text-gray-300">(123) 456-7890</p>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="text-center p-6 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-500/30">
                                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2 text-purple-400">LinkedIn</h3>
                                    <a
                                        href="https://linkedin.com/in/yourprofile"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-300 hover:text-purple-400 transition-colors duration-300"
                                    >
                                        Your LinkedIn Profile
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form">
                        <h2 className="text-3xl font-bold mb-6 text-white text-center">Send Me a Message</h2>

                        <div className="max-w-2xl mx-auto">
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-gray-400"
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-gray-400"
                                            placeholder="your.email@example.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-gray-400"
                                        placeholder="What's this about?"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={6}
                                        className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-gray-400 resize-none"
                                        placeholder="Tell me about your project or inquiry..."
                                    ></textarea>
                                </div>

                                <div className="text-center">
                                    <button
                                        type="submit"
                                        className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-500 to-blue-600 text-white font-semibold rounded-lg hover:from-indigo-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                                    >
                                        Send Message
                                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                        </svg>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="availability">
                        <h2 className="text-3xl font-bold mb-6 text-white text-center">Availability</h2>
                        <div className="text-center">
                            <p className="text-lg text-gray-300 mb-4">
                                I'm currently available for freelance opportunities and full-time positions.
                            </p>
                            <div className="flex justify-center items-center space-x-4">
                                <span className="inline-flex items-center px-4 py-2 bg-green-500/20 text-green-300 rounded-full">
                                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                                    Available for new projects
                                </span>
                                <span className="inline-flex items-center px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full">
                                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                                    Open to collaborations
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
} 