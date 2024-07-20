let mong=require("mongoose");
let sch=mong.Schema({
    from:{
        type:String,
        default:"",
    },
    to:{
        type:String,
        default:'',
    },
    amount_transfered:{
        type:Number,
        default:0,
    },
    auth_key:{
        type:String,
        default:null,
    }
},{
    collection:'transactiondata'
})

module.exports=mong.model("transactiondata",sch);