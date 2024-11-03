const express=require('express');
const cors = require('cors');
const cardsRouter = require('./cardsRouter');

const PORT=8000;

const server=express();

server.use(cors());

server.use(express.json());

server.use('/cards', cardsRouter);

server.listen(PORT, () => {
    console.log(`Listening to requests at http://localhost:${PORT}`);
});
