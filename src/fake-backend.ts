import express from 'express';
import { Response, Request } from 'express'

import data from './boguslaw-lecina.json'

const app: express.Application = express();

app.get('/users/0001', (request: Request, response: Response) => {
    response.json({
        "forename": "Janusz",
        "surname": "Sram",
        "profession": "Żołnierz Gwiezdnej floty"
    });
});


app.get('/users/0002', (request: Request, response: Response) => {
    response.json(data);
});

app.listen(8889, () => console.info("Fake backend is up and running on 'localhost:8889'"));
