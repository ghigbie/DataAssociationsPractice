var mongoose = require("mongoose");

//define POST model - title, content =====> This needs to come first because it has to be part of the userSchema
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});

var Post = mongoose.model("Post", postSchema);

module.exports = Post;