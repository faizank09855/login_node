const express = require("express");
const path = require("path");
const db = require('../utility/database');
let routes = express.Router();

exports.post = (req , res)=>{
    let query = "insert into posts (content , user_id) values (?,?)" ; 
    db.execute(query , [req.body.content , req.body.userId]).then(
        result2 =>{
            db.execute('select * from posts').then(result2=>{
                res.render('homepage',{
                    data : {
                        user_id : req.body.userId
                    } , 
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