import Product from "../Model/productModel.js";
import Shop from "../Model/shopModel.js";

let addShop = async (req, res) => {

    let { name, description, address, shopPhone } = req.body

    let user = req.user.id



    if (!name, !description, !address, !shopPhone) {
        res.status(409)
        throw new Error("Please Fill All Details");

    }

    let shop = await Shop.create({ name, description, address, shopPhone, user })

    if (!shop) {
        res.status(400)
        throw new Error("req  not created");

    }

    res.status(201).json({
        message: 'req has been send to admin',
        shop
    })


}

let updateShop = async (req, res) => {
    res.send("update shop")
}

let addProduct = async (req, res) => {

    let { name, description, price, stock, category, shopId } = req.body

    if (!name || !description || !price || !stock || !category) {
        res.status(400)
        throw new Error("Please fill all details");

    }

    let product = new Product({ name, description, price, stock, category, productImage: req.file.path, shop: shopId })

    await product.save()

    await product.populate("shop")

    if (!product) {
        res.status(409)
        throw new Error("Product not created");

    }

    res.status(201).json(product)


}

let updateProduct = async (req, res) => {
   let updatedProduct = await Product.findByIdAndUpdate(req.params.pid , req.body , {new : true})

   
   
    

    if (!updatedProduct) {
        res.status(409)
        throw new Error("Product not updated");
    }

    res.status(200).json(updatedProduct)
}

let updateOrder = async (req, res) => {
    res.send("order updated")
}

let shopOwnerController = { addShop, updateShop, addProduct, updateProduct, updateOrder }

export default shopOwnerController