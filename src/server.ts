import express from 'express'
import connectDB from './config/db'

const app = express();

app.use(express.json());

// Inicializar conexión
connectDB()

export default app