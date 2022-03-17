import React, { useState } from "react";
import "../CSS/Pages/screenReader.css";

function ScreenReader() {

  const [data, setData] = useState([])
  const [load, setLoad] = useState(true)

  fetch("https://project-manzil.herokuapp.com/api/sarthak")
    .then(response => response.json())
    .then(data => {
      setData(data)
      setLoad(false)
    })

  return (
    <div className="SRbody">
      <div className="SRsubBody">
        <h1>Screen Reader Access</h1>
        <h3>
          Kya tum voh dekh sakte ho? Me toh dekh sakta hu. Lmao dikh nahi raha?
        </h3>

        {load ? (
          <h4>Loading...</h4>
        ) : (
          <div>
            <div className="SRgrid">
              <p className="SRgridHead">Title</p>
              <p className="SRgridHead">Type</p>
              <p className="SRgridHead">Link</p>
            </div>
            <div>
              {data.map((oneData) => (
                <div className="SRgrid">
                  <p>{oneData.appName}</p>
                  <p>{oneData.type}</p>
                  <a href={oneData.link} target="_blank" rel="noreferrer">Visit</a>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ScreenReader;