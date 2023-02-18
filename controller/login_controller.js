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
    let query = "insert into  users (email , password , first_name , last_name , age) values ('admin@admin.com' , '1234' , 'admin' , 'khan' , 18)";
    db.execute(query).then(result => {
        res.redirect('/');
    }).catch(err => {
        console.log(err.toString());
        res.redirect('/');
    });
};


exports.loginSubmit = (req, res) => {

    let email = req.body.email;
    let query = "select password from users where email= ?";
    db.execute(query, [email]).then(result => {
        let password = result[0][0].password;
        if (password == req.body.password) {
            let repath = path.dirname(__dirname);
            res.sendFile(repath + "/view/homepage.html",);
        }
        else {
            console.log('password not Match');
        }
    }).catch(err => {
        console.log(err);
    });

}

