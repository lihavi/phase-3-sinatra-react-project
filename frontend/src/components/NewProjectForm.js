import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function NewProjectForm({ onCreate }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [members, setMembers] = useState('');
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('/projects', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, description, members: members.split(',') }),
    });
    const data = await response.json();
    onCreate(data);
    history.push('/dashboard');
  };

  return (
    <div className="container mt-5">
      <h1>New Project</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            rows="3"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="members" className="form-label">
            Members (separated by commas)
          </label>
          <input
            type="text"
            className="form-control"
            id="members"
            value={members}
            onChange={(event) => setMembers(event.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Create
        </button>
      </form>
    </div>
  );
}

export default NewProjectForm;
