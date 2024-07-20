let {ser_send_otp,ser_block_user,ser_signout,ser_home,ser_insert,ser_validation,ser_registeruser,ser_showuser,ser_adminprofile,ser_showproduct,ser_addproduct,ser_deleteuser,ser_viewusercomodity,ser_userupdate,ser_userprofileupdate,ser_update_points,ser_update_points_form, ser_showproduct_admin,ser_buyproduct,ser_buyproduct_form,ser_add_balance,ser_add_balance_form,ser_update_product,ser_update_product_page,ser_product_delete,ser_changepass,ser_showt}=require("../servers/user_service");


exports.cont_home=async(req,rep)=>{
    let userdata=await ser_home(req,rep);
    rep.status(200).send({data:userdata});
    // rep.render("dashboard",{data:userdata});
}

exports.cont_signup=async(req,rep)=>{
    rep.status(200).send("signup page will open");
    // rep.render("adminlogin");
}

exports.cont_signin=async(req,rep)=>{
    rep.status(200).send("signin page will open");
    // rep.render("register");
}

exports.cont_adduser=async(req,rep)=>{
    rep.status(200).send("add user page will open");
    // rep.render("registeruser")
}

exports.cont_insert=async(req,rep)=>{
    await ser_insert(req,rep);
}

exports.cont_validation=async(req,rep)=>{
    let data= await ser_validation(req,rep);
    if(data.newdata){
        rep.status(200).send({data:data.newdata});
        // rep.render("dashboard",{data:data.newdata});
    }
    else if(data.message){
        rep.status(200).send({message:data.message});
        // rep.render("adminlogin");
    }
}

exports.cont_registeruser=async(req,rep)=>{
    await ser_registeruser(req,rep);
    rep.status(200).send("new user has been added")
    // rep.render("dashboard");
}

exports.cont_showuser=async(req,rep)=>{
    let userdatashown= await ser_showuser(req,rep);
    rep.status(200).send(
        {user:userdatashown.userdata,searchdata:userdatashown.admindata,data:userdatashown.adminparentmail}
    );
    // rep.render("viewuser",
    //     {user:userdatashown.userdata,searchdata:userdatashown.admindata,data:userdatashown.adminparentmail}
    // );
}

exports.cont_addproduct=async(req,rep)=>{
    rep.status(200).send("now you can add product")
    // rep.render("addproduct")
}

exports.cont_insertproduct=async(req,rep)=>{   
    await ser_addproduct(req,rep);
    rep.status(200).send("product has been added")
    // rep.render("dashboard")
}

exports.cont_showproduct=async(req,rep)=>{
    let productdatashown= await ser_showproduct(req,rep);
    let parent_data_shown=productdatashown.parentdatashown
    productdatashown=productdatashown.productdata;
    rep.status(200).send({product:productdatashown,searchdata:parent_data_shown})
    // rep.render("viewproduct",{product:productdatashown,searchdata:parent_data_shown});
}

exports.cont_showproduct_admin=async(req,rep)=>{
    let productdatashown= await ser_showproduct_admin(req,rep);
    let parent_data_shown=productdatashown.parentdatashown;
    productdatashown=productdatashown.productdata;
    rep.status(200).send(
        {product:productdatashown,searchdata:parent_data_shown}
    );
    // rep.render("viewproduct_admin",
    //     {product:productdatashown,searchdata:parent_data_shown}
    // );
}

exports.cont_adminprofile=async(req,rep)=>{
    let admindata=await ser_adminprofile(req,rep);
    rep.status(200).send({data:admindata});
    // rep.render("adminprofile",{data:admindata});
}

exports.cont_deleteuser=async(req,rep)=>{
    let userdata=await ser_deleteuser(req,rep);
    rep.status(200).send("userview will be rendered")
    // rep.redirect("/userview");
}

exports.cont_viewusercomodity=async(req,rep)=>{
    let userdata=await ser_viewusercomodity(req,rep);
    rep.status(200).send({data:userdata})
    // rep.render("viewusercomodity",{data:userdata});
}

exports.cont_userupdate=async(req,rep)=>{
    let userupdateddata=await ser_userupdate(req,rep);
    rep.status(200).send(
        {data:userupdateddata.rootdata,searchdata:userupdateddata.datashown}
    );
    // rep.render("updateservice",{data:userupdateddata.rootdata,searchdata:userupdateddata.datashown});
}

