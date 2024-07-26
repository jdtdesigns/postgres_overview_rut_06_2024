const { Pool } = require('pg');
const is_prod = process.env.NODE_ENV === 'production';

console.log('IS_PROD', is_prod);
console.log('DB_URL', process.env.DB_URL);

const localConnection = {
  user: 'postgres',
  password: 'pass',
  database: 'student_app_db'
};

const renderConnection = {
  host: 'dpg-cqhuq29u0jms739dn570-a',
  user: 'jd',
  password: 'B5ppbPBxTfyYPxbI7JcauN1xmY8cSo4p',
  database: 'testing_db_3h13'
}

const client = new Pool(is_prod ? localConnection : renderConnection);

module.exports = client;