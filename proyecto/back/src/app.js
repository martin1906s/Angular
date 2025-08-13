import express from 'express';
import cors from 'cors';
import invoiceData from './invoiceData.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/api/invoice', (req, res) => {
    console.log('Petición obtenida: Obtener factura');
    res.json(invoiceData);
});

app.get('/api/health', (req, res) => {
    console.log('Petición obtenida: Verificar salud del servidor');
    res.json({
        status: 'OK',
        message: 'Backend funcionando correctamente',
        timestamp: new Date().toISOString(),
        endpoints: [
            'GET /api/invoice - Obtener factura',
            'GET /api/health - Verificar salud del servidor'
        ]
    });
});

// Ruta comodín corregida
app.use((req, res) => {
    console.log('Petición obtenida: Ruta no encontrada:', req.url);
    res.json({
        message: 'API de Facturación',
        description: 'Backend para servir datos de factura al frontend Angular',
        availableEndpoints: [
            'GET /api/invoice',
            'GET /api/health'
        ]
    });
});

app.listen(PORT, '0.0.0.0', () => {
    console.log('👌 Servidor Backend iniciado');
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
