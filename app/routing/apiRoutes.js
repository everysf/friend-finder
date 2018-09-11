var path = require("path")
var friends = require("./../data/friends.js")

console.log(friends)

module.exports = function(app) {

    app.post("/api/findfriend", function(req, res){

        console.log(req.body)

        var bestFriend;

        var bestFriendScore = 1000;

        // calculate best friend

        // for loop through friends
        for (var i = 0; i < friends.length; i++){

            var bestFriendScore = 1000;
            // for loop through scores
            // find difference absolute value math.abs
            // sum of absolute value

            for (var j = 0; j< friends[i].scores.length; j++) {

                bestFriendScore = bestFriendScore - Math.abs(scores[j])

            }

            friends[i]

        }

        // if current abs < bestFriendScore
            // bestFriend = friends[i]


        res.status(200).send({message: "Test", bestFriend: bestFriend})

    })
    
}