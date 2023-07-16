// api3 about vehicles
// The following code is for updating one specific field of vehicle firebase api 3. like price.
// Note! if we will not use async and await function then it will update only once and will not be updating everytime.

app.put('/vehicle/:id', async (req, res)=> {
  try {
    const {id} = req.params;
    const {price} = req.body;

    console.log({id, price});

    const firestore = admin.firestore();
    const updateprice = firestore.collection('vehicle').doc(id);
    await  updateprice.update({price:price});

    res.status(200).json({'message:': "Congrats! Vehicle firebase update success"});

  } catch (error) {
    res.status(404).json({'message:':"Oops! vehicle firebase update failed. see error", error});
  }
});
