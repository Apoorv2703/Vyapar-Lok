import express from "express"
import adminControllers from "../controller/adminController.js"
import AdminProtect from "../middleware/adminMiddleware.js"

let router = express.Router()

router.get("/users" , AdminProtect , adminControllers.getUsers)

export default router