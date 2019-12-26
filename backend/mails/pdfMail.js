const nodemailer = require('nodemailer');
const mailconfig = require('../mails/config');

const config = mailconfig.mailconfig.mailserver;
// email sender function
exports.sendEmail = sendMail = async (mail) => {
    // create a nodemailer transporter using smtp
    try {
        let transporter = nodemailer.createTransport(config);
  
        // send mail using transporter
        await transporter.sendMail(mail);
    } catch (error) {
        console.log(error);
    }
  };
    