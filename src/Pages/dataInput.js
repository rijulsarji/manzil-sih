import React from "react";
import {Link} from "react-router-dom";
import { GoogleLogout } from "react-google-login";
import {useNavigate} from "react-router-dom";
import {FaArrowLeft} from "react-icons/fa";
import "../CSS/Pages/dataInput.css";

function DataInput() {
  const obj = sessionStorage.getItem("loginData")

  const clientId =
    "416912370993-k9ndtur6gle4gj1iq1p7okabbjn8g8ah.apps.googleusercontent.com";

  const navigate = useNavigate();

  const onSignoutSuccess = () => {
    alert("You have been logged out successfully");
    navigate("/")
  };

  return (
    <div className="DIbody"> 
      <FaArrowLeft className="DIicon" onClick={() => navigate("/")}/>
      <h1 className="DItitle">Hola amigo <span style={{color: "blue"}}>{obj}</span></h1>

      <h3 className="DIsubTitle">What do you want to add?</h3>

      <div className="DIlinks">
        <Link to="/api/jobs" className="DIlinkTag">
          <p>Jobs</p>
        </Link>
        <Link to="/api/scholarships" className="DIlinkTag">
          <p>Scholarships</p>
        </Link>
        <Link to="/api/NGOs" className="DIlinkTag">
          <p>NGOs</p>
        </Link>
        <Link to="/api/products" className="DIlinkTag">
          <p>Products</p>
        </Link>
      </div>

      <div className="gLogout">
        <GoogleLogout
          clientId={clientId}
          buttonText="Sign out from Manzil"
          onLogoutSuccess={onSignoutSuccess}
          className="gButton"
        ></GoogleLogout>
      </div>
    </div>
  );
}

export default DataInput;