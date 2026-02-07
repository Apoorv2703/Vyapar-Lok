import express from "express"
import shopOwnerController from "../controller/shopOwnersControllers.js"
import protect from "../middleware/authMiddleware.js"

let router = express.Router()

//add Product
router.post("/add-product" ,protect.forAuthUsers , shopOwnerController.addShop)

//addShop
router.post("/create-shop" ,protect.forAuthUsers , shopOwnerController.addShop)

//updateOrder
router.put("/order/:oid" ,protect.forAuthUsers , shopOwnerController.updateOrder)

//updateProduct
router.put("/product/:pid" ,protect.forAuthUsers, shopOwnerController.updateProduct)

//updateShop 
router.put("/shop/:sid" ,protect.forAuthUsers , shopOwnerController.updateShop)

export default router

