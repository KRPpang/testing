const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const restaurantRouter = require('./routes/Restaurants');
const priceChangeRouter = require('./routes/priceChange.js');

dotenv.config();

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());


mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB connection established.')
});

app.use('/restaurants', restaurantRouter);
app.use('/pricechange', priceChangeRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});



