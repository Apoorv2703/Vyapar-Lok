import mongoose from "mongoose";

let orderSchema = new mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId ,
        ref : 'User',
        required : true
    },
    cart : {
         type : mongoose.Schema.Types.ObjectId ,
        ref : 'Cart',
        required : true
    },
    shop : {
         type : mongoose.Schema.Types.ObjectId ,
        ref : 'Shop',
        required : true
    },
    status : {
        type : String ,
        enum : ['pending' , 'delivered' , 'dispatched' , 'cancelled'] ,
        required : true

    },

},{
    timestamps : true
})

let Order = mongoose.model("Order" , orderSchema)

export default Order