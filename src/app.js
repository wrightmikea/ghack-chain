var Faker = require('Faker');
var express = require('express');
var userSave = require('save')('user');
var rName = Faker.Name.findName();
var rEmail = Faker.Internet.email();
console.log("rName=" + rName + ", rEmail=" + rEmail);

userSave.create({name: rName});

var app = express();
var port = process.env.PORT || 8080;
var router = express.Router();
router.get('/',function(req,res) {
  userSave.find({}, function(error, users) {
     res.send(users);
  });
});
app.use('/api', router);
app.listen(port);
console.log('listening on ' + port);


