const functions = require("firebase-functions");

// Exemple de fonction qui renvoie "Hello World!" lorsqu'elle est appelée
exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello World!");
});
