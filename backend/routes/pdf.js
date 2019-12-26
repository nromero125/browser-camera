const express = require('express');
const router = express.Router();
const PdfController = require('../controllers/PdfController');  

router.route('/api/send-document')
    .post(PdfController.generatePdf);

  module.exports = router;