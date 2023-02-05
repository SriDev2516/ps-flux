import React from "react";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import CoursesPage from "./CoursesPage";
import HomePage from "./HomePage";
function getPage() {
  const path = window.location.pathname;
  if (path === "/about") return <AboutPage />;
  if (path === "/courses") return <CoursesPage />;
  return <HomePage />;
}
function App() {
  return (
    <div className="container-fluid">
      <Header />
      {getPage()}
    </div>
  );
}

export default App;
