import React from "react";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import HomePage from "./HomePage";

function App() {
  function getPage() {
    const path = window.location.pathname;
    if (path === "/about") return <AboutPage />;
    else {
      return <HomePage />;
    }
  }
  return (
    <div className="container-fluid">
      <Header />
      {getPage()}
    </div>
  );
}

export default App;
