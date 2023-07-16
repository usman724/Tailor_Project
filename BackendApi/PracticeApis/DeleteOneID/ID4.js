// api4 about vehicle
// Now write code for deleting all fields of collection dog.
// it will delete complete id.

app.delete('/dog/:id', async (req,res)=> {
    try {
      const {id} = req.params;
      console.log({id});
      const firestore =admin.firestore();
      const updateDog= firestore.collection('dog').doc(id);
      
      await updateDog.delete();
      res.status(200).json({'message:': "dog id deletion success"});
    } catch (error) {
      res.status(404).json({'message:': "Dog deletion failed. check error.", error});
    }
  });