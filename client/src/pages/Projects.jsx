export default function Projects() {
  return (
    <div className="min-h-screen bg-base-200 text-base-content">
      <main className="max-w-5xl mx-auto px-6 py-16">
        {/* Heading */}
        <div className="mb-20">
          <h1 className="text-4xl lg:text-5xl font-black mb-4">
            Personal Projects
          </h1>
          <p className="text-base-content/70 max-w-2xl">
            A focused gallery of technical challenges and architectural
            solutions. Prioritizing performance, reliability, and clean system
            design.
          </p>
        </div>

        {/* Project 1 */}
        <div className="mb-16">
          <div className="card bg-base-100 shadow-md hover:shadow-lg transition">
            <div className="card-body">
              <div className="flex items-center gap-2 text-xs uppercase font-bold">
                <span className="text-primary">Infrastructure</span>
                <span className="opacity-50">•</span>
                <span className="opacity-60">2023</span>
              </div>

              <h2 className="card-title text-2xl mt-2">
                Distributed Task Queue
              </h2>

              <p className="text-base-content/70">
                Architected a fault-tolerant job processing system capable of
                handling 50k+ concurrent tasks. Implemented custom deadlock
                detection using Redis to ensure 99.9% consistency.
              </p>

              <div className="flex flex-wrap gap-2 mt-3">
                <div className="badge badge-outline">TypeScript</div>
                <div className="badge badge-outline">Go</div>
                <div className="badge badge-outline">Redis</div>
                <div className="badge badge-outline">Docker</div>
                <div className="badge badge-outline">AWS SQS</div>
              </div>

              <div className="card-actions mt-6">
                <button className="btn btn-outline btn-sm">Source</button>
                <button className="btn btn-primary btn-sm">Live Demo</button>
              </div>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="mb-16">
          <div className="card bg-base-100 shadow-md hover:shadow-lg transition">
            <div className="card-body">
              <div className="flex items-center gap-2 text-xs uppercase font-bold">
                <span className="text-primary">Data Engineering</span>
                <span className="opacity-50">•</span>
                <span className="opacity-60">2023</span>
              </div>

              <h2 className="card-title text-2xl mt-2">
                Real-time Analytics Pipeline
              </h2>

              <p className="text-base-content/70">
                Built a streaming ingestion engine reducing latency to
                sub-second for 10M+ daily events. Optimized PostgreSQL indexing
                improving dashboard load times by 70%.
              </p>

              <div className="flex flex-wrap gap-2 mt-3">
                <div className="badge badge-outline">Python</div>
                <div className="badge badge-outline">Kafka</div>
                <div className="badge badge-outline">PostgreSQL</div>
                <div className="badge badge-outline">Kubernetes</div>
              </div>

              <div className="card-actions mt-6">
                <button className="btn btn-outline btn-sm">Source</button>
                <button className="btn btn-primary btn-sm">Live Demo</button>
              </div>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="mb-16">
          <div className="card bg-base-100 shadow-md hover:shadow-lg transition">
            <div className="card-body">
              <div className="flex items-center gap-2 text-xs uppercase font-bold">
                <span className="text-primary">Security</span>
                <span className="opacity-50">•</span>
                <span className="opacity-60">2022</span>
              </div>

              <h2 className="card-title text-2xl mt-2">
                OAuth2.1 Identity Provider
              </h2>

              <p className="text-base-content/70">
                Developed a custom identity provider following OAuth2.1 and OIDC
                specs. Implemented strict CORS policies and JWT validation to
                mitigate CSRF and XSS.
              </p>

              <div className="flex flex-wrap gap-2 mt-3">
                <div className="badge badge-outline">Rust</div>
                <div className="badge badge-outline">SQLite</div>
                <div className="badge badge-outline">OAuth2</div>
                <div className="badge badge-outline">Docker</div>
              </div>

              <div className="card-actions mt-6">
                <button className="btn btn-outline btn-sm">Source</button>
                <button className="btn btn-primary btn-sm">Live Demo</button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-24 pt-10 border-t text-center text-base-content/60">
          <p className="mb-4 text-sm">Interested in technical collaboration?</p>
          <a className="text-primary text-xl font-bold hover:underline">
            hello@devportfolio.com
          </a>

          <div className="flex justify-center gap-6 mt-6">
            <button className="btn btn-ghost btn-sm">GitHub</button>
            <button className="btn btn-ghost btn-sm">LinkedIn</button>
            <button className="btn btn-ghost btn-sm">Terminal</button>
          </div>
        </footer>
      </main>
    </div>
  );
}
