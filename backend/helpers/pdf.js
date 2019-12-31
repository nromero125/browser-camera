const pdfMail = require("../mails/pdfMail");

exports.sendDocument = (document) => {
    const mail = {
        from: process.env.MAIL_FROM,
        to: process.env.MAIL_TO,
        subject: "MieterEngel Document",
        text: "Document in the attachment",
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