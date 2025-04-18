const mongoose = require('mongoose');
require('dotenv').config();

const dbConnect = ()=>{
    mongoose.connect(process.env.URL, {

    }).then(()=>{
        console.log("Connect sucessfully");
    })
    .catch((error)=>{
        console.log("Not connected");
        console.error(error.message);
        //search iska mtlb kya h?
        process.exit(1);
    });
};

module.exports = dbConnect;