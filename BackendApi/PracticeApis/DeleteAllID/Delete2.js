// api2 about cat. 
// Now we write a code that will delete entire data in the cat collection but will not delete collection itself.
try {
  app.delete('cat', async (req, res)=> {
    const firestore = admin.firestore();
    const catReference = firestore.collection('cat');
  
    const querySnapshot = await catReference.get();
    querySnapshot.forEach(async (doc)=> {
      await doc.ref.delete();
    } );
    res.status(200).json({'message:': "cat collection data delete success"});
  });
  
} catch (error) {
  res.status(404).json({'message:': "cat collection data cannot delete. check error", error});
}