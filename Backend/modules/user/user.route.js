const UserRoute = require('../user/user.controller');
var express = require('express');
var router = express.Router();

router.post('/new_user',UserRoute.User);

router.get('/getallusers', UserRoute.getAllUsers);


module.exports = router;    
  