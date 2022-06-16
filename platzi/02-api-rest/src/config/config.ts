import dotenv from 'dotenv';
dotenv.config();

const config = {
  env: process.env.NODE_ENV || 'dev',
  port: process.env.PORT || 3000,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
  dbUser: process.env.MYSQL_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbPort: process.env.MYSQL_MY_PORT,
}

export {
  config
}
