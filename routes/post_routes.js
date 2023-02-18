const express = require("express");
const postController = require("../controller/post_controller")
const router = express.Router() ;

router.post('/postSubmit'  , postController.post); 
exports.routes =  router ; 
