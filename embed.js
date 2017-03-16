var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/bog_demo2");

//define User model - email and name
var userSchema = new mongoose.Schema({
    email: String,
    name: String
});

var User = mongoose.model("User", userSchema);

//define POST model - title, content
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});

var Post = mongoose.model("Post", postSchema);

var newUSer = new User({
   email: "charlie@brown.edu",
   name: "Charlie Brown"
});