import createServer from './utils/createServer';
import connectdb from './db';

require('dotenv').config();

const { DB_DEV_URI } = process.env;

const server = createServer();

const port = 4000;

server.listen(port, async () => {
  console.log(`Running on port ${port}`);
  await connectdb(DB_DEV_URI).then((success) => success).catch((error) => console.log('db Connection failed'))
});
