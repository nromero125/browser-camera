const nodemailer = require("nodemailer");
const mailconfig = require("../mails/config");

const config = mailconfig.mailconfig.mailserver;
exports.sendEmail = sendMail = async mail => {
  try {
    let transporter = nodemailer.createTransport(config);

    await transporter.sendMail(mail);
  } catch (error) {
    console.log(error);
  }
};
