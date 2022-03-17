import React from "react";
import "../CSS/Components/jobCard.css";

function JobCard(props) {
  return (
    <div className="JCbody">
      <h1>{props.jobName}</h1>
      <p>
        <span>Vacancy: </span>
        {props.totVac}
      </p>
      <p>
        <span>Govt. Org.: </span>
        {props.compName}
      </p>
      <p>
        <span>Last Date: </span>
        {props.lastDate}
      </p>
      <p>
        <span>Age Limit: </span>
        {props.ageLimit}
      </p>
      <p>
        <span>Salary: </span>
        {props.salary}
      </p>
      <p>
        <span>Apply: </span>
        {props.apply}
      </p>
      <p>
        <span>Website: </span>
        {props.website}
      </p>
    </div>
  );
}

export default JobCard;
