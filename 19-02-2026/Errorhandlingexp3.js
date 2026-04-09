// in terminal run command to install mongodb Zcf install mongodb

const Promise =require('promise');
const MongoClient=require('mongodb').MongoClient;

const url='mongodb://localhost/TestDB';
MongoClient.connect(url)
    .then(function (err, db) {
        db.collection('Test').updateOne({
            "Name": "Joe"
        },
            {
                $set: {
                    "Name": "Beck"
                }
            });

})
.catch(error => alert(error.message))