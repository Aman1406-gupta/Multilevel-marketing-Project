let {conDB}=require("./src/dbconnection");
let dotenv=require("dotenv");
let Path=require("path");
let express= require("express");
let app=express();
const cookieParser=require("cookie-parser")
app.use(cookieParser());
dotenv.config();
app.set('views',Path.join(__dirname,"./src/views"));
app.set("view engine","ejs");
app.use(express.urlencoded({extended:false}));
app.use(express.static(Path.join(__dirname,"/public")));
app.use("/",require("./src/routers/router"));
app.use("/user",require("./src/routers/user_router.js"));


app.listen(process.env.app_port_no,()=>{
    console.log("server is running");
})
conDB();