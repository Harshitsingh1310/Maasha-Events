const mongoose = require("mongoose");

const clientDetailsSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: Number,
        required: true,
        unique: true
    },
    message: {
        type: String
    }
});

const Detail = new mongoose.model("Detail", clientDetailsSchema);

module.exports = Detail;