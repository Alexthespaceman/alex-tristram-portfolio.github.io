import React from "react";
import image4 from "../images/images/email.png";
import image3 from "../images/images/facebook.png";
import image2 from "../images/images/instagram.png";
import {
  default as image1,
  default as image5,
} from "../images/images/twitter.png";

function Footer(props) {
  return (
    <div className="footer">
      <div className="social-bar">
        <ul className="list">
          <li>
            <a href="https://twitter.com/Alexthespaceman">
              <img src={image1} alt="twitter" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/4lextristram/">
              <img src={image2} alt="instagram" />
            </a>
          </li>
          <li>
            <a href="https://github.com/">
              <img src={image3} alt="github" />
            </a>
          </li>
          <li>
            <a href="mailto:tristram.alexander94@gmail.com">
              <img src={image4} alt="mail" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/alex-tristram-75322617a/">
              <img src={image5} alt="linkedIn" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
