const {MongoClient}=require('mongodb');
const client=new MongoClient("mongodb://localhost:27017")

async function collectiondb(){


    await client.connect();
    const db=client.db('newone')
    const collection=db.collection('schooldata');
    return collection;
}
module.exports=collectiondb;