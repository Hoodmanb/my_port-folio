//line to configure dotenv for reading environmental varible
require('dotenv').config()
//import nodemailer for sending mail
const nodemailer = require('nodemailer')

async function sendMail(req, res) {
    try {
        const {
            name,
            email,
            message
        } = req.body

        //console.log(transporter)
        const text = Object.keys(req.body)
            .map(key => `${key}: ${req.body[key]}`)
            .join('\n');

        //mail sender configuration
        const mailOptions = {
            to: process.env.RECIECING_EMAIL,
            from: email,
            subject: 'What i think about your port-folio',
            text: text
        }

        await myTransporter(mailOptions)
        res.status(200).send({
            message: 'successful!'
        })
    } catch (error) {
        console.log('sendmail err:', error)
        res.status(500).send({
            message: 'server error'
        })
    }
}

//mail reciver configuration
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.SENDING_EMAIL,
        pass: process.env.EMAIL_PASSWORD
    }
})

const myTransporter = (mailOptions) => {
    return new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error(error)
                return reject(error)
            }
            console.log(info)
            return resolve(info)
        });
    })
}

module.exports = sendMail;