const nodemailer = require("nodemailer");

const configDetails = async () => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      /*secure:
			false,*/
      auth: {
        user: process.env.mail,
        pass: process.env.app_pass
      }
    });
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
      } else {
        console.log("Server is ready to send your messages");
      }
    });
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = configDetails;