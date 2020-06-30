var express = require('express');
var router = express.Router();
var stringify = require('json-stringify-safe');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Req Dump' });
});

router.post('/dump', (req, res, next) => {
  res.send(stringify(req));
})

router.get('/dump', (req, res, next) => {
  res.send(stringify(req));
})


module.exports = router;
