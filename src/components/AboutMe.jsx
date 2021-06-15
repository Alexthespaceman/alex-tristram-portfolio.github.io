import React from "react";
import { Element } from "react-scroll";

function AboutMe(props) {
  return (
    <div>
      <Element id="about-me ">
        <section className="about-me">
          <p className="title2">...This is who I am</p>
          <div className="flex-box-container2">
            <div className="mee">
              <p>
                {" "}
                A lot of things changed for a lot of people during the pandemic,
                and for me it was the same. I was a manager at a fast paced bar
                in south Manchester before the pandemic struck, however with my
                need for the latest tech, as well as my hobby for building
                computers, I used the pandemic as a catalyst to jump into a
                different career, one that had always fascinated me, and one
                that felt like the logical next step in my life to take. Outside
                of my career I love aviation, having been awarded a gliding
                scholarship, a keen gamer (probably playing on flight simulator)
                and a keen alpinist, having trekked to everest base camp and
                planning a trip to the andes very soon! I love all things space
                (maybe you can tell from my github account: Alexthespaceman) and
                (used to) have a keen interest in traveling the world, here is
                me below in Malaysia! Im also incredibly excited about the green
                revolution that is currently taking off, and hopefully I can use
                my skills as a dev to pioneer wind farms one day, who knows,
                take a look around, and perhaps say hello?{" "}
              </p>
            </div>
          </div>

          <div className="interests">
            <div className="japan"></div>
            <div className="plane"></div>
            <div className="everest"></div>
          </div>
        </section>
      </Element>
    </div>
  );
}

export default AboutMe;
