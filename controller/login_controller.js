const express = require("express");
const path = require("path");
const db = require('../utility/database');
let routes = express.Router();

exports.login = (req, res) => {
    let repath = path.dirname(__dirname);
    res.sendFile(repath + "/view/index.html",);
};

exports.signUp = (req, res) => {
    let repath = path.dirname(__dirname);
    res.sendFile(repath + "/view/sign_up_page.html",);
};

exports.signUpSubmit = (req, res) => {

    let email = req.body.email ; 
    let password = req.body.password ; 
    let first_name = req.body.first_name ; 
    let last_name = req.body.last_name ;
    let age = req.body.age ; 

    let query = "insert into  users (email , password , first_name , last_name , age) values (? , ? , ? , ? , ?)";
    db.execute(query , [email , password , first_name , last_name, age]).then(result => {
        res.redirect('/');
    }).catch(err => {
        console.log(err.toString());
        res.redirect('/');
    });
};


exports.loginSubmit = (req, res) => {

    let email = req.body.email;
    let query = "select password from users where email= ?";
   if(email != undefined){
    db.execute(query, [email]).then(result => {
        if(result[0].length > 0){
            let password = result[0][0].password;
            if (password == req.body.password) {
                let repath = path.dirname(__dirname);
                res.sendFile(repath + "/view/homepage.html",);
            }
            else {
                console.log("Wrong Password") ; 
                let repath = path.dirname(__dirname);
                res.sendFile(repath + "/view/index.html",);
            }
        }else{
            console.log("Email Not Found") ; 
            let repath = path.dirname(__dirname);
                res.sendFile(repath + "/view/index.html",);
        }
    }).catch(err => {
        console.log(err);
    });
   }else{
    let repath = path.dirname(__dirname);
    res.sendFile(repath + "/view/index.html",);

   }
}

