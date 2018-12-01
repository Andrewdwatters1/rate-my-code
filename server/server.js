const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();

const session = require('express-session');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync(process.env.BCRYPT_HASH, salt);
// const path = require('path');

const userCtrl = require('./controllers/userCtrl.js');

const app = express();
const serverPort = process.env.SERVER_PORT;

app.use(bodyParser.json());
massive(process.env.CONNECTION_STRING).then(db => {
  app.set('db', db)
  console.log('DB CONNECTION SUCCESSFUL');
})
app.use(session({
  secret: process.env.SESSION_SECRET,
  saveUninitialized: false,
  resave: false
}))

// app.use(express.static(`${__dirname}/../build`));


// ENDPOINTS HERE **********************
app.post('/api/login', userCtrl.login);
app.delete('/api/logout', userCtrl.logout);


// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../build/index.html'));
// });


app.listen(serverPort, () => {
  console.log('SERVER RUNNING ON: ', serverPort);
})
