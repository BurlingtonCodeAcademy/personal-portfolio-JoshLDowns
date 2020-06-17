// -------- Blog Component --------//

//imports of various archived blogposts
import React from "react";
import FirstEntry from "./blog-posts/FirstEntry.js";
import February15 from "./blog-posts/February15.js";
import February24 from "./blog-posts/February24.js";
import February29 from "./blog-posts/February29.js";
import March22 from "./blog-posts/March22.js";
import March29 from "./blog-posts/March29.js";
import April15 from "./blog-posts/April15.js";

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      archiveNames: [
        "First Entry",
        "Feb. 15, 2020",
        "Feb. 24, 2020",
        "Feb. 29, 2020",
        "Mar. 22, 2020",
        "Mar. 29, 2020",
        "Apr. 15, 2020",
      ],
      archiveComponents: [
        <FirstEntry />,
        <February15 />,
        <February24 />,
        <February29 />,
        <March22 />,
        <March29 />,
        <April15 />,
      ],
      archive: false,
      current: true,
    };
  }

  //handles when archives are selected in the blog to display archive links
  handleArchive = (event) => {
    this.setState({
      current: event.target.id === "current" ? true : false,
      archive: false,
    });
  };

  //handles when archive links are selected
  handleArchiveLink = (event) => {
    this.setState({
      archive: event.target.id,
    });
  };

  //conditionally renders various parts of the blog page based on selections
  render() {
    return (
      <div id="main-div" className={this.props.animationClass}>
        <BlogHeader
          current={this.state.current}
          handleArchive={this.handleArchive}
        />
        <div id="blog-scroll">
          {this.state.current && (
            <CurrentBlog className={this.props.animationClass} />
          )}
          {!this.state.current && (
            <ArchiveLinks
              className={this.props.animationClass}
              handleArchiveLink={this.handleArchiveLink}
              archiveNames={this.state.archiveNames}
              archive={this.state.archive}
            />
          )}
          {this.state.archive &&
            this.state.archiveComponents[
              parseInt(this.state.archive.split("-")[1])
            ]}
        </div>
        <div id="div-fade"></div>
      </div>
    );
  }
}

//Blog header component that holds links to current posts and archives
function BlogHeader(props) {
  return (
    <div id="blog-header">
      <h1
        id="current"
        className={props.current ? "selected-link" : "text-link"}
        onClick={props.handleArchive}
      >
        CURRENT
      </h1>
      <h1
        id="archive"
        className={props.current ? "text-link" : "selected-link"}
        onClick={props.handleArchive}
      >
        ARCHIVES
      </h1>
    </div>
  );
}

//Component that renders all links in archive based on state
function ArchiveLinks(props) {
  return (
    <div id="archive-links" className={props.className}>
      {props.archiveNames.map((name, i) => {
        return (
          <h1
            id={`archive-${i}`}
            key={i}
            onClick={props.handleArchiveLink}
            className={
              !props.archive
                ? "text-link"
                : props.archiveNames[parseInt(props.archive.split("-")[1])] ===
                  name
                ? "selected-link"
                : "text-link"
            }
          >
            {name}
          </h1>
        );
      })}
    </div>
  );
}

