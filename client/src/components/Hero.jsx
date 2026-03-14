import profile from "../assets/portfolio_img.JPG";

function Hero() {
  return (
    <section className="hero min-h-screen mt-10 lg:mt-10">
      <div className="hero-content flex-col lg:flex-row justify-between">
        <img src={profile} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold py-2">
            Building the Digital Future
          </h1>

          <p className="py-6">
            Hi, I'm Devon Barangan, a passionate <b>Software Engineer</b> with
            over 5 years of experience in full-stack development. I specialize
            in creating seamless and efficient web applications.
          </p>

          <div className="flex gap-2">
            {/* <div className="badge badge-outline">AI</div> */}
            <div className="badge badge-outline">Software Engineer</div>
            <div className="badge badge-outline">Technical Support</div>
            {/* <div className="badge badge-outline">Frontend Developper</div>
            <div className="badge badge-outline">Backend Developer</div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
