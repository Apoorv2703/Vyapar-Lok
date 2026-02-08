import express from 'express'
import cartController from '../controller/cartController.js'
import protect from '../middleware/authMiddleware.js'

let router = express.Router()

router.get("/" , protect.forAuthUsers , cartController.getCart)

router.post("/" , protect.forAuthUsers ,cartController.addToCart)

router.put("/:cid" ,protect.forAuthUsers, cartController.updateCart)

router.delete("/:cid" ,protect.forAuthUsers , cartController.removeCart)

export default router