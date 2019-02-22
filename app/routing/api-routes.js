var userInput = require('../data/friends.js');
var path = require("path");

module.exports = function(app){
//Ajax "Get" from friends API
app.get("/api/friends", function (req, res) {
     res.json(userInput);
});
//Ajax "Post" to friend's API
app.post("/api/friends", function (req, res) {
    var bestFriend = 0;
    var misMatch = 1000; 
    for (var i = userInput.length - 1; i >= 0; i--) {
      console.log("Your score comparrison " + userInput[i].name);
      var misTotal = 0;
    for (var u = 0; u < 2; u++ ){
        misTotal = misTotal + Math.abs(userInput[i].scores[u] - req.body.scores[u]);
      }
    if (misTotal < misMatch){
        misMatch = misTotal;
        bestFriend = i;
      }
    console.log("the mismatch for " + userInput[i].name + " is " + misTotal);
    }
    console.log("*****************************");
    console.log("Your best friend is " + userInput[bestFriend].name + " the match score is " + misMatch);
    console.log("*****************************");
    //Pushing the user's data input into the data array "friendMatch" in friends.js
    userInput.push(req.body);
    //Response to best friend match
    res.json({name: userInput[bestFriend].name, photo: userInput[bestFriend].photo});
});
}