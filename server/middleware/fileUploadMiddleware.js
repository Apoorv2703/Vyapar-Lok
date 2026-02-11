const multer = require("multer");

let storage = multer.diskStorage({
    destination : (req , file , cb)=>{
        cb(null , 'uploads/')
    } , 
    filename : (req , file , cb)=>{
        let extension = file.originalname.split(".")[1]
        
        cb (null , crypto.randomUUID() + '.' + extension)
    }
})

let upload = multer({storage : storage})

module.exports = upload