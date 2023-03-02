import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar/>
        <Routes>
        <Route exact path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

const Home = () => {
  return(
    <div>
      <h1>Welcome to Project Management App!</h1>

    </div>
  )
}


export default App;