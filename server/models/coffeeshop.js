const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Schema for coffeeshop collections
const CoffeeshopSchema = new Schema({
    name: {
        type: String,
        required: [true, `Please give the coffeeshop a name.`],
        trim: true,
        maxlength: [50, `Name cannot be longer than 50 characters`]
    },
    slug: String,
    description: {
        type: String,
        required: [true, `Please give this shop a brief description.`],
        maxlength: [500, `Description has to be under 500 characters.`]
    },
    rating: {
        type: Number,
        required: false,
        min: [1, `Lowest rating is 1 or higher.`],
        max: [10, `Highest rating is 10 or lower.`]
    },
    phone: {
        type: String,
        required: false
    },
    website: {
        type: String,
        required: false,
        match: [
            /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
             `Enter a valid URL for this coffeeshop.`]
    },
    streetAddress: {
        type: String,
        required: [true, `Please enter the street address of the shop.`]
    },
    city: {
        type: String,
        required: true
    },
    zip: {
        type: String,
        required: false
    },
    state: {
        type: String,
        required: false
    },
    country: {
        type: String,
        required: true
    },
    formattedAddress: {
        type: String,
        required: false
    },
    location: {
        type: {
          type: String,
          enum: ['Point'],
          required: true
        },
        coordinates: {
          type: [Number],
          required: true,
          index: '2dsphere'
        }
      },
    menu: {
        required: false,
        coffee: {
            cost: Number
        },
        hot_chocolate: {
            cost: Number
        },
        tea: {
            cost: Number
        },
        other: {
            cost: Number
        }
    },
    photo: {
        type: String,
        default: `no-photo.jpg`
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Coffeeshop', CoffeeshopSchema);
