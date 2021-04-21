import React from "react";
import "./Home.css";

export default function Home({ darkMode }) {
  return (
    <div className="flexcenter">
      <h1 style={darkMode ? { color: "white", fontSize: "6rem" } : { color: "black", fontSize: "6rem" }}> Bienvenidos</h1>
    </div>
  );
}