import { CodeXml } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="navbar bg-base-100 shadow-sm px-6 lg:px-20 sticky top-0 z-50">
      <div className="flex-1 inline-flex items-center gap-2">
        <CodeXml size={25} />
        <Link to="/">
          <a className="text-xl font-bold text-primary">Barangan Devon E.</a>
        </Link>
      </div>
      <div className="">
        <ul className="hidden md:flex gap-6">
          <li className="text-lg font-semibold">
            <Link to="/" className="link link-hover">
              Home
            </Link>
          </li>
          <li className="text-lg font-semibold">
            <Link to="/projects" className="link link-hover">
              Projects
            </Link>
          </li>
          <li className="text-lg font-semibold">
            <Link to="/skills" className="link link-hover">
              Skills
            </Link>
          </li>
          <li className="text-lg font-semibold">
            <Link to="/contacts" className="link link-hover">
              Contacts
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <button className="btn btn-primary btn-sm mx-4">Hire Me</button>
      </div>
    </header>
  );
};

export default Navbar;
