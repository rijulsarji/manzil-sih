import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../CSS/Components/navbar.css";
import logo from "../assets/Logo.png"

function Navbar() {

  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    window.sessionStorage.setItem("blind", toggle);
    if (toggle)
      window.alert(
        "This feature is for the visually impaired to assist them in using the websites.\nWebsite content can now be heard as you scroll on the home page. Along with this feature, the person can speak for navigating through the website.\nThe following commands are available:\nNavigate to/Go to Home page\nNavigate to/Go to Jobs page\nNavigate to/Go to Scholarships page\nNavigate to/Go to NGO page"
      );
  }, [toggle]);

  return (
    <div className="navbarBody">
      <img src={logo} alt="Logo" className="navbarLogo" />

      <div className="navbarRightSide">
        <div className="blindToggle">
          <input type="checkbox" onChange={() => setToggle(!toggle)} />
          <p>For the visually impaired</p>
        </div>

        <NavLink className="navbarLink" to="/user" activeClassName="active">Home</NavLink>
        <NavLink className="navbarLink" to="/user/scholarships" activeClassName="active">Scholarships</NavLink>
        <NavLink className="navbarLink" to="/user/home" activeClassName="active">Courses</NavLink>
        <NavLink className="navbarLink" to="/user/jobs" activeClassName="active">Jobs</NavLink>
        <NavLink className="navbarLink" to="/user/home" activeClassName="active">NGOs</NavLink>
      </div>
    </div>
  )
}

export default Navbar;