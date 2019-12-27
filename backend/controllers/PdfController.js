const PDFDocument = require('pdfkit');
const pdfMail = require('../mails/pdfMail');
const fs  = require('fs');


exports.generatePdf = async (req, res) => {
    try{
        // Create a document
        const doc = new PDFDocument;

        // Create the pdf data in memoery and insert the image;
        const img = req.body.doc.replace('data:image/jpeg;base64,','');
        
        doc.image(new Buffer(img,'base64'),0, 10, {width: 600}); // this will decode your base64 to a new buffer
        doc.end();
        const buffers = [];
        doc.on("data", buffers.push.bind(buffers));
        doc.on("end", () => {
            const pdfData = Buffer.concat(buffers)
            const mail = {
                from: 'docs@MieterEngel.com',
                to: 'nromero125@gmail.com',
                subject: 'MieterEngel Document',
                text: 'Testing Nodemailer',
                attachments: [
                    {
                        filename: 'document.pdf',
                        content: new Buffer(pdfData, 'base64'),
                        contentType: 'application/pdf'
                    },
                ]
            }
                pdfMail.sendEmail(mail);
        })
        
        
        res.json({
            success: true,
            message: "PDF creado!"
        });

    } catch(err){
        res.json({
            success: false,
            message: err
        });
    }
}