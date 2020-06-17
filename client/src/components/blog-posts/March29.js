import React from "react";

function March29(props) {
  return (
    <div className={props.className}>
      <div className="blog-post">
        <h3 className="code-title">March 29, 2020</h3>
        <p className="code-text">
          This past week was a big one for many reasons. Despite how scary
          everything seems to be around me right now, I'm hopeful for a bright
          future. If anything, it gives me even more reason to focus on the
          current goal, and just keep learning. And to that end, a buddy of
          mine, Paul, and I dove into building a chat application from the
          ground up this weekend. We utilized MongoDB, Express, ReactJS, and
          Node (aka, the full MERN). I'm super excited to say that we got it up
          and working, and we are both pretty happy with the outcome.
        </p>
        <p className="code-text">
          We started off building from a very useful data class we built during
          a lab at BCA:
        </p>
        <div className="blog-img-wrapper">
          <img
            className="blog-img"
            src="./images/blog-img/datastoreSnip.png"
            alt="Code snippet"
          />
        </div>
        <p className="code-text">
          There are a few more methods that didn't make it into the image, but
          you can get the general idea of what's going on from that. Basically,
          this class works by creating an access point to your database, and
          then has methods that allow you to manipulate that database in various
          ways. We were able to utilize this class, and a process called polling
          to continually check our collections in Mongo for new chat inputs, and
          render the inputs if something new had come in. Since we built the
          whole application in React, if there was new data, it would re-render
          just the chat window, and either scroll the new chat item into view,
          or alert you that there was a new message if you happened to be
          reading something from earlier in chat.
        </p>
        <p className="code-text">
          In order to utilize that class we built, we needed to build a back end
          server that could handle all the requests coming from the client. This
          is where Express came in, and I gotta say, working with Express is
          great. We have used it quite a few times in class, and it is basically
          plug and play, which is nice. Once we had the server routing
          correctly, and pulling the information we needed from Mongo, we jumped
          into actually calling that data from the client. After a lot of scope
          creep, we ended up with this little bit of code that handled
          retrieving all the chat objects from the database:
        </p>
        <div className="blog-img-wrapper">
          <img
            className="blog-img"
            src="./images/blog-img/fetchIntervalSnip.png"
            alt="Code snippet"
          />
        </div>
        <p className="code-text">
          This little interval caused us a bunch of trouble for a bit. We ran
          into a weird bug where it wasn't clearning properly, and the chat
          rooms would all jump around like crazy. It was kind of like a terrible
          Chat Roulette. Took us a while to get it all sorted, but after a ton
          of trial and error, it ended up coming down to a small typo, and some
          weird variable shadowing (apparently setting something with an id of
          'design' doesn't play well with other things, still not fully sure
          why).
        </p>
        <p className="code-text">
          Once the server was communicating with the client the way we wanted,
          the rest of the project fell into place pretty handily. We had some
          fun with it, and utilized an API called names.drycodes to give the
          users random names when they signed in. Those names were then stored
          in cookies, so if the user came back they could use the same name if
          they wanted to. We added a few different rooms to chat in as well, and
          gave it a sleek, straight out of the 90's look.
        </p>
        <div className="blog-img-wrapper">
          <img
            className="blog-img"
            src="./images/blog-img/chattrSnip.png"
            alt="Chattr Application Screen Shot"
          />
        </div>
        <p className="code-text">
          We kinda jumped into this project head first, and I'm really pumped
          that we did. Working with Paul was great, and we were able to work
          through a good chunk of new material pretty quickly. Having someone to
          soundboard ideas off when you are working on a project is incredibly
          beneficial. I understand the importance of rubber-ducking more and
          more as I grow as a coder, but having an actual person that can
          actually respond... well it's quite a different experience. Either
          way, I could go on and on about this project (I'm incredibly excited
          we were able to pull it off, as it's a big step forward when it comes
          to utilizing all this new material), but this post is getting pretty
          long, so I think I'll cut it out here. You can check out the full
          Chattr code on{" "}
          <a
            href="https://github.com/JoshLDowns/downs-phelps-chat"
            target="_blank"
          >
            GitHub
          </a>
          , and check the application itself out on{" "}
          <a href="https://chittr-chattr.herokuapp.com/" target="_blank">
            Heroku
          </a>
          !
        </p>
        <p className="code-text">
          Until next week, stay safe ... stay inside ... and keep learning!
          ~Josh
        </p>
      </div>
    </div>
  );
}

export default March29;
