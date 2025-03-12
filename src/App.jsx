import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Profile from "./components/Profile";
import WorkProcess from "./components/WorkProcess";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
const App = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Profile />
      <WorkProcess />
      <Blog />
      <Contact />
    </>
  );
};

export default App;
