import express from "express"
import connectDb from "./config/dbConfig.js"

//local imports
import authRoutes from "./Router/authRouter.js"
import adminRoutes from "./Router/adminRoutes.js"
import shopOwnerRoutes from "./Router/shopOwnerRoutes.js"
import productsRoutes from './Router/productRoutes.js'
import cartRoutes from './Router/cartRoutes.js'
import orderRoutes from './Router/orderRoutes.js'
import shopRoutes from './Router/shopRoutes.js'

import { errorHandler } from "./middleware/errorHandler.js"


let app = express()

let PORT = process.env.PORT || 4900

connectDb()



app.listen(PORT , ()=>{
    console.log(`server is running on ${PORT}`);
    
})


app.use(express.json())
app.use(express.urlencoded())


app.use("/api/auth" , authRoutes)
app.use("/api/admin" , adminRoutes)
app.use("/api/shop-owner" , shopOwnerRoutes )
app.use("/api/products" , productsRoutes )
app.use("/api/cart" , cartRoutes)
app.use("/api/orders" , orderRoutes )
app.use("/api/shops" , shopRoutes )

app.use(errorHandler)
