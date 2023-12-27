import React from "react";
import "../styles/Home.scss";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>CODER'S LIFE JOURNEY</h1>
          <p>Journey of a coder</p>
        </main>
      </div>
      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            Life of a coder is a perpetual journey through the realms of logic
            and creativity. Each line of code penned is a step forward in the
            intricate dance between problem-solving and innovation.
          </p>
        </div>
      </div>
      <div className="home3" id="about">
        <div>
          <h1>Who are we?</h1>
          <p>
            The developer's journey is a dynamic exploration into the world of
            programming and software development, typically commencing with a
            curiosity about computers and a desire to comprehend software
            intricacies. Whether through formal education in computer science or
            a self-taught approach using online resources and coding bootcamps,
            developers build a foundation by learning programming languages and
            fundamental concepts. This journey evolves as developers delve into
            data structures, algorithms, and various programming paradigms.
            Proficiency in version control systems like Git and collaboration
            tools becomes crucial, preparing them for teamwork and contributions
            to open-source projects. Specialization follows, with developers
            choosing areas like web development, mobile apps, data science, or
            machine learning. Real-world projects become a testing ground,
            presenting challenges like debugging and optimization. Continuous
            learning remains paramount, involving staying abreast of industry
            trends, attending conferences, and participating in online
            communities.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
