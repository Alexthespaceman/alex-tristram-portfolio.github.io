import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import image4 from "../images/images/email.png";

function Footer(props) {
  return (
    <div className="footer">
      <div className="social-bar">
        <ul className="list">
          <li>
            <a href="https://twitter.com/Alexthespaceman">
              {/* <img src={image1} alt="twitter" /> */}
              <FontAwesomeIcon
                icon={["fab", "twitter"]}
                size="3x"
                color="black"
              />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/4lextristram/">
              {/* <img src={image2} alt="instagram" /> */}
              <FontAwesomeIcon
                icon={["fab", "instagram"]}
                size="3x"
                color="black"
              />
            </a>
          </li>
          <li>
            <a href="https://github.com/">
              <FontAwesomeIcon
                icon={["fab", "github"]}
                size="3x"
                color="black"
              />
            </a>
          </li>
          <li>
            <a href="mailto:tristram.alexander94@gmail.com">
              <img src={image4} alt="mail" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/alex-tristram-75322617a/">
              <FontAwesomeIcon
                icon={["fab", "linkedin"]}
                size="3x"
                color="black"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
