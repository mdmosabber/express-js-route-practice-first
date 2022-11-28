const express   = require('express');
const mongoose  = require('mongoose');
const {readdirSync} = require('fs');

require('dotenv').config();
const app = express();


//Middleware
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));

readdirSync('./routes').map( route  => app.use('/api/v1', require(`./routes/${route}`)));
// app.use('/api/v1', require('./routes/auth.js'));
// app.use('/api/v1', require('./routes/product.js'));


const port = process.env.PORT || 8080;
const database = process.env.DATABASE || "mongodb://localhost:27017";


//Database Connected
mongoose.connect(database)
        .then(()=> console.log('Database Connected Successfully'))
        .catch((err)=> console.log(err));


//Server Connected
app.listen(port, ()=> {
    console.log(`Server Run Successfully at http://localhost:${port}`)
})