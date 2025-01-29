const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,  
        trim: true       
    },
    price: {
        type: Number,
        required: true, 
        min: 0           
    },
    category: {
        type: String,
        required: true,  
        trim: true       
    },
    inStock: {
        type: Boolean,
        required: true,  
        default: true    
    }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
