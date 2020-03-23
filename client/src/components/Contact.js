// -------- Component to handle contacting me -------- //
import React from 'react';

class Contact extends React.Component {
    constructor(props) {
        super(props);

    }

    //handles external image links
    handleImageLink = (event) => {
        window.location=event.target.id;
    }

    render() {
        return (
            <div id='main-div'>
                <div id='div-scroll' className={this.props.animationClass}>
                    <div id='contact'>
                        <h3>If you have any questions for me, are interested in working together, or just want to get in touch, fill out the form!</h3>
                        <div id='contact-form'>
                            <form id='message-inputs'>
                                <label>
                                    NAME: 
                                    <input type='text' id='form-name'></input>
                                </label>
                                <label>
                                    EMAIL:
                                    <input type='text' id='form-email'></input>
                                </label>
                                <br />
                                <label>
                                MESSAGE:
                                </label>
                                <textarea id='form-message'></textarea>
                                <br />
                                <input type='submit' id='form-submit' value='SUBMIT'></input>
                            </form>
                        </div>
                        <h3>Or catch up with me in some of these places!</h3>
                        <div id='contact-images'>
                            <div className='contact-image-wrapper'>
                                <img src='./images/github-logo.png' className='contact-image' id='https://github.com/JoshLDowns' onClick={this.handleImageLink}/>
                            </div>
                            <div className='contact-image-wrapper'>
                                <img src='./images/linkedin-logo.png' className='contact-image' id='https://www.linkedin.com/in/josh-l-downs/' onClick={this.handleImageLink}/>
                            </div>
                            <div className='contact-image-wrapper'>
                                <img src='./images/facebook-logo.png' className='contact-image' id='https://www.facebook.com/UltraDowny' onClick={this.handleImageLink}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='div-fade'></div>
            </div>
        )
    }
}

export default Contact