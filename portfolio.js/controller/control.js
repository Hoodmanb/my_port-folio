const expressAsyncHandler = require("express-async-handler");
const nodemailer = require("nodemailer");


const express = require('express');
const app = express();

const sendMail = expressAsyncHandler(async (req, res) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    auth: {
      user: process.env.from_mail,
      pass: process.env.app_pass
    }
  });

  const from_mail = req.body.from;
  const subject = "What I Think About Your Port-folio";
  const text = Object.keys(req.body)
  .map(key => `${key}: ${req.body[key]}`)
  .join('\n');

  const mail = {
    from: process.env.from_mail,
    to: process.env.mail_reciv,
    subject: subject,
    text: text
  };
  
  transporter.sendMail(mail, (error, info) => {
    if (error) {
      console.error('Error occurred:', error);
      res.redirect('/?status=error'); // Redirect with error status
    } else {
      console.log('Email sent:', info.response);
      res.redirect('/?status=success'); // Redirect with success status
    }
  });
});




module.exports = sendMail;