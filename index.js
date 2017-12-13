'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express();
const user = 'deutsch';
const pass = 'necktie-hemp-hamster';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const server = app.listen(process.env.PORT || 3000, () => {
    console.log('Express server listening on port %d in %s mode', 
    server.address().port, app.settings.env);
});

app.get('/', (req, res) => {
    let env = req.query.text
    let dispatcher0 = 'http://' + user + ':' + pass + '@vwweb-qa-' + env + '-dispatcher-000.vwusasite.com:80/dispatcher/invalidate.cache/';
    let dispatcher1 = 'http://' + user + ':' + pass + '@vwweb-qa-' + env + '-dispatcher-001.vwusasite.com:80/dispatcher/invalidate.cache/';    
    let text = 'Environment #' + env + ' is cleared!';

    request
        .get(dispatcher0)
        .on('error', function (error, response) {
            console.log('url:', dispatcher0);        
            console.log('error:', error);
            console.log('statusCode:', response && response.statusCode);
            text = 'There is something wrong with: ' + dispatcher0; 
    });
    request
        .get(dispatcher1)
        .on('error', function (error, response) {
            console.log('url:', dispatcher1);        
            console.log('error:', error);
            console.log('statusCode:', response && response.statusCode);
            text = 'There is something wrong with: ' + dispatcher1; 
    });

    text = 'Environment #' + env + ' is cleared!';

    let data = {
        response_type: 'in_channel', //public to the channel
        text: text
    }

    res.json(data);
})