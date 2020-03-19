import React from 'react'
import { Link } from 'react-router-dom'

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            currentPage: 'home-link'
        }
    }

    render() {
        return (
            <div id='header'>
                <div id='nav-links'>
                    <Link to={'/'} style={{textDecoration: 'none'}}><h1 id='home-link' className={this.props.currentPage==='home-link'?'selected-link':'text-link'} onClick={this.props.handleHeaderLink}>HOME</h1></Link>
                    <Link to={'/about'} style={{textDecoration: 'none'}}><h1 id='about-link' className={this.props.currentPage==='about-link'?'selected-link':'text-link'} onClick={this.props.handleHeaderLink}>ABOUT</h1></Link>
                    <Link to={'/code'} style={{textDecoration: 'none'}}><h1 id='code-link' className={this.props.currentPage==='code-link'?'selected-link':'text-link'} onClick={this.props.handleHeaderLink}>CODE</h1></Link>
                    <Link to={'/art'} style={{textDecoration: 'none'}}><h1 id='art-link' className={this.props.currentPage==='art-link'?'selected-link':'text-link'} onClick={this.props.handleHeaderLink}>ART</h1></Link>
                    <Link to={'/blog'} style={{textDecoration: 'none'}}><h1 id='blog-link' className={this.props.currentPage==='blog-link'?'selected-link':'text-link'} onClick={this.props.handleHeaderLink}>BLOG</h1></Link>
                </div>
                <div id='contact'>
                    <h1 id='contact-link' className='text-link'>CONTACT</h1>
                </div>
            </div>
        )
    }
}

export default Header;