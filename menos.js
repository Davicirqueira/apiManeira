import express from 'express';

const servidor = express()

servidor.use(express.json());

servidor.get('/calculadora/subtracao/:n1/:n2', (req, resp) => {

    let n1 = Number(req.params.n1)

    let n2 = Number(req.params.n2)

    let sub = n1 - n2

    resp.send({

        sub: sub
        
    })
})

servidor.listen(5050, () => console.log('API subiu na porta 5050') );