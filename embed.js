var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/bog_demo2");

//define User model - email and name
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]  //this is an array of posts that is associated to the created user
});

var User = mongoose.model("User", userSchema);

//define POST model - title, content
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});

var Post = mongoose.model("Post", postSchema);

// var newUser = new User({
//   email: "charlie@brown.edu",
//   name: "Charlie Brown"
// });

// newUser.save(function(err, user){
//   if(err){
//       console.log(err);
//   }else{
//       console.log(user);
//   } 
// });

var newPost = new Post({
    title: "Somthing Very Awesome",
    content: "This is a lot of very interesting things that you need to read..."
});

newPost.save(function(err, post){
  if(err){
      console.log(err);
  }else{
      console.log(post);
  }  
});