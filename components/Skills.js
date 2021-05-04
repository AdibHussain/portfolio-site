import ProgressBar from "./ProgressBar";

const Skills = () => {
  const skills = [
    { completed: 100, name: "HTML" },
    { completed: 100, name: "CSS" },
    { completed: 95, name: "JavaScript" },
    { completed: 90, name: "React" },
    { completed: 90, name: "Express" },
    { completed: 70, name: "MongoDB" },
    { completed: 50, name: "Firebase" },
    { completed: 80, name: "PostGreSQL" },
    { completed: 90, name: "Git" },
    { completed: 50, name: "AWS" },
  ];

  return (
    <div className="skills">
      {skills.map((skill, idx) => (
        <ProgressBar
          key={idx}
          bgcolor={skill.bgcolor}
          completed={skill.completed}
          name={skill.name}
          className="progress_bar"
        />
      ))}
    </div>
  );
};

export default Skills;
