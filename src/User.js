import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "./Components/navbar";
import Home from "./Pages/home";
import Jobs from "./Pages/jobs";
import Scholarships from "./Pages/scholarships";

import {recognition} from "./api/voiceRecognition";

function User() {

  const [sessVar, setSessVar] = useState(false);
  const [blind, setBlind] = useState(false);
  setInterval(() => {
    setSessVar(window.sessionStorage.getItem("blind"));
  }, 1000);

  useEffect(() => {
    if (sessVar === "true") setBlind(true);
    else setBlind(false);
  }, [sessVar]);

  const [count, setCount] = useState(0);

  const navigate = useNavigate();
  useEffect(() => {
    if (!blind) {
      try {
        recognition.start();
        setCount(1);
      } catch {
        recognition.stop();
        setCount(0);
      }
    } else {
      recognition.stop();
      setCount(0);
    }
  }, [sessVar]);

  recognition.onend = () => {
    if (count === 1) recognition.start();
    else recognition.stop();
  };

  recognition.onresult = (event) => {
    const command = event.results[0][0].transcript;

    if (command.includes("navigate to") || command.includes("go to")) {
      if (command.includes("home") || command.includes("index")) navigate("/user");
      if (command.includes("jobs")) navigate("/user/jobs");
      if (command.includes("scholarships")) navigate("/user/scholarships");
    }
    if (command.includes("stop")) {
      recognition.stop();
      setCount(0);
    }
  };

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scholarships" element={<Scholarships />} />
        <Route path="/jobs" element={<Jobs />} />
      </Routes>
    </div>
  );
}

export default User;