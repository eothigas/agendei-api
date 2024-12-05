import express from 'express';
import cors from 'cors';
import https from 'https';
import fs from 'fs';
import router from './routes.js';  // Presumo que você tenha seu arquivo de rotas

const app = express();

// Permite qualquer origem com CORS
app.use(cors({
  origin: '*',  // Permite todas as origens
  methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Permite métodos HTTP específicos
  allowedHeaders: ['Content-Type', 'Authorization'],  // Permite cabeçalhos específicos
}));

// Middleware para permitir requisições com JSON
app.use(express.json());

// Usa suas rotas
app.use(router);

// Rota de teste
app.get('/', (req, res) => {
  res.send('API funcionando!');
});

// Configuração do HTTPS com certificado autoassinado
const httpsOptions = {
    key: fs.readFileSync('../../../../etc/ssl/private/key.pem'),  // Caminho para a chave privada
    cert: fs.readFileSync('../../../../etc/ssl/certs/cert.pem'),  // Caminho para o certificado
};

// Cria o servidor HTTPS e escuta na porta 443
https.createServer(httpsOptions, app).listen(443, () => {
    console.log('Servidor HTTPS rodando na porta 443');
});

// Caso queira também rodar o servidor HTTP na porta 3001 (opcional), use:
app.listen(3001, () => {
    console.log("Servidor HTTP rodando na porta 3001");
});
