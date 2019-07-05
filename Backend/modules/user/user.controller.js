const UserModel = require('../../models/user');
var jwt = require('jsonwebtoken');



let User = (req, res) => {
    const UserDoc = UserModel(req.body);
    UserDoc.save().then((data) => {
        res.json(data)

    }).catch((err) => {
        res.status(500).send(err)
    })

}
module.exports.User = User;

let getAllUsers = function (req, res) {
    console.log('I received a GET request');
    UserModel.find({}, function (err, users) {
        if (!err) {
            res.send(users);
        }
        else {
            console.log('error')
        }
    });

}
module.exports.getAllUsers = getAllUsers;