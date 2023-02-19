const express = require("express");
const path = require("path");
const db = require('../utility/database');
let routes = express.Router();

exports.post = (req , res)=>{
    var userResults = {} ; 

    db.execute("select * from users where user_id != ?" , [req.body.userId]).then(
        result => {
            userResults = result[0] ; 
        }
    ).catch(err=>{
        console.log(err);
    });


    let query = "insert into posts (content , user_id , user_name) values (?,?,?)" ; 
    db.execute(query , [req.body.content , req.body.userId , req.body.userName]).then(
        result2 =>{
            db.execute('select * from posts').then(result2=>{
            console.log(result2[0]);
                res.render('homepage',{
                    data : {
                        user_id : req.body.userId , 
                        first_name : req.body.userName
                    } , 
                    users : userResults , 
                    posts : result2[0]
                });
              }).catch(err=>{
                console.log(err);
              }) ; 
        }
    ).catch(err=>{
        console.log(err) ; 
    });


}