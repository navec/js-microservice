const express = require('express');
const app = express();
const port = 8080;

const router = require('./router');

app.use(router);

app.listen(port, ()=>{
    console.log('Listening on port 8080');
});
