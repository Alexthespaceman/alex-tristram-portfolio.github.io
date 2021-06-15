import React from "react";
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
        <button className="but1">What Tach Stack I know </button>
        <button className="but1">learn more about me</button>
        <button className="but1">My Work</button>
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
