var express = require('express');
var router = express.Router();

var compliments = [
  "You’re so much prettier in person.",
  "You look good for your age.",
  "You clean up so well!",
  "You carry your weight well.",
  "Wow, you should really wear makeup more often.",
  "It's so cool that you don't care what you look like.",
  "You're a lot smarter than you look."
];

/* GET home page. */
router.get('/', function(req, res, next) {
  var compliment = compliments[Math.floor(Math.random()*compliments.length)];

  res.render('index', {
    title: 'Express',
    niceComment: compliment });
});

router.get('/username', function(req, res) {
  var name = "username";

  res.send(username)
})

module.exports = router;
