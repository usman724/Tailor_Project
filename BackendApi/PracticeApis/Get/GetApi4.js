// Now 4th GET request for practice for hobby

app.get('/aryan/:name/:fname/:age/:edu/:subject/:percentage/:village/:tehsil/:district/:gender/:married/:hobby', 

        async (req, res) => {

    const {name, fname, age, edu, subject, percentage,  village, tehsil, district, gender, married, hobby } = req.params;

console.log('The given data is:', {name, fname, age, edu, subject, percentage,  village, tehsil, district,
   gender, married, hobby});

    try {
        const data = {
          name: name,
          fname: fname,
          age: age,
          edu: edu,
          subject: subject,
          percentage: percentage,
          village:  village,
          tehsil: tehsil,
          district: district,
          gender: gender,
          married: married,
          hobby: hobby
        }


        const firestore = admin.firestore();

        await firestore.collection("aryan").add(data);
        res.status(200).json({'message': "your data stored successfully"});

    } catch (error) {
        res.status(404).json({
            "error" :error
        });
    }
});



// Now we will write code to fetch and show conditional data from firebase aryan
app.get('/aryan', async (req, res) => {

  try {
    const firestore = admin.firestore();
    const querySnapshot = await firestore.collection('aryan').where("name", "in", ["aryan", "hamid"]) .get();
   
    const data =[];

        querySnapshot.forEach((doc)=>{
            data.push(doc.data());
        });

    res.status(200).json({'Message':  "Requested data is:", data});
  } catch (error) {
          res.status(400).json({'message:': "oops! cannot fetch. see error", error});    
  }
});



