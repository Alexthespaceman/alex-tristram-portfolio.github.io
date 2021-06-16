import React from "react";
import { Link } from "react-scroll";
import image1 from "../images/images/meAgain.jpeg";

function WelcomePage(props) {
  return (
    <div className="home">
      <div className="logo">hello.</div>
      <p className="type-writer"> A full stack portfolio by alex.</p>
      <div className="home-img">
        <img className="img" src={image1} alt="pic" />
      </div>
      <div className="but">
        <nav>
          <Link
            to="coding-journey"
            spy={true}
            smooth={true}
            duration={500}
            // className="some-class"
            activeClass="active"
          >
            <button className="but1 left">My Tech Stack</button>
          </Link>

          <Link
            to="about-me"
            spy={true}
            smooth={true}
            duration={700}
            // className="some-class"
            // activeClass="active"
          >
            <button className="but1 left">About me</button>
          </Link>

          <Link
            to="portfolio"
            spy={true}
            smooth={true}
            duration={900}
            // className="some-class"
            // activeClass="active"
          >
            <button className="but1 ">My portfolio</button>
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={1000}
            // className="some-class"
            // activeClass="active"
          >
            <button className="but1 ">Come and say hi</button>
          </Link>
        </nav>
      </div>
      <div className="mouse_scroll">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div>
          <span className="m_scroll_arrows unu"></span>
          <span className="m_scroll_arrows doi"></span>
          <span className="m_scroll_arrows trei"></span>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
