import netflixLogo from "../public/netflixlogo.jpg";

const Projects = () => {
  const projects = [
    {
      name: "Netflix Clone",
      image: netflixLogo,
      url: "https://netflix-clone-8a178.web.app/",
      detail: "A clone of Netflix using react and firebase.",
    },
  ];
  return (
    <div className="projects">
      {projects.map((project) => {
        return (
          <a href={project.url}>
            <div className="box">
              <img className="box_image" src={project.image} alt="" />
              <div className="content">
                <h2 className="title">{project.name}</h2>
                <p className="detail">{project.detail}</p>
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default Projects;
