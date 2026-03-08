import Cart from "../Model/cartmodel.js"
import Product from "../Model/productModel.js"

let addToCart = async (req, res) => {
    let { productId, qty = 1 } = req.body

    let userId = req.user._id

    //validate product exist
    let product = await Product.findById(productId)

    if (!product) {
        res.status(404)
        throw new Error("Product Not Found");


    }

    // check if product in stock

    if (product.stock < qty) {
        res.status(400)
        throw new Error("Insufficient stock");
    }

    //find users cart

    let cart = await Cart.findOne({user : userId})

    if(!cart){
        //create new cart if dosent exist 

        cart = new Cart({ // new Cart({...}) mtlb mongoose ek cart document instance bnta hai . Mongoose me jab tum model se new object create karte ho, to usse document instance bolte hain. 
            user : userId ,
            products : [{product : productId}]
        })
    }else{
        // check if product is already is in cart 

        let productIndex = cart.products.findIndex((item)=>{ // findIndex is a higher order function . yaha hum product ka index nikal rahe hai
           return  item.product.toString() === productId
        })

        if(productIndex > -1){
            // update quantity if product exist 
            cart.products[productIndex].qty += parseInt(qty)
            
            // check total quantity against stock 
            if(cart.products[productIndex].qty > product.stock){
                res.status(400)
                throw new Error("Quantity Exceeds Available Stock");
                
            }
        }else{
            //Add new Product to Cart
            cart.products.push({product : productId , qty})
        }
    }

    await cart.save()
    //populate product details for response 

    await cart.populate('products.product')

    res.status(200).json(cart)

}

let updateCart = async (req, res) => {
    res.send("cart updated")
}

let removeCart = async (req, res) => {
    res.send("cart removed")
}

let getCart = async (req, res) => {
    let userId = req.user._id //ye line se hum user ki id leke aange req.user se . id yaha middleware se aati hai

    let cart = await Cart.findOne({ user: userId }) // user ki cart ko dhundenge
    
    

    if (!cart) {
        res.status(400).json({
            products: []
        })

    }


    res.status(200).json(cart)
}

let cartController = { addToCart, updateCart, removeCart, getCart }

export default cartController