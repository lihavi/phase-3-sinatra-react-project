import React from 'react'

function Projects() {
  return (

<>
<div className="project-page">
  <h1 className="project-page__title">My Projects</h1>

  <div className="project">
    <div className="project__header">
      <h2 className="project__title">Project Title</h2>
      <p className="project__date">January 1, 2023</p>
    </div>
    <p className="project__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo metus euismod, vehicula velit vel, pellentesque urna. Donec venenatis, sem eu malesuada dapibus, lectus tellus ultricies arcu, ut convallis dolor massa vel metus.</p>
    <div className="project__footer">
      <ul className="project__skills">
        <li className="project__skill">Skill 1</li>
        <li className="project__skill">Skill 2</li>
        <li className="project__skill">Skill 3</li>
      </ul>
      <div className="project__buttons">
        <button className="project__button project__button--edit">Edit</button>
        <button className="project__button project__button--delete">Delete</button>
      </div>
    </div>
  </div>
</div>


</>
  )
}

export default Projects;
