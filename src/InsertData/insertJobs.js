import React, { useState } from "react"; 
import "../CSS/InsertData/insertData.css";
import {FaArrowLeft} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function InsertJobs() {

  const [jobs, setJobs] = useState({jobName: "", totVac: "", compName: "", lastDate: "", ageLimit: "", salary: "", apply: "", website: ""})
  const [load, setLoad] = useState(true)

  function handleInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    setJobs({...jobs, [name]: value});
  }

  fetch("https://project-manzil.herokuapp.com/api/jobs")
    .then(data => setLoad(false))

  function handleSubmit(e) {
    e.preventDefault();
    window.alert("Registered");
    fetch("https://project-manzil.herokuapp.com/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jobs),
    });
    setJobs({ jobName: "", totVac: "", compName: "", lastDate: "", ageLimit: "", salary: "", apply: "", website: "" });
  }

  const navigate = useNavigate();
  function onIcon() {
    navigate("/ngo/dataInput")
  }

  return (
    <div className="IDbody">
      <div className="IDsubBody">
        <FaArrowLeft className="IDarrow" onClick={onIcon}/>
        <h1 className="IDtitle">
          Looking for recruits? Enter your information and we'll update it on the portal.
        </h1>
        {load ? (
          <h1 className="IDload">Loading...</h1>
        ) : (
            <form
              method="POST"
              action="https://project-manzil.herokuapp.com/api/jobs"
              className="IDform"
            >
              <input
                placeholder="Job name"
                required={true}
                name="jobName"
                value={jobs.jobName}
                onChange={handleInput}
              />
              <input
                placeholder="Total Vacancy"
                required={true}
                name="totVac"
                value={jobs.totVac}
                onChange={handleInput}
              />
              <input
                placeholder="Govt Org"
                required={true}
                name="compName"
                value={jobs.compName}
                onChange={handleInput}
              />
              <input
                placeholder="Last Date"
                required={true}
                name="lastDate"
                value={jobs.lastDate}
                onChange={handleInput}
              />
              <input
                placeholder="Age Limit"
                required={true}
                name="ageLimit"
                value={jobs.ageLimit}
                onChange={handleInput}
              />
              <input
                placeholder="Salary"
                required={true}
                name="salary"
                value={jobs.salary}
                onChange={handleInput}
              />
              <input
                placeholder="Apply"
                required={true}
                name="apply"
                value={jobs.apply}
                onChange={handleInput}
              />
              <input
                placeholder="Website"
                required={true}
                name="website"
                value={jobs.website}
                onChange={handleInput}
              />
              <div onClick={handleSubmit} className="IDbutton"><p>Submit</p></div>
            </form>
        )}
      </div>
    </div>
  );
}

export default InsertJobs;