//functional component for current blog posts
function CurrentBlog(props) {
  return (
    <div className={props.className}>
      <div className="blog-post">
        <h3 className="code-title">May 5, 2020</h3>
        <p className="code-text">
          This post was going to come a little sooner, but I took a week away to
          get some stuff done around the house. Quarantine has the whole family
          itching for any kind of excitement, and we all needed some time to
          really reflect, and focus on mental health. That being said, we are
          all in pretty good spirits, and I'm getting ready for the next big
          steps in my career as a developer. I say next steps because I
          officially finished the Web Development Bootcamp at Burlington Code
          Academy a little over a week ago. The capstone project presentations
          at Demo Day were incredible, and I'm really proud of the class as a
          whole. Everyone put in everything they had and there were some truely
          remarkable projects considering the brief timespan we had to work on
          them. When all was said and done, the class celebrated in the best way
          we could in the current environment. Normally there would be a big
          party, and maybe some bar hopping after a day long retrospective. We
          ended up having a big virtual party via Zoom, and even though it
          wasn't what it could have been, it was still a pretty damn good day.
        </p>
        <p className="code-text">
          Before I dive into next steps, I wanted to talk about the importance
          of getting outside. I feel like over the past three months, I really
          lost focus on that. I spent so much time either in class, working with
          other students, working on personal projects, and well, working in
          general that I never really had time to get out. I know we are all
          staying at home right now, but that doesn't mean you can't go for a
          walk, or even just sit out on your porch/stoop/frontyard/whatever you
          have. Where a mask, distance yourself from others, but get some fresh
          air. It will do your mind and body a load of good. This week I stepped
          away from the digital projects and worked on some home improvement
          projects. My wife has always wanted a garden, but where we live there
          wasn't really any spot to till up the land and have at it. I decided
          this year I was going to turn our minimal front yard into the best
          garden we could have by building some raised beds. It felt good to
          build something physical after months of building digital projects.
          When all was said and done, I'm pretty happy with the outcome:
        </p>
        <div className="blog-img-wrapper">
          <img
            className="blog-img"
            src="./images/blog-img/garden.png"
            alt="New Raised Beds!"
          />
        </div>
        <p className="code-text">
          Since that photo, the grass is coming back in pretty nicely so far
          (had to reseed the lawn, it was in pretty rough shape), and I got the
          rest of the stones to finish circling the tree that desperately needs
          some space from endless kids hanging from it. This project has
          definitely had a great effect on my mental health, as there has been a
          lot of stresses involved with the class ending as well. I've got this
          great new skill set that I'm continually working on growing, but the
          current job market is a scary place. I've had a lot of interviews so
          far that have ended with we currently are not hiring but will be in
          the fall most likely. There has been a good amount of promising news,
          but none of it is close to immediate, which presents some big fears in
          the financial stability of my family in the coming months. That being
          said, I so have some contract work lined up with my Capstone Project
          sponsor, Ceres Greens that I'm really excited to start working on,
          it's just very part time. BCA has also been amazing to me, and I get
          to continue working as a TA with them for a while as well. I think the
          next few months will be pretty piecemeal when it comes to income, but
          I'm gonna do what I can to make the most of it.
        </p>
        <p className="code-text">
          So, how do I make the most of that time? Right now, that means
          continuing to learn, and building my portfolio. Just because I got
          outside last week, it didn't mean that I stopped coding entirely. For
          a fun new project, I took on building a game in Pico-8. If you don't
          know Pico-8, and are into 8-bit art and gaming, definitely check it
          out. It's a fantasy console that provides everything you need to build
          small 8-bit games. It runs off of Lua, which was pretty quick to pick
          up as it has a lot of parallels to JavaScript. As a kid, one of my
          favorite games of all time was Galaga, so that's the direction I ended
          up going. You can check out the (not complete, but playable) game
          here:{" "}
          <a href="https://www.lexaloffle.com/bbs/?tid=37701">Belt Blaster!</a>
        </p>
        <div className="blog-img-wrapper">
          <img
            className="blog-img"
            src="./images/testshooter_9.gif"
            alt="Game Sample"
          />
        </div>
        <p className="code-text">
          Outside of retro game development, I am jumping deeper into React, and
          learning more about IOT applications for my work with Ceres Greens.
          I'll keep everyone posted on that progress over the coming months, and
          keep my nose down looking for work! If anyone needs help with projects
          in that time, or is looking to hire a motivated web developer, let me
          know! Until next time, happy coding! ~ Josh
        </p>
      </div>
      <br />
      <div className="blog-post">
        <h3 className="code-title">May 28, 2020</h3>
        <p className="code-text">
          It's amazing the difference a month can make. I still haven't found a
          job with all of the covid craziness going on around us, but I have
          some solid potential opportunities lined up for when things start
          opening back up again. I also have an interviw on Monday with Select
          Design here in Burlington that I am really excited about. I'm going to
          be spending the weekend learning Elixir and Phoenix in preparation for
          that, which I'll definitely make a post about as I dive in. The
          prospect of learning a completely different framework is definitely a
          little daunting, but incredibly exciting at the same time, and I'm
          really looking forward to the next couple days of banging my head
          against the wall until I break through (I really mean this in the best
          way possible!).
        </p>
        <p className="code-text">
          Speaking of learning new things, this past weekend I spent a good
          chunk of time on{" "}
          <a href="https://www.frontendmasters.com">Frontend Masters</a> taking
          some React courses (Complete Intro to React v5 and Intermediate React
          v2) that were awesome. I really enjoyed Brian Holt's teaching style,
          and fully recommend jumping in if you want to level up your React
          skills. The course starts off coding React in pure JavaScript, and
          just builds from there. A lot of the beginning was review, but as
          someone who learned using Create React App, learning how to build a
          React development environment from the ground up was a really great
          experience. I know for sure that moving forward I will be coding in
          React much differently than I have been, and I'm really excited to go
          back and rework some of my old projects. I keep going back to the text
          adventure, Robot Apocalypse, from the BCA program and tinkering with
          it, and had recently started building a web application to run it
          fully in React. After this course, I've already started tearing it
          down and rebuilding it again; which might seem like a frustrating
          experience to some, but for me it just means I'm learning a better way
          to do things, and that is really motivating.
        </p>
        <div className="blog-img-wrapper">
          <img
            className="blog-img"
            src="./images/blog-img/garden2.png"
            alt="Garden Progress!"
          />
        </div>
        <p className="code-text">
          My React skills haven't been the only thing growing this past month. I
          posted about my wife's garden I was working on at the beginning of the
          month, and I'm really happy with the progress of our quaint little
          'yard' here at the condo-ville we live in. The grass came in a bit
          patchy, mostly because we got a few inches of snow in the middle of
          May (thanks Vermont), but give it a couple more weeks and it should
          all be in for the most part. Taking care of the yard and the garden
          every day has been really therapeutic. As a kid, I helped my dad in
          the garden every season, and as I got older and lived in places where
          I couldn't have a garden, I forgot how important it is to have some
          sort of connection with the world we live in, whether it be a huge
          garden, or just a few house plants. Taking care of something and
          watching it grow is really rewarding in a lot of ways, and I'm happy
          my wonderful wife pushed me to build her garden this year.
        </p>
        <p className="code-text">
          One last little plug, I started taking up streaming on Twitch again!
          I'm focusing mainly on Magic: The Gathering but will be playing some
          other games as well. I don't have a schedule yet, but I'll be on
          during the evening (east coast time) a few nights a week, and you can
          check out the channel at{" "}
          <a href="https://www.twitch.tv/emo__robot">twitch.tv/emo__robot</a>!
          As always, I hope everyone is staying safe, continuing to learn, and
          finding ways to enjoy their time in quarantine. Until next time, happy
          coding!
        </p>
      </div>
    </div>
  );
}

export default Blog;
