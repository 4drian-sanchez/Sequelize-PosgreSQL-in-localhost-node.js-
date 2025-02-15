import express from 'express';
import 'reflect-metadata'; // Importación obligatoria
import { sequelize, testConnection } from './config/db';

const app = express();

app.use(express.json());

// Inicializar conexión
const connectDB = async () => {
    await testConnection();
} 
connectDB()
export default app