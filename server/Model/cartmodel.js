import mongoose from "mongoose";

let cartSchema = new mongoose.Schema({
    user  :{
        type : mongoose.Schema.Types.ObjectId ,
        ref : "User", // user se refrence liya hai
        unique : true , // unique user (har bande ki csrt unique hogi)
        index : true //query fast krne k liye 
    },
    products : [ // products me hum array denge jiske andr ek object hoga . or us object k andr product kya hai or uski quantity kya hai
        {
            product : {
                type : mongoose.Schema.Types.ObjectId ,
                ref : 'Product',
                required : true
            },
            qty : {
                type : Number , 
                required : true ,
                min : [1 , "quantity cannot be less than 1"],
                default : 1
            },
            _id : false  //normally db har array element ko ek id deta hai. hume nhi chiye isliye false kar diya 
        }
    ],


},{
    timestamps : true
})

let Cart  = mongoose.model("Cart" , cartSchema)

export default Cart 