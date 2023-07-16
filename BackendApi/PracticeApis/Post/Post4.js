// Now make 4th post request for dogs

app.post('/dog', async (req, res) => {
  const { color, legs, age, weight, eyescolor, gen, breed, health, race, tail, price, } = req.body;

  console.log('The data is:', { color, legs, age, weight, eyescolor, gen, breed, health, race, tail, price, });

  try {
    const data = {
      color: color,
      legs: legs,
      age: age,
      weight: weight,
      eyescolor: eyescolor,
      gen: gen,
      breed: breed,
      health: health,
      race: race,
      tail: tail,
      price: price,
    }
    const firestore = admin.firestore();
    await firestore.collection('dog').add(data);
    res.status(200).json({ 'message:': "Posting data successful" });

  } catch (error) {
    res.status(404).json({ 'message:': "oops! check error" }, error)
  }
});


// Now we will write get request to get conditional data from dog api.

app.get('/dog', async (req, res) => {
  try {
    const firestore = admin.firestore();
    const querySnapshot = await firestore.collection('dog')
      .where("age", "==", "2 years").get();
    const data = [];

    querySnapshot.forEach((doc) => {
      data.push(doc.data());
    });
    res.status(200).json({ 'message:': "Your data is:", data });
  } catch (error) {
    res.status(404).json({ 'message:': "oops! see error", error });

  }
});

