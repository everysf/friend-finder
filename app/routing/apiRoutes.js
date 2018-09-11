var path = require("path")
var friends = require("./../data/friends.js")

console.log("1" + friends)

module.exports = function(app) {

    app.post("/api/findfriend", function(req, res){

        console.log("2" + req.body)

        var bestFriend;

        var answerArr = []

        for (var k = 1; k < 11; k++) {

            var answer = $("#q1").val()
            console.log(answer)
            answerArr.push(answer)

        }

        console.log("3" + answerArr)

        for (var i = 0; i < friends.length; i++) {

            var bestFriendScore = 1000;

            for (var j = 0; j< friends[i].scores.length; j++) {

                bestFriendScore = bestFriendScore - Math.abs(answerArr[i] - friends[i].scores[j])

            }

            friends[i] = {bestFriendScore: bestFriendScore}

        }

        res.status(200).send({message: "We found your best friend!", bestFriend: bestFriend})

    })
    
}