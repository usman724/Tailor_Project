// Now make 3rd api for post request about vehicle
app.post('/vehicle', async (req, res) => {

    const {catagory, company, color, tyres, model, engineno, speed, price} = req.body;

    console.log('Your data:', {catagory, company, color, tyres, model, engineno, speed, price,} );

            try {

                const data = {
                  catagory: catagory,
                  company: company,
                  color: color,
                  tyres: tyres,
                  model:model,
                  engineno: engineno,
                  speed: speed,
                  price: price,
                }

                const firestore = admin.firestore();
                await firestore.collection('vehicle').add(data);
                res.status(200).json({'message:': "Data posting success"})

            } catch (error) {
                res.status(404).json({'message:': "Could not post. Check error for detail"})
            }
});



// Now we will write get request conditional data from the vehicle api.
// like price is 600k and company is tamman.

app.get('/vehicle', async (req, res) => {
  try {
    const firestore = admin.firestore();
    const querySnapshot = await firestore.collection('vehicle').where("price", "==", "600k")
    .where("company", "==", "tamman") .get(); 
    const data =[];

    querySnapshot.forEach((doc) => {
      data.push(doc.data());
    });
    res.status(200).json({'message:': "Required data is ", data});
  } catch (error) {
    res.status(404).json({'message:': "Oops! error:", error});

  }
});
