var express = require('express');
var router = express.Router();
var createError = require('http-errors');

/* GET users listing. */
router.get('/:id', function(req, res, next) {
 
const articles = [
  {id: 1, title: 'Love', content: 'text1'},
  {id: 2, title: 'Nice', content: 'text2'},
  {id: 3, title: 'Mood', content: 'text3'},
];

const id = Number(req.params.id);

const article = articles.find((val) => {
  return val.id === id;                                    //return можно не писать//

});

if (!article) {
  next(createError(404));
  return;
}

const data = {
  title: article.title,
  content: article.content,
}

res.render('index2', data);
});

module.exports = router;

// router.get('/001', function(req, res, next) {
//   res.send('Blogs!');
// });

// router.get('/:categoryID/:id', function(req, res, next) {
//   console.log('bla:', req.params.bla);
//   console.log('categoryID:', req.params.categoryID);
//   console.log('id:', req.params.id);
//   res.send('la-la');
// });


