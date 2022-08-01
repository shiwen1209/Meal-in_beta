// heroku changes
const path = require('path');
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'));
    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    })
} // heroku changes


const mongoose = require('mongoose');
const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI;
const users = require("./routes/api/users");
const recipes = require("./routes/api/recipes");
const ratings = require("./routes/api/ratings");
const likes = require("./routes/api/likes");
const mainpage = require("./routes/api/mainpage");
const mealplan = require("./routes/api/mealplan");
const search = require("./routes/api/search");
const testme = require("./routes/api/testme");


const seedDb = require("./seed_plan");

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const passport = require('passport');



mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .then(seedDb) // can remove later
    .catch(err => console.log(err));




app.get("/", (req, res) => res.send("Hello World!!"));
app.use(passport.initialize());
require('./config/passport')(passport);

app.use("/api/users", users);
app.use("/api/recipes", recipes);
app.use("/api/ratings", ratings);
app.use("/api/likes", likes);
app.use("/api/mainpage", mainpage);
app.use("/api/mealplan", mealplan);
app.use("/api/search", search);
app.use("/api/testme", testme);



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));