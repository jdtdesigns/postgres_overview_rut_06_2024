const express = require('express');
const cors = require('cors');

const client = require('./db/connection');
const api_routes = require('./routes/api_routes');

const app = express();
const PORT = 3333;

// Allow json to be sent through requests
app.use(express.json());

// Allow all origins (domains like jsbin.com/etc.) to access our API
app.use(cors());

// Load Routes
app.use('/api', api_routes);

client.connect()
  .then(() => {
    console.log('DB Connected');

    app.listen(PORT, () => {
      console.log('Express server started on port', PORT);
    })
  });