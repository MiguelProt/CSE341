const mongodb = require('../db_connection');


const getAllData = async (req, res, next) => {
    try {
        const result = await mongodb.getCollection('user', {
            professionalName: "Miguel Prot"
        });
        res.status(200).send(result);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = {
    getAllData
}