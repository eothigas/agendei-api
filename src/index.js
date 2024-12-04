import express from 'express';
import cors from 'cors';
import router from './routes.js';  // Presumo que você tenha seu arquivo de rotas

const app = express();

// Permite que a API aceite requisições de todas as origens
// Você pode substituir '*' por um domínio específico para permitir apenas de origens específicas
app.use(cors({
  origin: 'http://18.230.206.19:3001',  // Permite todas as origens (cuidado com a segurança)
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

// Inicia o servidor na porta 3001
app.listen(3001, () => {
  console.log("Servidor rodando na porta: 3001");
});
