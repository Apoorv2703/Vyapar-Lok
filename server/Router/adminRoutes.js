import express from "express"
import adminControllers from "../controller/adminController.js"
import protect from "../middleware/authMiddleware.js"
import authController from "../controller/authController.js"

let router = express.Router()

//get all users
router.get("/users" , protect.forAdmin , adminControllers.getUsers)

//update User
router.put('/user/:uid' , protect.forAdmin , adminControllers.updateUser)

//get all orders
router.get("/orders" , protect.forAdmin , adminControllers.getAllOrders)


//update Shop
router.put("/shops/:sid" , protect.forAdmin , adminControllers.updateShop)

//create Shop
router.post("/shops" , protect.forAdmin , adminControllers.createShop)

router







export default router