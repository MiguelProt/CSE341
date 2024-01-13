const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 8080;
const dotenv = require('dotenv');
dotenv.config();

// Convert a request (POST,GET) to JSON Object
app
    .use(bodyParser.urlencoded({extended:false}))
    .use(bodyParser.json())
    .use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
    })
    .use('/professional', require('./routes/professionals'));

    app.get('/', (req, res) => {
        res.status(200).send({
            message: 'Hello World!'
        });
    });

app.listen(port, () => {
    console.log(`My Web Server is listening at port ${port}`);
});