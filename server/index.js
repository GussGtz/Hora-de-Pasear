const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json())

const usuarioRouter = require('./router/ususarioRouter');
const loginRouter = require('./router/loginRouter');
const lugaresRouter = require('./router/lugarRouter');


app.use('/usuarios', usuarioRouter);
app.use('/login', loginRouter);
app.use('/lugares',lugaresRouter);


app.listen(3001, () => {
    console.log("API escuchando por el puerto 3001")
})