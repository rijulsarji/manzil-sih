import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../CSS/InsertData/insertData.css";

function InsertScholarships() {
  const [scholarships, setScholarships] = useState({
    scholarshipName: "",
    eligibility: "",
    benefits: "",
    contact: "",
    desc: "",
    website: "",
  });

  const [load, setLoad] = useState(true);

  function handleInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    setScholarships({ ...scholarships, [name]: value });
  }

  fetch("https://project-manzil.herokuapp.com/api/scholarships")
    .then((data) =>
      setLoad(false)
    );

  function handleSubmit(e) {
    e.preventDefault();
    window.alert("Registered");
    fetch("https://project-manzil.herokuapp.com/api/scholarships", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(scholarships),
    });
    setScholarships({ scholarshipName: "", eligibility: "", benefits: "", contact: "", desc: "", skill: "", website: "" });
  }

  const navigate = useNavigate();
  function onIcon() {
    navigate("/ngo/dataInput");
  }

  return (
    <div className="IDbody">
      <div className="IDsubBody">
        <FaArrowLeft className="IDarrow" onClick={onIcon} />
        <h1 className="IDtitle">
          Looking for recruits? Enter your information and we'll update it on
          the portal.
        </h1>
        {load ? (
          <h1 className="IDload">Loading...</h1>
        ) : (
          <form
            method="POST"
            action="https://project-manzil.herokuapp.com/api/scholarships"
            className="IDform"
          >
            <input
              placeholder="Scholarship name"
              required={true}
              name="scholarshipName"
              value={scholarships.scholarshipName}
              onChange={handleInput}
            />
            <input
              placeholder="Eligibility"
              required={true}
              name="eligibility"
              value={scholarships.eligibility}
              onChange={handleInput}
            />
            <input
              placeholder="Benefits"
              required={true}
              name="benefits"
              value={scholarships.benefits}
              onChange={handleInput}
            />
            <input
              placeholder="Description"
              required={true}
              name="desc"
              value={scholarships.desc}
              onChange={handleInput}
            />
            <input
              placeholder="Contact"
              required={true}
              name="contact"
              value={scholarships.contact}
              onChange={handleInput}
            />
            <input
              placeholder="website"
              required={true}
              name="website"
              value={scholarships.website}
              onChange={handleInput}
            />
            <div onClick={handleSubmit} className="IDbutton">
              <p>Submit</p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default InsertScholarships;
