import 'dotenv/config'

import express from 'express'
import cors from 'cors'

const server = express();
server.use(cors());


server.get('/ping', (req, resp) => {
    resp.send('pong');
})

server.get('/dobro/:numero', (req, resp) => {
    let numero = Number(req.params.numero);
    let dobro = numero * 2;
    resp.send(String(dobro));
})

server.get('/tabuada/:numero', (req, resp) => {
    let numero = Number(req.params.numero);
    let tabuada1 = numero * 1;
    let tabuada2 = numero * 2;
    let tabuada3 = numero * 3;
    let tabuada4 = numero * 4;
    let tabuada5 = numero * 5;
    let tabuada6 = numero * 6;
    let tabuada7 = numero * 7;
    let tabuada8 = numero * 8;
    let tabuada9 = numero * 9;
    let tabuada10 = numero * 10;

    let resposta = {
        tabuada1: tabuada1,
        tabuada2: tabuada2,
        tabuada3: tabuada3,
        tabuada4: tabuada4,
        tabuada5: tabuada5,
        tabuada6: tabuada6,
        tabuada7: tabuada7,
        tabuada8: tabuada8,
        tabuada9: tabuada9,
        tabuada10: tabuada10
    }
    resp.send(resposta);
})

server.get('/somar/', (req, resp) => {
    let a = Number(req.query.a);
    let b = Number(req.query.b);

    let x = a + b;

    resp.send({
       soma: x 
    })
})


server.listen(process.env.PORT,
                ()  => console.log(`API online na porta ${process.env.PORT}`));