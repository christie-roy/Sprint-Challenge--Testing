require('dotenv').config();

const server = require('./api/server.js');

const port = 5000;
server.listen(port, () => console.log(`Port listening on port ${port}`));