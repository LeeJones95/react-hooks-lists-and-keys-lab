import React from "react";

function ProjectItem({ name, about, technologies }) {

  const technologiesNew = technologies.map((technology) => {
    return <span key={technology}> {technology} </span>
  })

  console.log(technologiesNew)
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
    {technologiesNew}
      </div>
    </div>
  );
}

export default ProjectItem;
