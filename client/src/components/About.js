import React from 'react'

//Functional component that renders the about me page
function About(props) {
    return (
        <div id='main-div'>
            <div id='div-scroll' className={props.animationClass}>
                <div id='about'>
                    <div id='headshot-wrapper'>
                        <img id='headshot' src='./images/headshot.png' alt='Josh Downs Picture' />
                    </div>
                    <h1>HI, I'M JOSH</h1>
                    <h2>~ Full Stack Web Developer ~</h2>
                    <p>I'm currently a student / TA at Burlington Code Academy in Burlington, VT</p>
                    <h4>Let's get the technical stuff out of the way first:</h4>
                    <p>Languages . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . JavaScript, HTML, CSS</p>
                    <p>Frameworks &amp; Libraries . . . . . . . . . . . . . . . . . . . . . . . . . . . NodeJS, React, Express, Inquirer, *jQuery</p>
                    <p>Databases . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  *MongoDB</p>
                    <p>Version Control . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . Git</p>
                    <p>Tools &amp; Related Software . . . . . . . . . . . . . . . . . . . . . . . . . .Adobe Creative Suite, Visual Studio Code</p>
                    <h5>*in current curriculum</h5>
                    <h2>As for the personal stuff...</h2>
                    <div id='headshot-wrapper'>
                        <img id='headshot' src='./images/fam.png' alt='Family Picture' />
                    </div>
                    <p>I'm a dedicated father, husband and overall a pretty quirky guy. I love hiking with the kiddos, drawing robots, exploring new challenges, and am driven by a continuos urge to learn, and an ever growing curiosity as to how things work. When I'm not working on growing as a developer, you can usually find me playing a game of Ticket to Ride with my amazing wife, battling it out in a game of Pokemon Cards with the kids, getting overly excited over a game of Mario Kart, or taking a walk in the woods with the family.</p>
                </div>
            </div>
            <div id='div-fade'></div>
        </div>
    )
}

export default About