const mongoose = require('mongoose');
const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI;
const users = require("./routes/api/users");
const recipes = require("./routes/api/recipes");
const ratings = require("./routes/api/ratings");
const likes = require("./routes/api/likes");
const mainpage = require("./routes/api/mainpage");

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const passport = require('passport');

//image upload functionality
// const multer = require('multer')
// const upload = multer({dest: 'uploads/'})
// app.post('/images', upload.single())

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hello World!!"));
app.use(passport.initialize());
require('./config/passport')(passport);

app.use("/api/users", users);
app.use("/api/recipes", recipes);
app.use("/api/ratings", ratings);
app.use("/api/likes", likes);
app.use("/api/mainpage", mainpage);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));