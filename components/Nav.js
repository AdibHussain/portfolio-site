import React from "react";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <div className="nav">
      <Link to="about" className="nav_list_item" smooth={true} duration={500}>
        <h2>About</h2>
      </Link>
      <Link to="skills" className="nav_list_item" smooth={true} duration={500}>
        <h2>Skills</h2>
      </Link>
      <Link
        to="projects"
        className="nav_list_item"
        smooth={true}
        duration={500}
      >
        <h2>Projects</h2>
      </Link>
    </div>
  );
};

export default Nav;
