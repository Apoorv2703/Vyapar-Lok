import Order from "../Model/orderModel.js";
import Shop from "../Model/shopModel.js";
import User from "../Model/userModel.js"

let getUsers = async (req, res) => {
    let users = await User.find()

    if (!users) {
        res.status(400)
        throw new Error("users not found");

    } else {
        res.status(200).json(users)
    }

}



let getAllOrders = async (req, res) => {
    let allOrders = await Order.find()

    if (!allOrders) {
        res.status(404)
        throw new Error("Orders Not Found");

    }

    res.status(200).json(allOrders)
}


let updateUser = async (req, res) => {
    if (!req.body.isActive) {
        res.send(409)
        throw new Error("Please send the status or user");

    }
    let updatedUser = await User.findByIdAndUpdate(req.params.uid, { isActive: req.body.isActive }, { new: true })

    if (!updatedUser) {
        res.send(400)
        throw new Error("User not updated");

    }

    res.status(200).json(updatedUser)

}

let updateShop = async (req, res) => {
    res.send("shop updated")
}

let getAllShops = async(req, res) =>{
    let shops = await Shop.find()

    

    if(!shops){
        res.status(404)
        throw new Error("Shop not Found");
        
    }

    res.status(200).json(shops)
}

let createShop = async (req, res) => {

    if(!req.body.status){
        res.status(409)
        throw new Error("Please tell the status");
        
    }

    let shopId = req.params.sid 

    let updateShop = await Shop.findByIdAndUpdate(shopId , req.body.status , {new : true})

    if(!updateShop){
        res.status(409)
        throw new Error("Shop cannot be active");
        
    }

    res.status(200).json(updateShop)
}

let adminControllers = { getUsers, getAllOrders, updateUser, updateShop, createShop , getAllShops }

export default adminControllers