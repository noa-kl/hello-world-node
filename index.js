const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello, this is a basic Node.js app running on Kubernetes!');
});

// Placeholder to read from ConfigMap
app.get('/config', (req, res) => {
    const config = process.env.MY_CONFIG || 'No config found';
    res.send(`Config Map Value: ${config}`);
});

app.listen(port, () => {
    console.log(`App is listening at http://localhost:${port}`);
});
