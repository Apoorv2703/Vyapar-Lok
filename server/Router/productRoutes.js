import express from 'express'
import productController from '../controller/productController.js'

let router = express.Router({mergeParams : true})

router.get("/:pid" , productController.getProduct)

router.get("/" , productController.getProducts)


router.get("/search/:query" , productController.searchProducts)

export default router