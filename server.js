import express from 'express';


const app = express();
app.use(express.json());


const users = []

app.get('/', (req, res) => {
    res.send('API de Usuários');
});

app.get('/usuarios', (req, res) => {
    res.send('Listagem de Usuários');
    res.json(users)
})
app.post('/usuarios', (req, res) => {
    users.push(req.body);
    res.send('Usuário criado com sucesso');
});


app.listen(3000, () => {
    console.log('API de Usuários rodando na porta 3000');
});