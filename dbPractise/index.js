//requiring env
require('dotenv').config()

//require module syntax
const express = require('express')

//or
// import express from 'express';

const app = express()

//listening to a port
const port = process.env.PORT || 5000



//getting the request at '/' with a callback
app.get('/', (req, res) => {

    //sending response at '/'
    res.send('Hello World!')
})




//listening the response at the port given above
app.listen(port, () => {
    console.log(`Server is running at : http://localhost:${port}`)
})

