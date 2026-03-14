function Skills() {
  return (
    <section className="py-20 px-10">
      <h2 className="text-4xl font-bold mb-10">Skills</h2>

      <div className="grid md:grid-cols-3 gap-10">
        <div className="card bg-base-200 shadow-md p-6">
          <h3 className="text-xl font-bold">Frontend</h3>
          <ul>
            <li>React</li>
            <li>Next.js</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>

        <div className="card bg-base-200 shadow-md p-6">
          <h3 className="text-xl font-bold">Backend</h3>
          <ul>
            <li>Javascript</li>
            <li>Python</li>
            <li>C#</li>
          </ul>
        </div>

        <div className="card bg-base-200 shadow-md p-6">
          <h3 className="text-xl font-bold">DevOps</h3>
          <ul>
            <li>Docker</li>
            <li>CI/CD</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
