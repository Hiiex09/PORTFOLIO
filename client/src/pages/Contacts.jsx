import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="min-h-screen bg-base-200 text-base-content flex flex-col">
      {/* Main */}
      <main className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="max-w-6xl w-full grid lg:grid-cols-12 gap-12">
          {/* LEFT SIDE */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="badge badge-primary badge-outline mb-4">
                Available for projects
              </div>

              <h1 className="text-4xl lg:text-5xl font-black leading-tight">
                Let's <span className="text-primary">collaborate.</span>
              </h1>

              <p className="mt-4 text-base-content/70 max-w-md">
                Have a complex technical challenge or a simple question? My
                inbox is always open for interesting opportunities.
              </p>
            </div>

            {/* Links */}
            <div className="space-y-3">
              <Link
                to="https://github.com/Hiiex09"
                className="btn btn-outline w-full justify-between"
              >
                GitHub Repository
                <span>↗</span>
              </Link>
              <Link
                to="https://www.linkedin.com/in/devon-barangan-666222302/"
                className="btn btn-outline w-full justify-between"
              >
                LinkedIn Profile
                <span>↗</span>
              </Link>

              <button className="btn btn-primary w-full justify-between">
                Download Resume
                <span className="text-xs opacity-70">1.2 MB</span>
              </button>
            </div>

            <div className="hidden lg:block text-xs font-mono text-base-content/50 pt-6 space-y-1">
              <p>// Listening for incoming connections...</p>
              <p>// location: Remote / Global</p>
              <p>// stack: React, Node, Tailwind, TypeScript</p>
            </div>
          </div>

          {/* RIGHT SIDE - FORM */}
          <div className="lg:col-span-7">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body space-y-6">
                <h2 className="card-title text-2xl">Send a Message</h2>

                {/* Form */}
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-semibold">Name</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Alex Dev"
                        className="input input-bordered w-full"
                      />
                    </div>

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-semibold">Email</span>
                      </label>
                      <input
                        type="email"
                        placeholder="alex@example.com"
                        className="input input-bordered w-full"
                      />
                    </div>
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold">Subject</span>
                    </label>
                    <select className="select select-bordered w-full">
                      <option>Project Inquiry</option>
                      <option>Collaboration</option>
                      <option>Saying Hello</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold">Message</span>
                    </label>
                    <textarea
                      className="textarea textarea-bordered h-32"
                      placeholder="Describe your project or query..."
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary w-full">
                    Send Message
                  </button>

                  <div className="text-center text-xs text-base-content/50">
                    Secure and encrypted connection
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer footer-center p-8 bg-base-100 border-t">
        <div>
          <p className="text-sm text-base-content/60">
            © 2024 DevPortfolio. Built with precision and care.
          </p>
        </div>
        <div className="grid grid-flow-col gap-6">
          <button className="btn btn-ghost btn-sm">Email</button>
          <button className="btn btn-ghost btn-sm">JS</button>
          <button className="btn btn-ghost btn-sm">API</button>
        </div>
      </footer>
    </div>
  );
}
