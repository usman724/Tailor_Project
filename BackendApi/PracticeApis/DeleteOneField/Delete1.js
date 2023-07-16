// First api. Personal info
// Now we'll write a code that will be used to delete a single specific attribute of any id that we will 
// provide in the collection of sarmad.

app.put('/sarmad/:id', async (req, res) => {
    try {
        const { id } = req.params;

        console.log('id', id);

        const firestore = admin.firestore();
        const updateReference = firestore.collection('sarmad').doc(id);

        await updateReference.update({fname: admin.firestore.FieldValue.delete()});

        res.status(200).json({ message: "Deleted successfully" });
    } catch (error) {
        console.error("Error deleting field 'fname':", error);
        res.status(500).json({ message: "Sorry! Couldn't delete. Please check the logs for more details." });
    }
});

