import express from "express"
import Hotel  from "../models/Hotel.js";

const router = express.Router();

router.get("/",(req,res)=>{
    res.send("Hello, this is hotels endpoints")
})

// Create 
router.post("/", async (req,res)=>{ // router.post("/:id?limit=5"
const newHotel = new Hotel(req.body)

    try{
        const saveHotel = await newHotel.save()
        res.status(200).json(saveHotel)
    }
    catch(err){
        res.status(500).json(err)
    }
})
// Update
// Delete
// Get
// Get all




export default router
