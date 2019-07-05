var express = require('express');
var router = express.Router();
var User = require('../modules/user/user.route')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/user',User)

module.exports = router;
