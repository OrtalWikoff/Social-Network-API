// Require express and mongoose
const express = require('express');
const mongodb = require('mongodb').MongoClient;

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.use(require('./routes'));

// Connect mongoose
mongodb.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/social-network-api', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Log mongoose queries

app.listen(PORT, () => console.log(` ************** Connected on localhost:${PORT} ************* `));