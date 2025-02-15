import { Sequelize } from "sequelize-typescript";

// Configuración de la conexión
export const sequelize = new Sequelize({
    database: 'test',
    username: 'postgres',
    password: 'admin',
    host: 'localhost',
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
