
require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.connect(`mongodb+srv://joshldowns:${process.env.PASSWORD}@josh-d-blog-archive-wxvci.mongodb.net/contact?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true})
//mongodb+srv://joshldowns:<password>@josh-d-blog-archive-wxvci.mongodb.net/test?retryWrites=true&w=majority
const newDataBase = mongoose.connection;

newDataBase.on('error', (err)=>{console.log('Something went wrong:',err)});
newDataBase.once('open', ()=>{console.log('Connected...')});

app.use(express.static(path.join(__dirname, '/client/build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/newContact', getMessage);

const messageSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String
});

const Message = mongoose.model('Message', messageSchema);

async function getMessage(req, res) {
  let name = req.body.name;
  let email = req.body.email;
  let message = req.body.message;

  let newMessage = Message({
    name: name,
    email: email,
    message: message
  })

  await newMessage.save()
  res.type('application/json').send(JSON.stringify({status: 'thank-you'}))
}

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/build/index.html'));
  });

app.listen(port, ()=>{console.log(`Listening on port: ${port}`)})