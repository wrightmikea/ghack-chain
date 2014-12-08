var Faker = require('Faker');
var rName = Faker.Name.findName();
var rEmail = Faker.Internet.email();
console.log("rName=" + rName + ", rEmail=" + rEmail);

