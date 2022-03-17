import React from "react";
import FooterComp from "../Components/footer";
import Intro from "../Components/intro";
import Navbar from "../Components/navbar";
import Offering from "../Components/offering";
import Welcome from "../Components/welcome";
import "../CSS/Pages/home.css"
import Scholarships from "./scholarships";

function Home() {

  return (
    <div className="homeBody">
      <Intro />
      <Welcome />
      <Offering />
      <FooterComp />
    </div>
  )
}

export default Home;