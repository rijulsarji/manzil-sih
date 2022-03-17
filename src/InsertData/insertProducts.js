import React, { useState } from "react";

function InsertProducts() {

  const [products, setproducts] = useState({
    productName: "",
    pricing: "",
    items: "",
    imgLink: "",
  });
  const [load, setLoad] = useState(true);

  function handleInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    setproducts({ ...products, [name]: value });
  }

  fetch("https://project-manzil.herokuapp.com/api/products").then((data) =>
    setLoad(false)
  );

  function handleSubmit(e) {
    e.preventDefault();
    window.alert("Registered");
    fetch("https://project-manzil.herokuapp.com/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(products),
    });
    setproducts({ productName: "", pricing: "", items: "", imgLink: ""});
  }

  return (
    <div>
      {load ? (
        <h1>Loading...</h1>
      ) : (
        <form
          method="POST"
          action="https://project-manzil.herokuapp.com/api/products"
        >
          <input
            placeholder="Product name"
            required={true}
            name="productName"
            value={products.productName}
            onChange={handleInput}
          />
          <input
            placeholder="Pricing"
            required={true}
            name="pricing"
            value={products.pricing}
            onChange={handleInput}
          />
          <input
            placeholder="Items"
            required={true}
            name="items"
            value={products.items}
            onChange={handleInput}
          />
          <input
            placeholder="Image Links"
            required={true}
            name="imgLink"
            value={products.imgLink}
            onChange={handleInput}
          />
          <button onClick={handleSubmit}>Submit</button>
        </form>
      )}
    </div>
  );
}

export default InsertProducts;