import React, { useState } from "react";
import JobCard from "../Components/jobCard";
import "../CSS/Pages/jobs.css";
import { FaSearch } from "react-icons/fa";
import {AiOutlineLoading3Quarters} from "react-icons/ai"

function Jobs() {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);
  const [search, setSearch] = useState("");

  function updateSearch(e) {
    setSearch(e.target.value);
  }

  fetch("https://project-manzil.herokuapp.com/api/jobs")
    .then((response) => response.json())
    .then((data) => {
      setData(data);
      setLoad(false);
    });

  return (
    <div className="jobBody">
      <div className="jobSubBody">
        <div className="jobTitle">
          <h1>Jobs</h1>
          <p>
            The oppurtunity has knocked the door. Go ahead and explore it more.
          </p>
        </div>

        <div className="jobSearch">
          <div className="jobSearchOutline">
            <FaSearch className="jobSearchIcon" />
            <input
              type="text"
              placeholder="Enter job position"
              value={search}
              onChange={updateSearch}
            />
          </div>
        </div>

        {/* <div className="jobGridBody"> */}
        {load ? (
          <div className="loading">
            <AiOutlineLoading3Quarters />
          </div>
        ) : (
          <div className="jobGrid">
            {data
              .filter((data) => {
                return data.jobName.toLowerCase().includes(search);
              })
              .map((oneData) => (
                <JobCard
                  jobName={oneData.jobName}
                  totVac={oneData.totVac}
                  compName={oneData.compName}
                  lastDate={oneData.lastDate}
                  ageLimit={oneData.ageLimit}
                  salary={oneData.salary}
                  apply={oneData.apply}
                  website={oneData.website}
                />
              ))}
          </div>
        )}
        {/* </div> */}
      </div>
    </div>
  );
}

export default Jobs;
