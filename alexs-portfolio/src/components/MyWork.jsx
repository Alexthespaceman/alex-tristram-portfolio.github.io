import React from "react";
// import image1 from "../images/images/portfolio-item11.jpg";

function MyWork(props) {
  return (
    <div>
      <section className="work">
        <p className="title3">...Some of my best work</p>
        <div className="flex-box-container3">
          <div className="long div div1">
            <div className="div divide">
              {" "}
              <h2> A Front End, Reddit Style news website, using React </h2>
              <p></p>
            </div>
          </div>
          <a className="big-button">click me to see more!</a>
          <div className="long div2">
            <div className="div divide">
              <h2> A Back End news API, using Express and Postgress </h2>
              <p>hello world</p>
            </div>
          </div>
          <a className="big-button">click me to see more!</a>
          <div className="long div3">
            <div className="div divide">
              <h2>
                {" "}
                Bloggo, A travel and social media app that lets you share
                memories{" "}
              </h2>{" "}
              <p>hello world</p>
            </div>
          </div>
          <a className="big-button">click me to see more!</a>
        </div>
      </section>
    </div>
  );
}

export default MyWork;
