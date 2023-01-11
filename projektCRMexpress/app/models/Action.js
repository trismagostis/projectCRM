const mongoose = require("mongoose")

mongoose.connect('mongodb://localhost:27017/CRM',  {useNewUrlParser: true, useUnifiedTopology: true});

const schema = new mongoose.Schema({
    data: {type: Date, required: true},
    rodzaj: {type: String, required: true},
    opis: {type: String, required: true},
    klientId: {type: String, required: true}
});

module.exports = mongoose.model("Action", schema);