import React from "react";
import "../CSS/Components/offering.css";

import scholarship from "../assets/Home page/scholarship.png";
import course from "../assets/Home page/course.png";
import job from "../assets/Home page/job.png";
import ngo from "../assets/Home page/ngo.png";

function Offering() {

  return (
    <div>
      <div className="offerBody">
        <h1 className="offerTitle">WHAT WE OFFER</h1>
        <div className="offerSubBody">
          <div className="offerBox">
            <h1>SCHOLARSHIPS</h1>
            <img src={scholarship} alt="scholarship" />
            <p>
              Zeal to achieve your dreams, automatically opens the path to
              opportunities. Let no materialistic hurdle like money stop you
              from scaling your success. Filter out the best suitable
              scholarship options to fuel up your wings and prepare you for your
              highest flight.
            </p>
          </div>

          <div className="offerBox">
            <h1>COURSES</h1>
            <img src={course} alt="course" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
              ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consectetur adipiscing
            </p>
          </div>

          <div className="offerBox">
            <h1>JOBS</h1>
            <img src={job} alt="job" />
            <p>
              No amount of barriers can disable your abilities. Enable your
              abilities, come explore the world of job opportunities with Udaan
              and give your career the start which you always wanted to.
            </p>
          </div>

          <div className="offerBox">
            <h1>NGO</h1>
            <img src={ngo} alt="ngo" />
            <p>
              The real angels of God, the life savers. Here is a list of our
              national superheroes. We love them 3000!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offering;