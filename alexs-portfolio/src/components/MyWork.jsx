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
              <h2 className="work1"> A Front End, Reddit Style news website</h2>
              <p className="work1">
                {" "}
                This is a front end application and website that allows the user
                to read news articles by their friends as well as post their own
                articles, up and down vote other peoples articles and view user
                profiles, and comment on your favorite articles. All this
                functionality is done optimistically as well as comunicating
                with a backend API and database I made for this app a few weeks
                earlier.{" "}
              </p>
              <p className="work1">
                {" "}
                The Tech stack used to build this project was React, JavaScript,
                HTML, Node,js, Axios and Cors
              </p>
            </div>
          </div>
          <a className="big-button">click me to see more!</a>
          <div className="long div2">
            <div className="div divide">
              <h2 className="work1">
                {" "}
                A Back End news API, with an SQL database.{" "}
              </h2>
              <p className="work1">
                This backend API and server, was built from the ground up, to go
                hand in hand with my front end news app. tThe application
                integrates a PSQL database, being seeded using KNEX and uses an
                MVC model to comunicate with the front end. Endpoints were built
                and tested using supertest integrated with jest.{" "}
              </p>
              <p className="work1">
                The Tech stack used to build this project includes Express,
                Node.js, JavaScript, PostgreSQL, Knex, Jest and Supertest
              </p>
            </div>
          </div>
          <a className="big-button">click me to see more!</a>
          <div className="long div3">
            <div className="div divide">
              <h2 className="work1">
                {" "}
                Bloggo, A travel and social media app that lets you share
                memories{" "}
              </h2>{" "}
              <p className="work1">
                {" "}
                BlogGo, is a travel and blogging app, that lets you blog, on the
                go! - BlogGO! The idea is that blogs are not a great way to tell
                your travel story in the 21st century, so we designed and built
                this app tha allows you to share photos, as well as mark on the
                world map where youve been with little markers, post blog posts,
                and comment on friends blog posts and get reccomendations of
                where to go from your friends posts!{" "}
              </p>
              <p className="work1">
                The Tech stack used to build this project includes JavaScript,
                React Native with Expo, Axios, Firebase, Cloud Fire store,
                Coundinary, GoogleMaps, and jest
              </p>
            </div>
          </div>
          <a className="big-button">click me to see more!</a>
        </div>
      </section>
    </div>
  );
}

export default MyWork;
