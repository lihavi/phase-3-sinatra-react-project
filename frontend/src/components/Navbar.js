import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/projects">Project List</Link>
        </li>
        <li>
          <Link to="/projects/new">New Project</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
