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
db.getCollection('contact').insertMany([
    {
      "firstName": "John",
      "lastName": "Doe",
      "email": "john.doe@example.com",
      "favoriteColor": "Blue",
      "birthday": "1990-05-15"
    },
    {
      "firstName": "Jane",
      "lastName": "Smith",
      "email": "jane.smith@example.com",
      "favoriteColor": "Green",
      "birthday": "1985-12-10"
    },
    {
      "firstName": "Alex",
      "lastName": "Johnson",
      "email": "alex.johnson@example.com",
      "favoriteColor": "Red",
      "birthday": "1995-07-22"
    },
    {
      "firstName": "Emily",
      "lastName": "Brown",
      "email": "emily.brown@example.com",
      "favoriteColor": "Purple",
      "birthday": "1988-09-05"
    },
    {
      "firstName": "Daniel",
      "lastName": "Taylor",
      "email": "daniel.taylor@example.com",
      "favoriteColor": "Yellow",
      "birthday": "1992-03-18"
    }
]);