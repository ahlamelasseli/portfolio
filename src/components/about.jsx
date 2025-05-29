
export default function About() {
    return (
        <section id="about" className="section relative">
            <div className="container">
                <p className="section-label">About Me</p>
                <h2 className="section-title">Who I Am</h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <p className="mb-6 text-lightGray/90">
                            I'm Ahlam Elassali, a 19-year-old full stack developer who loves turning ideas into 
                            reality through code. I specialize in creating end-to-end web applications with clean 
                            architecture and great user experience. My journey into development started out of 
                            curiosity and quickly grew into a full-blown passion.
                        </p>

                        <p className="mb-6 text-lightGray/90">
                            <span className="text-red font-medium">What I Do</span><br />
                            From front-end interfaces to robust back-end systems, I handle every aspect of web 
                            development. I'm experienced with technologies like JavaScript, React, Node.js, Express, 
                            and MongoDB — and always eager to learn more.
                        </p>

                        <p className="mb-6 text-lightGray/90">
                            <span className="text-red font-medium">Outside of code</span><br />
                            When I'm not coding, I enjoy reading, exploring new tools, and contributing to open 
                            source communities.
                        </p>

                        <div className="mt-8">
                            <a href="#contact" className="btn btn-primary">Get In Touch</a>
                        </div>
                    </div>

                    <div className="skills-list">
                        <h3 className="text-2xl mb-6 text-lightGray ">Technical Skills</h3>

                        <div className="space-y-4">
                            <div>
                                <div className="flex justify-between mb-1">
                                    <span className="text-lightGray font-bold text-copper">HTML & CSS / Sass</span>
                                </div>
                                <div className="w-full bg-navy rounded-full h-2">
                                    <div className="bg-red h-2 rounded-full" ></div>
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between mb-1">
                                    <span className="text-lightGray font-bold text-copper">JavaScript</span>
                                </div>
                                <div className="w-full bg-navy rounded-full h-2">
                                    <div className="bg-red h-2 rounded-full" ></div>
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between mb-1">
                                    <span className="text-lightGray font-bold text-copper">React / Next.js</span>
                                </div>
                                <div className="w-full bg-navy rounded-full h-2">
                                    <div className="bg-red h-2 rounded-full" ></div>
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between mb-1">
                                    <span className="text-lightGray font-bold text-copper">Tailwind CSS / Bootstrap</span>
                                </div>
                                <div className="w-full bg-navy rounded-full h-2">
                                    <div className="bg-red h-2 rounded-full" ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="vertical-line">
                <div className="dot top-1/4"></div>
                <div className="dot top-1/2"></div>
                <div className="dot top-3/4"></div>
            </div>
        </section>
    );
}
