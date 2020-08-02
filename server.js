require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 5000;
const sgMail = require("@sendgrid/mail");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cloudinary = require("cloudinary");
mongoose.connect(
  `mongodb+srv://joshldowns:${process.env.PASSWORD}@josh-d-blog-archive-wxvci.mongodb.net/contact?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);
//mongodb+srv://joshldowns:<password>@josh-d-blog-archive-wxvci.mongodb.net/test?retryWrites=true&w=majority
const newDataBase = mongoose.connection;

newDataBase.on("error", (err) => {
  console.log("Something went wrong:", err);
});
newDataBase.once("open", () => {
  console.log("Connected...");
});

//cloudinary config setup
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key:  process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})

app.use(express.static(path.join(__dirname, "/client/build")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/newContact", getMessage);
app.post("/portfolioImage", getImage);
app.get("/thumbnails", getThumbs);

const messageSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const Message = mongoose.model("Message", messageSchema);

async function getMessage(req, res) {
  let name = req.body.name;
  let email = req.body.email;
  let message = req.body.message;

  let newMessage = Message({
    name: name,
    email: email,
    message: message,
  });

  await newMessage.save();

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: "josh.lloyd.downs@gmail.com",
    from: email,
    subject: "New Contact from joshdowns.dev",
    text: `${message}\nFrom: ${name}`,
  };
  try {
    sgMail.send(msg);
    res.type("application/json").send(JSON.stringify({ status: "thank-you" }));
  } catch (err) {
    res.type("application/json").send(JSON.stringify({ status: err}));
  }
}

async function getThumbs(req,res) {
  try {
  cloudinary.v2.search
  .expression('tags:emorobotthumb')
  .with_field('context')
  .sort_by('public_id','desc')
  .max_results(30)
  .execute().then(result=>res.type("application/json").send(result));
  } catch (err) {
    console.error(err)
    res.type("application/json").send(JSON.stringify({ error: err }))
  }
}

async function getImage(req, res) {
  let publicId = req.body.publicId

  cloudinary.v2.api.resource(publicId, (err, result) => {
    if (err) {
      console.error(err);
      res.type("application/json").send(JSON.stringify({ error: err }))
    } else {
      res.type("application/json").send(JSON.stringify(result))
    }
  })
}

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build/index.html"));
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
