const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 8080;
const dotenv = require('dotenv');
const mongodb = require('./db/connections');
dotenv.config();

// Convert a request (POST,GET) to JSON Object
app.use(bodyParser.urlencoded({extended:false}))
    .use(bodyParser.json())
    .use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
    })
    .use('/professional', require('./routes/professionals'))
    .use('/users', require('./routes/contacts'));

    app.get('/', (req, res) => {
        res.status(200).send({
            message: 'Hello World!'
        });
    });

mongodb.initDb((err) => {
    if (err) {
        console.log(err)
    } else {
        app.listen(port, () => {
            console.log(`My Web Server is listening at port ${port}`);
        });
    }
});