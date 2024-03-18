const express = require('express');
const axios = require('axios');

const app = express();
const port = 5000;

app.get('/', (req, res) => {
    const url = 'xxx/turmas';
    console.log(`Acessando o back-end em ${url}`);
    axios.get(url)
        .then(response => {
            const turmas = response.data;
            res.send(`Olá, eu sou o front-end. Esta foi a resposta do backend: ${JSON.stringify(turmas)}`);
        })
        .catch(error => {
            console.log(error);
            res.status(500).send('Erro ao acessar o back-end');
        });
});

app.listen(port, () => console.log(`Servidor está rodando na porta ${port}`));
