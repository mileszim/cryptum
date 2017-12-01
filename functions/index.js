const functions = require('firebase-functions');

exports.downloadApplication = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});
