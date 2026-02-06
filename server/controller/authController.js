import User from "../Model/userModel.js";
import bcrypt from "bcryptjs"
import jwt from 'jsonwebtoken'


let registerUser = async (req, res) => {
    //check all fileds

    let { name, email, phone, password, address } = req.body

    if (!name || !email || !phone || !password || !address) {
        res.status(409)
        throw new Error("Please Fill All Details");

    }

    const emailExist = await User.findOne({ email })
    const phoneExist = await User.findOne({ phone })

    if (emailExist || phoneExist) {
        res.status(400)
        throw new Error("User Already Exist");

    }

    //hash password

    let salt = bcrypt.genSaltSync(10)
    let hashedPassword = bcrypt.hashSync(password, salt)

    //create User

    let user = await User.create({
        name,
        email,
        password: hashedPassword,
        phone,
        address
    })

    if (!user) {
        res.status(409)
        throw new Error("User Not Created");
    }

    res.status(201)
    res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        password: user.password,
        phone: user.phone,
        address: user.address,
        token : generateToken(user._id)
    })
}

let loginUser = async (req, res) => {
    let { email, password } = req.body

    if (!email || !password) {
        res.status(400)
        throw new Error("Please Fill All Details");

    }

    let user = await User.findOne({email})

    //check password

    if(user && await bcrypt.compare(password , user.password)){
        res.status(200).json({
            _id : user._id ,
            name : user.name ,
            email : user.email ,
            password : user.password ,
            token : generateToken(user._id)
            
        })
    }else{
        res.status(400)
        throw new Error("Invalid Credentials");
        
    }
}

let PrivateAccess = async(req , res)=>{
    res.json({
        message : `req is made by ${req.user.name}`
    })
}


let generateToken = (id)=>{
    let token = jwt.sign({id} , process.env.JWT_SECRET , {expiresIn : '30d'})
    return token
}

let authController = { registerUser, loginUser , PrivateAccess }

export default authController