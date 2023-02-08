import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="jumbotron">
      <h1>Pluralsight Administration</h1>
      <p>React, Flux, and React Router for Ultra-responsive web apps.</p>
      <Link className="btn btn-primary" to="about">
        About
      </Link>
    </div>
  );
}

export default HomePage;