//some problem in rendering page after updation
exports.cont_userprofileupdate=async(req,rep)=>{
    let userupdateddatau=await ser_userprofileupdate(req,rep);
    let parentdata=userupdateddatau.parentmail
    let rootdata=userupdateddatau.rootdata
    rep.status(200).send({user:rootdata,searchdata:parentdata})
    // rep.render("viewuser",{user:rootdata,searchdata:parentdata});
}

exports.cont_update_points_form=async(req,rep)=>{
    let userupdateddatauf=await ser_update_points_form(req,rep);
    rep.status(200).send({data:userupdateddatauf})
    // rep.render("update_points_form",{data:userupdateddatauf})
}

exports.cont_update_points=async(req,rep)=>{
    let userupdateddatau=await ser_update_points(req,rep);
    let parentdata=userupdateddatau.final_user_details_shown.parentmail
    rep.status(200).send(
        {user:userupdateddatau.final_user_details_shown,data:userupdateddatau.data.parentmail,searchdata:parentdata}
    );
    // rep.render("viewuser",{user:userupdateddatau.final_user_details_shown,data:userupdateddatau.data.parentmail,searchdata:parentdata})
}

exports.cont_buyproduct_form=async(req,rep)=>{
    let product_info=await ser_buyproduct_form(req,rep);
    rep.status(200).send({productid:product_info});
    // rep.render("buy_product_form",{productid:product_info});
}

exports.cont_buyproduct=async(req,rep)=>{
    await ser_buyproduct(req,rep);
    rep.status(200).send("redirecting to /product");
    // rep.redirect("/product");
}

exports.cont_add_balance_form=async (req,rep)=>{
    let user_info=await ser_add_balance_form(req,rep);
    rep.status(200).send({searchdata:user_info});
    // rep.render("add_balance_form_new",{searchdata:user_info});
}

exports.cont_add_balance=async (req,rep)=>{ 
    let add_balance=await ser_add_balance(req,rep);
    rep.status(200).send("your account is credited");
}

exports.cont_update_product_page=async(req,rep)=>{
    let product_info=await ser_update_product_page(req,rep);
    let productdata=product_info.productdata
    let rootdata=product_info.rootdata
    rep.status(200).send({data:rootdata,productdata:productdata})
    // rep.render("update_product",{data:rootdata,productdata:productdata});
}

//some problem in rendering page after updation
exports.cont_update_product=async(req,rep)=>{
    let product_info=await ser_update_product(req,rep);
    // let parentdata=userupdateddatau.parentmail
    // let rootdata=userupdateddatau.rootdata
    rep.status(200).send({user:rootdata,searchdata:parentdata});
    // rep.render("viewuser",{user:rootdata,searchdata:parentdata});
}

exports.cont_product_delete=async(req,rep)=>{
    let deleteproduct=await ser_product_delete(req,rep);
    rep.status(200).send("redirecting to /product_admin")
    // rep.redirect("/product_admin");
}

exports.cont_change_pass=async(req,rep)=>{
    rep.status(200).send("changepass page wil be rendered");
    // rep.render("changepass");
}

//not able to redirect at dashboard page (because dashboard needs data)
exports.cont_changepass=async(req,rep)=>{
    let changepass=await ser_changepass(req,rep);
    rep.status(200).send("redirecting to /signup")
    // rep.redirect("/signup");
}

exports.cont_showt=async(req,rep)=>{
    let showt=await ser_showt(req,rep);
    rep.status(200).send({data:showt.data,tdata:showt.tdata});
    // rep.render("transaction",{data:showt.data,tdata:showt.tdata});
}

exports.cont_signout=async(req,rep)=>{
    await ser_signout(req,rep); 
    rep.redirect("/signup")
}

exports.cont_block_user=async(req,rep)=>{
    let block_user=await ser_block_user(req,rep);
    rep.status(200).send("redirecting to userview page");
    // rep.redirect("userview");
}

exports.cont_send_otp=async(req,rep)=>{
    await ser_send_otp(req,rep);
    console.log("OTP send");
    rep.status(200).send("OTP Send");
}