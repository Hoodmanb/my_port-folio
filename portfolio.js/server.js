const sendMail = require("./controller/control.js");

const http = require("http");
const fs = require("fs");
const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const port = 7000;
const host = "127.0.0.1";

const expApp = express();

const {
 blogs,
 dropdown,
 head,
 copyright
} =
require(__dirname + '/assets/js-files/partials')

expApp.set("view engine", "ejs");
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

expApp.get("/partials", function (request, res) {
 res.render("partials/partial");
});


expApp.use(bodyParser.json());
expApp.use(bodyParser.urlencoded({
 extended: true
}));

const route = require("./routes/route.js")
expApp.post("/sendMail", sendMail);

expApp.use((req, res, next) => {
 res.status(404).render('404');
})





expApp.listen(port);
console.log(`Access Server On http://${host}:${port}`);