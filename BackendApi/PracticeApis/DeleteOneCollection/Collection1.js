// This code will delete the collection named sarmad. all ids in sarmad will be deleted 
// and collection itself will also be deleted.
app.delete('/gettext', async (req, res) => {
    try {
      const firestore = admin.firestore();
      const collectionRef = firestore.collection('gettext');
  
      const querySnapshot = await collectionRef.get();
  
      const batch = firestore.batch();
  
      querySnapshot.docs.forEach(doc => {
        batch.delete(doc.ref);
      });
  
      await batch.commit();
  
      res.status(200).json({ 'message': 'Collection deleted successfully' });
    } catch (error) {
      res.status(404).json({ 'message': 'Cannot delete collection. Check error', error });
    }
  });