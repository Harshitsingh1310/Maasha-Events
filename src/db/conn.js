const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/maashaEvents", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    // useFindAndModify: true,
}).then(() => {
    console.log(`Connection successful`);
}).catch((e) => {
    console.log(`Connection Unsuccessful`);
})