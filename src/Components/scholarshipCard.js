import React from "react";
import "../CSS/Components/scholarshipCard.css"
import cap from "../assets/aboutScholarCap.png";

function ScholarshipCard(props) {

  return (
    <div className="SCbody">
        <img src={cap} alt="cap" />
        <h1>{props.title}</h1>
        <p><span>Eligibility: </span>{props.eligibility}</p>
        <p><span>Description: </span>{props.desc}</p>
        <p><span>Benefits: </span>{props.benefits}</p>
        <p><span>Website: </span>{props.website}</p>
    </div>
  )
}

export default ScholarshipCard;