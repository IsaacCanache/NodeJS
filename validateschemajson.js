//npm install ajv


const express = require('express');
const Ajv = require('ajv');
const app = express();
const ajv = new Ajv();

app.use(express.json());

const schema = {
 type: 'object',
 properties: {
    name: {type: 'string'},
    age: {type: 'integer'}
 },
 required: ['name', 'age'],
 additionalProperties: false
};

app.post('/validate', (req, res) => {
 const validate = ajv.compile(schema);
 const valid = validate(req.body);

 if (!valid) {
    return res.status(400).json(validate.errors);
 }

 res.json({message: 'Datos válidos'});
});

app.listen(3000, () => {
 console.log('Microservicio escuchando en el puerto 3000');
});

//check test: curl -X POST -H "Content-Type: application/json" -d '{"name":"John","age":30}' http://localhost:3000/validate

