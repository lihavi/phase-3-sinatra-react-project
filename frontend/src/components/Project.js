import React, { useState } from 'react';

function Project({ project, onUpdate }) {
  const [status, setStatus] = useState(project.status);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(`http://localhost:9292/projects/${project.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status }),
    });
    const data = await response.json();
    onUpdate(data);
  };

  return (
    <div>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="status" className="form-label">
            Status
          </label>
          <select
            className="form-select"
            id="status"
            value={status}
            onChange={(event) => setStatus(event.target.value)}
            required
          >
            <option value="not started">Not Started</option>
            <option value="in progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
      <p>Members: {project.members.join(', ')}</p>
    </div>
  );
}

export default Project;

