// api3 about vehicles.
// Now we write a code that will delete entire data in the vehicle collection. all ids. but will not delete collection itself.
try {
    
const { QuerySnapshot } = require("@google-cloud/firestore");
const { FirestoreAdminClient } = require("@google-cloud/firestore/types/v1/firestore_admin_client");

app.delete('vehicle', async (req, res)=>{
    const firestore = admin.firestore();
    const vehicleRef= firestore.collection('vehicle');

    const querySnapshot = await vehicleRef.get();
    querySnapshot.forEach(async (doc)=>{
            await doc.ref.delete();
    });
    res.status(200).json({'message:': "Vehicle collection data delete success"});
} );
} catch (error) {
    res.status(404).json({'message:': "Vehicle collection data could not delete. check error", error});
}