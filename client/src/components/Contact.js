// -------- Component to handle contacting me -------- //
import React from 'react';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            status: false
        }
    }

    handleClose = () => {
        this.setState({
            status: false
        })
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
        if (this.state.name === '' || this.state.email === '' || this.state.message === '') {
           return alert('Please fill in all of the fields! Thank you for trying to reach out!')
        }
        fetch(('/newContact'), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name: this.state.name, email: this.state.email, message: this.state.message})
        }).then(res=>res.json()).then((jsonObj)=>{
            this.setState({
                status: jsonObj.status
            })
        })
        this.resetForm();
    }

    //renders the contact form, and external contact links
    render() {
        return (
            <div id='main-div'>
                {this.state.status && <ThankYouModal handleClose={this.handleClose} />}
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
                                    <input type='email' id='form-email' value={this.state.email} onChange={this.onEmailChange}></input>
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

function ThankYouModal(props) {
    return (
        <div id='thank-you-modal' className='modal-load'>
            <div id='thank-you-body'>
                <h1>Thank you for getting in touch!</h1>
                <h3>I will get back to you soon!</h3>
            </div>
            <div id='thank-you-footer'>
            <button id='image-close' onClick={props.handleClose}>Go Back</button>
            </div>
        </div>
    )
}

export default Contact