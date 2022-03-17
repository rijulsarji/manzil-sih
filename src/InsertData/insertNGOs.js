import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../CSS/InsertData/insertData.css"

function InsertNGOs() {
  const [NGOs, setNGOs] = useState({
    NGOName: "",
    compName: "",
    salary: "",
    skill: "",
    NGOLink: "",
  });

  const [load, setLoad] = useState(true)

  function handleInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    setNGOs({ ...NGOs, [name]: value });
  }

  fetch("https://project-manzil.herokuapp.com/api/NGOs")
    .then((data) =>
      setLoad(false)
    );

  function handleSubmit(e) {
    e.preventDefault();
    window.alert("Registered");
    fetch("https://project-manzil.herokuapp.com/api/NGOs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(NGOs),
    });
    setNGOs({
      NGOName: "",
      compName: "",
      salary: "",
      skill: "",
      NGOLink: "",
    });
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
            action="https://project-manzil.herokuapp.com/api/NGOs"
            className="IDform"
          >
            <input
              placeholder="NGO name"
              required={true}
              name="NGOName"
              value={NGOs.NGOName}
              onChange={handleInput}
            />
            <input
              placeholder="Company name"
              required={true}
              name="compName"
              value={NGOs.compName}
              onChange={handleInput}
            />
            <input
              placeholder="Salary"
              required={true}
              name="salary"
              value={NGOs.salary}
              onChange={handleInput}
            />
            <input
              placeholder="Skills Reqd."
              required={true}
              name="skill"
              value={NGOs.skill}
              onChange={handleInput}
            />
            <input
              placeholder="NGO link"
              required={true}
              name="NGOLink"
              value={NGOs.NGOLink}
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

export default InsertNGOs;