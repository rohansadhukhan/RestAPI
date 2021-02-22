const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/studentDB", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connection is established ;)");
}).catch((err) => {
    console.log(`Error happens :( -> error = ${err.message}`);
});