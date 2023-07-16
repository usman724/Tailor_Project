// api3 about vehicle
// Now write code that will delete vehicle collection itself.
app.delete('vehicle', async (req,res)=> {
    try {
      const firestore = admin.firestore();
      const vehicleRef= firestore.collection('vehicle');
      const querySnapshot = await vehicleRef.get();
      
      const batch = firestore.batch();
      querySnapshot.docs.forEach(doc =>{
          batch.delete(doc.ref);
      });
      await batch.commit();
      res.status(200).json({'mesage:': "Vehicle collection Deletion Succeess"});
  
    } catch (error) {
      res.status(404).json({'message:': "could not delete vehicle collection. Check error", error});
    }
  });