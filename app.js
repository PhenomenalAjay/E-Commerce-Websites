const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const adminRoutes = require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js');
const path = require('path');

app.use(express.static(path.join(__dirname, 'images')));

// Fix body-parser usage with extended option
app.use(bodyParser.urlencoded({ extended: false })); // to parse the data from the request body

// app.use('/admin',adminRoutes)
app.use(adminRoutes);
app.use(shopRoutes);

// 404 handler
app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html')); 
});

// Error handling middleware
app.use((error, req, res, next) => {
    console.error(error);
    res.status(500).send('Internal Server Error');
});

const PORT = process.env.X_ZOHO_CATALYST_LISTEN_PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
