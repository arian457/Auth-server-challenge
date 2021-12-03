import db, { ConnectionStates } from 'mongoose';

db.set('debug', true);
db.Promise = global.Promise;
async function connect(dbDevUrl: string): Promise<typeof ConnectionStates> {
  const DB_URL = dbDevUrl;

  try {
    await db.connect(DB_URL);
    console.log('Mongo[DB] connected successfully');
    return;
  } catch (error) {
    console.log(error);
  }
}

export default connect;
