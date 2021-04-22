import React from "react";
import "./Home.css";

export default function Home({ darkMode }) {
  return (
    <div className="flexcenter">
      <h1 style={darkMode ? { color: "white", fontSize: "4rem" } : { color: "black", fontSize: "4rem" }}> Bienvenidos</h1>
    </div>
  );
}