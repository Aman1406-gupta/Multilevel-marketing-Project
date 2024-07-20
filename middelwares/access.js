// require("dotenv").config();
// const jwt=require("jsonwebtoken");
// const recu=require("../src/model/user.js");

// async function user_access (req,rep,next){
//     try{
//         console.log(req.cookies.accesstoken)
//         if(req.cookies.accesstoken!=undefined && req.cookies.accesstoken !=""){
//             const accesstoken=req.cookies.accesstoken;
//             const jwtpassword=process.env.secret_key;
//             const decode=jwt.verify(accesstoken,jwtpassword);
//             console.log(decode.access)

//             let admin=await recu.findOne({user_id:decode.id});

//             if(!admin) return({message:"access not found"})
//             req.access=admin;
//             next();
//             }

//         else{
//                 rep.redirect("/signup");
//                 console.log("user is blocked by admin");
//             }

//     } 
//     catch(err){
//         console.log(err);
//         rep.json({
//             error:"Internal Server Error",
//             message: err.message,
//         })
//     }
// }

// module.exports= user_access;