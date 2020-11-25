/**
 * returns the mongodb connection string based on ENV
 * @return {Promise} resolves to connection uri
 */
export const getConnectionUri = async () => {
  let connectionUri=process.env.DB_URI;
  // Chanage to mongo mem server for testing
  if (process.env.ENV === 'test') {
    const MongoMemoryObj= require('mongodb-memory-server');
    const mongod = new MongoMemoryObj.MongoMemoryServer();
    connectionUri = await mongod.getUri();
    console.log(connectionUri);
    return connectionUri;
  } else {
    return connectionUri;
  }
};
