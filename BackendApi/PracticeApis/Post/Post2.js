// Now we'll make 2nd api for post request for cats.

// Remember! If we store array data to firebase and then want to access it then we can't access it 
// by using simple where statement but we will access it by  passing it in the form of object in the post method.

app.post('/cat', async (req, res) => {

    const { animal, herbivor, legs, color, weight, gen, age, childrens, country, eyescolor, health, tail } = req.body;
  
    console.log('Your data:', {
      animal, herbivor, legs, color,
      weight, gen, age, childrens, country, eyescolor, health, tail
    });
  
    try {
  
      const data = {
        animal: animal,
        herbivor: herbivor,
        legs: legs,
        color: color,
        weight: weight,
        gen: gen,
        breed: {
          age: age,
          childrens: childrens,
        },
        country: country,
        eyescolor: eyescolor,
        health: health,
        tail: tail,
      }
  
      const firestore = admin.firestore();
  
      await firestore.collection('cat').add(data);
      res.status(200).json({ 'message:': "The data is posted without errors" })
    } catch (error) {
  
      res.status(404).json({ 'meassage': "Sorry! Your data is not posted. Check error for furthur details", error })
  
    }
  });
  

  // Now we will make get request from cat api(2) to get conditional data.
// Like where gen: female having children 0
app.get('/cat', async (req, res) => {

    try {
      const firestore = admin.firestore();
      const querySnapshot = await firestore.collection('cat').where("gen", "==", "female")
        .where("breed.childrens", "==", "0").get();
      const data = [];
  
      querySnapshot.forEach((doc) => {
        data.push(doc.data());
      });
      res.status(200).json({ 'message': "required data is:", data });
  
    } catch (error) {
      res.status(404).json({ 'message:': "oops! check error", error })
  
    }
  
  });
  