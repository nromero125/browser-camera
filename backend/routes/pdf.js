const express = require('express');
const router = express.Router();
const PdfController = require('../controllers/PdfController');  

router.route('/api/v1/documents')
    .post(PdfController.generatePdf);

  module.exports = router;