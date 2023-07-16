
// api2. about cats
// Now we will write code that will delete one specific attribute of cat. like age. and will not delete other.
app.put('/cat/:id', async (req,res) => {
      try {
        const {id} = req.params;
        console.log({id});


        const firestore = admin.firestore();
        const updatecat= firestore.collection('cat').doc(id);
        await updatecat.update({animal: admin.firestore.FieldValue.delete()});

        res.status(200).json({'message:': "Data Deletion success"});
      } catch (error) {
        res.status(404).json({'message:': "Deletion failed. Check error", error});
      }
});

