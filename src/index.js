const express = require('express')
const app = express()
const port = 3000;

// Settings
app.set('port', port);

// Middlewares
app.use(express.json());

// Routes

app.use(require('./routes/employees'));



app.get('/', (req, res) => res.send('Hello WORLD!'))

// app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
    });