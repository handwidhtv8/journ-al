const mongoose = require('mongoose');

// Don't forget to add username and password to your connection URI


// shortcut to mongoose.connection object
const db = mongoose.connection;

mongoose.connect(process.env.DATABASE_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});


db.on('connected', function () {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});

db.on('error', function (error) {
    console.log(`Enncountered the following error:  ${error.message}`);
});