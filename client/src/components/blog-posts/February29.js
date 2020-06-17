import React from "react";

function February29(props) {
  return (
    <div className={props.className}>
      <div className="blog-post">
        <h3 className="code-title">February 29, 2020</h3>
        <p className="code-text">
          Week four of the bootcamp is in the books, and I am feeling pretty
          excited about the future. There are plenty more hurdles on my journey,
          but each of them bring new challenges and new opportunites. There were
          two big focuses this past week, CSS and beginning my job search. As
          much as CSS can be a pain, the latter was definitely the most
          challenging part of my week. Writing a brand new resume and cover
          letter is a pretty daunting task, especially when you are jumping into
          a new field. Thankfully, Burlington Code Academy has pulled out all of
          the stops, and provided us with a pretty awesome career workshop on
          top of the great education we've been getting.
        </p>
        <p className="code-text">
          I have to say, looking for work in the tech field is way more
          intimidating than what I'm used to as a restaurant guy. There is just
          so much more that goes into it. When I would apply for a restaurant
          gig, it was mostly based on word of mouth, a casual interview over a
          beer, and my resume would almost never come into play. But in this
          field, let me tell you, that isn't at all the case. I've focused on
          not only my resume and cover letter, but my LinkedIn profile, my
          gitHub account, this portfolio website, and a multitude of networking
          endeavors. At first this was all foreign and a bit unnerving, but the
          more time I've spent working on it, the more accomplished and
          validated I feel. It truly feels like the work I'm putting in matters,
          and that it will help me move forward with my goals.
        </p>
        <p className="code-text">
          I don't want this post to be entirely about my job search, as it's
          still in it's infancy, but I will say that I have a couple initial
          places I will be applying to right away. With just eight weeks left in
          the course, and most interview processes taking potentially months, I
          want to get the ball rolling right away. With that all being said,
          there is one little code snippet I wanted to share that I am pretty
          happy with this week.
        </p>
        <p className="code-text">
          If you have been to my site before, you might have noticed the little
          robot that lives at the bottom left hand side of all of these pages.
          As the pages got longer, I wanted him to pop his goofy head in as you
          scrolled past the navigation bar, but this was something I'd never
          done before. After a little research, and some tinkering, I came up
          with this:
        </p>
        <div className="blog-img-wrapper">
          <img
            className="blog-img"
            src="./images/blog-img/scrollSnip.png"
            alt="Code snippet"
          />
        </div>
        <p className="code-text">
          I know it doesn't look like much, and it definitely still has some
          things I could improve on, but it works! The biggest thing I want to
          play with is removing the event listener on the triggers so that the
          function isn't being called over and over again. It's not repainting
          each time it does that, so there really isn't much of an impact but I
          think learning how to do that for more intricate implications will be
          necessary. Either way, little improvements on the site will keep
          coming as I learn more, and I'm excited to really push the limits of
          what I can do with HTML, CSS, and JavaScript.
        </p>
        <p className="code-text">
          One last little note, I'll be starting a vlog as well on my LinkedIn
          page tomorrow. Once everyother week or maybe even every week I'll have
          a short video going in depth on a project I've worked on, or just
          giving a status update on my journey to become a Web Developer. Head
          over to my LinkedIn page to check it out tomorrow night!
        </p>
        <p className="code-text">Until next week, happy coding!</p>
      </div>
    </div>
  );
}

export default February29;
