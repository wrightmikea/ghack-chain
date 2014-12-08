var Faker = require('Faker');
var express = require('express');
var rName = Faker.Name.findName();
var rEmail = Faker.Internet.email();
console.log("rName=" + rName + ", rEmail=" + rEmail);
var app = express();
var port = process.env.PORT || 8080;
var router = express.Router();
router.get('/',function(req,res) {
  res.send('hi');
});
app.use('/api', router);
app.listen(port);
console.log('listening on ' + port);

