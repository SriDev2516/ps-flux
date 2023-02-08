import React from "react";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import CoursesPage from "./CoursesPage";
import HomePage from "./HomePage";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Route path="/" exact component={HomePage}></Route>
      <Route path="/courses" component={CoursesPage}></Route>
      <Route path="/about" component={AboutPage}></Route>
    </div>
  );
}

export default App;
