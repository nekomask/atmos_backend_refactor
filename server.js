//dependencies
const express = require("express");
require('dotenv').config({});
const app = express();
const cors = require('cors');

const mongoose = require('mongoose');


// mongoose connection
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', (err) => console.log(err.message + ' is mongo not running?'));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));

//cors
app.use(cors({
    header: 'Access-Control-Allow-Origin'
}));


const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`The server is listening on port: ${PORT}`)
});