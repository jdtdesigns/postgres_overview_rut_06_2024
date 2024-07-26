const { Pool } = require('pg');
const is_prod = process.env.NODE_ENV === 'production';

console.log('IS_PROD', is_prod);

const localConnection = {
  user: 'postgres',
  password: 'pass',
  database: 'student_app_db'
};

const renderConnection = {
  connectionString: process.env.DB_URL
}

const client = new Pool(is_prod ? localConnection : renderConnection);

module.exports = client;