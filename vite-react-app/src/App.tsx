import { useState } from "react";
import "./App.css";
import { Nav } from "./components/Nav";
import { Projects } from "./components/Projects";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import {Home} from "./components/Home"
import { Route, Routes } from "react-router-dom";
import { projects } from "./data/data";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/projects" element={<Projects projects={projects} />}></Route>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
