import mongoose from "mongoose";

let userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "Please Fill Name"]
    },
    email: {
        type: String,
        unique: true,
        required: [true, "Please Fill Email"]
    },
    password: {
        type: String,

        required: [true, "Please Fill Password"]
    },
    phone: {
        type: String,
        unique: true,
        required: [true, "Please Fill Phone"]
    },
    address: {
        type: String,

        required: [true, "Please Fill Address"]
    },
    isAdmin: {
        type: Boolean,

        required: true
    },
    isActive: {
        type: Boolean,
        

    },
    isShopOwner: {
        type: Boolean,
        default: false,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false,
        required: true
    }

}, {
    timestamps: true
})

let User = mongoose.model("User", userSchema)

export default User

