export default function Skills() {
  return (
    <div className="min-h-screen bg-base-200 text-base-content">
      {/* Main */}
      <main className="max-w-6xl mx-auto px-6 py-16">
        {/* Title */}
        <div className="mb-16">
          <h1 className="text-4xl lg:text-5xl font-black mb-4">
            Skills & Experience
          </h1>
          <p className="text-base-content/70 max-w-2xl">
            A focused overview of my technical expertise and professional
            timeline. I specialize in building scalable web applications with
            modern architecture.
          </p>
        </div>

        {/* Technical Skills */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-8">Technical Skills</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Languages */}
            <div className="card bg-base-100 shadow-md hover:shadow-lg transition">
              <div className="card-body">
                <h3 className="card-title">Languages</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  <div className="badge badge-outline">TypeScript</div>
                  <div className="badge badge-outline">JavaScript</div>
                  <div className="badge badge-outline">Python</div>
                  <div className="badge badge-outline">Go</div>
                  <div className="badge badge-outline">SQL</div>
                </div>
              </div>
            </div>

            {/* Frameworks */}
            <div className="card bg-base-100 shadow-md hover:shadow-lg transition">
              <div className="card-body">
                <h3 className="card-title">Frameworks</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  <div className="badge badge-outline">React</div>
                  <div className="badge badge-outline">Next.js</div>
                  <div className="badge badge-outline">Node.js</div>
                  <div className="badge badge-outline">Express</div>
                  <div className="badge badge-outline">Tailwind CSS</div>
                </div>
              </div>
            </div>

            {/* DevOps */}
            <div className="card bg-base-100 shadow-md hover:shadow-lg transition">
              <div className="card-body">
                <h3 className="card-title">DevOps & Tools</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  <div className="badge badge-outline">Docker</div>
                  <div className="badge badge-outline">Kubernetes</div>
                  <div className="badge badge-outline">AWS</div>
                  <div className="badge badge-outline">Git</div>
                  <div className="badge badge-outline">CI/CD</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Work Experience */}
        <section>
          <h2 className="text-2xl font-bold mb-10">Work Experience</h2>

          <ul className="timeline timeline-vertical">
            <li>
              <div className="timeline-start text-primary font-semibold">
                Jan 2022 — Present
              </div>
              <div className="timeline-middle">
                <div className="badge badge-primary badge-sm"></div>
              </div>
              <div className="timeline-end mb-10">
                <div className="card bg-base-100 shadow-md">
                  <div className="card-body">
                    <h3 className="card-title">Senior Software Engineer</h3>
                    <p className="text-primary font-semibold">
                      TechVision Inc.
                    </p>
                    <ul className="list-disc ml-5 mt-3 space-y-2 text-base-content/70">
                      <li>
                        Migrated monolithic app to microservices using Node.js
                        and Docker.
                      </li>
                      <li>Built internal UI library using React & Tailwind.</li>
                      <li>Mentored junior developers and led code reviews.</li>
                    </ul>
                  </div>
                </div>
              </div>
              <hr />
            </li>

            <li>
              <div className="timeline-start font-semibold text-base-content/70">
                Mar 2019 — Dec 2021
              </div>
              <div className="timeline-middle">
                <div className="badge badge-ghost badge-sm"></div>
              </div>
              <div className="timeline-end mb-10">
                <div className="card bg-base-100 shadow-md">
                  <div className="card-body">
                    <h3 className="card-title">Full Stack Developer</h3>
                    <p className="text-primary font-semibold">
                      Creative Solutions Ltd.
                    </p>
                    <ul className="list-disc ml-5 mt-3 space-y-2 text-base-content/70">
                      <li>
                        Built high-performance e-commerce platforms using
                        Next.js.
                      </li>
                      <li>Implemented testing with Jest and Cypress.</li>
                    </ul>
                  </div>
                </div>
              </div>
              <hr />
            </li>

            <li>
              <div className="timeline-start font-semibold text-base-content/70">
                Jun 2017 — Feb 2019
              </div>
              <div className="timeline-middle">
                <div className="badge badge-ghost badge-sm"></div>
              </div>
              <div className="timeline-end mb-10">
                <div className="card bg-base-100 shadow-md">
                  <div className="card-body">
                    <h3 className="card-title">Junior Web Developer</h3>
                    <p className="text-primary font-semibold">Startup Hub</p>
                    <ul className="list-disc ml-5 mt-3 space-y-2 text-base-content/70">
                      <li>
                        Worked on mobile-first redesign and accessibility
                        improvements.
                      </li>
                      <li>Integrated third-party REST APIs.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </section>

        {/* Footer */}
        <footer className="mt-24 pt-10 border-t text-center text-base-content/60 text-sm">
          © 2024 Personal Portfolio. Built with passion and code.
        </footer>
      </main>
    </div>
  );
}
