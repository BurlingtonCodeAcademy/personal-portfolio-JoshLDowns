import React from 'react'
import about from '../images/about-link-gray.png'
import code from '../images/code-link-gray.png'
import art from '../images/art-link-gray.png'
import blog from '../images/blog-link-gray.png'
import arrow from '../images/arrow.png'
import { Link } from 'react-router-dom'

class HomeNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            imgAr: [<Link to={'/about'}><img src={about} id='about-link-img' className='img-button' onClick={this.props.handleNavLink} alt='About Link'/></Link>,
                <Link to={'/code'}><img src={code} id='code-link-img' className='img-button' alt='Code Link' onClick={this.props.handleNavLink}/></Link>,
                <Link to={'/art'}><img src={art} id='art-link-img' className='img-button' onClick={this.props.handleNavLink} alt='Art Link' /></Link>,
                <Link to={'blog'}><img src={blog} id='blog-link-img' className='img-button' alt='Blog Link' onClick={this.props.handleNavLink}/></Link>],
            centerLeftClass: '',
            rightCenterClass: ''
        }
    }

    handleSwitch = () => {
        this.setState(prevState =>({
            count: (prevState.count===3?0:prevState.count+1),
            centerLeftClass: 'animate-center-left',
            rightCenterClass: 'animate-right-center'
        }))
    }

    handleUp = () => {
        setTimeout(this.setState({
            centerLeftClass: '',
            rightCenterClass: ''
        }), 500)
    }

    render() {

        return (
            <div id='nav-container'>
                <div id='main-nav'>
                    <img src={arrow} className='nav-button' onClick={this.handleSwitch} onMouseUp={this.handleUp} alt='Arrow Navigation' />
                    <div id='image-buttons'>
                        <div id='left-link' className={this.state.centerLeftClass}>
                            {this.state.imgAr[this.state.count === 0 ? 3 : this.state.count - 1]}
                        </div>
                        <div id='center-link' className={this.state.rightCenterClass}> 
                            {this.state.imgAr[this.state.count]}
                        </div>
                        <div id='right-link' >
                            {this.state.imgAr[this.state.count === 3 ? 0 : this.state.count + 1]}
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}

export default HomeNav