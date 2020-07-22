const mongoose = require('mongoose');

const MONGO_URI =
  'mongodb+srv://jmadrigal:kqrzij37@cluster0.0uxut.mongodb.net/Cluster0?retryWrites=true&w=majority';

mongoose
  .connect(MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: 'favorites',
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));

const { Schema } = mongoose;

const favoritesSchema = new Schema({
  name: { type: String, required: true },
});

const Favorite = mongoose.model('favorite', favoritesSchema);

module.exports = Favorite;
