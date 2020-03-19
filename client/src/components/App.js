import React from 'react';
import Header from './Header.js'
import HomeNav from './HomeNav.js'
import About from './About.js'
import Code from './Code.js'
import Art from './Art.js'
import Blog from './Blog.js'
import { Switch, Route } from 'react-router-dom';
import '../styles/App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isHome: true,
      currentPage: 'home-link'
    }
  }

  handleHeaderLink = (event) => {
    this.setState({
      isHome: event.target.id==='home-link',
      currentPage: event.target.id
    })
  }

  handleNavLink = (event) => {
    let linkText = event.target.id.slice(0, event.target.id.length-4)
    this.setState({
      isHome: linkText==='home-link',
      currentPage: linkText
    })
  }

  render() {

    return (
      <div id='body'>
        <Header currentPage={this.state.currentPage} handleHeaderLink={this.handleHeaderLink} currentPagt={this.state.currentPage}/>
        {this.state.isHome&&<HomeNav handleNavLink={this.handleNavLink}/>}
        <Switch>
          <Route path={'/about'} component={About} />
          <Route path={'/code'} component={Code} />
          <Route path={'/art'} component={Art} />
          <Route path={'/blog'} component={Blog} />
        </Switch>
      </div>
    );
  }
}

export default App;
