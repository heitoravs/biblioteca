import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Rota para POST
app.post('/sugerir', (req, res) => {
  const { nome, livro, mensagem } = req.body;

  res.send(`
    <h2>Obrigado pela sugestão!</h2>
    <p><strong>Nome:</strong> ${nome}</p>
    <p><strong>Livro:</strong> ${livro}</p>
    <p><strong>Comentário:</strong> ${mensagem}</p>
    <a href="/">Voltar</a>
  `);
});

// Inicia o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
