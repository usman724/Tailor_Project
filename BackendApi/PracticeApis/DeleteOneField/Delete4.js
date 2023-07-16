// api4 about dogs
// Now write code for deleting one specific field of collection dog.
app.put('/dog/:id', async (req, res)=> {
  try {
   const {id} =req.params;
   console.log({id});
   
   const firestore = admin.firestore();
   const updatedog = firestore.collection('dog').doc(id);
   await updatedog.update({color: admin.firestore.FieldValue.delete()});

   res.status(200).json({'message:': "Dog Data Deletion Success"});
  }
   catch (error) {
    res.status(404).json({'message:': "Deletion failed. check error", error});
  }
});
