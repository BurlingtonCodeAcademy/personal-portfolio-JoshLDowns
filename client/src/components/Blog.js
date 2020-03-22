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

    handleArchive = (event) => {
        this.setState({
            current: event.target.id === 'current' ? true : false,
            archive: false
        })
    }

    handleArchiveLink = (event) => {
        this.setState({
            archive: event.target.id
        })
    }

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

function BlogHeader(props) {
    return (
        <div id='blog-header'>
            <h1 id='current' className={props.current ? 'selected-link' : 'text-link'} onClick={props.handleArchive}>CURRENT</h1>
            <h1 id='archive' className={props.current ? 'text-link' : 'selected-link'} onClick={props.handleArchive}>ARCHIVES</h1>
        </div>
    )
}

function ArchiveLinks(props) {
    return (
        <div id='archive-links'className={props.className}>
            {props.archiveNames.map((name, i)=>{
                return <h1 id={`archive-${i}`} key={i} onClick={props.handleArchiveLink} className={!props.archive? 'text-link' : props.archiveNames[parseInt(props.archive.split('-')[1])]===name ? 'selected-link':'text-link'}>{name}</h1>
            })}
        </div>
    )
}

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
        </div>
    )
}


export default Blog