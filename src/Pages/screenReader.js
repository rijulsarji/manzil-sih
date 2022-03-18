import React, { useState } from "react";
import "../CSS/Pages/screenReader.css";
import {AiOutlineLoading3Quarters} from "react-icons/ai"

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
          This was the rocket to your dreams, fuel it up by using the
          below-mentioned software to access any site easily and get the most
          out of them.
        </h3>

        {load ? (
          <div className="loading">
            <AiOutlineLoading3Quarters />
          </div>
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
                  <a href={oneData.link} target="_blank" rel="noreferrer">
                    Visit
                  </a>
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