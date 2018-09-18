var path = require("path")
var friends = require("./../data/friends.js")

function evaluateFriend(data, callback) {


    var friendsArr = []

    for (var i = 0; i < friends.length; i++) {

        var compatibilityScore = 100;

        // Arr Loop
        for (var j = 0; j < 10; j++) {
            var difference = Math.abs(friends[i].scores[j] - data[j])
            compatibilityScore = compatibilityScore - difference

        }

        friendsArr.push(compatibilityScore)

    }

    var bestFriendPosition = friendsArr.indexOf(Math.max(...friendsArr))
    var bestFriendName = friends[bestFriendPosition].name;
    var bestFriendPic = friends[bestFriendPosition].photo;

    var bestFriend = {
        name: bestFriendName,
        picture: bestFriendPic
    }

    callback(bestFriend)

}

module.exports = function(app) {

    app.post("/api/findfriend", function(req, res){

        console.log("searching")

        var answersArr = req.body.answers

        evaluateFriend(answersArr, function(bestFriend){
            res.status(200).send(bestFriend)
        })
    
    })
    
}