const { Client, ID, Users } = require('node-appwrite');

const client = new Client()
  .setEndpoint('https://cloud.appwrite.io/v1') // Your Appwrite Endpoint
  .setProject('6481e8c23bcb686c7be4')          // Your project ID
  .setKey('52389efd648cb3c8222b8a55dcd7b177a08f195d41e920a3ecf7fbf48f086efc0d7d5f4d9aabcd6341357df4d204179c915cf83b56b172034d8d22f431acc8876ebc364e27f52a59679164654e2dfb88919fefb1c34b23a2549b23d0d8948f471f7883975f51278b60b3689f964342f42172fa9310a58c7fc8221f7bd9aff1d3');         // Your secret API key

const users = new Users(client);

//const appwrite = new Appwrite(client);

let promise = users.create(
  ID.unique(),
  'xyzv451@gmail.com',
  null,
  'password'
);

promise.then(function(response) {
  console.log(response);
}, function(error) {
  console.log(error);
});
