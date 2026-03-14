function Projects() {
  return (
    <section className="py-20 px-10">
      <h2 className="text-4xl font-bold mb-10">Selected Projects</h2>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="card bg-base-200 shadow-xl">
          <figure className="mx-auto w-full sm:max-w-md md:max-w-lg lg:max-w-xl">
            <img
              src="https://picsum.photos/501/300"
              className="w-full h-auto object-cover rounded-lg"
              alt="Project Screenshot"
            />
          </figure>

          <div className="card-body">
            <h2 className="card-title">
              Student Evaluation System ( Capstone Project )
            </h2>

            <p>Headless commerce website built with Next.js.</p>

            <div className="card-actions">
              <button className="btn btn-primary btn-sm">View Project</button>
            </div>
            <div className="flex flex-wrap gap-2 py-5">
              <div className="badge badge-outline">Daisy UI</div>
              <div className="badge badge-outline">Php</div>
              <div className="badge badge-outline">MySql</div>
            </div>
          </div>
        </div>
        <div className="card bg-base-200 shadow-xl">
          <figure className="mx-auto w-full sm:max-w-md md:max-w-lg lg:max-w-xl">
            <img
              src="https://picsum.photos/500/300"
              className="w-full h-auto object-cover rounded-lg"
              alt="Project Screenshot"
            />
          </figure>

          <div className="card-body">
            <h2 className="card-title">Barangay Information Portal System</h2>

            <p>
              Barangay Information Portal System is a web-based application
              designed to digitize and centralize barangay services in the
              Philippines. It aims to improve communication between barangay
              officials and residents, reduce manual processes, and promote
              transparency, efficiency, and accessibility in local governance.
            </p>

            <div className="card-actions">
              <button className="btn btn-primary btn-sm">View Project</button>
            </div>
            <div className="flex flex-wrap gap-2 py-5">
              <div className="badge badge-outline">React</div>
              <div className="badge badge-outline">Node JS</div>
              <div className="badge badge-outline">Mongo DB</div>
              <div className="badge badge-outline">Docker</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
