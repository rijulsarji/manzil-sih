import React, { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import NGOcarousel from "../Components/ngoCarousel";
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
          <p>
            Just one step to help someone leads to great destinations filled
            with humbleness and love. Grab your favorite products and help the
            NGOs that have taken this step. Let's lend our miniature step
            towards the mission of “ATAMNIRBHAR BHARAT”
          </p>
        </div>

        <NGOcarousel />

        {/* <div className="ngoCarousel"></div> */}

        <div className="ngoProdBody">
          <h1 className="ngoProdTitle">Products</h1>
          {load ? (
            <div className="loading">
              <AiOutlineLoading3Quarters />
            </div>
          ) : (
            <div className="ngoProdGrid">
              {data.map((oneData) => (
                <div className="ngoProd">
                  <img src={oneData.imgLink} alt={oneData.imgLink} />
                  <h2>{oneData.productName}</h2>
                  <h4>{oneData.pricing}</h4>
                  <h6>{oneData.items}</h6>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default NGOs;
