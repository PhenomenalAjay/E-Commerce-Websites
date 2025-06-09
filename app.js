const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const adminRoutes = require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js');
const path = require('path');

app.use(express.static(path.join(__dirname, 'images')));

// app.use('/admin',adminRoutes)
app.use(adminRoutes);
app.use(shopRoutes);

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html')); 
})
// app.use(bodyParser.urlencoded({extended: true})); // to parse the data from the request body
app.use(bodyParser.urlencoded()); // to parse the data from the request body


app.listen(5500);
