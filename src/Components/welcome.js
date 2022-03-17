import React, { useEffect, useState } from "react";
import "../CSS/Components/welcome.css";
import welcomeImg from "../assets/Home page/welcomeImg.png";
import welcomeManzil from "../assets/sound/welcomeManzil.aac";
import { useInView } from "react-intersection-observer";
import ReactHowler from "react-howler";

function Welcome() {

  const [sessVar, setSessVar] = useState(false);
  const [blind, setBlind] = useState(false);
  setInterval(() => {
    setSessVar(window.sessionStorage.getItem("blind"));
  }, 1000);

  useEffect(() => {
    if (sessVar === "true") setBlind(true);
    else setBlind(false);
  }, [sessVar]);

  const { ref: audioRef, inView: audioInView } = useInView();
  const [play, setPlay] = useState(false);

  useEffect(() => {
    if (audioInView && blind) setPlay(true);
    else setPlay(false);
  }, [audioInView]);

  return (
    <div className="welcomeBody">
      <ReactHowler playing={play} src={[welcomeManzil]} />
      <div className="welcomeSubBody">
        <div className="welcomeLS">
          <h1 ref={audioRef}>Welcome</h1>
          <p>
            Manzil is a one stop platform which acts like the torch bearer in
            the path of success for all the specially abled friends. With the
            help of technology our portal is connecting the specially abled ones
            directly to all the opportunities available to them.
            <br />
            Bringing a smile on the face and pride in the eyes of every
            specially-abled individual is the mission and vision of Manzil.
          </p>
        </div>

        <div className="welcomeRS">
          <img src={welcomeImg} alt="welcome image" />
        </div>
      </div>
    </div>
  );
}

export default Welcome;