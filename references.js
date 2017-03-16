var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/bog_demo2_2");

//define POST model - title, content =====> This needs to come first because it has to be part of the userSchema
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});

var Post = mongoose.model("Post", postSchema);

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

// User.create({
//     email: "bob@bobby.com",
//     name: "Bob Bobber"});
// }, function(err, user){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(user);
//     }
// });

// Post.create({
//     title: "How to cook a burger AGAIN",
//     content: "adkfljadlkfjal;kdjflkajdfl;kajdfkajdofjalkj"
// }, function(err, post){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(post);
//         User.findOne({email: "bob@bobby.com"}, function(err, foundUser){
//             if(err){
//                 console.log(err);
//             }else{
//                 console.log("======================");
//                 foundUser.posts.push(post);
//                 console.log(foundUser);
//                 foundUser.save(function(err, data){
//                     if(err){
//                         console.log(err);
//                     }else{
//                         console.log("======================");
//                         console.log(data);
//                     }
//                 })
//             }
//         });
//     }
// });

User.findOne({email: "bob@bobby.com"}).populate("posts").exec(function(err, user){
    if(err){
        console.log(err);
    }else{
        console.log(user);
    }
});