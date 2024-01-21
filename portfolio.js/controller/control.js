const expressAsyncHandler = require("express-async-handler");
const nodemailer = require("nodemailer");

const sendMail = expressAsyncHandler(async (req, res) => {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        auth: {
            user: process.env.mail,
            pass: process.env.app_pass
        }
    });

    const from_mail = req.body.from;
    const subject = "What I Think About Your Port-folio";
    const text = Object.keys(req.body)
    .map(key => `${key}: ${req.body[key]}`)
    .join('\n');

    const mail = {
        from: from_mail,
        to: process.env.mail_reciv,
        subject: subject,
        text: text
    };

        // Send the email
        try {
            const info = await transporter.sendMail(mail);
            console.log('Email sent:', info.messageId);

            const msg_resp = `<script>const alertDiv = document.createElement('div');
            alertDiv.innerHTML = 'Email sent successfully!';
            alertDiv.className = 'self-disappearing-alert';

            // Append the div to the body
            document.body.appendChild(alertDiv);

            // Set a timeout to remove the div after a couple of seconds
            setTimeout(() => {
            document.body.removeChild(alertDiv);
            }, 2000);
            </script>`


            res.status(200).send(msg_resp);
        } catch (error) {
            console.error('Error sending email:', error);
            res.status(500).send("Something went wrong.");
        }
    });

    module.exports = sendMail;