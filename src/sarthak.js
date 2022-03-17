import React, { useState } from "react";

function Sarthak() {

  const [data, setData] = useState({
    appName: "",
    type: "",
    link: "",
  });

  function handleInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    window.alert("Registered");
    fetch("https://project-manzil.herokuapp.com/api/sarthak", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    setData({ appName: "", type: "", link: ""});
  }

  return (
    <div>
      <form method="POST" action="/api/sarthak">
        <input type="text" name="appName" value={data.appName} placeholder="appName" onChange={handleInput}/>
        <input type="text" name="type" value={data.type} placeholder="type" onChange={handleInput}/>
        <input type="text" name="link" value={data.link} placeholder="link" onChange={handleInput}/>
        <button onClick={handleSubmit}>Submit kar lawde</button>
      </form>
    </div>
  )
}

export default Sarthak;