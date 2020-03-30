// -------- Blog Component --------//

//imports of various archived blogposts
import React from 'react'
import FirstEntry from './blog-posts/FirstEntry.js'
import February15 from './blog-posts/February15.js'
import February24 from './blog-posts/February24.js'
import February29 from './blog-posts/February29.js'

class Blog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            archiveNames: ['First Entry', 'Feb. 15, 2020', 'Feb. 24, 2020', 'Feb. 29, 2020'],
            archiveComponents: [<FirstEntry />, <February15 />, <February24 />, <February29 />],
            archive: false,
            current: true
        }
    }

    //handles when archives are selected in the blog to display archive links
    handleArchive = (event) => {
        this.setState({
            current: event.target.id === 'current' ? true : false,
            archive: false
        })
    }

    //handles when archive links are selected
    handleArchiveLink = (event) => {
        this.setState({
            archive: event.target.id
        })
    }
    
    //conditionally renders various parts of the blog page based on selections
    render() {
        return (
            <div id='main-div' className={this.props.animationClass}>
                <BlogHeader current={this.state.current} handleArchive={this.handleArchive} />
                <div id='blog-scroll'>
                    {this.state.current && <CurrentBlog className={this.props.animationClass} />}
                    {!this.state.current && <ArchiveLinks className={this.props.animationClass} handleArchiveLink={this.handleArchiveLink} archiveNames={this.state.archiveNames} archive={this.state.archive}/>}
                    {this.state.archive && this.state.archiveComponents[parseInt(this.state.archive.split('-')[1])]}
                </div>
                <div id='div-fade'></div>
            </div>
        )
    }
}

//Blog header component that holds links to current posts and archives
function BlogHeader(props) {
    return (
        <div id='blog-header'>
            <h1 id='current' className={props.current ? 'selected-link' : 'text-link'} onClick={props.handleArchive}>CURRENT</h1>
            <h1 id='archive' className={props.current ? 'text-link' : 'selected-link'} onClick={props.handleArchive}>ARCHIVES</h1>
        </div>
    )
}

//Component that renders all links in archive based on state
function ArchiveLinks(props) {
    return (
        <div id='archive-links'className={props.className}>
            {props.archiveNames.map((name, i)=>{
                {/*nested ternary to handle highlighting of archive links*/}
                return <h1 id={`archive-${i}`} key={i} onClick={props.handleArchiveLink} className={!props.archive? 'text-link' : props.archiveNames[parseInt(props.archive.split('-')[1])]===name ? 'selected-link':'text-link'}>{name}</h1>
            })}
        </div>
    )
}

