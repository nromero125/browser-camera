const PDFDocument = require("pdfkit");

const helper = require("../helpers/pdf");

exports.generatePdf = (req, res) => {
  try {
    // Create a document
    const doc = new PDFDocument();

    // Create the pdf data in memoery and insert the image;
    const img = req.body.doc.replace("data:image/jpeg;base64,", "");

    // this will decode your base64 to a new buffer
    doc.image(new Buffer.from(img, "base64"), 0, 10, { width: 600 });

    doc.end();
    const buffers = [];
    doc.on("data", buffers.push.bind(buffers));
    doc.on("end", async () => {
      const pdfData = Buffer.concat(buffers);
      await helper.sendDocument(new Buffer.from(pdfData, "base64"));
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "An error has occurred generating the PDF."
    });
  }

  res.json({
    success: true,
    message: "PDF sent successfully!"
  });
};
