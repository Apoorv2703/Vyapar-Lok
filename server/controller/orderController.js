let getMyOrders = async(req , res)=>{
    res.send("get my all order")
}

let getMyOrder = async(req , res)=>{
    res.send('get my order')
}

let cancleOrder = async(req , res)=>{
    res.send("cancle my order")
}

let createOrder = async(req, res)=>{
    res.send("order created")
}

let orderController = {getMyOrders , getMyOrder , cancleOrder , createOrder}

export default orderController