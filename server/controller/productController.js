import Product from "../Model/productModel.js"

let getProducts = async (req, res) => {
    let products = await Product.find()
    if (!products) {
        res.status(404)
        throw new Error("Products Not Found");


    }

    res.status(200).json(products)
}

let getProduct = async (req, res) => {
    let singleProduct = await Product.findById(req.params.pid)

    if (!singleProduct) {
        res.status(404)
        throw new Error("Product Not Found");

    }

    res.status(200).json(singleProduct)
}

let searchProducts = async (req, res) => {
    res.send("search")
}

let productController = { getProducts, getProduct, searchProducts }

export default productController