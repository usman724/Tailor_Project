// Now we will make our first request for post request. Personal info.

app.post('/sarmad', async (req, res) => {

    const { name, fname, age, height, room, num, sub, gen, marry, sib } = req.body;

    console.log('The data is:', { name, fname, age, height, room, num, sub, gen, marry, sib });

    try {

        const data = {
            name: name,
            fname: fname,
            age: age,
            height: height,
            room: room,
            num: num,
            sub: sub,
            pinfo: {
                gen,
                marry,
            },
            sib: sib
        }

        const firestore = admin.firestore();
        await firestore.collection('sarmad').add(data);
        res.status(200).json({ 'message': "Data posted successfuly" })

    } catch (error) {
        res.status(404).json({
            "message": ` The error is: ` + error
        })
    }

});


// Now we will write a query to  get conditional data from this (sarmad) api.
// like data of gen:female who are studying comp.

app.get('/sarmad', async (req, res) => {
    try {
        const firestore = admin.firestore();
        const querySnapshot = await firestore.collection('sarmad').where("sub", "==", "comp")
            .where("pinfo.gen", "==", "female").get();
        const data = [];

        querySnapshot.forEach((doc) => {

            data.push(doc.data());

        });
        res.status(200).json({ "message:": "Your data is:", data });

    } catch (error) {
        res.status(404).json({ "Message:": "Opps! Check error", error });
    }
});



