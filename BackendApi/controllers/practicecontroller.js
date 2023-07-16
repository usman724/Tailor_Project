const asyncHandler = require('express-async-handler')
const uuid = require('uuid');
const admin = require('firebase-admin');
const serviceAccount = require("../config/servicejson.json");


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: "gs://tailor-ff171.appspot.com/"
});

  

const uploadDesign = asyncHandler(async (req, res) => {
    try {
        const { originalname, buffer } = req.file;
        const  {gender,designprice,days,keywords} =req.body;
    
        // Save image to Firebase Storage
        const storageBucket = admin.storage().bucket();
        const filename = `${uuid.v4()}-${originalname}`;
    
        const file = storageBucket.file(filename);
    
    
        const stream = file.createWriteStream();
        stream.end(buffer);
        await new Promise((resolve, reject) => {
          stream.on('finish', resolve);
          stream.on('error', reject);
        });
    
        // Get the uploaded image URL
        const imageUrl = await file.getSignedUrl({
          action: 'read',
          expires: '03-01-2500', // Adjust the expiration date if needed
        });
    
        // Save the string data and image URL to Firebase Firestore
        const firestore = admin.firestore();
        const data = {
                Imagefile:filename,
                imageUrl: imageUrl[0],
        };
        await firestore.collection('Design').add(data);
    
        res.status(200).json({ message: 'Upload successful!' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Upload failed.' });
      }
  })


  const getDesign = asyncHandler(async (req, res) => {
    try {

      const firestore = admin.firestore();
      const designCollection = firestore.collection('Design');
      
      // Query the Firestore collection to get designs for a specific tailor      
      const designs = [];
      querySnapshot.forEach((doc) => {
        const designData = doc.data();
        designs.push(designData);
      });
      
      res.status(200).json({ designs });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to get designs.' });
    }
  });



  const deleteDesign = asyncHandler(async (req, res) => {
    try {
      const { id } = req.params; // Assuming the design ID is provided in the route parameter
      
      console.log('designId',id);
      const firestore = admin.firestore();
      const designRef = firestore.collection('Design').doc(id);
      
      // Check if the design exists
      const designDoc = await designRef.get();
      if (!designDoc.exists) {
        return res.status(404).json({ message: 'Design not found.' });
      }
      
      // Delete the design document from Firestore
      await designRef.delete();
      
      // Delete the design image from Firebase Storage
      const storageBucket = admin.storage().bucket();
      await storageBucket.file(designDoc.data().Imagefile).delete();
      
      res.status(200).json({ message: 'Design deleted successfully.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to delete design.' });
    }
  });
  

  const updateDesign = asyncHandler(async (req, res) => {
    
    try {

      const { id } = req.params; // Assuming the design ID is provided in the route parameter  

      const firestore = admin.firestore();
      const designRef = firestore.collection('Design').doc(id);
  
      // Check if the design exists
      const designDoc = await designRef.get();
      if (!designDoc.exists) {
        return res.status(404).json({ message: 'Design not found.' });
      }
        
      // Handle image update
      if (req.file) {
        const { originalname, buffer } = req.file;
  
        // Delete the previous design image from Firebase Storage
        const storageBucket = admin.storage().bucket();
        await storageBucket.file(designDoc.data().Imagefile).delete();
  

        // Save the new image to Firebase Storage
        const filename = `${uuid.v4()}-${originalname}`;
        const file = storageBucket.file(filename);
        const stream = file.createWriteStream();
        stream.end(buffer);
        await new Promise((resolve, reject) => {
          stream.on('finish', resolve);
          stream.on('error', reject);
        });
  
        // Get the updated image URL
        const imageUrl = await file.getSignedUrl({
          action: 'read',
          expires: '03-01-2500', // Adjust the expiration date if needed
        });
  
        // Update the image URL and filename in the design document
        await designRef.update({
          Imagefile: filename,
          imageUrl: imageUrl[0],
        });


      }
  
      res.status(200).json({ message: '--Design updated successfully.' });

    } catch (error) {
      console.error(error);
      res.status(500).json({ message: '--Failed to update design.' });
    }
  });
  


  module.exports = {
    uploadDesign,
    getDesign,
    updateDesign,
    deleteDesign
  };
  