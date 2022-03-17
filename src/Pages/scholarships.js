import React, { useState } from "react";
import ScholarshipCard from "../Components/scholarshipCard";
import "../CSS/Pages/scholarships.css";
import {FaSearch} from "react-icons/fa";

function Scholarships() {

  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);
  const [search, setSearch] = useState("");

  function updateSearch(e) {
    setSearch(e.target.value)
  }

  fetch("https://project-manzil.herokuapp.com/api/scholarships")
    .then(response => response.json())
    .then(data => {
      setData(data)
      setLoad(false)
    })

  return (
    <div className="scholarshipBody">
      <div className="scholarshipSubBody">
        <div className="scholarshipTitle">
          <h1>Scholarships</h1>
          <p>Learning is a process. Go ahead and explore it more</p>
        </div>

        <div className="scholarshipSearch">
          <div className="scholarshipSearchOutline">
            <FaSearch className="scholarshipSearchIcon" />
            <input
              type="text"
              placeholder="Enter scholarship position"
              value={search}
              onChange={updateSearch}
            />
          </div>
        </div>

        {/* <div className="scholarshipGridBody"> */}
        {load ? (
          <h3>loading...</h3>
        ) : (
          <div className="scholarshipGrid">
            {data
              .filter((data) => {
                return data.scholarshipName.toLowerCase().includes(search);
              })
              .map((oneData) => (
                <ScholarshipCard
                  title={oneData.scholarshipName}
                  eligibility={oneData.eligibility}
                  desc={oneData.desc}
                  benefits={oneData.benefits}
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

export default Scholarships;