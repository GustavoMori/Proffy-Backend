import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    const users = [
        { name: "Gustavo", age: 26 },
        { name: "Deborah", age: 24},
    ];

    return response.json(users);
});
// www.minhapi.com.br:3333
// default = 80
app.listen(3333);
