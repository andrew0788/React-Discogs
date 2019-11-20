const express = require('express');
const cors = require('cors');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

const app = express();
require('dotenv').config();
require('./config/database')

// const whiteList = ['http://localhost:3001', 'http://localhost:3000', ' https://www.discogs.com']
//
// const corsOptions = {
//   origin: function(origin, callback){
//     if (whiteList.indexOf(origin) !== -1){
//       callback(null, true)
//     } else {
//       callback(newErro('CORS not allowed'))
//     }
//   }
// }


app.use(logger('dev'))
app.use(express.json());
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));



app.use('/api/users', require('./routes/api/users'))
app.use('/api/discogs', require('./routes/api/discogs'))

app.get('/*', function(req, res, next){
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
});




const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});
