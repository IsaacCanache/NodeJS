const express = require('express');
const axios = require('axios');
const app = express();
const port = 4000;

app.get('/exposeinformation', async (req, res) => {
    try {
        const response = await axios.get('http://localhost:3000/usuario', {
            headers: {
                'user': 'testUser'
            }
        });
        res.send(response.data);
    } catch (error) {
        res.status(500).send({error: 'Error al obtener información del usuario'});
    }
});

app.listen(port, () => {
    console.log(`Microservicio expositor corriendo en http://localhost:${port}`);
});


#npm install axios