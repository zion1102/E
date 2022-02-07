const mongoose = require('mongoose');

const AddressSchema = mongoose.Schema({
    building: Number,
    street: String,
    houseNumber: Number,
  });
const RestaurantSchema = new mongoose.Schema({

    address: {
        type: AddressSchema
     },
     city:{
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    name:{
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    cuisine: {
        type: String,
        required: true,
        trim:true,
        lowercase: true
    },
    restaurant_id: {
        type:Number
    }
});

RestaurantSchema.pre('save', (next) => {
    console.log("Before Save")
    let now = Date.now()
     
    this.updatedat = now
    // Set a value for createdAt only if it is null
    if (!this.created) {
      this.created = now
    }
    
    // Call the next function in the pre-save chain
    next()
  });
  
  RestaurantSchema.pre('findOneAndUpdate', (next) => {
    console.log("Before findOneAndUpdate")
    let now = Date.now()
    this.updatedat = now
    console.log(this.updatedat)
    next()
  });
  
  
  RestaurantSchema.post('init', (doc) => {
    console.log('%s has been initialized from the db', doc._id);
  });
  
  RestaurantSchema.post('validate', (doc) => {
    console.log('%s has been validated (but not saved yet)', doc._id);
  });
  
  RestaurantSchema.post('save', (doc) => {
    console.log('%s has been saved', doc._id);
  });
  
  RestaurantSchema.post('remove', (doc) => {
    console.log('%s has been removed', doc._id);
  });

const Restaurant = mongoose.model("Restaurant",RestaurantSchema);
module.exports = Restaurant;