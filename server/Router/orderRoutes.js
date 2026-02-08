import express from 'express'
import protect from '../middleware/authMiddleware.js'
import orderController from '../controller/orderController.js'

let router = express.Router()

router.get('/' , protect.forAuthUsers , orderController.getMyOrders)

router.get('/:oid' , protect.forAuthUsers , orderController.getMyOrder)

router.put("/:oid" , protect.forAuthUsers , orderController.cancleOrder)

router.post("/" , protect.forAuthUsers , orderController.createOrder)


export default router
