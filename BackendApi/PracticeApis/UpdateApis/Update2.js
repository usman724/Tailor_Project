// api2 about cats
// This code is for updating the one field. like gender of cat. api 2.
app.put('/cat/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { gen } = req.body;

    console.log({ id, gen });

    const firestore = admin.firestore();
    const updategen = firestore.collection('cat').doc(id);
    await updategen.update({ gen: gen });

    res.status(200).json({ 'message:': "cat firebase update success." });
  } catch (error) {
    res.status(404).json({ 'message:': "Oops! Update fail. Check error", error });
  }
});
