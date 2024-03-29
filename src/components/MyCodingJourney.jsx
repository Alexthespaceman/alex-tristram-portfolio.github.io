import React from "react";
import { Element } from "react-scroll";

function MyCodingJourney(props) {
  return (
    <div>
      <Element id="coding-journey">
        <section className="journey">
          <p className="title1">Hover to see my coding Journey so far...</p>
          <div className="flex-box-container">
            <div className="card">
              <h2 className="march"> My Own Development</h2>
              <p className="p">
                {" "}
                I started to learn to code with free online resources such as
                Codecademy and free code camp, I learnt the fundamentals, and in
                january 2021, I went on to pass my very first ever tech test,
                the North Coders entry exam and joined the boot camp a week
                later!{" "}
              </p>
              <ul className="list1">
                <li>Java Script Fundamentals</li>
                <li>Git, Git Hub, and version control</li>
                <li className="no-show">FOR LOOPS!!</li>
              </ul>
            </div>
            <div>
              <h2 className="march"> Front End Tech Stack</h2>
              <p>
                My time with north coders allowed me to experience a large range
                of tech when it comes to the front end tech stack, these include
              </p>
              <ul className="list1">
                <li>The DOM and Web APIs</li>
                <li>Responsive CSS</li>
                <li>Introduction to UX</li>
                <li>React</li>
                <li>Peripheral React technologies</li>
                <li>React-Router</li>
                <li>Semantic HTML</li>
                <li className="no-show">Lifecycle Methods</li>
                <li className="no-show">Advanced React</li>
                <li className="no-show">Front-end testing frameworks</li>
              </ul>
            </div>
            <div>
              <h2 className="march">Back End Tech Stack</h2>
              <p className="bigger">
                Over the Back end part of the course, we built an API from the
                ground up using an SQL relational database and dynamic end
                points using express.{" "}
              </p>
              <ul className="list1">
                <li>Building servers with Express</li>
                <li>HTTP Servers</li>
                <li>Introduction to PSQL</li>
                <li>RESTful API design and testing</li>
                <li>Web Servers with Express</li>
                <li>Complex queries with PSQL</li>
                <li>Database migrations</li>
                <li>Complex error handling</li>
                <li>RESTful API design and testing</li>
                <li>Knex</li>
                <li>MVC Architecture</li>
              </ul>
            </div>
          </div>
        </section>
      </Element>
    </div>
  );
}

export default MyCodingJourney;
