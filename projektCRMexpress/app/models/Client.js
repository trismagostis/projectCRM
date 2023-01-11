const mongoose = require("mongoose")

mongoose.connect('mongodb://localhost:27017/CRM',  {useNewUrlParser: true, useUnifiedTopology: true});

const schema = new mongoose.Schema({
    nazwa: {type: String, required: true},
    adres: {type: String, required: true},
    nip: {type: String, required: false},
});

module.exports = mongoose.model("Client", schema);