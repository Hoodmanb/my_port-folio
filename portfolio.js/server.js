const sendMail = require("./controller/control.js");


const http = require("http");
const fs = require("fs");
const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const port = 7000;
const host = "127.0.0.1";

const expApp = express();


expApp.set("view engine", "ejs");
expApp.use("/assets", express.static("assets"));


expApp.get("/", function (request, res) {
	res.render("index");
});

expApp.use(bodyParser.json());
expApp.use(bodyParser.urlencoded({ extended: true }));


const route = require("./routes/route.js")
expApp.post("/sendMail", sendMail);


expApp.listen(port);
console.log(`Access Server On http://${host}:${port}`);