//functional component for current blog posts
function CurrentBlog(props) {
    return (
        <div className={props.className}>
            <div className='blog-post'>
                <h3 className='code-title'>March 22, 2020</h3>
                <p className='code-text'>It's been a couple weeks since my last post, and in the current climate, I'm sure anyone reading this could understand why. As my family transitions to homeschooling the kids at the moment, school for myself has transitioned to being entirely online and at home as well. It's funny, I thought being at home would give me more time, but I almost feel busier. I've taken on some TA duties with Burlington Code Academy, and I find myself constantly in my office either working on my own projects, or helping classmates.</p>
                <p className='code-text'>Not that the extra time coding is a bad thing, I truly love teaching and helping the class, and working through new material in this position definitely helps solidify my knowledge of the concepts. I think the biggest struggle in this transition though is finding balance. There are all new responsibilities with the kiddos being home all day and not at school. Budgeting is more important than ever, as work hours for my wife and I are reduced drastically at the moment. And most of all, telling a four and six year old that they can't go play with their friends is heartbreaking.</p>
                <p className='code-text'>The kiddos are definitely handling it the best they can though, and we are doing our best to make the most of it. There has been a lot more family game time, which is great. Just yesterday I taught Mason, my oldest, to ride his bike without training wheels (while avoiding anyone we ran into of course), and I don't think I'll ever forget the smile on his face when he realized he was doing it by himself. I need to give a huge shout out to my wife, as she has really taken on the majority of the homeschooling with me still being in school online all day. She truly is an amazing woman, and I don't know where I'd be without her.</p>
                <p className='code-text'>I guess what I'm trying to say in all of this, is that in times like these all we can do is make what we can of it. Don't stop learning, don't stop loving, don't stop supporting those around you ... don't stop living your life. Just because we need to be inside, it's not an excuse to give up on goals, or on eachother. There are folks fighting harder than most of us can even imagine to keep this thing under control, and it would be a disservice to them if we wasted this time they are giving us.</p>
                <p className='code-text'>The code focused posts will be coming again now that the new site is up and running, but until then, stay safe out there.  ~Josh</p>
            </div>
            <div className='blog-post'>
                <h3 className='code-title'>March 29, 2020</h3>
                <p className='code-text'>This past week was a big one for many reasons. Despite how scary everything seems to be around me right now, I'm hopeful for a bright future. If anything, it gives me even more reason to focus on the current goal, and just keep learning. And to that end, a buddy of mine, Paul, and I dove into building a chat application from the ground up this weekend. We utilized MongoDB, Express, ReactJS, and Node (aka, the full MERN). I'm super excited to say that we got it up and working, and we are both pretty happy with the outcome.</p>
                <p className='code-text'>We started off building from a very useful data class we built during a lab at BCA:</p>
                <div className='blog-img-wrapper'>
                    <img className='blog-img' src='./images/blog-img/datastoreSnip.png' alt='Code snippet' />
                </div>
                <p className='code-text'>There are a few more methods that didn't make it into the image, but you can get the general idea of what's going on from that. Basically, this class works by creating an access point to your database, and then has methods that allow you to manipulate that database in various ways. We were able to utilize this class, and a process called polling to continually check our collections in Mongo for new chat inputs, and render the inputs if something new had come in. Since we built the whole application in React, if there was new data, it would re-render just the chat window, and either scroll the new chat item into view, or alert you that there was a new message if  you happened to be reading something from earlier in chat.</p>
                <p className='code-text'>In order to utilize that class we built, we needed to build a back end server that could handle all the requests coming from the client. This is where Express came in, and I gotta say, working with Express is great. We have used it quite a few times in class, and it is basically plug and play, which is nice. Once we had the server routing correctly, and pulling the information we needed from Mongo, we jumped into actually calling that data from the client. After a lot of scope creep, we ended up with this little bit of code that handled retrieving all the chat objects from the database:</p>
                <div className='blog-img-wrapper'>
                    <img className='blog-img' src='./images/blog-img/fetchIntervalSnip.png' alt='Code snippet' />
                </div>
                <p className='code-text'>This little interval caused us a bunch of trouble for a bit. We ran into a weird bug where it wasn't clearning properly, and the chat rooms would all jump around like crazy. It was kind of like a terrible Chat Roulette. Took us a while to get it all sorted, but after a ton of trial and error, it ended up coming down to a small typo, and some weird variable shadowing (apparently setting something with an id of 'design' doesn't play well with other things, still not fully sure why).</p>
                <p className='code-text'>Once the server was communicating with the client the way we wanted, the rest of the project fell into place pretty handily. We had some fun with it, and utilized an API called names.drycodes to give the users random names when they signed in. Those names were then stored in cookies, so if the user came back they could use the same name if they wanted to. We added a few different rooms to chat in as well, and gave it a sleek, straight out of the 90's look.</p>
                <div className='blog-img-wrapper'>
                    <img className='blog-img' src='./images/blog-img/chattrSnip.png' alt='Chattr Application Screen Shot' />
                </div>
                <p className='code-text'>We kinda jumped into this project head first, and I'm really pumped that we did. Working with Paul was great, and we were able to work through a good chunk of new material pretty quickly. Having someone to soundboard ideas off when you are working on a project is incredibly beneficial. I understand the importance of rubber-ducking more and more as I grow as a coder, but having an actual person that can actually respond... well it's quite a different experience. Either way, I could go on and on about this project (I'm incredibly excited we were able to pull it off, as it's a big step forward when it comes to utilizing all this new material), but this post is getting pretty long, so I think I'll cut it out here. You can check out the full Chattr code on <a href='https://github.com/JoshLDowns/downs-phelps-chat' target='_blank'>GitHub</a>, and check the application itself out on <a href='https://chittr-chattr.herokuapp.com/' target='_blank'>Heroku</a>!</p>
                <p className='code-text'>Until next week, stay safe ... stay inside ... and keep learning!  ~Josh</p>
            </div>
        </div>
    )
}


export default Blog