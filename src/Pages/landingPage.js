import React from "react";
import "../CSS/Pages/landingPage.css"

import landingPageImg from "../assets/Landing Page/landingPage.png"
import { Link } from "react-router-dom";
import logo from "../assets/Logo.png"
import Login from "../Components/GLogin";

function LandingPage() {

  return (
    <div className="landingPageBody">
      <img src={logo} alt="logo" className="LPlogo" />

      <div className="LPtopHalf">
        <h1>Feeling lack of zeal?<br />Welcome to Manzil</h1>
        <img src={landingPageImg} alt="landing page img" />
      </div>

      <div className="LPlowerHalf">
        <div className="LPlowerLeft">
          <h3>For Learners</h3>
          <p>
            Never stop learning, because life never stops teaching.
          </p>
          <Link to="/user" className="LPlowerButton">
            <div>
              <p>Join Now</p>
            </div>
          </Link>
        </div>

        <div className="LPlowerRight">
          <h3>For NGOs</h3>
          <p>
            There is no greater joy nor greater reward than to make a fundamental difference in someone's life.
          </p>

          <div className="g-signin"><Login /></div>
          {/* <Link to="/" className="LPlowerButton">
            <div>
              <p>Login</p>
            </div>
          </Link> */}
        </div>
      </div>
    </div>
  );
}

export default LandingPage;