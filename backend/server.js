/* eslint-disable no-undef */
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();
app.use(bodyParser.json());
app.use(cors());

dotenv.config();

const PORT = process.env.PORT || 5000;


app.get('/', (req, res) => {
  res.send('Servidor Node.js funcionando!');
});

app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});