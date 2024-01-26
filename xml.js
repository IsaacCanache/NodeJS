const express = require('express');
const app = express();
const port = 3003;

app.use(express.json());

app.post('/informacion', (req, res) => {
    const body = req.body;
    if (!body || !body.example) {
        let xmlError = '<error>Falta el campo example en el body</error>';
        res.setHeader('Content-Type', 'text/xml');
        return res.send(xmlError);
    }
    
    let xmlInfo = `<information>${body.example}</information>`;
    res.setHeader('Content-Type', 'text/xml');
    res.send(xmlInfo);
});

app.listen(port, () => {
    console.log(`Microservicio corriendo en http://localhost:${port}`);
});

#probar> curl -X POST -H "Content-Type: application/json" -d '{"example":"testExample"}' http://localhost:3003/informacion
