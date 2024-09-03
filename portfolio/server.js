//import required packages
const express = require("express");
const sendMail = require("./controller/control.js");
const bodyParser = require("body-parser");

const port = 7000;
const host = "127.0.0.1";

//express init
const expApp = express();

//for reading the body object
expApp.use(bodyParser.urlencoded({
    extended: true
}));

const {
    dropdown,
    head,
    copyright
} =
    require(__dirname + '/assets/js-files/partials')

const blogs = require('./db/blog.json')
const projects = require('./db/projects.json')


//ejs as view engine
expApp.set("view engine", "ejs");
//assets folder for static files
expApp.use("/assets", express.static("assets"));

expApp.get("/", function (request, res) {
    res.render("index", {
        head: head, dropdown: dropdown,
        copyright: copyright
    });
});

expApp.get("/resume", function (request, res) {
    res.render("resume");
});

expApp.get("/blog", function (request, res) {
    res.render("blog", {
        blogs: blogs, dropdown: dropdown,
        copyright: copyright, head: head
    });
});

expApp.get("/projects", (req, res) => {
    res.json(projects)
})

// expApp.get("/partials", function (request, res) {
//     res.render("partials/partial");
// });

expApp.post("/sendmail", sendMail);

expApp.use((req, res, next) => {
    res.status(404).render('404');
})

expApp.listen(port);
console.log(`Access Server On http://${host}:${port}`);