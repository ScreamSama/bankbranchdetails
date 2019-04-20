/* const Pool = require('pg').Pool
 var config = {
     user: 'postgres',
     host: 'localhost',
     database: 'test_bank',
     password: '123',
     port: 5432,
 };
 const pool = new Pool(config);*/
//Heroku db connection
 const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true
}); 

module.exports = pool;
