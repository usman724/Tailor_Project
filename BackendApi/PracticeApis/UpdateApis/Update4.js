// api4 about dogs
// Now we'll write code to update one specific filed of dog firebase like gender or race. api 4
app.put('/dog/:id', (req, res) => {

  try {
    const {id} = req.params;
    const {race} = req.body;

    console.log({id, race});

    const firestore = admin.firestore();
    const updaterace = firestore.collection('dog').doc(id);

    updaterace.update({race : race});

    res.status(200).json({'message:': "Congrats! Update success"});

  } catch (error) {
    res.status(404).json({'message:' : "Oops! could not update. check error", error});
  }
});