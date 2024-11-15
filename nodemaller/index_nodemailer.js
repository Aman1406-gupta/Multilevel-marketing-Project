const express =require("express");
const  app= express();
const nodemailer= require("nodemailer");

async function email(){
    const transporter = nodemailer.createTransport({
        service:"gmail",
        auth:{
                user:"aman1406gupta@gmail.com",
                pass:"Change it ot your PASSWORD",
        },
    });
    
    const mailOptions={
        from:"aman1406gupta@gmail.com",
        to:"rachitiitkgp966@gmail.com",
        subject:"hello rachit",
        text:"hello rachit check it", 
    };

    await transporter.sendMail(mailOptions);
};

email();

app.listen(3000,()=>{
    console.log("server started");
});
