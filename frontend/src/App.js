import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import ProjectList from './components/ProjectList';
import NewProjectForm from './components/NewProjectForm';
import Project from './components/Project';

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch('http://localhost:9292/projects');
      const data = await response.json();
      setProjects(data);
    };
    fetchProjects();
  }, []);

  const handleCreateProject = (project) => {
    setProjects([...projects, project]);
  };

  const handleUpdateProject = (updatedProject) => {
    const index = projects.findIndex((project) => project.id === updatedProject.id);
    setProjects([
      ...projects.slice(0, index),
      updatedProject,
      ...projects.slice(index + 1),
    ]);
  };

  const handleDeleteProject = async (projectId) => {
    await fetch(`/projects/${projectId}`, { method: 'DELETE' });
    setProjects(projects.filter((project) => project.id !== projectId));
  };

  return (
    <BrowserRouter>
      <Navbar /> 
      <Switch> 
        <Route exact path="/">
          <Dashboard projects={projects} />
        </Route>
        <Route exact path="/projects">
          <ProjectList projects={projects} />
        </Route>
        <Route exact path="/projects/new">
          <NewProjectForm onCreate={handleCreateProject} />
        </Route>
        <Route exact path="/projects/:id">
          <Project onUpdate={handleUpdateProject} onDelete={handleDeleteProject} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
