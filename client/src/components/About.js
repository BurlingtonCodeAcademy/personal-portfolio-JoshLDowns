import React from "react";

//Functional component that renders the about me page
function About(props) {
  return (
    <div id="main-div" className="semi-transparent-bg">
      <div id="div-scroll" className={props.animationClass}>
        <div id="about">
          <div id="headshot-wrapper" className="about-image-wrapper">
            <img
              id="headshot"
              className="about-image"
              src="./images/headshot.png"
              alt="Josh Downs"
            />
          </div>
          <h1>HI, I'M JOSH</h1>
          <h2>~ Full Stack Web Developer ~</h2>
          <p>
            I'm currently a Junior Web Developer at Select Design in Burlington,
            VT. I am also taking on some hours as a TA for Burlington Code
            Academy.
          </p>
          <h4>Let's get the technical stuff out of the way first:</h4>
          <div id="tech-specs">
            <p className="spec-sub-title">Languages:</p>
            <p className="spec">JavaScript, *Elixir, Lua, HTML, CSS</p>
            <p className="spec-sub-title">Frameworks &amp; Libraries:</p>
            <p className="spec">NodeJS, React, *Ember, Express</p>
            <p className="spec-sub-title">Databases:</p>
            <p className="spec">MongoDB, InfluxDB, Firebase</p>
            <p className="spec-sub-title">Version Control:</p>
            <p className="spec">Git</p>
            <p className="spec-sub-title">Tools &amp; Related Software:</p>
            <p className="spec">
              Adobe Creative Suite, Visual Studio Code, OBS, Pico-8
            </p>
            <p className="spec">* Currently Learning</p>
          </div>
          <h2>As for the personal stuff...</h2>
          <div id="family-wrapper" className="about-image-wrapper">
            <img
              id="family"
              className="about-image"
              src="./images/fam.png"
              alt="Josh and his family"
            />
          </div>
          <p>
            I'm a dedicated father, husband and overall a pretty quirky guy. I
            love hiking with the kiddos, drawing robots, exploring new
            challenges, and am driven by a continuous urge to learn, and an ever
            growing curiosity as to how things work. When I'm not working on
            growing as a developer, you can usually find me playing a game of
            Ticket to Ride with my amazing wife, battling it out in a game of
            Pokemon Cards with the kids, getting overly excited over a game of
            Mario Kart, or taking a walk in the woods with the family.
          </p>
        </div>
      </div>
      <div id="div-fade"></div>
    </div>
  );
}

export default About;
