import mongoose from "mongoose"

let connectDb = async()=>{
    try {

        let conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`server is connect to ${conn.connection.name}`);
         
        
    } catch (error) {
        console.log(`Server connection failed`);
        
        
    }

}

export default connectDb