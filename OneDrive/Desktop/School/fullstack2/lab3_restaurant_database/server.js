const express = require('express');
const mongoose = require('mongoose');
const restaurantRouter = require('./routes/RestaurantRoutes.js');

const app = express();
app.use(express.json()); // Make sure it comes back as json

//TODO - Replace you Connection String here
mongoose.connect("mongodb+srv://zionhenry:1357924680Zion@comp3123.6gerx.mongodb.net/restaurants?retryWrites=true&w=majority",{
  useNewUrlParser: true,
  useUnifiedTopology: true
}
);

app.use(restaurantRouter);

app.listen(8081, () => { console.log('Server is running...') });