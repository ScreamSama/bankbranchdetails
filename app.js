var express = require('express');
var bodyparser = require('body-parser');


var app = express();

const api = require('./bankapi/bankservice');

//body-parser
app.use(bodyparser.json());

//port no
const port =  3000;

//routes
app.use('/bankapi',api);

//testing servers
app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres Bank API' })
  });

//binding server with this port
app.listen(port,()=>{
    console.log('Server started at port: '+port);
});