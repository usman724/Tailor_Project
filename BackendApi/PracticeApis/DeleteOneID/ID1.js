// Now we need to write a code that will delete all fields of specific id that we will provide in the sarmad firebase.
//it will delete id. it will delete all fields and then remove id from firebase.
app.delete('/sarmad/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const firestore = admin.firestore();
        const catRef = firestore.collection('sarmad').doc(id);

        await catRef.delete();

        res.status(200).json({ 'message': 'Data deleted successfully' });
    } catch (error) {
        res.status(404).json({ 'message:': 'Cannot delete data. Check error', error });
    }
});
