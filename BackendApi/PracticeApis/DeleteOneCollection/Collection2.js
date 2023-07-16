// api2 about cat. 
// Now write code that will delete cat collection itself.

app.delete('cat', async (req, res)=> {
    try {
        const firestore = admin.firestore();
        const catRef = firestore.collection('cat');
        const querySnapshot =await catRef.get();
        const batch= firestore.batch();

        querySnapshot.docs.forEach(doc=> {
          batch.delete(doc.ref);
        });
        await batch.commit();
        res.status(200).json({'message:' :"Cat collection delete success"});
      }
       catch (error) {
        res.status(404).json({'message:': "Could not delete cat collection. check error", error});
      }
  });