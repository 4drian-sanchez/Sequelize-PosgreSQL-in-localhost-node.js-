import { Sequelize } from "sequelize-typescript";
import 'dotenv/config'

// Configuración de la conexión
export const sequelize = new Sequelize({
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    dialect: 'postgres',
    port: 5432,
    models: [
        __dirname + '/../models/**'
    ],
    dialectOptions: {}
});

export const testConnection = async () => {
    try {
      await sequelize.authenticate();
      await sequelize.sync(); // Sincroniza modelos con la DB
      console.log('✅ Conexión exitosa a PostgreSQL');
    } catch (error) {
      console.error('❌ Error de conexión:', error);
    }
  };
