//import express from 'express'
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const router = express.Router();
const nodemailer = require('nodemailer');
const cors = require('cors');
const creds = require('./config');


let transport = {
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // use SSL
  auth: {
  user: creds.USER,
  pass: creds.PASS
}
}

let transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

router.post('/send', (req, res, next) => {
  var name = req.body.name
  var email = req.body.email
  var message = req.body.message
  var content = `name: ${name} \n email: ${email} \n message: ${message} `

  var mail = {
    from: name,
    to: 'josh.lloyd.downs@gmail.com',  // Change to email address that you want to receive messages on
    subject: 'New Message from Contact Form',
    text: content
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: 'fail'
      })
    } else {
      res.json({
       status: 'success'
      })
    }
  })
})

app.use(cors())
app.use(express.json())
app.use('/', router)

app.use(express.static(path.join(__dirname, '/client/build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/build/index.html'));
  });

app.listen(port, ()=>{console.log(`Listening on port: ${port}`)})
