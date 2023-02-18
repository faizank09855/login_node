const express = require('express'); 
const routes = require('./routes/login_routes') ; 
const bodyParser = require('body-parser'); 

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine" , "html"); 
app.set("views" , "view") ;
app.use(routes.routes);
app.listen(3000) ; 
