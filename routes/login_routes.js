const express = require("express");
const loginController = require("../controller/login_controller")

const router = express.Router() ;
router.get('/'  , loginController.login); 
router.get('/signup' , loginController.signUp); 
router.get('/signupSubmit' , loginController.signUpSubmit);
router.post('/login' , loginController.loginSubmit); 
exports.routes =  router ; 
