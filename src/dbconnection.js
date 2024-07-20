let mong=require("mongoose");
exports.conDB=()=>{
    let con=mong.connect(process.env.dburl);
    console.log("data base connected");
}