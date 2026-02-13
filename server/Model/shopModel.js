import mongoose from "mongoose";

let shopSchema = new mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId ,
        ref : "User",
        required : true
    },
    name : {
        type : String ,
        required : true ,
        unique : true
    },
    description  : {
        type : String ,
        required : true 
    },
    address : {
        type : String ,
        required : true
    },
    status  : {
        type : String ,
        enum : ["pending" , "accepted" , "rejected"] ,
        default : 'pending' ,
        required : true ,
        
    } ,
    shopPhone : {
        type : Number ,
        required : true ,
        unique : true
    },

},{
    timestamps : true
})

let Shop = mongoose.model("Shop" , shopSchema)

export default Shop