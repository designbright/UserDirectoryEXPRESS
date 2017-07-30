//========== REQUIRE PACKAGES ====================
const express = require('express');
const mustacheExpress = require('mustache-express');
const mustache = require('mustache');
const data = require("./data.js");
const app = express();

// ========= BOILER PLATE (turns "ON" reuired packages) ============
app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

app.use (express.static('public'));

app.get('/', function (req, res) {
  res.render('home', data);
})

// WRITE A FOR LOOP TO GO OVER DATA =========
app.get('/:user', function(req, res) {
      let user = req.params.user;
      for (i = 0; i < data.users.length; i++) {
        if (data.users[i].username === user) {
          res.render('user', data.users[i])
        }
      }
    });

// app.get('/data', function (req, res) {
//   res.send('This will be printed in browser');
// });

app.listen(3000, function () {
  console.log('This will print in console')
  // console.log(__dirname);
  // The above should print the directory name of current module(aka Project Folder)
  // /Users/designbright/Desktop/theironyard/BACK-END/DailyProjects/UserDirectoryEXPRESS
  // console.log(__filename);
  // The above will print the modules absolute file name
  // /Users/designbright/Desktop/theironyard/BACK-END/DailyProjects/UserDirectoryEXPRESS/index.js
  // console.log(data);
});


//In terminal, cd project directory and type node index.js
//In browser, type localhost3000 to view web page
