import jwt from "jsonwebtoken"
import User from "../Model/userModel.js"

let forAuthUsers = async (req, res, next) => {
    try {
        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
            let token = req.headers.authorization.split(" ")[1]
            let decoded = jwt.verify(token, process.env.JWT_SECRET)
            let user = await User.findById(decoded.id).select("-password")
            if (!user) {
                res.status(400)
                throw new Error("You Are Not Authorised ");
            }

            req.user = user
            next()
        }else{
             res.status(400)
        throw new Error("You are not authorised");

        }

    } catch (error) {
        res.status(400)
        throw new Error("You are not authorised");


    }
}


let forAdmin = async (req, res, next) => {
    try {
        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
            let token = req.headers.authorization.split(" ")[1]
            let decoded = jwt.verify(token, process.env.JWT_SECRET)
            let user = await User.findById(decoded.id).select("-password")


            if (!user) {
                res.status(400)
                throw new Error("You Are Not Authorised ");
            }

            if (user.isAdmin) {
                req.user = user
                next()
            } else {
                res.status(400)
                throw new Error("You Are Not Authorised . Admin can Access only");
            }
        }

    } catch (error) {
        res.status(400)
        throw new Error("You are not authorised");


    }
}

let protect = {forAuthUsers , forAdmin}

export default protect