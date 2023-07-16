// api3 about vehicle
// Now we'll write code for deleting all attribute(fields) of firestore collection (vehicle).
// it will delete compelete id.
app.delete('/vehicle/:id', async (req,res)=> {
    try {
      const {id} = req.params;
      const firestore = admin.firestore();

      const updateVehicle = firestore.collection('vehicle').doc(id);
      await updateVehicle.delete();
      res.status(200).json({'message:': "Vehicle id delete success"});

    } catch (error) {
      res.status(404).json({'message:': "Cannot delete vehicle id. check error", error});
    }
});
