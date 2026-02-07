import express from 'express'
import authController from '../controller/authController.js'
import protect from '../middleware/authMiddleware.js'

let router = express.Router()

router.post("/register",authController.registerUser)

router.post("/login" , authController.loginUser)

router.post("/private" ,protect.forAuthUsers , authController.PrivateAccess)

export default router