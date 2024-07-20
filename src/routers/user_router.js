let express=require("express");
let router=express.Router();
const user_auth=require("../../middelwares/authorisation.js")
// const user_access=require("../../middelwares/access.js")

let {cont_send_otp,cont_block_user,cont_signout,cont_home,cont_insert,cont_validation,cont_adduser,cont_registeruser,cont_signup,cont_signin,cont_showuser,cont_adminprofile,cont_addproduct,cont_showproduct,cont_insertproduct,cont_deleteuser,cont_viewusercomodity,cont_userupdate,cont_userprofileupdate,cont_update_points,cont_update_points_form,cont_showproduct_admin,cont_buyproduct,cont_buyproduct_form,cont_add_balance,cont_add_balance_form,cont_update_product,cont_update_product_page,cont_product_delete,cont_changepass,cont_change_pass,cont_showt}=require("../controllers/user_controller");

//for sign in and signup and validation
router.get("/home",cont_home);
router.get("/signin",cont_signin);
router.post("/register_data_save",cont_insert);
router.get("/signup",cont_signup);
router.post("/login-data-validation",cont_validation);

//to view profile and add balance and change password
router.get("/adminprofile",user_auth,cont_adminprofile);
// router.get("/add_balance",user_auth,cont_add_balance);
router.get("/add_balance_form",user_auth,cont_add_balance_form);
router.post("/add_balance",user_auth,cont_add_balance);
router.get("/change_pass_page",user_auth,cont_change_pass)
router.post("/change_pass",user_auth,cont_changepass)

//to add user and block user
router.get("/register_user",user_auth,cont_adduser);
router.post("/register_user_save",user_auth,cont_registeruser);
router.post("/user_block",user_auth,cont_block_user);

//toshow,delete,update_user profile and view user profile 
router.get("/userview",user_auth,cont_showuser); 
router.post("/delete_user",user_auth,cont_deleteuser); 
router.post("/view_user_commodity",user_auth,cont_viewusercomodity); 
router.post("/user_update_page",user_auth,cont_userupdate); 
router.post("/update_service",user_auth,cont_userprofileupdate); 

//to add,show,buy product,update,delete product and update product details 
router.get("/addproduct",user_auth,cont_addproduct); 
router.post("/insertproduct",user_auth,cont_insertproduct); 
router.get("/product",user_auth,cont_showproduct); 
router.get("/product_admin",user_auth,cont_showproduct_admin); 
router.post("/buy_product_form",user_auth,cont_buyproduct_form); 
router.post("/buy_product",user_auth,cont_buyproduct);
router.post("/user_update_page_product",user_auth,cont_update_product_page);
router.post("/update_product",user_auth,cont_update_product);
router.post("/product_delete",user_auth,cont_product_delete);

//to distibute amount earned (giving 25% to user_logined and 75% is distibuted among in parents in same way)
router.post("/update_points_form",user_auth,cont_update_points_form); 
router.post("/update_points",user_auth,cont_update_points); 

//To show transactions
router.get("/show_t",user_auth,cont_showt);

//signout and to send otp
router.get("/signout",user_auth,cont_signout)
router.get("/otp_genrate",cont_send_otp)

module.exports=router;