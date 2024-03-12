const mongoose = require('mongoose')
const {Schema} = mongoose

const productSchema = new Schema({
    title: {type:String, required:true},
    description: String,
    price: {type:Number, min:[0,'Invalid price'], required:true},
    discountPercentage: {type:Number, min:[0,'Discount Too Low'], max:[100,'Discount Too Large']},
    rating: {type:Number, min:[0,'Rating Too Low'], max:[5,'Rating Too High'], required:true},
    stock: Number,
    brand: {type:String, required:true},
    category: {type:String, required:true},
    thumbnail: {type:String, required:true},
    images: [ String ]
})

const Product = mongoose.model('Product',productSchema)
exports.Product = Product
