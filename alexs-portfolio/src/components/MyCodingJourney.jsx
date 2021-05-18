import React from "react";

function MyCodingJourney(props) {
  return (
    <div>
      <section className="journey">
        <p className="title1">Hover to see my coding Journey so far...</p>
        <div className="flex-box-container">
          <div className="card">
            <h2 className="march"> March 2020</h2>
            <p className="p">
              {" "}
              I started to learn to code with free online resources such as
              Codecademy and free code camp, I learnt the fundamentals, and in
              january 2021, I went on to pass my very first ever tech test, the
              North Coders entry exam and joined the boot camp a week later!{" "}
            </p>
            <ul className="list1">
              <li>Java Script Fundamentals</li>
              <li>Git, Git Hub, and version control</li>
              <li>FOR LOOPS!!</li>
            </ul>
          </div>
          <div>
            <h2 className="march"> Front End tech stack</h2>
            <p>
              My time with north coders allowed me to experience an incredible
              ammount of tech, these include, and exceed the list below
            </p>
            <ul className="list1">
              <li>The DOM and Web APIs</li>
              <li>Semantic HTML</li>
              <li>Responsive CSS</li>
              <li>Introduction to UX</li>
              <li>React</li>
              <li>Peripheral React technologies</li>
              <li>React-Router</li>
              <li>Semantic HTML</li>
              <li>Lifecycle Methods</li>
              <li>Advanced React</li>
              <li>Front-end testing frameworks</li>
            </ul>
          </div>
          <div>
            <h2 className="march"> Back End tech stack </h2>
            <p>Express, Axios, PSQL, fire base </p>
            <ul className="list1">
              <li>Building servers with Express</li>
              <li>HTTP Servers</li>
              <li>SQL</li>
              <li>Introduction to PSQL</li>
              <li>RESTful API design and testing</li>
              <li>Web Servers with Express</li>
              <li> Complex queries with PSQL</li>
              <li>Database migrations</li>
              <li>Complex error handling</li>
              <li>RESTful API design and testing</li>
              <li>Knex</li>
              <li>MVC Architecture</li>
              <li>Deploying apps with Heroku</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MyCodingJourney;
