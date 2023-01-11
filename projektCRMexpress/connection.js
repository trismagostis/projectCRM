const mongoose = require("mongoose");


mongoose.connect(`mongodb://localhost:27017/testSession`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});


mongoose.connection
  .on("open", () => console.log("The goose is open"))
  .on("close", () => console.log("The goose is closed"))
  .on("error", (error) => {
    console.log(error);
    process.exit();
  })

module.exports = mongoose;