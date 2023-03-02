import React from 'react';
import Project from './Project';

function ProjectList({ projects }) {
  return (
    <div className="container mt-5">
      <h1>Projects</h1>
      {projects.length > 0 ? (
        <ul className="list-group mt-3">
          {projects.map((project) => (
            <li key={project.id} className="list-group-item">
              <Project project={project} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No projects yet.</p>
      )}
    </div>
  );
}

export default ProjectList;
