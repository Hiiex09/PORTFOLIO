import { Link } from "react-router-dom";
import img from "../assets/portfolio_img.JPG";

const Portfolio = () => {
  return (
    <div className="bg-base-200 min-h-screen">
      {/* ================= HERO ================= */}
      <div className="hero py-20 bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse gap-16 container mx-auto">
          <div className="rounded-2xl shadow-2xl min-h">
            <img
              src={img}
              alt="Frontend Developer"
              className="max-w-sm rounded-lg shadow-2xl"
            />
          </div>

          <div className="max-w-2xl">
            <div className="badge badge-primary badge-outline mb-6">
              Software Engineer
            </div>

            <h1 className="text-5xl font-bold">Hi, I'm Devon Barangan</h1>

            <p className="py-6 text-lg opacity-80">
              BSIT graduate and Junior Full Stack Developer with hands-on
              experience in building responsive web applications using React.js,
              JavaScript, TypeScript, and Tailwind CSS. Experienced in RESTful
              API integration, UI/UX improvement, performance optimization, and
              technical support. Passionate about creating clean, efficient, and
              user-focused frontend solutions.
            </p>

            <div className="flex gap-4">
              <button className="btn btn-primary">
                <Link to="/projects">View My Work</Link>
              </button>
              <button className="btn btn-outline">Get in Touch</button>
            </div>
          </div>
        </div>
      </div>

      {/* ================= PROJECTS ================= */}
      <section id="work" className="py-20 bg-base-100">
        <div className="container mx-auto px-6">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold">Selected Projects</h2>
            <p className="opacity-70 mt-4">
              A collection of work that defines my engineering philosophy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Project Card */}
            <div className="card bg-base-200 shadow-xl">
              <figure>
                <img src="https://via.placeholder.com/600x400" alt="Project" />
              </figure>
              <div className="card-body">
                <h3 className="card-title">
                  Barangay Information Portal System
                </h3>
                <p>
                  The Barangay Information Portal System is a web-based platform
                  that digitizes and centralizes barangay services to improve
                  communication, efficiency, transparency, and accessibility. It
                  reduces manual processes and addresses issues like long
                  queues, poor record-keeping, limited information access, and
                  inefficient service delivery.
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  <div className="badge badge-outline">Mongo DB</div>
                  <div className="badge badge-outline">Express</div>
                  <div className="badge badge-outline">React</div>
                  <div className="badge badge-outline">Node</div>
                </div>

                <div className="card-actions justify-end mt-4">
                  <button className="btn btn-primary btn-sm">
                    View Project
                  </button>
                </div>
              </div>
            </div>

            <div className="card bg-base-200 shadow-xl">
              <figure>
                <img src="https://via.placeholder.com/600x400" alt="Project" />
              </figure>
              <div className="card-body">
                <h3 className="card-title">
                  Student Evaluation System (Teachers)
                </h3>
                <p>
                  The Student Evaluation System is a web-based application
                  developed as a capstone project at Cebu Eastern College. It is
                  designed to improve the academic environment by enabling
                  transparent, interactive, and constructive feedback between
                  students and teachers.
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  <div className="badge badge-outline">
                    DaisyUI Tailwind CSS
                  </div>
                  <div className="badge badge-outline">Php</div>
                  <div className="badge badge-outline">Javascript</div>
                  <div className="badge badge-outline">MySql</div>
                </div>

                <div className="card-actions justify-end mt-4">
                  <button className="btn btn-primary btn-sm">
                    View Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TOOLS ================= */}
      <section id="tools" className="py-20 bg-base-200">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-10">Toolbox</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              "JavaScript",
              "React",
              "Node.js",
              "SQL",
              "MongoDB",
              "Tailwind",
            ].map((tool) => (
              <div key={tool} className="card bg-base-100 shadow-md">
                <div className="card-body items-center text-center p-6">
                  <h3 className="font-semibold">{tool}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer
        id="contact"
        className="footer footer-center p-10 bg-base-100 text-base-content"
      >
        <aside>
          <h2 className="text-2xl font-bold">Let's build something great.</h2>
          <p className="opacity-70 mt-2">
            Open to freelance and full-time opportunities.
          </p>

          <div className="mt-6 flex gap-4">
            <a className="btn btn-primary">Email Me</a>
            <a className="btn btn-outline">LinkedIn</a>
          </div>

          <p className="text-sm opacity-50 mt-6">© 2026 Barangan Devon E.</p>
        </aside>
      </footer>
    </div>
  );
};

export default Portfolio;
