var passport = require('passport'), 
  mongoose = require('mongoose'), 
  LocalStrategy = require('passport-local').Strategy, 
  User = mongoose.model('User');

module.exports = function(){
  
  passport.use(new LocalStrategy(
      function(username, password, done){
        console.log('TRYINGusername is ' + username);
        console.log('TRYINGPASSWORD is ' + password);

        User.findOne({userName:username}).exec(function(err, user){
          console.log("IM IN LocalStrategy!!!!!");
            if(user){
              console.log('I found a user');
            }

          if (user && user.authenticate(password)){
            console.log("WE HAVE USER");
            return done(null, user);
          }
          else{
            console.log("NO USER");
            return done(null, false);
          }
          console.log("IM HERE THROUGH AFTER ELSE");
        });

      }));
  passport.serializeUser(function(user, done){
    if(user){
      done(null, user.id);
    }
  });

  passport.deserializeUser(function(id, done){
    User.findOne({_id:id}).exec(function(err,user){
        if(user)
            return done(null, user);
        else
            return done(null, false);
    });
  });
}