// first we to need import express from express

const express = require('express')
const app = express()

// all nodejs functions are now stored in app.

// creating a rest API in node js

app.get('/data', (req, res) => {
    res.send('QMALIK is a champion')
})

// we need to assign a port to run a server on localhost.

app.listen(4000, () => {
    console.log('server is running on port 4000')
});