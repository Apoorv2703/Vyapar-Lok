import User from "../Model/userModel.js"

let getUsers = async(req , res)=>{
    let users = await User.find()

    if(!users){
        res.status(400)
        throw new Error("users not found");
        
    }else{
        res.status(200).json(users)
    }

}



let getAllOrders = async(req , res)=>{
    res.send("all orders")
}


let updateUser = async(req , res)=>{
    res.send("update user")
}

let updateShop = async(req , res)=>{
    res.send("shop updated")
}

let createShop = async(req , res)=>{
    res.send("shop created")
}

let adminControllers = {getUsers  , getAllOrders  , updateUser , updateShop , createShop }

export default adminControllers