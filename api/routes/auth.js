import express from "express"

const router = express.Router();

router.get("/",(req,res)=>{
    res.send("Hello, this is auth endpoints")
})

router.get("/register",(req,res)=>{
    res.send("Hello, this is auth register endpoints")
})
export default router
