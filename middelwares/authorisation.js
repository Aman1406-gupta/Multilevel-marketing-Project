require("dotenv").config();
const jwt=require("jsonwebtoken");
const recu=require("../src/model/user.js");

async function user_auth (req,rep,next){
    try{

        if(req.cookies.token!=undefined && req.cookies.token !=""){
            const token=req.cookies.token;
            const jwtpassword=process.env.secret_key;
            const decode=jwt.verify(token,jwtpassword);

            let admin=await recu.findOne({_id:decode.id});

            if(!admin) return({message:"admin not found"})
            req.user=admin;
            next();
            }

        else{
                rep.redirect("/signup");
                console.log("please login first");
            }

    } 
    catch(err){
        console.log(err);
        rep.json({
            error:"Internal Server Error",
            message: err.message,
        })
    }
}

module.exports= user_auth;