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
              <a>{/* <img scr={image1} alt="portfolio" /> */}</a>
            </div>
          </div>
          <div className="long div2">
            <div className="div divide">
              <a>{/* <img /> */}</a>
            </div>
          </div>
          <div className="long div3">
            <div className="div divide">
              <a>{/* <img /> */}</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MyWork;
