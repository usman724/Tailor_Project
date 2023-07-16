// There is error in 4th api in sending request. data is showing in console but not storing in firebase. some error in passing data.
// The error was that i have not made const firestore so that's why it was not storing and showing {} in the error message.
//so we make anothe 5th get request api 

app.get('/shakeeb/:name/:fname/:age/:height/:room/:num/:sub/:gen/:marry/:sib', async (req, res) => {

    const { name, fname, age, height, room, num, sub, gen, marry, sib } = req.params;

    console.log('The data is:', {name, fname, age, height, room, num, sub, gen, marry, sib});

    try {

    const data = {
        name: name,
        fname: fname, 
        age: age,
        height: height, 
        room: room,
        num: num,
        sub: sub,
        gen: gen,
        marry: marry,
        sib: sib
    }

    const firestore=admin.firestore();
    await firestore.collection('shakeeb').add(data);
    res.status(200).json({'message': "Data uploaded successfuly"})

} catch (error) {
        res.status(404).json("error is:", error)
    }

});



