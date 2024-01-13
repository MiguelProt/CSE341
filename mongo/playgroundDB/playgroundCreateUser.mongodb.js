/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('test');

// Insert a few documents into the sales collection.
db.getCollection('user').insertMany([
    {
        "professionalName": "Miguel Prot",
        "nameLink": {
            "firstName": "Miguel",
            "url": "https://hamacaweb.solutions/"
        },
        "base64Image": "",
        "firstName": "Nathan",
        "primaryDescription": "Full Stack Developer",
        "workDescription1": "He is a full-stack web developer.",
        "workDescription2": "Student in BYU-Idaho Online.",
        "linkTitleText": "Check out his work below",
        "linkedInLink": {
            "link": "https://www.linkedin.com/in/miguelprot/",
            "text": "LinkedIn"
        },
        "githubLink": {
            "link": "https://github.com/miguelprot",
            "text": "GitHub"
        },
        "contactText": "Feel free to contact him at prot.garcia@gmail.com if you'd like for him to work for you!"
    }
]);

// Run a find command to view items sold on April 4th, 2014.
const users = db.getCollection('users').find({
    // date: { $gte: new Date('2014-04-04'), $lt: new Date('2014-04-05') }
}).count();

// Print a message to the output window.
console.log(`Total Users: ${users}.`);

// // Here we run an aggregation and open a cursor to the results.
// // Use '.toArray()' to exhaust the cursor to return the whole result set.
// // You can use '.hasNext()/.next()' to iterate through the cursor page by page.
// db.getCollection('sales').aggregate([
//     // Find all of the sales that occurred in 2014.
//     { $match: { date: { $gte: new Date('2014-01-01'), $lt: new Date('2015-01-01') } } },
//     // Group the total sales for each product.
//     { $group: { _id: '$item', totalSaleAmount: { $sum: { $multiply: ['$price', '$quantity'] } } } }
// ]);
