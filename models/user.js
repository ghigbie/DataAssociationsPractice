var mongoose = require("mongoose");

//define User model - email and name
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [
        {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Post"
         }
    ]  //this is an array of objects with ID's associated with posts
});

var User = mongoose.model("User", userSchema);


module.exports = User;