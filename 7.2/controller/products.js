const fs = require('fs')
const data = JSON.parse(fs.readFileSync('./data.json','utf-8'))
const products = data.products

const model = require('../model/product')
const Product = model.Product

// Create
exports.createProduct = (req,res) => {
    const product = new Product(req.body)
    product.save()
                .then((result)=>{
                    console.log(result)
                })
                .catch((err)=>{
                    console.log(err)
                })
    res.json({type:'POST'})
}
// Read
exports.getAllProducts = async (req,res)=>{
    const products = await Product.find()
    res.json(products)
}

exports.getProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findById(id);
        res.json(product);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
// Update
    // PUT
exports.replaceProduct = async (req, res) => {
    const id = req.params.id;
    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json({ message: "Product replaced successfully", product: updatedProduct });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    }
}
    // PATCH
exports.updateProduct = async (req, res) => {
    const id = req.params.id;
    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new: true });

        if (!updatedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json({ message: "Product updated successfully", product: updatedProduct });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    }
}

// Delete
exports.deleteProduct = async (req, res) => {
    const id = req.params.id;
    await Product.findByIdAndDelete(id);
    
    res.status(200).json({ message: "Product deleted successfully" });
}