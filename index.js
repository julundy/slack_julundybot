'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const server = app.listen(3000, () => {
    console.log('Express server listening on port %d in %s mode', 
    server.address().port, app.settings.env);
})

app.get('/', (req, res) => {
    let text = req.body.text;
    
    // Implement bot here

    // checks if it's not a digit
    // if (! /^|d+$/.test(q.text)) {
    //     res.send('Enter an environment number: ###');
    //     return;
    // }

    let data = {
        response_type: 'in_channel', //public to the channel
        text: 'Command sent!'
    }

    res.json(data);
})