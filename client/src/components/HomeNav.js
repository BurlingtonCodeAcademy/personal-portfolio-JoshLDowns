import React from 'react'
import about from '../images/about-link-gray.png'
import code from '../images/code-link-gray.png'
import art from '../images/art-link-gray.png'
import blog from '../images/blog-link-gray.png'
import arrow from '../images/arrow.png'

class HomeNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            imgAr: [<img src={about} className='img-button' alt='About Link'/>, <img src={code} className='img-button' alt='Code Link' />, <img src={art} className='img-button' alt='Art Link' />, <img src={blog} className='img-button' alt='Blog Link' />],
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