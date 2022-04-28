const express = require('express');
const path = require('path');
const router = require('./routes/router')

const port = process.env.PORT | 9090

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use('/api', router)

app.listen(port, () => {
  console.log(`Listen on port ${port}`)
});