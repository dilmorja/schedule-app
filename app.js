const express = require('express');
const path = require('path');
const router = require('./routes/router')

const port = process.env.PORT || 9090

const app = express();

// Frontend
app.use(express.static(path.join(__dirname, 'public')));
// Middlewares
app.use(express.json());
app.use(require('cors')());
// Routes
app.use('/api', router);
// Config
app.disable('x-powered-by');

app.listen(port, () => {
  console.log(`Listen on port ${port}`)
});