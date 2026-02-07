let addShop = async(req , res)=>{
    res.send("shop added")
}

let updateShop = async(req , res)=>{
    res.send("update shop")
}

let addProduct = async(req , res)=>{
    res.send("product added")
}

let updateProduct = async(req , res)=>{
    res.send("prduct updated")
}

let updateOrder = async(req , res)=>{
    res.send("order updated")
}

let shopOwnerController = {addShop , updateShop , addProduct , updateProduct,updateOrder}

export default shopOwnerController