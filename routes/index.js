var express = require('express');
var router = express.Router();
const middleware = require('../middleware/middleware.js')
router.use(middleware({}))

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
