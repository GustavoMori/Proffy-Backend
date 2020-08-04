import express from 'express';

const app = express();
app.use(express.json());

app.get('/', (request, response) => {
    return response.json({ message: 'Hello World'});
});
// www.minhapi.com.br:3333
// default = 80
app.listen(3333);
