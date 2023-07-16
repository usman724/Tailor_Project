// api1 sarmad. personal info 
// Now we write a code that will delete entire data in the sarmad collection. all id delete. but will not delete collection itself..

app.delete('/sarmad', async (req, res) => {
    try {
        const firestore = admin.firestore();
        const collectionRef = firestore.collection('sarmad');

        const querySnapshot = await collectionRef.get();

        querySnapshot.forEach(async (doc) => {
            await doc.ref.delete();
        });

        res.status(200).json({ 'message': 'sarmad collection deleted successfully' });
    } catch (error) {
        res.status(404).json({ 'message:': 'Cannot delete sarmad collection. Check error', error });
    }
});
