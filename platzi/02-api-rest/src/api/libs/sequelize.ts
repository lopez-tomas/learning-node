import { config } from '../../config/config';
import { Sequelize } from 'sequelize';
import { setupModels } from '../models';

const USER = encodeURIComponent(config.dbUser!);
const PASSWORD = encodeURIComponent(config.dbPassword!);
const URI = `mysql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(URI, {
  dialect: 'mysql',
  logging: console.log,
});

setupModels(sequelize);

sequelize.sync();

export {
  sequelize,
}
