const mongoose = require('mongoose');













module.exports=  function createMongooseConnection(){
    return mongoose.connect('mongodb://root:12345678@localhost:27017/database?authSource=admin', {useNewUrlParser: true},function(err){
    
    console.log(err)
    console.log('Connect to DB');
    });
}

