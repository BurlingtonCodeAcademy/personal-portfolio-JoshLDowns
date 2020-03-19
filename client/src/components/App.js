import React from 'react';
import Header from './Header.js'
import HomeNav from './HomeNav.js'
import Footer from './Footer.js'
import '../styles/App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {

    return (
      <div id='body'>
        <Header />
        <HomeNav />
        <Footer />
      </div>
    );
  }
}

export default App;
