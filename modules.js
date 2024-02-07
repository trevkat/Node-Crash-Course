// what if I want to import the people.js file into this file
const xyz = require('./people');

console.log(xyz.people, xyz.ages);

// built in modules
const os = require('os');
console.log(os.platform(), os.homedir());