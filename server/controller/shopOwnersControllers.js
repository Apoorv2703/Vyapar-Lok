import Shop from "../Model/shopModel.js";

let addShop = async(req , res)=>{

    let { name , description , address , shopPhone } = req.body

    let user = req.user.id

    if(!name , !description , !address , !shopPhone ){
        res.status(409)
        throw new Error("Please Fill All Details");
        
    }

    let shop = await Shop.create({name , description , address , shopPhone , user})

    if(!shop){
        res.status(400)
        throw new Error("req  not created");
        
    }

    res.status(201).json({
        message : 'req has been send to admin',
        shop
    })
    

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