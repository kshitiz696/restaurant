const express  = require('express');
const mongoose  = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

mongoose.connect("mongodb+srv://admin:@MADb018@cluster0.skjiz.mongodb.net/abhiDB",{useNewUrlParser:true , useUnifiedTopology: true});
//mongoose.connect("mongodb://localhost:27017/abhuDB",{useNewUrlParser:true , useUnifiedTopology: true});
app.use(bodyParser.urlencoded({extended: true}));

const userSchema = {
    fname:String,
    lname : String,
    email : String,
    mob : String,
    seats : String
    
};
const User  = new mongoose.model("User",userSchema);

app.get('/',function(req,res){
    res.sendFile(__dirname + '/index.html');
});

app.post('/',function(req,res){
    const newUser = new User({
        fname : req.body.fname,
        lname : req.body.lname,
        email : req.body.email,
        mob : req.body.mob,
        seats : req.body.seats
    });
    newUser.save(function(err){
        if(err){
            console.log(err);
        }else{
            res.send('Thanks for visiting our site');
        }
    });
    
})

app.listen(process.env.PORT || 3000, function() {
    console.log("Server started on port 3000");
});