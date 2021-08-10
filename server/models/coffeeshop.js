const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const coffeeshopSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    rating: {
        type: Double,
        required: false
    },
    phone: {
        type: String,
        required: false
    },
    website: {
        type: String,
        required: false
    },
    streetAddress: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    location: {
        type: {
          type: String,
          enum: ['Point'],
          required: true
        },
        coordinates: {
          type: [Number],
          required: true
        }
      }
});
