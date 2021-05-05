import React from "react";

function MyCodingJourney(props) {
  return (
    <div>
      <section className="journey">
        <p className="title1">My coding Journey so far...</p>
        <div className="flex-box-container">
          <div>
            <h2> March 2020</h2>
            <p>started to learn to code with free online resources</p>
          </div>
          <div>
            <h2> Front End tech stack</h2>
            <p>React/ React Native with expo</p>
          </div>
          <div>
            <h2> Back End tech stack </h2>
            <p>Express, Axios, PSQL, fire base </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MyCodingJourney;
