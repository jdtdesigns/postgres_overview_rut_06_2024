const express = require('express');
const { engine } = require('express-handlebars');

const client = require('./config/connection');
const view_routes = require('./routes/view_routes');
const movie_routes = require('./routes/movie_routes');

const app = express();
const PORT = 3333;

app.use(express.urlencoded({ extended: false }));

// Set up handlebars
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

app.use('/', [view_routes, movie_routes]);

client.sync()
  .then(() => {
    console.log('DB Connected');

    app.listen(PORT, () => {
      console.log('Express server running on port', PORT);
    });
  });