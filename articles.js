const express = require('express');
const  router = express.Router();
const  multer  = require('multer');
const upload = multer();


router.get('/create', function(req, res, next) {
  res.render('form');
});

router.post('/create', upload.single('preview'), function(req, res, next) {
  console.log(req.body);
  console.log(req.file);
  console.log('xoxoxo!');
  res.end();
});


module.exports = router;
