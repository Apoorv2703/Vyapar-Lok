let addToCart = async(req , res)=>{
    res.send("add to cart")
}

let updateCart = async(req , res)=>{
    res.send("cart updated")
}

let removeCart = async(req , res)=>{
    res.send("cart removed")
}

let getCart= async(req , res)=>{
    res.send("get cart")
}

let cartController = {addToCart , updateCart , removeCart , getCart}

export default cartController