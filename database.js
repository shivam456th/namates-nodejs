const {MongoClient} = require("mongodb");

const url  = "mongodb+srv://onetest585:8iQjZt5PbC5GYY9Z@cluster0.cet7igb.mongodb.net/"

const client = new MongoClient(url);

const dbName = 'Helloworld';

async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('user');
    // db.getCollection('user').find({});
  
    const data = {
      firstname: "Rohit",
      lastname: "Shaty",
      city: "Mumbai",
      Phone: "7634784897"
    };

    const data2 = {
      firstname: "Rohan",
      lastname: "Shaty",
      city: "Mumbai",
      Phone: "7634784897"
    };

    const inertResult = await collection.insertOne(data2)

//     const deleteResult = await collection.deleteMany(data);
// console.log('Deleted documents =>', deleteResult);
//     // Read
//     const findResult = await collection.find({}).toArray();
// console.log('Found documents =>', findResult);
// const result = await collection.find({firstname: "Rohit"})
const result = await collection.find({firstname: "Rohit"}).count();
  console.log("result =>", result);
  
    return 'done.';
  }


  
main()
.then(console.log)
.catch(console.error)
.finally(() => client.close());