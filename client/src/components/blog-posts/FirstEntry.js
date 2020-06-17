import React from "react";

function FirstEntry(props) {
  return (
    <div className={props.className}>
      <div className="blog-post">
        <h3 className="code-title">First Entry</h3>
        <p className="code-text">
          Hello world! I know it's a bit cliche' to say that, but it's where we
          all started in our programming journey right? Anyway, since this is
          the first post in this blog, I figured some introductions would be in
          order. Since this is all rhetorical, I'll start with myself.... Hi! My
          name is Josh, and I'm an aspiring web-devoloper. I've been in the
          restaurant gig for pretty much the entirety of my adult life, and am
          finally pursuing my passions in the tech world. I'm the father of two
          amazing children, and am married to an incredible woman that continues
          to push me towards bettering myself and the world around me. I decided
          to start writing this blog as a way to sort of catalogue my journey in
          the world of programming and web development.
        </p>
        <p className="code-text">
          I am currently in my first week of class in a web development bootcamp
          at Burlington Code Academy, have taken the part time javascript course
          here at BCC, and have taken some online courses. As a father with two
          small children, taking a 40 hour a week course while still working a
          couple nights a week is already proving to be a challenge, but one
          that I welcome and am ready to overcome. Being a restaurant manager
          for many years has gotten me ready for any grind, and the payout this
          time around is more than worth it. Anyway, I'll keep this post brief,
          but as I progress through the course, I plan on posting each week with
          how things are progressing. There will probably be the oddball comic
          or pictures of the kiddos (like any parent, I'll claim that my kids
          are adorable...but trust me they are), and most likely snippets of
          code and projects as time passes. So if you are into coding, cute
          kids, goofy robot comics, want to see what projects I'm working on, or
          feel like learning more about me, feel free to stop by each week and
          check it out!
        </p>
        <p className="code-text">
          Thanks for checking out my work! Until next week, happy coding!
        </p>
      </div>
    </div>
  );
}

export default FirstEntry;
