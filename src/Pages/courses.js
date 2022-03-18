import React from "react";
import "../CSS/Pages/courses.css";
import signLang from "../assets/signLang.png"

function Courses() {

  return (
    <div className="courseBody">
      <div className="courseSubBody">
        <div className="courseHead">
          <h1>Courses</h1>
          <p>Hello world</p>
          <div className="courseCard">
            <img src={signLang} alt="card" />
            <h2>
              Number 1 to 9 | Sign Language Interpretation
            </h2>
            <p>FREE</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Courses;