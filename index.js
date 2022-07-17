const express = require('express');
require('dotenv').config()
const mongoose = require('mongoose');

const traineeRouter = require('./routes/trainee');
const staffRouter = require('./routes/staff')

const app = express();

app.use('./routes/staff',traineeRouter);
app.use('./routes/staff',traineeRouter);

mongoose.connect(process.env.CONNECTION_URI).then((connection) => {
    console.log('connected succesfully')
}).catch((error) => {
    console.log(`unable to connect to database: ${error.message}`)
})

app.listen(process.env.PORT, () => {
    console.log(`App running on port ${process.env.PORT}`)
})