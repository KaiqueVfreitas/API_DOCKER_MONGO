import express from 'express';
import fs from 'fs';

const app = express();
app.use(express.json());

function carregarUsuariosDoArquivo() {
    try {
        const data = fs.readFileSync('./database/usuarios.json', 'utf8');
        return JSON.parse(data);
    } catch (err) {
        return [];
    }
}

function salvarUsuariosNoArquivo() {
    fs.writeFileSync('./database/usuarios.json', JSON.stringify(users, null, 2));
}

const users = carregarUsuariosDoArquivo();

app.get('/', (req, res) => {
    res.send('API de Usuários');
});

app.get('/usuarios', (req, res) => {
    res.status(200).json(users);
});

app.post('/usuarios', (req, res) => {
    users.push(req.body);
    salvarUsuariosNoArquivo();
    res.status(201).json({ mensagem: 'Usuário adicionado com sucesso!' });
});

app.listen(3000, () => {
    console.log('API de Usuários rodando na porta 3000');
});
