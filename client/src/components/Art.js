// -------- Component that holds Art Portfolio -------- //

import React from 'react'

class Art extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentModal: false
        }
    }
    
    //handles when thumbnails get selected to view modal
    handleModal = (event) => {
        this.setState({
            currentModal: event.target.id
        })
    }

    //closes modal windows
    handleClose = () => {
        console.log('click')
        this.setState({
            currentModal: false
        })
    }

    //renders all thumbnails
    render() {
        return (
            <div>
                {/*conditionally renders modal window based on state*/}
                {this.state.currentModal && <ArtModal currentModal={this.state.currentModal} handleClose={this.handleClose}/>}
            <div id='main-div'>
                <div id='div-scroll' className={this.props.animationClass}>
                    <div className='art-category'>
                        <div className='art-title'>
                            <h1>I DRAW ROBOTS</h1>
                        </div>
                        <div className='art-thumbnails'>
                            <img src='/images/portfolio/balloon-ride-thumb.png' alt='Balloon Ride Thumb' id='balloon-ride' onClick={this.handleModal} className='art-thumb' />
                            <img src='/images/portfolio/empty-thumb.png' alt='Empty Thumb' id='empty' onClick={this.handleModal} className='art-thumb' />
                            <img src='/images/portfolio/lost-balloon-thumb.png' alt='Lost Balloon Thumb' id='lost-balloon' onClick={this.handleModal} className='art-thumb' />
                            <img src='/images/portfolio/stuck-thumb.png' alt='Stuck Thumb' id='stuck' onClick={this.handleModal} className='art-thumb' />
                            <img src='/images/portfolio/kirby-v-robot-thumb.png' alt='Kirby v Robot Thumb' id='kirby-v-robot' onClick={this.handleModal} className='art-thumb' />
                            <img src='/images/portfolio/robot-ascension-mat-thumb.png' alt='Robot Ascension Mat Thumb' id='robot-ascension-mat' onClick={this.handleModal} className='art-thumb' />
                            <img src='/images/portfolio/robot-outpost-mat-thumb.png' alt='Robot Outpost Mat Thumb' id='robot-outpost-mat' onClick={this.handleModal} className='art-thumb' />
                            <img src='/images/portfolio/magic-comic-thumb.png' alt='Magic Comic' id='magic-comic' onClick={this.handleModal} className='art-thumb' />
                            <img src='/images/portfolio/token-angel-thumb.png' alt='Angel Token Thumb' id='token-angel' onClick={this.handleModal} className='art-thumb' />
                            <img src='/images/portfolio/token-golem-thumb.png' alt='Golem Token Thumb' id='token-golem' onClick={this.handleModal} className='art-thumb' />
                            <img src='/images/portfolio/token-hippo-thumb.png' alt='Hippo Token Thumb' id='token-hippo' onClick={this.handleModal} className='art-thumb' />
                            <img src='/images/portfolio/token-merfolkwizard-thumb.png' alt='Merfolk Wizard Thumb' id='token-merfolkwizard' onClick={this.handleModal} className='art-thumb' />
                            <img src='/images/portfolio/token-pegasus-thumb.png' alt='Pegasus Thumb' id='token-pegasus' onClick={this.handleModal} className='art-thumb' />
                            <img src='/images/portfolio/token-plant-thumb.png' alt='Plant Token Thumb' id='token-plant' onClick={this.handleModal} className='art-thumb' />
                            <img src='/images/portfolio/token-scion-thumb.png' alt='Eldrazi Scion Token Thumb' id='token-scion' onClick={this.handleModal} className='art-thumb' />
                            <img src='/images/portfolio/token-servo-thumb.png' alt='Servo Token Thumb' id='token-servo' onClick={this.handleModal} className='art-thumb' />
                            <img src='/images/portfolio/token-thopter-thumb.png' alt='Thopter Token Thumb' id='token-thopter' onClick={this.handleModal} className='art-thumb' />
                            <img src='/images/portfolio/token-zombie-thumb.png' alt='Zombie Token Thumb' id='token-zombie' onClick={this.handleModal} className='art-thumb' />
                        </div>
                    </div>
                </div>
                <div id='div-fade'></div>
            </div>
            </div>
        )
    }
}

//functional modal component
function ArtModal(props) {
    let title = props.currentModal.split('-').join(' ').toUpperCase();
    return (
        <div id='art-modal' className='modal-load'>
            <div id='modal-title-bar'>
                <p>{title}</p>
                <button id='image-close' onClick={props.handleClose}>X</button>
            </div>
            <div id='modal-image-wrapper'>
                <img src={`/images/portfolio/${props.currentModal}.png`} className='modal-image' alt={`${props.currentModal}`} />
            </div>
        </div>
    )
}

export default Art