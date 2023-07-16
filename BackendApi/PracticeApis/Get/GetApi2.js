// This is second get request. firebase store name "Kashan". (data is toys)

app.get('/kashan/:name/:fathername/:age/:birthmonth/:birthyear/:school/:toys/:nooftoy/:intrest', async (req, res) => {

    const {name, fathername, age, birthmonth, birthyear,school, toys, nooftoy, intrest,} = req.params;

    console.log('The data is:', {name, fathername, age, birthmonth, birthyear,school, toys, nooftoy, intrest} );

    try {
        const firestore = admin.firestore();

        const data = {

          name: name, 
          fathername: fathername,
          age: age, 
           birthmonth: birthmonth, 
           birthyear: birthyear,
           school: school,
           toys: toys, 
            nooftoy:nooftoy,
            intrest: intrest,

            };

        await firestore.collection('kashan').add(data);
            res.status(200).json({message:'Text added succesfully'});


    } catch (error) {
        res.status(404).json(error)
    };

});


// Now we will write  to show (get) data under the condition e.g., "school" == "no"

app.get('/kashan', async (req, res) => {

  try {

    const firestore = admin.firestore();
    const querySnapshot = await firestore.collection('kashan').where('school', '==', 'no') .get();

    const data = [];

    querySnapshot.forEach((doc) => {
      data.push(doc.data());
    });

    res.status(200).json({'message': "your requested data is:", data});

  } catch (error) {
    res.status(404).json({'message:': "cannot show your data. Check error"}, error);
  }
});

