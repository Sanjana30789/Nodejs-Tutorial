const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Person = require('./models/Person');

passport.use(new LocalStrategy(async(username,password,done)=>{
    try {
          // authentication logic here
        console.log('Recieved Credentials',username,password);
        const user = await  Person.findOne({username:username});
        if(!user)
            return done(null,false,{message:'Invalid username'});
        const isPasswordMatch = await user.comparePassword(password);
        if(isPasswordMatch){
                console.log("Authentication Successful");
                return done(null,user);
        }else{
            return done(null,false,{message:'Invalid password'});
        
      }
    } catch (error) {
        console.error('Error during authentication:', error);
        return done(error);
    }
    }))

module.exports = passport;