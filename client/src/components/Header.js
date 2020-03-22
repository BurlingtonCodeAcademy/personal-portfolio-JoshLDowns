import React from 'react'
import { Link } from 'react-router-dom'

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            currentPage: '/'
        }
    }

    render() {
        return (
            <div id='header'>
                <div id='nav-links'>
                    <Link to={'/'} style={{textDecoration: 'none'}}><h1 id='home-link' className={this.props.currentPage==='/'?'selected-link':'text-link'} onClick={this.props.handleLink}>HOME</h1></Link>
                    <Link to={'/about'} style={{textDecoration: 'none'}}><h1 id='about-link' className={this.props.currentPage==='/about'?'selected-link':'text-link'} onClick={this.props.handleLink}>ABOUT</h1></Link>
                    <Link to={'/code'} style={{textDecoration: 'none'}}><h1 id='code-link' className={this.props.currentPage==='/code'?'selected-link':'text-link'} onClick={this.props.handleLink}>CODE</h1></Link>
                    <Link to={'/art'} style={{textDecoration: 'none'}}><h1 id='art-link' className={this.props.currentPage==='/art'?'selected-link':'text-link'} onClick={this.props.handleLink}>ART</h1></Link>
                    <Link to={'/blog'} style={{textDecoration: 'none'}}><h1 id='blog-link' className={this.props.currentPage==='/blog'?'selected-link':'text-link'} onClick={this.props.handleLink}>BLOG</h1></Link>
                </div>
                <div id='contact'>
                    <Link to={'/contact'} style={{textDecoration: 'none'}}><h1 id='contact-link' className={this.props.currentPage==='/contact'?'selected-link':'text-link'} onClick={this.props.handleLink}>CONTACT</h1></Link>
                </div>
            </div>
        )
    }
}

export default Header;