// api 4 dog
// Now we write a code that will delete entire data in the dog collection. all id delete. but will not delete collection itself.

try { app.delete('dog',async (req, res)=> {
        
    const firestore = admin.firestore();
    const dogRef= firestore.collection('dog');
    const querySnapshot= await dogRef.get();
    querySnapshot.forEach(async (doc)=> {
        await doc.ref.delete();
    });
    res.status(200).json({'message:': "dog collection data delete success"});
});

} catch (error) {
    res.status(404).json({'message:': "dog collection data deletion failed. check error", error});
}
