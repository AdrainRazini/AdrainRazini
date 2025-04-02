const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Servindo arquivos estáticos da pasta "public"
app.use(express.static(path.join(__dirname, 'public')));

// Rota para servir o index.html automaticamente
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
