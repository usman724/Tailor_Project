// This is api for first get request of text data. (data is furniture)

app.get('/test/:person/:father/:grand/:furniture/:singlebed/:doublebed/:chairs/:tables/:almirah/:dressing',async (req,res)=>{

  const  {person, father, grand, furniture, singlebed, doublebed, chairs, tables, almirah, dressing,} =req.params;


  console.log('data' ,  { person, father, grand, furniture, singlebed, doublebed, chairs, tables, almirah, dressing,});

    try {

            const firestore = admin.firestore();

            const data = {
                person: person,
                father:father,
                grand:grand,    
                furniture: furniture,
                singlebed: singlebed,
                doublebed: doublebed,
                chairs: chairs,
                tables: tables,
                almirah: almirah,
                dressing: dressing,                    
            };

            await firestore.collection('test').add(data);
            res.status(200).json({ message: 'furniture data addition successful!' });

    } catch (error) {
        res.status(404).json({ message: 'Not saved ', error });

    }

});

// This is the code where we get conditional data. like get data from where "father" is "etc". 

app.get('/test', async (req, res) => {

  try {
    const firestore = admin.firestore();
    const querySnapshot = await firestore.collection('test').where("almirah").get();
    const data = [];

    querySnapshot.forEach((doc) => {
      data.push(doc.data());
    });

    res.status(200).json({ 'data': data });
  } catch (error) {
    res.status(404).json({ 'error': error });
  }

});




