import React from "react";
import "../CSS/Components/footer.css";
import Footer from "../assets/Footer.png";

function FooterComp() {

  return (
    <div className="footerBody">
      <div className="footerSubBody">
        <h1>
          Let's Connect!
        </h1>
        <div className="footerLinks">
          <a href="/">Share your story</a> | <a href="/">Contact Us</a> | <a href="/">Share your information</a>
        </div>
        <p>
          Made with pride by Team Empower
        </p>
      </div>
        
      <div className="footerImg"></div>
    </div>
  )
}

export default FooterComp;