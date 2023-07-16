// api3 about vehicles
// Now we'll write code for deleting one specific attribute(field) of firestore (vehicle).
app.put('/vehicle/:id', async (req, res)=> {
        try {
          const {id} = req.params;
          console.log({id});

          const firestore = admin.firestore();
          const updatevehicle = firestore.collection('vehicle').doc(id);
          await updatevehicle.update({color: admin.firestore.FieldValue.delete()});

          res.status(200).json({'mesage:':"Vehicle Data deletion success"});
        } catch (error) {
          res.status(404).json({'message:': "Couldn't delete. Check error", error});
        }
});


