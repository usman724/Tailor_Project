// Let's make 3rd practice get api for Mueen. data for api is education.

app.get('/mueen/:name/:fname/:age/:height/:room/:number/:subject/:education/:contact/:address', async (req, res) => {
  const { name, fname, age, height, room, number, subject, education, contact, address } = req.params;

  console.log({ name, fname, age, height, education, room, number, subject, contact, address });
  try {

    const firestore = admin.firestore();
    const data = {
      name: name,
      fname: fname,
      age: age,
      height: height,
      room: room,
      number: number,
      subject: subject,
      education: education,
      contact: contact,
      address: address,
    }

    await firestore.collection('mueen').add(data);
    res.status(200).json({ 'message': "Congratulations! Your data uploaded successfully" });

  } catch (error) {

    res.status(404).json({ 'message': "Alas! Your data could not be added" }, error);

  }
});



// Now we will get data from database. eg., where age = 22y

app.get('/mueen', async (req, res) => {

  try {

    const firestore = admin.firestore();
    const querySnapshot = await firestore.collection('mueen').where("address", "==", "[tlg]") .get();

    const data = [];

    querySnapshot.forEach((doc) => {
      data.push(doc.data());
    });

    res.status(200).json({'message': "your requested data is:", data});

  } catch (error) {
    res.status(404).json({'message:': "cannot show your data. Check error"}, error);
  }
});


