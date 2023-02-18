const express = require('express'); 
const routes = require('./routes/login_routes') ; 
const postRoutes = require('./routes/post_routes');
const bodyParser = require('body-parser'); 
const path = require('path'); 

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'style'))) ; 
app.set("view engine" , "ejs"); 
app.set("views" , "view") ;
app.use(routes.routes);
app.use(postRoutes.routes) ; 
app.listen(3000) ; 
