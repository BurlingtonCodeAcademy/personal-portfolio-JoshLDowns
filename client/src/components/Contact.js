// -------- Component to handle contacting me -------- //
import React from 'react';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }

    //handles external image links
    handleImageLink = (event) => {
        window.location = event.target.id;
    }

    // ---- Form handlers ---- //
    onNameChange = (event) => {
        this.setState({ name: event.target.value })
    }

    onEmailChange = (event) => {
        this.setState({ email: event.target.value })
    }

    onMessageChange = (event) => {
        this.setState({ message: event.target.value })
    }

    resetForm = () => {
        this.setState({ name: '', email: '', message: '' })
    }

    // sends message to server to be handled by nodemailer and sent via email
    handleSubmit = (event) => {
        event.preventDefault();
        alert('This is a work in progress! Email me at josh.lloyd.downs@gmail.com!\n(.... this did not work as intended ....)')
    }

    //renders the contact form, and external contact links
    render() {
        return (
            <div id='main-div'>
                <div id='div-scroll' className={this.props.animationClass}>
                    <div id='contact-body'>
                        <h3>If you have any questions for me, are interested in working together, or just want to get in touch, fill out the form!</h3>
                        <div id='contact-form'>
                            <form id='message-inputs' onSubmit={this.handleSubmit} method="POST">
                                <label>
                                    NAME:
                                    <input type='text' id='form-name' value={this.state.name} onChange={this.onNameChange}></input>
                                </label>
                                <label>
                                    EMAIL:
                                    <input type='text' id='form-email' value={this.state.email} onChange={this.onEmailChange}></input>
                                </label>
                                <br />
                                <label>
                                    MESSAGE:
                                </label>
                                <textarea id='form-message' value={this.state.message} onChange={this.onMessageChange}></textarea>
                                <br />
                                <button type='submit' id='form-submit'>SUBMIT</button>
                            </form>
                        </div>
                        <h3>Or catch up with me in some of these places!</h3>
                        <div id='contact-images'>
                            <div className='contact-image-wrapper'>
                                <img src='./images/github-logo.png' className='contact-image' id='https://github.com/JoshLDowns' onClick={this.handleImageLink} alt='Git Hub Link' />
                            </div>
                            <div className='contact-image-wrapper'>
                                <img src='./images/linkedin-logo.png' className='contact-image' id='https://www.linkedin.com/in/josh-l-downs/' onClick={this.handleImageLink} alt='LinkedIn Link' />
                            </div>
                            <div className='contact-image-wrapper'>
                                <img src='./images/facebook-logo.png' className='contact-image' id='https://www.facebook.com/UltraDowny' onClick={this.handleImageLink} alt='Facebook Link' />
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