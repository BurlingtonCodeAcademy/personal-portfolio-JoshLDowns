// ------- Main routing page that holds static headbar component ------- //

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

  //event handler for clicking on links in headbar
  handleLink = () => {
    this.setState({
      currentPage: window.location.pathname
    })
  }

  //event handler for back and forward buttons
  browserButtonHandler = (event) => {
    this.setState({
      currentPage: event.target.location.path
    })
  }

  //event handler for navigation carousel events
  handleNavLink = (event) => {
    this.setState({
      currentPage: event.target.id
    })
  }

  //sets event listener for back and forward buttons on mount, and makes sure current page is correct in state in case of refresh
  componentDidMount() {
    window.onpopstate=this.browserButtonHandler
    this.setState({
      currentPage: window.location.pathname
    })
  }

  //makes sure the currentPage is correct in state on componenet update
  componentDidUpdate() {
    if (this.state.currentPage !== window.location.pathname) {
      this.setState({
        currentPage: window.location.pathname
      })
    }
  }

  //renders all components through routing
  render() {
  
    return (
      <div id='body'>
        <Header currentPage={this.state.currentPage} handleLink={this.handleLink}/>
        <div>
          <Route exact path='/' >
            <HomeNav handleNavLink={this.handleNavLink} leaveHome={this.state.leaveHome}/>
          </Route>
          <Route path='/about'>
            <About animationClass='animate-div-load'/>
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
            <Contact animationClass='animate-div-load'/>
          </Route>
        </div>
      </div>
    );
  }
}

export default App;
