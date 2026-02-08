let getProducts = async(req , res)=>{
    res.send("all Products")
}

let getProduct = async(req , res)=>{
    res.send("single Product")
}

let searchProducts = async(req , res)=>{
    res.send("search")
}

let productController = {getProducts , getProduct , searchProducts}

export default productController