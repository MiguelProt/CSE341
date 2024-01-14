const mongodb = require('../db_connection');

const getAllData = async (req, res) => {
    try {
        const id = req.params.id;
        let result = null;
        if(id) {
            result = await mongodb.getCollection('contact', id);
        } else {
            result = await mongodb.getCollection('contact');
        }
        res.status(200).send(result);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Internal Server Error');
    }
};

const insertDocument = async (req, res) => {
    try {
        const data = req.body;
        if(!req.body) {
            res.status(400).send('Bad Request');
        }
        const result = await mongodb.insertDocument('contact', data);
        res.status(200).send(result);
    } catch (error) {
        console.error('Error Inserting data:', error);
        res.status(500).send('Internal Server Error');
    }
}

const updateDocument = async (req, res) => {
    try {
        const data = req.body;
        const _id = req.params.id;
        if(!data || !_id) {
            res.status(400).send('Bad Request');
        }

        const result = await mongodb.updateDocument('contact', _id, data);
        res.status(200).send({modifyCount: result.modifiedCount});
    } catch (error) {
        console.error('Error Updating data:', error);
        res.status(500).send('Internal Server Error');
    }
}

const deleteDocument = async (req, res) => {
    try {
        const _id = req.params.id;
        if(!_id) {
            res.status(400).send('Bad Request');
        }
        
        const result = await mongodb.deleteDocument('contact', _id);
        res.status(200).send({deletedCount: result.deletedCount });
    } catch (error) {
        console.error('Error Updating data:', error);
        res.status(500).send('Internal Server Error');
    }
}

module.exports = {
    getAllData,
    insertDocument,
    updateDocument,
    deleteDocument
}