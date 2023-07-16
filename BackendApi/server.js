const path = require('path');
const express = require('express');
const colors = require('colors');
const cors = require('cors');
const dotenv = require('dotenv').config();
const uuid = require('uuid');
const admin = require('firebase-admin');
const serviceAccount = require("../BackendApi/config/servicejson.json");
const { get } = require('http');
const { QuerySnapshot } = require('@google-cloud/firestore');


const port = process.env.port || 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/Design', require('./routes/tailorRoutes'));


app.post('/image', upload.single('image'), async (req,res) => {
  try {
    const {originalname, buffer} = req.file;

    // save image to firebase storage
    const storageBucket = admin.storage().bucket();

    const filename = {originalname};

    const file = admin.storageBucket.file(filename);

    const stream = file.createWriteStream();
    stream.end(buffer);
    await new promise ((resolve, reject) => {
      stream.on('finish', resolve);
      stream.on('error', reject);
    });

    // Get URL of uploaded image 
    const imageUrl= await file.getSignedUrl({
      action: 'read',
      expires: '04-02-2200', // adjust expiry date if needed.
    });
    
    // save the url of uploaded image.
    const firestore = admin.firestore();
    const data= {
      imageUrl: imageUrl[0],
    };

    await firestore.collection('image').add(data);
    res.status(200).json({'message:': "Image upload success"});


  } catch (error) {
    res.status(404).json({'message:': "Image upload failed, check error", error});
  }
})


// // Define the route for uploading the image and string data
// app.post('/upload', upload.single('image'), async (req, res) => {


//   try {
//     const { originalname, buffer } = req.file;

//     // Save image to Firebase Storage
//     const storageBucket = admin.storage().bucket();
//     const filename = `${uuid.v4()}-${originalname}`;

//     const file = storageBucket.file(filename);


//     const stream = file.createWriteStream();
//     stream.end(buffer);
//     await new Promise((resolve, reject) => {
//       stream.on('finish', resolve);
//       stream.on('error', reject);
//     });

//     // Get the uploaded image URL
//     const imageUrl = await file.getSignedUrl({
//       action: 'read',
//       expires: '03-01-2500', // Adjust the expiration date if needed
//     });

//     // Save the string data and image URL to Firebase Firestore
//     const firestore = admin.firestore();
//     const data = {
//       stringData: req.body.stringData,
//       imageUrl: imageUrl[0],
//     };
//     await firestore.collection('users').add(data);

//     res.status(200).json({ message: 'Upload successful!' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Upload failed.' });
//   }
// });

app.listen(port, () => console.log(`Server started on port ${port}`));

// include all details varibales about project 
// const dotenv = require('dotenv').config();
// app.use('/api/users', require('./routes/userRoutes'));

// // Serve frontend
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '../frontend/build')));

//   app.get('*', (req, res) =>
//     res.sendFile(
//       path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
//     )
//   );
// } else {
//   app.get('/', (req, res) => res.send('Please set to production'));
// }

// app.use(errorHandler);

