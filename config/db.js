const mongoose = require("mongoose");
const config = require('config');
const db = config.get('mongoURI');
const connetDB = async () => {
    try{
        await mongoose.connect(db); 
        console.log("mongoDB is conected");
    }
    catch(err){
        console.error(err.message);
        process.exit(1);
    }
}
module.exports = connetDB;
