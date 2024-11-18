import React from "react";
import Info from "./components/Info";
import Home from "./components/Home";

import "./App.css";

import { Routes, Route, Link, Navigate } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";

function App() {
  const styles = {
    backgroundColor: "aqua",
    fontWeight: "bold",
  };

  return (
    <>
      {/* NAVIGATION */}
      <nav className="navigation">
        {/* <a href="/">Home</a> | <a href="/about">About</a> |{" "}
        <a href="/info">Info</a> |<a href="/contact">Contact</a> */}
        <Link to={"/"}>Home</Link> | <Link to={"/info"}>Information</Link> |
        <Link to={"/contact"}>Countact us</Link> |
        <Link to={"/about"}>About us</Link> |<Link to={"/login"}>Sign In</Link>
      </nav>

      {/* ROUTES */}
      <div
        style={{
          padding: "2em",
          backgroundColor: "gray",
          color: "white",
          minHeight: "50vh",
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
      </div>

      <footer style={styles}>
        <h1>this is &copy;2024 allright reserved</h1>
      </footer>
    </>
  );
}

export default App;
