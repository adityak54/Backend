// //Schema
const mongoose = require('mongoose')
const { Schema } = mongoose;

const productSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    discountPercentage: Number,
    rating: Number,
    brand: String,
    category: String,
    thumbnail: String,
    images: [ String ]
});
// Model
//                             Product naam ke 'collection' ka 'schema' productSchema hai
const Product = mongoose.model('Product',productSchema)
// //----------------------------------------------------------------

exports.Product = Product
