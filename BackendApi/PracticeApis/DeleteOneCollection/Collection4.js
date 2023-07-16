// api4 about dogs
// Now write code that will delete dog collection itself.
app.delete('dog', async (req, res)=> {
    try {
      const firestore = admin.firestore();
      const dogRef= firestore.collection('dog');
      const querySnapshot = await dogRef.get();
      const batch = firestore.batch();

       querySnapshot.docs.forEach(doc=>{
        batch.delete(doc.ref);
       });
       await batch.commit();

      res.status(200).json({'message:': "Vehicle collection data delete success"});
    } catch (error) {
      res.status(404).json({'message:': "dog collection caould not delete. check error", error});
    }
});
