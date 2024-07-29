const { Pool } = require('pg');
const is_prod = process.env.NODE_ENV === 'production';

const localConnection = {
  user: 'postgres',
  password: 'pass',
  database: 'student_app_db'
};

const renderConnection = {
  connectionString: process.env.DB_URL,
  ssl: {
    rejectUnauthorized: false, // Set to false to bypass SSL certificate validation (not recommended for production)
  },
}

const connectObj = is_prod ? renderConnection : localConnection;

const client = new Pool(connectObj);

module.exports = client;