import React from "react";

function AboutMe(props) {
  return (
    <div>
      <section className="about-me">
        <p className="title2">...This is who I am</p>
        <div className="flex-box-container2">
          <div>
            <p>
              {" "}
              A lot of things changed for a lot of people during the pandemic,
              and for me it was the same. I was a manager at a fast paced bar in
              south Manchester before the pandemic struck, however with my need
              for the latest tech, as well as my hobby for building computers, I
              used the global pandemic as a catalyst to jump into a different
              career, one that had always facinated me, and one that felt like
              the logical next step in my life to take. Outside of my career I
              love aviation, having been awarded a gliding scholarship, a keen
              gamer (proably playing on flight simulator) and a keen alpanist,
              having trecked to everest base camp and planning a trip to the
              andes very soon! I love all things space (maybe you can tell from
              my github account: Alexthespaceman) and (used to) have a keen
              interest in traveling the world, here is me oppisite in japan! Im
              also incredibly excited about the green revolution that currently
              taking off, and hopeffully I can use my skills as a dev to pioneer
              wind farms one day, who knows, take a look around, and perhaps say
              hello?{" "}
            </p>
          </div>

          <div className="japan"></div>
        </div>
      </section>
    </div>
  );
}

export default AboutMe;
