import express from 'express';
import drugRoutes from './routes/DrugRoutes';
import { pool } from '../database';

const app = express();

// Middleware para parsear o corpo das requisições como JSON
app.use(express.json());

// Configura as rotas
app.use('/api', drugRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
    try {
        await pool.connect();
        console.log(`Server is running on port ${PORT}`);
        console.log('Connected to the database');
    } catch (error) {
        console.error('Error connecting to the database:', error);
    }
});
