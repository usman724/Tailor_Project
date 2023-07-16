// api2 about cats

// Now we need to write a code that will delete all fields of specific id that we will provide in the cat collection.
//it will Delete a specific id from firebase. it will delete all fields and then remove id from firebase.
app.delete('/cat/:id', async  (req, res)=> {
    try {
      const {id} = req.params;
      console.log({id});
  
      const firestore = admin.firestore();
      const catRef= firestore.collection('cat').doc(id);
      await catRef.delete();
  
      res.status(200).json({'message:': "Cat fields deletion success"});
    } catch (error) {
      res.status(404).json({'message:': "Oops! Cat fields deletion failed. check error", error});
    }
  
  });
  