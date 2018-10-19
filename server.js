const express = require('express'); //import into the files express
const mongoose = require('mongoose'); //import into the files mongoose

const PORT = process.env.PORT || 3000; //port 3000 listens locally or if on heroku, they will assign a port
const app = express();  //holds an object with all the functions inside through express


app.use(express.urlencoded({ extended: true })); //needed for post requests
app.use(express.json()); //needed for json package
app.use(express.static("public")); //to locate public file folder with our front end files


mongoose.connect(process.env.MONGODB_URI ||'mongodb://localhost/twitter', { useNewUrlParser: true });


require('./routes/api-routes')(app); 
require('./routes/html-routes')(app);


app.listen(PORT, function() {
  console.log(`App running on port ${PORT}`);
});