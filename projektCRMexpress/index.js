require('dotenv').config();

const express = require('express');
const app = express();
const cors = require("cors");
const hbs = require('express-handlebars');

const actionApiRouter = require('./app/api/actionApi');
const userApiRouter = require('./app/api/userApi');
const clientApiRouter = require('./app/api/clientApi');
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use( express.static('public'));

app.engine('hbs', hbs({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', 'hbs');

/* API Routes */
app.use('/api/client', clientApiRouter);
app.use('/api', userApiRouter);
app.use('/api/action', actionApiRouter);



app.listen(process.env.PORT || 8080, function(){
    console.log('Serwer Node.js działa');
});