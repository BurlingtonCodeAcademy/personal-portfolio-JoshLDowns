import React from "react";

function April15(props) {
  return (
    <div className={props.className}>
      <div className="blog-post">
        <h3 className="code-title">April 15, 2020</h3>
        <p className="code-text">
          It's been a few weeks, but I've been so busy that this got pushed to
          the backburner slightly. Good news about that though, there is a ton
          to talk about! More than I could feasibly cover in a single blog post,
          so I'll be trying to get through some of the bigger things of note
          that have happened. First off, the thing that takes up most of my time
          right now, capstone projects. My group and I kind of got off to a
          rough start, as our first sponsor wasn't able to meet with us in a
          reasonable amount of time, and we had to switch projects on the fly.
          We ended up going with a project from Ceres Greens, a vertical farming
          operation based in Barre, VT.
        </p>
        <p className="code-text">
          Ceres is currently in the process of installing a new monitoring
          system for all of their operations, and needed a way to manage all of
          the data coming in from the system. The proposed system consists of a
          large amount of temperature and humidity sensors, as well as sensors
          that measure things like electrical current and pH. All of these
          sensors will be sending data to a time series database, in this case,
          InfluxDB. Since this project is in the works, we needed some sort of
          data to work with to build our application, so I took on the task of
          playing Farmville to some extent, and built a simulation that
          consisted of twenty mock sensors, all firing at three second intervals
          to simulate data coming in from the proposed sensors that we could
          work with. I set each of them to fluctuate on their own sine curve,
          and added a little jitter to the data to make it somewhat realistic.
          Granted, it fluctuated much quicker than they will in real life, but
          this is allowing us to make sure all of our triggers are working. The
          mock sensor code looks like this for each sensor:
        </p>
        <div className="blog-img-wrapper">
          <img
            className="blog-img"
            src="./images/blog-img/sensorSimulationSnip.png"
            alt="Code snippet"
          />
        </div>
        <p className="code-text">
          Currently, my poor computer is just on non stop sending this data
          constantly so we have a good amount of data to work with for our
          presentations next week. Despite my computer wanting desperately to
          run it's Windows update (it won't stop reminding me), we've managed to
          get enough live data to work with. Once we had data, we needed to
          build something that would display any sensor that might be out of
          it's given deviation range (basically if it's to hot, or humid
          somewhere) on large displays that will live around the farm. My
          portion of the project was handing all the data (it made the most
          sense... I built the simulation, I knew exactly what we were working
          with), so I started working on parsing the data on intervals, into
          something that we could use. We landed on building a page that would
          display items falling out of deviation range based on ones that were
          in critical ranges first, and then in warning ranges second. They will
          be larger based on importance. Here is the current (in the works)
          version of the dashboard:{" "}
        </p>
        <div className="blog-img-wrapper">
          <img
            className="blog-img"
            src="./images/blog-img/dashsample.png"
            alt="Sample Dashboard"
          />
        </div>
        <p className="code-text">
          Eventually, all kinds of machines in the farm will be hooked into the
          system as well, and we are toying with what that might look like on
          the right side of the dashboard (all the fans and lights and stuff).
          There is a whole other side of the project as well, that allows for
          querying of all of the old data, and displays a list of all the
          sensors and their current status. That page is still in the works, but
          it's coming along nicely.
        </p>
        <p className="code-text">
          I gotta say, even though our start to this project was a little rough,
          the team has taken the hand we were dealt and is really putting out an
          awesome product. I'm really looking forward to presenting it next
          week, and if you want to check it out, feel free to come check out the
          live demo, along with the rest of the classes awesome projects! You
          can get a free ticket to the event here:{" "}
          <a href="https://www.eventbrite.com/e/demo-day-tickets-102429960770">
            Demo Day!
          </a>{" "}
          Before I sign off, I just also wanted to say that my buddy Paul and I
          built our first chat application a couple weeks ago as well that I was
          super excited about. First time really utilizing the full MERN stack,
          you can check it out in the Code section of the site!
        </p>
        <p className="code-text">
          Well, I'll cut it off here. I hope everyone is staying safe, and
          continuing to learn while they are stuck at home. I hope everyone has
          a great week, and until next time, happy coding! ~ Josh
        </p>
      </div>
    </div>
  );
}

export default April15;
