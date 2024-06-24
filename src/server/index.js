const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Habilita CORS
app.use(cors());

// Rota para buscar os dados da API de dengue
app.get('/dengue-data', async (req, res) => {
    try {
        const response = await axios.get('https://info.dengue.mat.br/api/alertcity/?geocode=3520509&disease=dengue&format=json&ew_start=21&ey_start=2023&ew_end=26&ey_end=2024');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar dados da API' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
