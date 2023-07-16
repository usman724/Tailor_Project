const admin = require('firebase-admin');
var serviceAccount = require("./servicejson.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
// const docRef = db.collection('users').doc();

// docRef.set({
//   first: 'Usman',
//   last: 'Pervaiz',
//   born: 1997
// })
//   .then(() => {
//     console.log('Document successfully written!');
//   })
//   .catch((error) => {
//     console.error('Error writing document:', error);
//   });

