var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/bog_demo2");

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
    posts: [postSchema]  //this is an array of posts that is associated to the created user
});

var User = mongoose.model("User", userSchema);



// var newUser = new User({
//   email: "Joe@brown.edu",
//   name: "Joe Granger"
// });

// newUser.posts.push({
//     title: "How to brew beer at home AGAIN",
//     content: "Just kidding...beer made at home is terrible..REALLY IT SUCKS!"
// });

// newUser.save(function(err, user){
//   if(err){
//       console.log(err);
//   }else{
//       console.log(user);
//   } 
// });

// var newPost = new Post({
//     title: "Somthing Very Awesome",
//     content: "This is a lot of very interesting things that you need to read..."
// });

// newPost.save(function(err, post){
//   if(err){
//       console.log(err);
//   }else{
//       console.log(post);
//   }  
// });

User.findOne({name: "Hermione Granger"}, function(err, user){
    if(err){
        console.log(err);
    }else{
        user.posts.push({
            title: "Three things I love",
            content: "Puppies, kittiens, sunshine!"
        });
        user.save(function(err, user){
           if(err){
               console.log(err);
           }else{
               console.log(user);
           } 
        });
    }
});

