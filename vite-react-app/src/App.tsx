import { useState } from "react";
import "./App.css";
import { Nav } from "./components/Nav";
import { Projects } from "./components/Projects";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Route, Routes } from "react-router-dom";
import { projects } from "./data/data";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/" element={<Projects projects={projects} />}></Route>
      </Routes>
    </div>
  );
}

export default App;
