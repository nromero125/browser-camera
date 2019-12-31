const pdfMail = require("../mails/pdfMail");

exports.sendDocument = (document) => {
    const mail = {
        from: process.env.MAIL_FROM,
        to: process.env.MAIL_TO,
        subject: process.env.MAIL_SUBJECT,
        text: process.env.MAIL_TEXT,
        attachments: [
            {
                filename: "document.pdf",
                content: document,
                contentType: "application/pdf"
            }
        ]
    };
    pdfMail.sendEmail(mail);
};