const dotenv = require('dotenv');
dotenv.config();

const { MongoClient, ObjectId } = require('mongodb');

const url = process.env.MONGO_DB_URI;
const client = new MongoClient(url);

const getCollection = async (collectionName, findByRow = null) => {
    try {
        console.log(process.env.MONGO_DB_NAME, '------- ENV --------');
        // Use connect method to connect to the server
        await client.connect();
        const db = client.db(process.env.MONGO_DB_NAME);
        const collection = db.collection(collectionName);
        if (findByRow) {
            return collection.findOne(findByRow);
        }
        return collection.find().toArray();
    } catch (error) {
        console.error('Error connecting to MongoDB Atlas:', error);
    }
}

const insertDocument = async (collectionName, documentData) => {
    try {
        await client.connect();
        const db = client.db(process.env.MONGO_DB_NAME);
        const collection = db.collection(collectionName);

        const result = await collection.insertOne(documentData);
        return result;
    } catch (error) {
        console.error('Error connecting to MongoDB Atlas:', error);
    }
}

const updateDocument = async (collectionName, id, documentData) => {
    try {
        await client.connect();
        const db = client.db(process.env.MONGO_DB_NAME);
        const collection = db.collection(collectionName);

        const result = await collection.updateOne(
            { _id: new ObjectId(id) },
            { $set: documentData }
        )
        return result;
    } catch (error) {
        console.error('Error connecting to MongoDB Atlas:', error);
    }
}

const deleteDocument = async (collectionName, id) => {
    try {
        await client.connect();
        const db = client.db(process.env.MONGO_DB_NAME);
        const collection = db.collection(collectionName);

        const result = await collection.deleteOne({ _id: new ObjectId(id)});
        return result;
    } catch (error) {
        console.error('Error connecting to MongoDB Atlas:', error);
    }
}

module.exports = {
    getCollection,
    insertDocument,
    updateDocument,
    deleteDocument
}