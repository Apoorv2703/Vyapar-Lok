import Shop from "../Model/shopModel.js"

let getShops = async(req , res)=>{

    let shops = await Shop.find()

    if(!shops){
        res.status(404)
        throw new Error("Shop not found");
        
    }



    let activeShops = shops.filter(shop => shop.isActive)

    res.status(200).json(activeShops)
    
}

let getShop = async(req, res)=>{
    let singleShop = await Shop.findById()

    if(!singleShop){
        res.status(404)
        throw new Error("Shop not found");
        
    }

    res.status(200).json(singleShop)

}

let shopController = {getShops , getShop}

export default shopController