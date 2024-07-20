const { access } = require("fs");
let mong=require("mongoose");
let sch=mong.Schema({
    name:{
        type:String,
        default:"",
    },
    net_amount_generated:{
        type:Number,
        default:1000,
    },
    amount_earned:{
        type:Number,
        default:250,
    },
    added_amount:{
        type:Number,
        default:0,
    },
    email:{
        type:String,
        default:"",
    },
    mobile:{
        type:String,
        default:"",
    },
    pass:{
        type:String,
        default:"",
    },
    parentmail:{
        type:String,
        default:"",
    },
    user_id:{
        type:String,
        default:"",
    },
    access:{
        type:String,
        default:"unblock",
    },
    accesstoken:{
        type:String,
        default:"",
    },
    auth_key:{
        type:String,
        default:null,
    }
},{
    collection:'userdata'
})

module.exports=mong.model("userdata ",sch);