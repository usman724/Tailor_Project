// api1 about personal data
// Now we'll write code for updating one specific attribute like age/gen of data.
// If we want to update the object of any data like pinfo.gen then we will write it as 'info.gen';gen.
// But if we want to update any other field which is not the object then we wil' not write in '' and access by.
// Instead we will simply write them.
app.put('/sarmad/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { gen } = req.body;

        console.log({ id, gen });

        const firestore = admin.firestore();
        const updateReference = firestore.collection('sarmad').doc(id);

        await updateReference.update({ 'pinfo.gen': gen });
        res.status(200).json({ 'message:': "Updated successfully" });

    } catch (error) {
        res.status(404).json({ 'message:': "Sorry! Couldn't update. Check error:", error });
    }
});

