let mong=require("mongoose");
let sch=mong.Schema({
    productname:{
        type:String,
        default:"",
    },
    productid:{
        type:String,
        default:"",
    },
    price:{
        type:Number,
        default:0,
    },
    quantityleft:{
        type:Number,
        default:0,
    },
    parentmail:{
        type:String,
        default:"",
    }
},{
    collection:'productdata'
})

module.exports=mong.model("productdata",sch);