import React, { useEffect, useState } from "react";
import "../CSS/Components/intro.css"
import landingVideo from "../assets/Landing Page/landingVideo.gif";
import { useInView } from "react-intersection-observer";
import ReactHowler from "react-howler";

import introManzil from "../assets/sound/introManzil.aac";

function Intro() {

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
    // eslint-disable-next-line
  }, [audioInView]);

  return (
    <div className="introBody" ref={audioRef}>
      <ReactHowler playing={play} src={[introManzil]} />
      <div className="introSubBody">
        <div className="introLS">
          <h1>The Portal to your Destination</h1>
        </div>

        <img src={landingVideo} alt="kids playing" />
      </div>
    </div>
  );
}

export default Intro;