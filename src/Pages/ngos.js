import React, { useState } from "react";
import "../CSS/Pages/ngos.css"

function NGOs() {

  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);

  fetch("https://project-manzil.herokuapp.com/api/products")
    .then(response  => response.json())
    .then(data => {
      setData(data)
      setLoad(false)
    })


  return (
    <div className="ngoBody">
      <div className="ngoSubBody">
        <div className="ngoHead">
          <h1>NGOs</h1>
          <p>Hello world</p>
        </div>

        {/* <div className="ngoCarousel"></div> */}

        <div className="ngoProdBody">
          <h1 className="ngoProdTitle">
            Products
          </h1>
          {load ? <h3>Loading...</h3> : 
            <div className="ngoProdGrid">
              {data.map(oneData => 
                <div className="ngoProd">
                  <img src={oneData.imgLink} alt={oneData.imgLink} />
                  <h2>{oneData.productName}</h2>
                  <h4>{oneData.pricing}</h4>
                  <h6>{oneData.items}</h6>
                </div>
              )}
            </div>
          }

        </div>
      </div>
    </div>
  );
}

export default NGOs;
