import React from 'react';
import Header from './Header.js'
import HomeNav from './HomeNav.js'
import About from './About.js'
import Code from './Code.js'
import Art from './Art.js'
import Blog from './Blog.js'
import Contact from './Contact.js'
import { Route } from 'react-router-dom';
import '../styles/App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPage: '/'
    }
  }

  handleLink = () => {
    this.setState({
      currentPage: window.location.pathname
    })
  }

  browserButtonHandler = (event) => {
    this.setState({
      currentPage: event.target.location.path
    })
  }

  handleNavLink = (event) => {
    this.setState({
      currentPage: event.target.id
    })
  }

  componentDidMount() {
    window.onpopstate=this.browserButtonHandler
    this.setState({
      currentPage: window.location.pathname
    })
  }

  componentDidUpdate() {
    if (this.state.currentPage !== window.location.pathname) {
      this.setState({
        currentPage: window.location.pathname
      })
    }
  }


  render() {
  
    return (
      <div id='body'>
        <Header currentPage={this.state.currentPage} handleLink={this.handleLink}/>
        <div>
          <Route exact path='/' >
            <HomeNav handleNavLink={this.handleNavLink} leaveHome={this.state.leaveHome}/>
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/code'>
            <Code animationClass='animate-div-load'/>
          </Route>
          <Route path='/art'>
            <Art animationClass='animate-div-load'/>
          </Route>
          <Route path='/blog'>
            <Blog animationClass='animate-div-load'/>
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
        </div>
      </div>
    );
  }
}

export default App;
