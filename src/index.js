const express = require('express');
const app = express();
const version = process.env.APP_VERSION || 'v1';


app.get('/', (req, res) => res.json({ message: `hello from app ${version}` }));
app.get('/health', (req, res) => res.send('ok'));


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on ${port}`));